// import {View,Text,Button} from "react-native"
// function Blog({navigation}) {
//     console.log(navigation);
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Blog Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.goBack()}
//       />
//     </View>
//   );
// }

import { View, FlatList } from "react-native";

import Bcard from "../components/blogCard";
function Blogs() {
  const dat = [
    {
      title: "How to lear React Js in 30 Days Comprehensive course makdmasdasdsd",
      content: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham`,
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
    {
      title: "Cd Title",
      content: "content",
    },
  ];
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
      }}
    >
      <FlatList
        data={dat}
        renderItem={({ item }) => (
          <Bcard title={item.title} content={item.content} />
        )}
      />
    </View>
  );
}

export default Blogs;



