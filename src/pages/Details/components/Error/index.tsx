import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Error() {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.text}>Error</Text>
    </View>
  );
}
