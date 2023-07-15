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
import { EmailIcon, KeyIcon } from "../../../../assets/svgs/icons";
import { NavigationProps } from "../../../navigations/types";
import { useAppThunkDispatch, useAppSelector } from "../../../redux/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  updatePassword,
} from "../../../redux/reducers/auth/thunkAction";

const validationSchema = Yup.object().shape({
  token: Yup.string().required("Token is required"),
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

type ResetScreenProps = NavigationProps<"New Password">;

export const NewPassword = ({ navigation, route }: ResetScreenProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ authReducer }) => authReducer);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        code: "",
        password: "",
        password_confirmation: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        const payload = {
          password_confirmation: values.password_confirmation,
          code: values.code,
          password: values.password,
        };
    console.log(payload)

        await dispatch(updatePassword(payload)).then(async (res) => {
          if (res.meta.requestStatus === "fulfilled") {
            navigation.navigate("Login");
          }
        });
      },
    });
  return (
    <AuthLayout
      title="Set new Password "
      subText="Enter the code your received with your new password"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Input
              onChange={handleChange("code")}
              onBlur={handleBlur("code")}
              err={!!errors.code && touched.code}
              errMsg={errors.code}
              icon={<KeyIcon />}
              otherProps={{
                keyboardType: 'number-pad'
              }}
              placeholder="Enter your token"
            />
            <Input
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              err={!!errors.password && touched.password}
              errMsg={errors.password}
              icon={<KeyIcon />}
              placeholder="Password"
            />
            <Input
              onChange={handleChange("password_confirmation")}
              onBlur={handleBlur("password_confirmation")}
              err={!!errors.password_confirmation && touched.password_confirmation}
              errMsg={errors.password_confirmation}
              icon={<KeyIcon />}
              placeholder="Confirm your password"
            />
            <Button
              loading={loading}
              style={{ marginTop: 20 }}
              onPress={() => handleSubmit()}
            >
              Send Code
            </Button>
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
