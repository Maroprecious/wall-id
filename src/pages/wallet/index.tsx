import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, Image, View as RnView, Text as RNText } from "react-native";
import { Text, View, TouchableOpacity } from "../../component/theme/themed";
import { PageLayout } from "../../component/layout/page-layout";
import { colors } from "../../constants";
import { Input } from "../../component";
import { Bar1, Conf } from "../../constants/images";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationPropsHook } from "../../navigations/types";

export const Wallet = () => {
  const navigation = useNavigation<any>()
  return (
    <PageLayout
      icon={
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={style.flexer}>
          {[1, 2, 3, 4].map((ele, idx) => (
            <View key={idx} style={style.box} />
          ))}
        </TouchableOpacity>
      }
      element={
        <Text style={style.name} fontFamily="MontserratBold">
          Wallet
        </Text>
      }
    >
      <View style={{ padding: 10 }}>
        <Text style={style.subtext} fontFamily="MontserratRegular">
          All your event tickets are stored here
        </Text>
        <Input style={{ marginTop: 30 }} placeholder="Search" />
        <View>
          <View style={{gap: 40, marginTop: 30}}>
            {[1, 2].map((element) => (
              <ImageBackground key={element} source={Bar1} style={style.img}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Ticket Details')}
                style={style.flex}>
                  <Image style={style.img_} source={Conf} />
                  <RnView
                    style={{
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <RNText style={style.header}>
                      Google UI Events
                    </RNText>
                    <RnView
                      style={[style.flex, { gap: 4, alignItems: "center" }]}
                    >
                      <Feather
                        name="calendar"
                        color={colors.light.text7}
                        size={15}
                      />
                      <RNText style={style.date}>
                        12-21-2303
                      </RNText>
                    </RnView>
                    <RnView
                      style={[style.flex, { gap: 4, alignItems: "center" }]}
                    >
                      <Feather
                        name="clock"
                        color={colors.light.text7}
                        size={15}
                      />
                      <RNText style={style.date}>
                        7:30 - 1:20PM
                      </RNText>
                    </RnView>
                    <RnView
                      style={[style.flex, { gap: 4, alignItems: "center" }]}
                    >
                      <FontAwesome
                        name="building"
                        color={colors.light.text7}
                        size={15}
                      />
                      <RNText style={style.date}>
                        VVIP
                      </RNText>
                    </RnView>
                  </RnView>
                </TouchableOpacity>
              </ImageBackground>
            ))}
          </View>
        </View>
      </View>
    </PageLayout>
  );
};

const style = StyleSheet.create({
  flexer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
  },
  box: {
    width: 8,
    height: 8,
    backgroundColor: colors.light.white,
    borderRadius: 2,
  },
  name: {
    color: colors.light.white,
    fontSize: 15,
  },
  subtext: {
    color: colors.light.text5,
    opacity: 1,
    marginTop: 20,
    paddingLeft: 7,
    fontSize: 14,
  },
  img: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 10,
  },
  img_: {
    width: 80,
    height: 110,
    resizeMode: "cover",
    borderRadius: 10,
  },
  header: {
    fontSize: 11,
    color: colors.light.white,
    fontFamily: "MontserratSemiBold"
  },
  flex: {
    flexDirection: "row",
    gap: 10,
  },
  date: {
    fontSize: 10,
    color: colors.light.white,
    fontFamily: "MontserratRegular"
  },
});
