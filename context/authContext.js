import { createContext, useContext, useReducer, useMemo } from "react";
import PocketBase from "pocketbase";
const AuthContext = createContext();

const ACTION = {
  REGISTER: "register_usr",
  LOGIN: "log_in_usr",
  LOGoUT: "log_out_usr",
};

function AuthContexProvider({ children }) {
  const pb = new PocketBase("https://f780-103-28-246-125.ngrok-free.app/");

  function AuthReducer(preState, action) {
    switch (action.type) {
      case ACTION.REGISTER:
        return {
          isLogedin: false,
          isSignout: false,
          userToken: action.token,
          record: null,
        };

      case ACTION.LOGIN:
        return {
          isLogedin: true,
          isSignout: false,
          userToken: action.token,
          record: action.record,
        };
      case ACTION.LOGoUT:
        return {
          isLogedin: false,
          isSignout: true,
          userToken: null,
          record: null,
        };
      default:
        return preState;
    }
  }
  // after the above you can also access the auth data from the authStore
  //   console.log(pb.authStore.isValid);
  //   console.log(pb.authStore.token);
  //   console.log(pb.authStore.model.id);

  //   // "logout" the last authenticated account
  //   pb.authStore.clear();
  const [state, dispatch] = useReducer(AuthReducer, {
    isLogedin: false,
    isSignout: false,
    userToken: null,
  });

  const authContext = useMemo(
    () => (
        {
      logIn: async (userName, password) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        try {
          const authData = await pb
            .collection("users")
            .authWithPassword(userName, password);
          console.log(authData);
          dispatch({
            type: ACTION.LOGIN,
            token: authData.token,
            record: authData.record,
          });
        } catch (err) {
          console.error(err);
        }
      },
      logOut: () => {
        pb.authStore.clear();
        dispatch({ type: ACTION.LOGoUT });
      },
      registerUser: async (formData) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        const record = await pb.collection("users").create(formData);
        console.log("Id is", record.id);
        dispatch({ type: ACTION.REGISTER, token: null });
      },
    }),
    [state.token]
  );
  return (
    <AuthContext.Provider
      value={{ color: "red", pb, authContext, authState: state }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);
export default AuthContexProvider;
