import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(17, 17, 17, 1)",
    alignItems: "center",
    justifyContent: "space-between",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {},
  inputWithMargin: {
    marginTop: 30,
  },
  inputText: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 17,
  },
  inputField: {
    width: 300,
    height: 40,
    borderBottomColor: "rgba(81, 81, 81, 1)",
    borderBottomWidth: 1,
    color: "grey",
  },
  inputError: {
    color: "red",
    fontSize: 12,
    marginTop: 10,
  },
  forgotPass: {
    marginTop: 20,
  },
  forgotPassText: {
    fontSize: 14,
    color: "rgba(81, 81, 81, 1)",
  },
  signinButton: {
    width: 120,
    height: 55,
    marginTop: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signinButtonLinearGradient: {
    height: 55,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  signinButtonBackground: {
    width: 117,
    height: 53,
    backgroundColor: "rgba(17, 17, 17, 1)",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signinButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerAsk: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 13,
  },
  footerButton: {
    marginTop: 4,
  },
  footerButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
