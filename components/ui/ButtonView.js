import { View, StyleSheet } from "react-native";
export default function ButtonView({ children }) {
  return <View style={styles.buttonContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
});
