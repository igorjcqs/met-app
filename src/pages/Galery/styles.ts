import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 65,
    color: "rgba(71, 17, 227, 1)",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 6,
  },
  list: { marginTop: 25 },
  card: {
    width: 170,
    height: 170,
    margin: 10,
  },
  cardImage: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  navegation: {
    backgroundColor: "rgba(17, 17, 17, 1)",
    height: 70,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
