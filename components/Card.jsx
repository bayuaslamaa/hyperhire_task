import { Text, View } from "react-native";
import { styles } from "./styles";

export const Card = ({ card: { title, place } }) => {
  return (
    <View
      style={{
        ...styles.listItem,
        height: 153,
        borderRadius: 16,
        backgroundColor: "#253BFF",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingHorizontal: 24,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: "500",
        }}
      >
        YYYY-MM-DD ~ YYYY-MM-DD
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: "500",
        }}
      >
        {place}
      </Text>
    </View>
  );
};
