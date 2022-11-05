import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import React, { useContext } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import { AuthContext } from "../../contexts/Auth";
import { api } from "../../services/api";
import { signInService } from "../../services/auth";
import { styles } from "./styles";

const signinSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please, insert a valid email.")
    .required("Please, insert a valid email."),
  password: Yup.string().required("Please, insert your password."),
});

export default function Signin() {
  const { setToken, setLoading } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./img/namedLogo.png")}
        style={{ width: 150, height: 180, marginTop: 50 }}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signinSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            setSubmitting(true);
            setLoading(true);

            const res = await signInService(values.email, values.password);

            if (res.code === 201) {
              setToken(res.data.token);
              api.defaults.headers[
                "Authorization"
              ] = `Bearer ${res.data.token}`;
              await AsyncStorage.setItem("@user_token", res.data.token);
            } else {
              setErrors({
                email: "An error occurred while logging in",
                password: "An error occurred while logging in",
              });
            }

            setLoading(false);
            setSubmitting(false);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput
                style={styles.inputField}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <Text style={styles.inputError}>{errors.email}</Text>
            </View>

            <View style={styles.inputWithMargin}>
              <Text style={styles.inputText}>Password</Text>
              <TextInput
                style={styles.inputField}
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <Text style={styles.inputError}>{errors.password}</Text>
            </View>

            <TouchableOpacity
              onPress={() => Alert.alert("open webiste")}
              style={styles.forgotPass}
            >
              <Text style={styles.forgotPassText}>I forgot my password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.signinButton}
            >
              <LinearGradient
                colors={["rgba(106, 45, 177, 1)", "rgba(71, 17, 227, 1)"]}
                style={styles.signinButtonLinearGradient}
              >
                <View style={styles.signinButtonBackground}>
                  <Text style={styles.signinButtonText}>Login</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <View style={styles.footer}>
        <Text style={styles.footerAsk}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => Alert.alert("open webiste")}
          style={styles.footerButton}
        >
          <Text style={styles.footerButtonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
