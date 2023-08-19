// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/register";
import Blogs from "./screens/blogs";
import Index from "./screens/index";
import { PaperProvider } from "react-native-paper";
import { useSysTheme } from "./hook/useSysTheme";
import Login from "./screens/login";
import Icon from "react-native-vector-icons/FontAwesome5";
import AuthContexProvider, { useAuthContext } from "./context/authContext";
import MyNavigator from "./components/navigationLogics";

const Stack = createNativeStackNavigator();

function App() {
  const theme = useSysTheme();
  let ctx = useAuthContext();
  //console.log(ctx);
  console.log("Looking for",theme);
  return (
    <PaperProvider theme={theme}>
      <AuthContexProvider>
        <MyNavigator theme={theme}/>
      </AuthContexProvider>
    </PaperProvider>
  );
}

export default App;



// <NavigationContainer>

// <Stack.Navigator>
//   <Stack.Screen
//     name="Login"
//     component={Login}
//     options={{
//       title: "𝕭𝖑𝖔𝖌𝖒𝖆𝖓𝖎𝖆",

//       headerTintColor: theme.colors.onSecondaryContainer,
//       headerStyle: {
//         backgroundColor: theme.colors.secondaryContainer,
//       },
//       contentStyle: {
//         backgroundColor: theme.colors.background,
//       },
//     }}
//   />
//   <Stack.Screen
//     name="Register"
//     component={Register}
//     options={{
//       title: "𝕭𝖑𝖔𝖌𝖒𝖆𝖓𝖎𝖆",

//       headerTintColor: theme.colors.onSecondaryContainer,
//       headerStyle: {
//         backgroundColor: theme.colors.secondaryContainer,
//       },
//       contentStyle: {
//         backgroundColor: theme.colors.background,
//       },
//     }}
//   />
// </Stack.Navigator>
// </NavigationContainer>
