import * as React from "react";
import { View,ScrollView } from "react-native";
import { Text, TextInput } from "react-native-paper";
import ImagePickerExample from "../components/imageInput";


function NewPost() {
  const [thought, setThought] = React.useState("");
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 10,
      }}
      ref={(ref) => (this.scrollView = ref)}
      onContentSizeChange={(contentWidth, contentHeight) => {
        this.scrollView.scrollToEnd({ animated: true });
      }}
    >
      <Text variant="headlineLarge" style={{ marginBottom: 10 }}>
        New Post
      </Text>
      <TextInput
        mode="outlined"
        label="Email"
        value={""}
        onChangeText={() => {}}
      />
      <View style={{ paddingVertical: 15 }}>
        <TextInput
          label="Your Thought"
          value={thought}
          multiline
          onChangeText={setThought}
          mode="outlined"
          style={{ minHeight: 200 }}
        />
      </View>

      <ImagePickerExample
          ratio={[3, 2]}
          title={"Cover Image"}
          W={100}
          H={100}
          align={"center"}
          mgbtm={30}
        />
    </ScrollView>
  );
}

export default NewPost;

{
  /* <ScrollView
style={{
  flex: 1,
  padding:10
}}
ref={(ref) => (this.scrollView = ref)}
onContentSizeChange={(contentWidth, contentHeight) => {
  this.scrollView.scrollToEnd({ animated: true });
}}
>
<Text variant="headlineLarge" style={{marginBottom:10}}>New Post</Text>
<TextInput
  mode="outlined"
  label="Email"
  value={""}
  
  onChangeText={() => {}}
/>
<View style={{paddingVertical:15}}>
  <TextInput
    label="Your Thought"
    value={thought}
    multiline
    onChangeText={setThought}
    mode="outlined"
    style={{minHeight:200}}
  />
</View>

<ImagePickerExample />
</ScrollView> */
}
