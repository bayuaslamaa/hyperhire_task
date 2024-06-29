import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { styles } from "./styles";

export const Input = ({
  input: { title, state, placeholder, error },
  onClick,
  onChange,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          state === "INPUT_DOWN" ? onClick() : null
        }
      >
        <View
          style={{
            ...styles.listItem,
            borderRadius: 16,
            backgroundColor: "#F9FAFB",
          }}
        >
          <TextInput
            placeholder={placeholder}
            value={title}
            editable={
              state === "INPUT_DEFAULT" ||
              state === "INPUT_SEARCH"
            }
            style={{ color: "#667085", fontSize: 16 }}
            onChangeText={(e) => onChange(e)}
          />
          {state === "INPUT_DOWN" && (
            <TouchableOpacity>
              <MaterialIcons
                name="arrow-drop-down"
                size={24}
                color={"#475467"}
              />
            </TouchableOpacity>
          )}
          {state === "INPUT_SEARCH" && (
            <MaterialIcons
              name="search"
              size={24}
              color={"#475467"}
            />
          )}
        </View>
        {error && (
          <Text
            style={{
              paddingTop: 8,
              color: "#FF2323",
              fontSize: 14,
            }}
          >
            {error}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
