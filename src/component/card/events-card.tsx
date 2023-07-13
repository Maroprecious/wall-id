import React from "react";
import { View, Text, TouchableOpacity } from "../theme/themed";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { EImage } from "../../constants/images";
import { colors } from "../../constants";
import { EvilIcons } from "@expo/vector-icons";

type props = {
  type?: "Invitation" | "Free" | "Paid";
  onPress?: () => void;
};

export const EventsCard: React.FC<props> = ({ type, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        style.container,
        {
          height: type === "Invitation" ? 120 : 98,
          backgroundColor:
            type === "Invitation" ? "transparent" : colors.light.white,
        },
      ]}
    >
      {type && (
        <View style={style.box}>
          <Text style={style.type} fontFamily="MontserratRegular">
            {type}
          </Text>
        </View>
      )}
      <ImageBackground source={EImage} style={style.img}>
        {type !== "Invitation" && (
          <View style={style.date}>
            <Text fontFamily="MontserratBold">02</Text>
            <Text fontFamily="MontserratRegular" style={{ fontSize: 13 }}>
              June
            </Text>
          </View>
        )}
      </ImageBackground>
      <View style={{ gap: 8 }}>
        {type === "Invitation" && (
          <Text style={style.invite} fontFamily="MontserratRegular">
            Invited by Chukka Uzo{" "}
          </Text>
        )}
        <Text
          style={[
            style.name,
            {
              color:
                type === "Invitation" ? colors.light.white : colors.light.green,
            },
          ]}
          fontFamily="MontserratSemiBold"
        >
          {type === "Invitation"
            ? "Christmas Day Celebration"
            : " Google UI Event"}{" "}
        </Text>
        {type === "Invitation" ? (
          <View style={style.flex}>
            <EvilIcons
              name="calendar"
              color={
                type === "Invitation" ? colors.light.text7 : colors.light.black
              }
              size={20}
            />
            <Text style={style.cat} fontFamily="MontserratMedium">
              12 Jun, 2023 - 13 Jun, 2023
            </Text>
          </View>
        ) : (
          <Text style={style.cat} fontFamily="MontserratRegular">
            Category : Education
          </Text>
        )}

        <View style={style.flex}>
          <EvilIcons
            name="calendar"
            color={
              type === "Invitation" ? colors.light.text7 : colors.light.black
            }
            size={20}
          />
          <Text style={style.cat} fontFamily="MontserratMedium">
            11 - June - 2019
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  img: {
    width: 100,
    height: "100%",
    resizeMode: "contain",
  },
  container: {
    width: "100%",
    height: 98,
    backgroundColor: colors.light.white,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // paddingLeft: 3,
    gap: 20,
    marginVertical: 10,
    overflow: "hidden",
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
    width: 50,
    height: 50,
    backgroundColor: colors.light.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  invite: {
    fontSize: 12,
    color: colors.light.t6,
  },
});
