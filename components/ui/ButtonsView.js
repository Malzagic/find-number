import { View, StyleSheet } from "react-native";
export default function ButtonsView({ children, style }) {
  return <View style={[styles.buttonsContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
});
