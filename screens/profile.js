import { View } from "react-native";
import { Text } from "react-native-paper";
import * as React from "react";
import { Avatar } from "react-native-paper";
import { useAuthContext } from "../context/authContext";

function UserProfile() {
  const {authState} = useAuthContext()
  console.log(authState);
  return (
    <View>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal:10,
          gap: 10,
          alignItems: "left",
        }}
      >
        <Avatar.Image
          size={100}
          style={{
            marginLeft:20
          }}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
          }}
        />
        <View >
          <Text variant="displaySmall">{authState.record.name}</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              gap: 50,
              alignSelf: "center",
            }}
          >
            <Text>0 Posts</Text>
            <Text>{new Date().toDateString()}</Text>
          </View>
          <Text
            style={{
              paddingTop: 10,
             
              textAlign: "left",
              marginRight: 30,
            }}
          >
            React Native Paper is a high-quality {"\n"}, standard-compliant{" "}
            {"\n"} Material Design {"\n"} library that has you covered {"\n"} in
            all major use-cases.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default UserProfile;
