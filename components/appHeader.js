import * as React from "react";
import { Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

function TitleBar({ back, onBack, theme }) {
  return (
    <>
      
      <Appbar.Header statusBarHeight={0}>
        {back === true && <Appbar.BackAction onPress={onBack} />}

        <Appbar.Content title="𝕭𝖑𝖔𝖌𝖒𝖆𝖓𝖎𝖆" />
      </Appbar.Header>
    </>
  );
}
//𝕭𝖑𝖔𝖌𝖒𝖆𝖓𝖎𝖆

export default TitleBar;
