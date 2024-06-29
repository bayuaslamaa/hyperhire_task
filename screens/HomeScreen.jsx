import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { Button } from "../components/Button";
const { width, height } = Dimensions.get("window");

function Homescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: "https://s3-figma-videos-production-sig.figma.com/video/1261278340073405106/TEAM/2ac0/7732/-a8af-43e9-a77f-90972f787252?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lrjvelf-fHeApWkXCAWoKxuNDOHkACSB1QydRh5~tc~acda2cG2YZhOtNp47~vt4n1grDji7Pge7UOBiga8kTy-AAqdJssJ3~Mz0kUSuB3LDzccXxLghlsBwBlzmfcdqTtSQp6NGDYD8ALuW2H0LYkkK8OzWgxuJDsUEiMd2F8jdeF6raYK9zHuaZ7u8P4RbA3Pz08iKjG7gUQ62us17pn2e8DhEA2CFQAEBhpP-CG7PHmiPRoFIUDaWkw6f6i9YzfUong2MX2qedXarD~7CIetuRQ2-a2hy12jDjbxkOksdiO3ZfyHp8YAQlpAnlohB~02Vve~s3X4NVGv70tlmkQ__",
        }} // Replace with your video URL
        style={styles.backgroundVideo}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
          width: "100%",
          paddingVertical: 70,
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            fontWeight: "800",
            fontSize: 36,
            width: "84%",
            color: "white",
          }}
        >
          Soo and Carots
        </Text>
        <View style={{ gap: 6 }}>
          <Button
            button={{
              id: "1",
              title: "Sign up for free",
              state: "BUTTON_LOGIN",
            }}
            onClickRightButton={() =>
              navigation.navigate("CreateAccount")
            }
          />
          <Button
            button={{
              id: "1",
              title: "Continue with Email",
              state: "BUTTON_LOGIN",
              color: "#1D2939",
              leftIcon: "mail",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: width,
    height: height,
  },
});

export default Homescreen;
