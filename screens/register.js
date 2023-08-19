import { View, ScrollView } from "react-native";
import { Text, TextInput, Button, Chip } from "react-native-paper";

import { useState } from "react";
import ImagePickerExample from "../components/imageInput";
import { useAuthContext } from "../context/authContext";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Register({ navigation }) {
  const { authContext } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [regSuccess, setregSuccess] = useState(null);

  // example create data

  const updateUser = () => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirm", confirmpassword);
    formData.append("name", name);
    formData.append("avatar", {
      uri: file[0].uri,
      type: "image/jpeg",
      name: `${email}.jpg`,
    });
    return formData;

    // try {
    //   console.log(JSON.stringify(formData));
    //   const record = await pb.collection("users").create(formData);
    //   console.log("Id is", record.id);
    //   alert("added Success");

    // } catch (err) {
    //   console.error(JSON.stringify(err));
    // }
  };

  return (
    <ScrollView
      style={{
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
        𝐒𝐢𝐠𝐧 𝐔𝐩
      </Text>

      <Gap>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
      </Gap>
      <Gap>
        <TextInput
          mode="outlined"
          label="Name"
          value={name}
          keyboardType="email-address"
          onChangeText={setName}
        />
      </Gap>
      <Gap>
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </Gap>
      <Gap>
        <TextInput
          mode="outlined"
          label="confirm password"
          secureTextEntry={true}
          value={confirmpassword}
          onChangeText={setConfirmpassword}
        />
      </Gap>
      <Gap>
        <ImagePickerExample
          ratio={[2, 2]}
          title={"Upload Profile"}
          W={50}
          H={100}
          align={"center"}
          mgbtm={0}
          setFileObj={setFile}
        />
      </Gap>
      <GapLst>
        <Button
          mode="elevated"
          onPress={async () => {
            authContext.registerUser(updateUser());
            setregSuccess(true)
            await sleep(700);
            navigation.navigate("Login");
            // console.log(email, password);
            // authContext.logIn(email, password);
          }}
        >
          Submit
        </Button>
      </GapLst>
      {regSuccess && (
        <Chip
          style={{
            position: "absolute",
            width: "100%",
            bottom: "3%",
          }}
          textStyle={{
            fontSize: 15,
          }}
          icon="information"
          
          onPress={() => setregSuccess(false)}
        >
          Registered Success
        </Chip>
      )}
    </ScrollView>
  );
}

function Gap({ children, mgbtm = 0 }) {
  return <View style={{ marginVertical: 10 }}>{children}</View>;
}
function GapLst({ children }) {
  return <View style={{ marginTop: 10, marginBottom: 40 }}>{children}</View>;
}
export default Register;
