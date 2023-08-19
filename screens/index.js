// import {View,Text,Button} from "react-native"
// function Index({navigation}) {
//     console.log(navigation);
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Index Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.push("Blog")}
//       />
//     </View>
//   );
// }

import * as React from "react";

import { View } from "react-native";

import BottomNavigationBar from "../components/bottomBar";

import { useSysTheme } from "../hook/useSysTheme";
import { useAuthContext } from "../context/authContext";

function Index({ navigation }) {
  const theme = useSysTheme();
  const {authContext,pb} = useAuthContext()
  
  console.log("Looking ,for",pb.authStore);
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {/* <TitleBar /> */}

      <BottomNavigationBar />
    </View>
  );
}
export default Index;
