import { Text, View } from "react-native";
import { styles } from "./styles";

interface DateType {
  day: string;
  month: string;
  year: string;
}

export default function Date({ day, month, year }: DateType) {
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.text}>
        {month}/{day}/{year}
      </Text>
    </View>
  );
}
