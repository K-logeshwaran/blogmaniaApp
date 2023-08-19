import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useSysTheme } from "../hook/useSysTheme";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";

function Login({ navigation }) {
  let {authContext,pb} = useAuthContext();
  const theme = useSysTheme();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
 // console.log("Looking for", ctx);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 20,
        padding: 20,
      }}
    >
      <Text
        //onPress={()=>navigation.navigate("Index")}
        variant="displayMedium"
        style={{
          textAlign: "left",
          fontWeight: "bold",
          padding: 10,
        }}
      >
        𝐋𝐨𝐠𝐢𝐧
      </Text>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        mode="outlined"
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setpassword}
      />
      <Button
        mode="elevated"
        onPress={() => {
          authContext.logIn(email,password)
        }}
      >
        Submit
      </Button>
      <View>
        <Text
          variant="titleMedium"
          style={{
            textAlign: "center",
          }}
        >
          Not Having an account ?{"  "}
          <Text
            onPress={() => navigation.replace("Register")}
            style={{
              color: theme.colors.onTertiaryContainer,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Login;
