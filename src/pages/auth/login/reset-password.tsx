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
import { EmailIcon } from "../../../../assets/svgs/icons";
import { NavigationProps } from "../../../navigations/types";
import { useAppThunkDispatch, useAppSelector } from "../../../redux/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../../../redux/reducers/auth/thunkAction";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});

type ResetScreenProps = NavigationProps<"Reset Password">;

export const ResetPassword = ({ navigation }: ResetScreenProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ authReducer }) => authReducer);
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        await dispatch(resetPassword(values)).then(async (res) => {
          if (res.payload !== "Internal Server Error") {
            navigation.navigate("New Password", {
              email: values.email,
            });
          }
        });
      },
    });
  return (
    <AuthLayout
      title="Reset your Password "
      subText="Enter your email address and we would send you a code to reset your password."
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
            <Button
              loading={loading}
              style={{ marginTop: 20 }}
              onPress={() => handleSubmit()}
            >
              Send code
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
