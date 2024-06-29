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

export default function ChooseCompetitionScreen() {
  const [search, setSearch] = useState(null);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
          paddingVertical: 70,
          paddingHorizontal: 24,
          justifyContent: "flex-start",
          gap: 16,
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
            <Input
              input={{
                title: search,
                state: "INPUT_SEARCH",
                placeholder: "Search Competition",
              }}
              onChange={(e) => setSearch(e)}
            />
          </View>
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
