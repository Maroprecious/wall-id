import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "../../../component/theme/themed";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { AuthLayout, Button, Input } from "../../../component";
import { colors } from "../../../constants";
import {
  PersonIcon,
  KeyIcon,
  PhoneIcon,
  EmailIcon,
  CompanyIcon,
} from "../../../../assets/svgs/icons";
import { NavigationProps } from "../../../navigations/types";
import { Feather } from "@expo/vector-icons";
import { useAppThunkDispatch, useAppSelector } from "../../../redux/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../../redux/reducers/auth/thunkAction";
import { getUser } from "../../../redux/reducers/user/thunkAction";
import axios from "axios";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

type LoginScreenProps = NavigationProps<"Login">;

export const Login = ({ navigation }: LoginScreenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ authReducer }) => authReducer);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        password: "",
        email: "",
      },
      validationSchema,
      onSubmit: async (values) => {
       
        await dispatch(login(values)).then(async(res) => {
          if (res.meta.requestStatus === "fulfilled") {
            await dispatch(getUser(null)).then(res => {
              if(res.meta.requestStatus === 'fulfilled'){
                navigation.navigate("Tabs");
              }
            })
          }
        });
      },
    });
  return (
    <AuthLayout
      title="Login"
      subText="Enter your details to get back into your account "
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Input
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              err={!!errors.email && touched.email}
              errMsg={errors.email}
              icon={<EmailIcon />}
              placeholder="Email address"
            />
            <Input
              icon={<KeyIcon />}
              isPassword
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              err={!!errors.password && touched.password}
              errMsg={errors.password}
              placeholder="Password"
              otherProps={{
                secureTextEntry: showPassword,
              }}
              action={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={20}
                    color={colors.light.text4}
                  />
                </TouchableOpacity>
              }
            />
            <TouchableOpacity
              style={styles.terms}
              onPress={() => navigation.navigate("Reset Password")}
            >
              <Text fontFamily="MontserratRegular" style={styles.terms_text}>
                Forgot your password ?
              </Text>
            </TouchableOpacity>
            <Button loading={loading} onPress={() => handleSubmit()}>
              Sign In
            </Button>
            <View style={[styles.flex, styles.footer]}>
              <Text style={styles.account} fontFamily="MontserratRegular">
                Don't have an account ?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Account Type")}
              >
                <Text
                  style={[styles.account, { color: colors.light.login }]}
                  fontFamily="MontserratSemiBold"
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  subText: {
    color: colors.light.text2,
    fontSize: 14,
    paddingTop: 10,
  },
  flex: {
    flexDirection: "row",
  },
  link: {
    color: colors.light.white,
    textDecorationColor: colors.light.white,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  form: {
    marginTop: 50,
    height: Dimensions.get("window").height,
  },
  terms: {
    flexDirection: "row",
    marginTop: -10,
    marginBottom: 40,
    justifyContent: "flex-end",
  },
  terms_text: {
    color: colors.light.white,
    fontSize: 13,
  },
  check: {
    width: 18,
    height: 18,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderWidth: 1,
    borderColor: colors.light.white,
  },
  box: {
    backgroundColor: colors.light.primary,
    borderRadius: 4,
    width: 12,
    height: 12,
  },
  account: {
    color: colors.light.text6,
    fontSize: 14,
  },
  footer: {
    justifyContent: "center",
    paddingTop: 30,
    position: "absolute",
    bottom: "33%",
    width: "100%",
  },
});
