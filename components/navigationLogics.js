// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/register";
import Blogs from "../screens/blogs";
import Index from "../screens/index";
import Login from "../screens/login";
import Icon from "react-native-vector-icons/FontAwesome5";
import AuthContexProvider, { useAuthContext } from "../context/authContext";

const Stack = createNativeStackNavigator();

function MyNavigator({ theme }) {
  const { authState,authContext } = useAuthContext();
  console.log("looking for", authState);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!authState.isLogedin ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: "𝕭𝖑𝖔𝖌𝖒𝖆𝖓𝖎𝖆",

                headerTintColor: theme.colors.onSecondaryContainer,
                headerStyle: {
                  backgroundColor: theme.colors.secondaryContainer,
                },
                contentStyle: {
                  backgroundColor: theme.colors.background,
                },
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: "𝕭𝖑𝖔𝖌𝖒𝖆𝖓𝖎𝖆",

                headerTintColor: theme.colors.onSecondaryContainer,
                headerStyle: {
                  backgroundColor: theme.colors.secondaryContainer,
                },
                contentStyle: {
                  backgroundColor: theme.colors.background,
                },
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Index"
              component={Index}
              options={{
                title: "𝕭𝖑𝖔𝖌𝖒𝖆𝖓𝖎𝖆",
                headerRight: () => (
                  <Icon
                    color={theme.colors.onSurface}
                    name="user-cog"
                    size={20}
                    onPress={()=>{
                        console.log("PRESSED");
                        authContext.logOut()
                    }}
                  />
                ),
                // {
                //   return (
                //     <View style={{
                //       alignItems:"center"
                //     }}>
                //       <Icon color={theme.colors.onSurface} name="cog" size={20} />
                //       <Text variant="bodySmall">Settings</Text>
                //     </View>
                //   );
                // },

                headerTintColor: theme.colors.onSecondaryContainer,
                headerStyle: {
                  backgroundColor: theme.colors.secondaryContainer,
                },
                contentStyle: {
                  backgroundColor: theme.colors.background,
                },
              }}
            />
            <Stack.Screen
              name="Blog"
              component={Blogs}
              options={{
                title: "𝕭𝖑𝖔𝖌𝖒𝖆𝖓𝖎𝖆",
                headerTintColor: theme.colors.onSecondaryContainer,
                headerStyle: {
                  backgroundColor: theme.colors.secondaryContainer,
                },
                contentStyle: {
                  backgroundColor: theme.colors.background,
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigator;
