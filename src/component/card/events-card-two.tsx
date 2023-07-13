import React from "react";
import { View, Text, TouchableOpacity } from "../theme/themed";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { EImage } from "../../constants/images";
import { colors } from "../../constants";
import { EvilIcons } from "@expo/vector-icons";

type props = {
  type?: string;
};

export const EventsCard2: React.FC<props> = ({ type }) => {
  return (
    <View style={style.container}>
      <ImageBackground source={EImage} style={style.img}>
        <View style={style.date}>
          <Text
            style={{ color: colors.light.white }}
            fontFamily="MontserratBold"
          >
            22 Jun
          </Text>
          <Text
            fontFamily="MontserratRegular"
            style={{ fontSize: 13, color: colors.light.white }}
          >
            6 days left
          </Text>
        </View>
      </ImageBackground>
      <View style={{ gap: 6, paddingLeft: 10 }}>
        <Text style={style.name} fontFamily="MontserratSemiBold">
          Google UI Event{" "}
        </Text>
        <Text style={style.cat} fontFamily="MontserratRegular">
          Category : Education
        </Text>
        <View style={style.flex}>
          <EvilIcons name="calendar" color={colors.light.black} size={20} />
          <Text style={style.cat} fontFamily="MontserratMedium">
            11 - June - 2019
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  img: {
    width: "100%",
    height: 104,
    resizeMode: "contain",
  },
  container: {
    width: 180,
    height: 190,
    backgroundColor: colors.light.white,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 10,
    marginVertical: 10,
    overflow: "hidden",
    marginRight: 20
  },
  name: {
    fontSize: 13,
    color: colors.light.green,
  },
  cat: {
    fontSize: 12,
    color: colors.light.cat,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  box: {
    width: 80,
    height: 13,
    backgroundColor: colors.light.primary,
    position: "absolute",
    right: -30,
    top: 15,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  type: {
    color: colors.light.white,
    fontSize: 11,
    marginLeft: -12,
  },
  date: {
    width: 100,
    height: 50,
    backgroundColor: colors.light.bgFaded,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
    borderRadius: 10,
    margin: 10,
  },
});
