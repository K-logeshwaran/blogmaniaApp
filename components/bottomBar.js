import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import NewPost from "../screens/newPost";
import Blogs from "../screens/blogs";
import UserProfile from "../screens/profile";

const BottomNavigationBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "blogs",
      title: "Blogs",
      focusedIcon: "newspaper-variant",
      unfocusedIcon: "newspaper",
      color: "blue",
    },

    { key: "newPost", title: "New Post", focusedIcon: "pen-plus" },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account-cowboy-hat",
      unfocusedIcon: "account-cowboy-hat-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    blogs: Blogs,
    newPost: NewPost,
    profile: UserProfile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />
  );
};

export default BottomNavigationBar;
