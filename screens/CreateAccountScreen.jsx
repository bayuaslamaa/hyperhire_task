import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Button } from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../components/Input";
import { useState } from "react";
const { width, height } = Dimensions.get("window");

function CreateAccountScreen({ navigation }) {
  const [email, setEmail] = useState("Email");
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingVertical: 70,
          paddingHorizontal: 24,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            gap: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 24,
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 52,
                height: 52,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#D0D5DD",
              }}
            >
              <MaterialIcons
                name="arrow-left"
                size={20}
                color="#101828"
              />
            </View>
            <Text
              style={{
                fontSize: 24,
                color: "#101828",
                fontWeight: "800",
              }}
            >
              Create Account
            </Text>
          </View>

          <Input
            input={{
              title: "Competition to sign up * ",
              state: "INPUT_DOWN",
              error:
                "You must pick a competition to register",
            }}
            onClick={() =>
              navigation.navigate("Competition")
            }
          />
          <Input
            input={{
              title: email,
              state: "INPUT_DEFAULT",
              placeholder: "Input Email",
              error: "Email format is invalid",
            }}
            onChange={(e) => setEmail(e)}
          />
        </View>
        <Button
          button={{
            id: "1",
            title: "Sign Up",
            state: "BUTTON_DEFAULT",
            leftIcon: "mail",
          }}
        />
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

export default CreateAccountScreen;
