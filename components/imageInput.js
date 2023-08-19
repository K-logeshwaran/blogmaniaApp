import React, { useState } from "react";
import { Dimensions, Image, View } from "react-native";
import { Button } from "react-native-paper";

import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample({ ratio, title, W, H,align ,mgbtm ,setFileObj}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: ratio,
      quality: 1,
    });

    if (!result.canceled) {
      setFileObj(result.assets)
      setImage(result.assets[0].uri);
    }
  };
  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;
  return (
    <View style={{ marginBottom: mgbtm }}>
      <Button icon="camera" mode="contained-tonal" onPress={pickImage}>
        {title}
      </Button>

      {image && (
        <>
          <Image
            source={{ uri: image }}
            style={{
              width: imageWidth * (W / 100),
              height: imageHeight * (H / 100),
              marginVertical: 10,
              alignSelf:align
            }}
          />
          <Button
            icon="camera"
            mode="elevated"
            onPress={() => {
              setImage(null);
            }}
          >
            Remove Image
          </Button>
        </>
      )}
    </View>
  );
}
