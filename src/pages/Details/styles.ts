import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    height: 60,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 25,
  },
  warning: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  warn: {
    fontSize: 18,
    textAlign: "center",
    color: "#B1B1B1",
  },
  nftContainer: {
    marginTop: 25,
  },
  nft: {
    width: 330,
    height: 330,
    marginTop: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nftName: {
    color: "#B1B1B1",
    marginTop: 20,
    fontSize: 18,
  },
  infos: {
    marginTop: 25,
    alignSelf: "stretch",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  left: {
    paddingLeft: 20,
  },
  leftText: {
    fontSize: 17,
    color: "#B1B1B1",
  },
  right: {
    paddingRight: 20,
  },
  rightText: {
    fontSize: 17,
    color: "#B1B1B1",
  },
});
