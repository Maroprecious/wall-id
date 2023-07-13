import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { PageLayout } from "../../component/layout/page-layout";
import {
  HistoryIcon,
  MembershipIcon,
  SubscriptionIcon,
} from "../../../assets/svgs/icons";
import { colors } from "../../constants";
import { StyleSheet, Image, FlatList, ScrollView, View as RNView } from "react-native";
import { Route } from "react-native-tab-view";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  DateImage,
  EImage,
  EventsImage,
  GalleryImage,
  InvitationImage,
  history_,
} from "../../constants/images";
import { NavigationPropsHook } from "../../navigations/types";
import { useTheme } from "../../context/theme";


const data = [
  {
    name: "Create Event",
    text: "Let's help you settup your event in few steps",
    page: "Create Event",
    image: EventsImage,
    bgColor: colors.light.t1,
  },
  {
    name: "Upcoming Events",
    text: "2 Events",
    page: "Upcoming Event",
    image: GalleryImage,
    bgColor: colors.light.t2,
  },
  {
    name: "Event Gallery",
    text: "20 Events",
    page: "Event Gallery",
    image: DateImage,
    bgColor: colors.light.t3,
  },
  {
    name: "My Invitations",
    text: "12 Invites",
    page: "Invitation",
    image: InvitationImage,
    bgColor: colors.light.t4,
  },
  {
    name: "History",
    text: "120 Events",
    page: "History",
    image: history_,
    bgColor: colors.light.t5,
  },
];

export const Members = () => {
  const {isDarkTheme} = useTheme()
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout
      icon={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color={colors.light.white} />
        </TouchableOpacity>
      }
      title="Event Management"
      variant="bottom"
    >
      <ScrollView>
        <View style={{ padding: 15, height: "100%" }}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => navigation.navigate(item.page as any)}
              style={styles.flex}
            >
              <View style={styles.flexer}>
                <Image
                  source={item.image}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  resizeMode="contain"
                />
                <View style={{ paddingLeft: 20, gap: 15 }}>
                  <Text fontFamily="MontserratBold" style={styles.header}>
                    {item.name}
                  </Text>
                  <Text fontFamily="MontserratRegular" style={styles.text}>
                    {item.text}
                  </Text>
                </View>
              </View>
              <RNView style={styles.arr}>
                <AntDesign name="right" color={isDarkTheme ? colors.light.white : colors.light.white} size={20} />
              </RNView>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 200 }} />
      </ScrollView>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 50,
  },
  box: {
    width: "47%",
    height: 146,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginBottom: 7,
  },
  text: {
    fontSize: 14,
    color: colors.light.text7,
  },
  img: {
    width: 100,
    height: 120,
    borderRadius: 20,
    resizeMode: "contain",
    backgroundColor: colors.light.t1,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  flexer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "50%",
  },
  header: {
    color: colors.light.white,
    fontSize: 17,
  },
  arr: {
    height: 65,
    width: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light.input,
  },
});
