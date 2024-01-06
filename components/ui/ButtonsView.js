import { View, StyleSheet } from "react-native";
export default function ButtonsView({ children }) {
  return <View style={styles.buttonsContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
});
