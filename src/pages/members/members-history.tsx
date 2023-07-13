import React from "react";
import { View, Text } from "../../component/theme/themed";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { PageLayout } from "../../component/layout/page-layout";
import { NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants";
import { SubscriptionInfo } from "../../members-info";
import { Input } from "../../component";

export const MemberHistory = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout w="full">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={colors.light.white} />
          </TouchableOpacity>
          <Text style={styles.title} fontFamily="MontserratBold">
            History
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddSubscriptionTab")}
          >
            <View style={{width: 30}}>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.view}>
            <Text style={styles.text} fontFamily='MontserratRegular'>Sorry no Subscriptions</Text>
        </View>
      </ScrollView>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    // gap: 90,
    justifyContent: "space-between",
    width: "100%",

    // alignSelf: "center",
  },
  title: {
    textAlign: "center",
    color: colors.light.white,
    fontSize: 19,
  },
  subtext: {
    color: colors.light.text5,
    opacity: 1,
    marginTop: 20,
    paddingLeft: 7,
    fontSize: 17,
    marginLeft: "5%",
  },
  addIcon: {
    backgroundColor: colors.light.icon,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {
    flexDirection: "row",
  },
  text:{
    color: colors.light.white,
    fontSize: 15,
    textAlign: 'center',
  },
  view:{
    height: '100%',
    marginTop: '70%',
  }
});
