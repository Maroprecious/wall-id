import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity } from "../theme/themed";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { NavigationPropsHook } from "../../navigations/types";

type props = {
  title: string;
  subText: string | ReactNode;
  children: ReactNode;
};

export const AuthLayout: React.FC<props> = ({ title, subText, children }) => {
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color={colors.light.primary} />
      </TouchableOpacity>
      <Text fontFamily="MontserratBold" style={styles.title}>
        {title}
      </Text>
      <Text fontFamily="MontserratRegular" style={styles.subText}>
        {subText}
      </Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 27,
    paddingTop: 50,
    backgroundColor: colors.light.background,
    height: "100%",
  },
  title: {
    fontSize: 21,
    color: colors.light.white,
    paddingTop: 30
  },
  subText: {
    color: colors.light.text2,
    fontSize: 14,
    paddingTop: 10,
    width: '85%'
  },
});
