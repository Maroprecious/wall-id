import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "../../../component/theme/themed";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { AuthLayout, Button, Input } from "../../../component";
import { colors } from "../../../constants";
import {
  PersonIcon,
  KeyIcon,
  PhoneIcon,
  EmailIcon,
} from "../../../../assets/svgs/icons";
import { NavigationProps } from "../../../navigations/types";
import { Feather } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppThunkDispatch, useAppSelector } from "../../../redux/store";
import { signIn } from "../../../redux/reducers/auth/thunkAction";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  phone: Yup.string().required("Phone number is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirm_password: Yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

type IndividualSignUpScreenProps = NavigationProps<"Individual Signup">;

export const IndividualSignUp = ({
  navigation,
}: IndividualSignUpScreenProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ authReducer }) => authReducer);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCPassword, setShowCPassword] = useState<boolean>(false);

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        lastname: "",
        firstname: "",
        password: "",
        confirm_password: "",
        email: "",
        phone: "",
        username: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        const payload = {
          firstname: values.firstname.concat(" ", values.firstname),
          lastname: values.firstname.concat(" ", values.lastname),
          phone: values.phone,
          email: values.email,
          password: values.password,
          username: values.username,
        };
        await dispatch(signIn(payload)).then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            navigation.navigate('Login')
          }
        });
      },
    });

  return (
    <AuthLayout
      title="Sign Up as Individual"
      subText={
        <View style={styles.flex}>
          <Text fontFamily="MontserratRegular" style={styles.subText}>
            Not an individual ? Sign up as{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Organization Signup")}>
            <Text
              fontFamily="MontserratRegular"
              style={[styles.subText, styles.link]}
            >
              Organization
            </Text>
          </Pressable>
        </View>
      }
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <View style={styles.name}>
              <Input
                style={{ width: "48%" }}
                icon={<PersonIcon />}
                placeholder="First name"
                onChange={handleChange("firstname")}
                onBlur={handleBlur("firstname")}
                err={!!errors.firstname && touched.firstname}
                errMsg={errors.firstname}
                
              />
              <Input
                style={{ width: "48%" }}
                icon={<PersonIcon />}
                placeholder="Last name"
                onChange={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
                err={!!errors.lastname && touched.lastname}
                errMsg={errors.lastname}
              />
            </View>
            <Input
              icon={<PersonIcon />}
              onChange={handleChange("username")}
              onBlur={handleBlur("username")}
              err={!!errors.username && touched.username}
              errMsg={errors.username}
              placeholder="Username"
            />
            <Input
              icon={<EmailIcon />}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              err={!!errors.email && touched.email}
              errMsg={errors.email}
              placeholder="Email address"
            />
            <Input
              icon={<PhoneIcon />}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              otherProps={{
                keyboardType: 'number-pad'
              }}
              err={!!errors.phone && touched.phone}
              errMsg={errors.phone}

              placeholder="Phone number"
            />
            <Input
              icon={<KeyIcon />}
              isPassword
              placeholder="Password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              err={!!errors.password && touched.password}
              errMsg={errors.password}
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
            <Input
              icon={<KeyIcon />}
              isPassword
              placeholder="Confirm password"
              onChange={handleChange("confirm_password")}
              onBlur={handleBlur("confirm_password")}
              errMsg={errors.confirm_password}
              err={!!errors.confirm_password && touched.confirm_password}
              otherProps={{
                secureTextEntry: showCPassword,
              }}
              action={
                <TouchableOpacity
                  onPress={() => setShowCPassword(!showCPassword)}
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={20}
                    color={colors.light.text4}
                  />
                </TouchableOpacity>
              }
            />

            <View style={styles.terms}>
              <TouchableOpacity
                onPress={() => setChecked(!checked)}
                style={styles.check}
              >
                {checked && <View style={styles.box} />}
              </TouchableOpacity>
              <Text fontFamily="MontserratRegular" style={styles.terms_text}>
                I agree to the Terms & Conditions and Privacy Policy
              </Text>
            </View>
            <Button disabled={!checked} loading={loading} onPress={() => handleSubmit()}>
              Sign Up as Individual
            </Button>
            <View
              style={[
                styles.flex,
                { justifyContent: "center", paddingTop: 30, marginBottom: 200 },
              ]}
            >
              <Text style={styles.account} fontFamily="MontserratRegular">
                Alredy have an account ?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={[styles.account, { color: colors.light.login }]}
                  fontFamily="MontserratSemiBold"
                >
                  Login
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
  },
  terms: {
    flexDirection: "row",
    width: "80%",
    gap: 16,
    marginTop: 15,
    marginBottom: 40,
  },
  terms_text: {
    color: colors.light.text5,
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
});
