import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <Button
      bg={COLORS.lightGrey}
      rounded={"3xl"}
      display={"flex"}
      flexDirection={"row"}
      _pressed={{
        backgroundColor: COLORS.white,
      }}
      onPress={onPress}
    >
      <Text display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Ionicons name="logo-google" size={20} color={COLORS.mediumDeep} />
        {"  "}
        <Text
          fontSize={SIZES.small + 2}
          fontWeight={"extrabold"}
          color={COLORS.mediumDeep}
        >
          Continue with Google
        </Text>
      </Text>
    </Button>
  );
};
export default SignInWithOAuth;
