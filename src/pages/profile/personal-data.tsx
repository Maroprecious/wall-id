import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { PageLayout } from "../../component/layout/page-layout";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants";
import { User } from ".";
import { Button, Input } from "../../component";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../redux/store";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string().email().required("Email is required"),
});

export const PersonalData = ({ navigation }: any) => {
  const {
    user: {
      userInfo: { name, phone, email },
    },
  } = useAppSelector(({ userReducer }) => userReducer);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      lastname: name.split("  ")[0],
      firstname: name.split("  ")[1],
      email: email,
      phone: phone,
    },
    validationSchema,
    onSubmit: async (values) => {},
  });

  return (
    <PageLayout w="full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" color={colors.light.white} size={20} />
              </TouchableOpacity>
              <Text fontFamily="MontserratMedium" style={styles.header_text}>
                Personal Data
              </Text>
              <View style={{ width: 20 }} />
            </View>
            <User />
            <Input
              onChange={handleChange("firstname")}
              onBlur={handleBlur("firstname")}
              err={!!errors.firstname && touched.firstname}
              errMsg={errors.firstname}
              label="First name"
              otherProps={{
                value: values.firstname,
              }}
            />
            <Input
              onChange={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              err={!!errors.lastname && touched.lastname}
              errMsg={errors.lastname}
              otherProps={{
                value: values.lastname,
              }}
              label="Last name"
            />
            <Input
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              err={!!errors.email && touched.email}
              errMsg={errors.email}
              otherProps={{
                value: values.email,
              }}
              label="Email"
            />
            <Input
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              err={!!errors.phone && touched.phone}
              errMsg={errors.phone}
              otherProps={{
                value: values.phone,
              }}
              label="Phone number"
            />
            <Button
              style={{
                marginTop: 40,
                borderRadius: 30,
              }}
            >
              Update Info
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 100
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_text: {
    fontSize: 18,
    color: colors.light.white,
  },
});
