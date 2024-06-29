import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const Button = ({
  button: { id, title, state, color, leftIcon },
  onClickLeftButton,
  onClickRightButton,
}) => {
  const getLeftIcon = () => {
    switch (state) {
      case "BUTTON_LOGIN":
        return leftIcon ?? "login";

      default:
        return "check-box";
    }
  };
  return (
    <View
      style={{
        ...styles.listItem,
        backgroundColor: color ?? "blue",
        borderRadius: 50,
        justifyContent:
          state != "BUTTON_DEFAULT"
            ? "space-between"
            : "center",
        paddingLeft: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        {state !== "BUTTON_DEFAULT" && (
          <TouchableOpacity
            onPress={() => onClickLeftButton(id)}
          >
            <MaterialIcons
              name={getLeftIcon()}
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "700",
          }}
        >
          {title}
        </Text>
      </View>
      {state !== "BUTTON_DEFAULT" && (
        <TouchableOpacity
          onPress={() => onClickRightButton()}
        >
          <View
            style={{
              width: 44,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <MaterialIcons
              name="arrow-right-alt"
              size={20}
              color="#fff"
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
