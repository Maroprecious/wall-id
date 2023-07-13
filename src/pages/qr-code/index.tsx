import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { PageLayout } from "../../component/layout/page-layout";
import {
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text as RNText,
  View as RNView
} from "react-native";
import { QRLineIcon } from "../../../assets/svgs/tabs";
import QRCode from "react-native-qrcode-svg";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
import { colors } from "../../constants";
import Animated from "react-native-reanimated";
import { Input } from "../../component";
import { pages } from "./icons";
import { NavigationProps, NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../redux/store";
import { useTheme } from "../../context/theme";

const { width, height } = Dimensions.get("screen");

export const QRCode_ = () => {
  const navigation = useNavigation<any>();
  const {
    user: {
      details: {
        firstname, lastname
      }
    }
  } = useAppSelector(({ userReducer }) => userReducer);
  const { setIsDarkTheme, isDarkTheme } = useTheme();
  return (
    <PageLayout
      icon={
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={style.flexer}
        >
          {[1, 2, 3, 4].map((ele, idx) => (
            <View key={idx} style={style.box} />
          ))}
        </TouchableOpacity>
      }
      element={
        <View style={style.flexer1}>
          <View>
            <View style={style.flex}>
              <Text fontFamily="MontserratRegular" style={style.time}>
                Good morning
              </Text>
              <TouchableOpacity
                onPress={() => setIsDarkTheme(!isDarkTheme)}
              >
                <MaterialCommunityIcons
                  name="weather-sunny"
                  color={colors.light.weather}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <Text style={style.name} fontFamily="MontserratBold">
              {firstname} {lastname}
            </Text>
          </View>
          <EvilIcons name="bell" color={colors.light.text7} size={25} />
        </View>
      }
    >
      <ScrollView>
        <View style={style.container}>
          <View style={style.flexer2}>
            <Text style={style.wall} fontFamily="MontserratRegular">
              Your Wall ID QR Code
            </Text>
            <Ionicons
              name="share-social-outline"
              size={25}
              color={colors.light.text7}
            />
          </View>
          <View style={{ height: 200, marginTop: 20 }}>
            <View
              style={{ position: "absolute", top: 70, width: "100%", left: 10 }}
            >
              <QRLineIcon />
            </View>
            <View style={style.qr}>
              <View>
                <QRCode value={'hello'} size={150} />
              </View>
            </View>
          </View>
          <Text
            style={[style.wall, { paddingTop: 25, paddingBottom: 7 }]}
            fontFamily="MontserratRegular"
          >
            Your Wall ID Code
          </Text>
          <Input
            isPassword
            otherProps={{
              value: "wall_id",
              editable: false,
            }}
            inputStyle={{
              backgroundColor: colors.light.bg4,
              borderWidth: 1,
              borderColor: colors.light.text7,
            }}
            action={
              <View style={{ marginTop: -5 }}>
                <TouchableOpacity>
                  <Ionicons
                    name="copy-outline"
                    color={colors.light.text7}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            }
          />
          <View style={style.underline}>
            <Text
              style={[style.wall, { paddingTop: 15, paddingBottom: 12 }]}
              fontFamily="MontserratRegular"
            >
              More for you
            </Text>
          </View>
          <View style={style.flexer3}>
            {pages.map((element, idx) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(element.page as any)}
                style={style.box2}
                key={element.key}
              >
                <View style={style.box1}>{<element.icon />}</View>
                <Text fontFamily="MontserratRegular" style={style.title}>
                  {element.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={style.footer}></View>

          <FlatList
            horizontal
            style={{ width, marginTop: 30 }}
            data={[
              {
                name: "Get Help",
                color: colors.light.primary,
                text: "Do you need help or you want to report",
                action: "Contact Us",
                page: "GetHelp",
              },
              {
                name: "FAQ",
                color: colors.light.input,
                text: "See our frequently asked questions",
                action: "See FAQ",
                page: "FAQ",
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[style.footer_box, { backgroundColor: item.color }]}
                onPress={() => navigation.navigate(item.page as any)}
              >
                <RNText  style={style.action}>
                  {item.name}
                </RNText>
                <RNText style={style.text1} >
                  {item.text}
                </RNText>
                <RNView style={style.act}>
                  <RNText style={style.aac} >
                    {item.action}
                  </RNText>
                </RNView>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      </ScrollView>
    </PageLayout>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    height: "100%",
    paddingBottom: 150,
  },
  qr: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: Platform.OS === "android" ? "18%" : "10%",
  },
  wall: {
    fontSize: 13,
    color: colors.light.text2,
    paddingTop: 20,
  },
  text: {
    fontSize: 12,
    color: colors.light.text2,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  flexer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "88%",
  },
  flexer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
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
  time: {
    color: colors.light.text7,
    fontSize: 13,
  },
  name: {
    color: colors.light.white,
    fontSize: 15,
  },
  underline: {
    width: "100%",
    borderBottomColor: colors.light.text7,
    borderBottomWidth: 1,
  },
  flexer3: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 25,
  },
  box1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light.bg2,
  },
  box2: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: colors.light.text,
    fontSize: 13,
  },
  footer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },
  footer_box: {
    width: 200,
    height: 200,
    borderRadius: 10,
    padding: 25,
    marginRight: 20,
  },
  action: {
    color: colors.light.white,
    fontSize: 20,
    fontFamily:"MontserratSemiBold"
  },
  text1: {
    fontSize: 17,
    color: colors.light.text,
    paddingTop: 7,
    fontFamily: "MontserratRegular"
  },
  act: {
    width: "100%",
    height: 40,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  aac: {
    color: colors.light.white,
    fontSize: 16,
    fontFamily: "MontserratRegular"
  },
});
