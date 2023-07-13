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
import { AuthLayout, Button, Input, Select } from "../../../component";
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
import { signUpOrganization } from "../../../redux/reducers/auth/thunkAction";

const validationSchema = Yup.object().shape({
  company: Yup.string().required("Required"),
  phone: Yup.string().required("Phone number is required"),
  access_type: Yup.string().required("Required"),
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

type OrganizationScreenProp = NavigationProps<"Organization Signup">;

export const OrganizationSignUp = ({ navigation }: OrganizationScreenProp) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCPassword, setShowCPassword] = useState<boolean>(false);
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ authReducer }) => authReducer)

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      company: "",
      password: "",
      confirm_password: "",
      email: "",
      phone: "",
      type: "",
      name: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        phone: values.phone,
        email: values.email,
        password: values.password,
        type: values.type,
        company: values.company,
        name: values.name
      };
      console.log(payload)
      await dispatch(signUpOrganization(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigation.navigate('Login')
        }

      });
    },
  });
  return (
    <AuthLayout
      title="Sign Up as Organization"
      subText={
        <View style={styles.flex}>
          <Text fontFamily="MontserratRegular" style={styles.subText}>
            Not an individual ? Sign up as{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Individual Signup")}>
            <Text
              fontFamily="MontserratRegular"
              style={[styles.subText, styles.link]}
            >
              Individual
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
            <Input
              onChange={handleChange("company")}
              onBlur={handleBlur("company")}
              err={!!errors.company && touched.company}
              errMsg={errors.company}
              icon={<CompanyIcon />}
              placeholder="Company Name"
            />
            <Input
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              err={!!errors.name && touched.name}
              errMsg={errors.name}
              icon={<CompanyIcon />}
              placeholder="Name"
            />
            <Input
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              err={!!errors.email && touched.email}
              errMsg={errors.email}
              icon={<EmailIcon />}
              placeholder="Email address"
            />
            <Input
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              err={!!errors.phone && touched.phone}
              errMsg={errors.phone}
              icon={<PhoneIcon />}
              otherProps={{
                keyboardType: 'number-pad'
              }}
              placeholder="Phone number"
            />
            <Select
              options={[
                { value: 0, label: "Free pass / Open" },
                { value: 1, label: "Restricted / Closed" },
              ]}
              placeholder="Choose access type"
              onChange={(e) => setFieldValue("type", e.value)}
              err={!!errors.type && touched.type}
              errMsg={errors.type}
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
            <Input
              icon={<KeyIcon />}
              isPassword
              onChange={handleChange("confirm_password")}
              onBlur={handleBlur("confirm_password")}
              err={!!errors.confirm_password && touched.confirm_password}
              errMsg={errors.confirm_password}
              placeholder="Confirm password"
              otherProps={{
                secureTextEntry: showCPassword,
              }}
              action={
                <TouchableOpacity
                  onPress={() => setShowCPassword(!showCPassword)}
                >
                  <Feather
                    name={showCPassword ? "eye" : "eye-off"}
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
              Sign Up as Organization
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
