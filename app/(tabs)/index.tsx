import { Canvas, Path } from "@shopify/react-native-skia";
import { useQuery } from "@tanstack/react-query";
import * as AppleAuthentication from "expo-apple-authentication";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/primitives/ParallaxScrollView";
import { Button, ButtonText } from "@/components/primitives/ui/button";

export default function HomeScreen() {
  const width = 256;
  const height = 256;
  const r = width * 0.33;

 

  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
  const [isCheckingForUpdate, setIsCheckingForUpdate] = useState(false);

  const onHandlePress = async () => {
   
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      
      <Button onPress={onHandlePress}>
        <ButtonText>Check for update</ButtonText>
      </Button>

      <AppleAuthentication.AppleAuthenticationButton
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        cornerRadius={5}
        style={{ height: 40, width: "100%" }}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            // signed in
          } catch (e) {
            console.log(e);
            if (e.code === "ERR_REQUEST_CANCELED") {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
      <Button onPress={() => router.push("/storybook")}>
        <ButtonText>Storybook</ButtonText>
      </Button>
      <Canvas style={{ width: 256, height: 256 }}>
        <Path
          color="lightblue"
          path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
        />
      </Canvas>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    bottom: 0,
    height: 178,
    left: 0,
    position: "absolute",
    width: 290,
  },
});
