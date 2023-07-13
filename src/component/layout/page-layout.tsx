import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity } from "../theme/themed";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors } from "../../constants";
import { StatusBar } from "expo-status-bar";

type props = {
  children: ReactNode;
  title?: string;
  canGoGack?: boolean;
  showActions?: boolean;
  variant?: "top" | "bottom";
  subText?: string;
  element?: ReactNode;
  icon?: ReactNode;
  w?: "full" | "part";
};

export const PageLayout = ({
  children,
  title,
  canGoGack,
  showActions,
  variant,
  subText,
  element,
  icon,
  w = "part",
}: props) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.light.bg4 }}>
      <StatusBar style="light" backgroundColor={colors.light.background} />
      <View style={style.box}>
        <View
          style={[style.container, { width: w === "part" ? "93%" : "100%" }]}
        >
          <View style={[style.flex]}>
            {icon && (
              <TouchableOpacity style={style.move}>{icon}</TouchableOpacity>
            )}
            {variant === "bottom" ? (
              <Text fontFamily="MontserratSemiBold" style={style.text}>
                {title}
              </Text>
            ) : (
              element
            )}
          </View>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    width: "93%",
    backgroundColor: colors.light.bg4,
    height:  Dimensions.get('window').height
  },
  box: {
    width: "100%",
    backgroundColor: colors.light.background,
    height:'100%',
    alignItems: "flex-end",
    paddingTop: 20
  },
  text: {
    color: colors.light.white,
    fontSize: 15,
  },
  flex: {
    flexDirection: "row",
    paddingHorizontal: 3,
    marginTop: 20,
    alignItems: "center",
    gap: 10,
  },
  subText: {
    color: colors.light.text2,
    fontSize: 12,
    width: "80%",
    paddingTop: 15,
  },
  flex2: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: colors.light.bg2,
    marginTop: 35,
    marginBottom: 10,
  },
  subText2: {
    color: colors.light.text,
    fontSize: 15,
    paddingTop: 20,
  },
  move: {
    backgroundColor: colors.light.bottom,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowOffset: {
      width: -5,
      height: 2,
    },
    shadowColor: colors.light.primary,
    shadowRadius: 4,
    shadowOpacity: 0.5,
    zIndex: 100,
    elevation: 10,
    marginLeft: -20,
  },
});
