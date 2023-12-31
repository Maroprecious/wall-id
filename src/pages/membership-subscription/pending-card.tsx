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

export const PendingCards = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout w="full">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={colors.light.white} />
          </TouchableOpacity>
          <Text style={styles.title} fontFamily="MontserratBold">
            Pending Cards
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddSubscriptionTab")}
          >
            <View style={{width: 30}}>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtext} fontFamily="MontserratMedium">
        All your cards yet to be approved (4)
        </Text>
        <View>
          <Input
            style={{ width: "90%", alignSelf: "center", marginTop: 30 }}
            placeholder="Search"
          />
        </View>
        <View style={styles.cards}>
          {SubscriptionInfo.map((elem, id) => (
            <View key={id} style={styles.item}>
              <View style={styles.flex}>
                <View style={styles.image}>
                  <ImageBackground
                    source={elem.image}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.column}>
                  <View style={{gap: -6}}>
                    <Text style={styles.plan} fontFamily="MontserratRegular">
                      Plan
                    </Text>
                    <Text style={styles.planText} fontFamily="MontserratMedium">
                      {elem.plan}
                    </Text>
                  </View>
                  <View style={{gap: -10}}>
                    <Text style={styles.plan} fontFamily="MontserratRegular">
                      Valid for
                    </Text>
                    <Text style={styles.planText} fontFamily="MontserratMedium">
                      {elem.valid}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.status}>
                <Text style={styles.plan} fontFamily="MontserratRegular">
                  Status
                </Text>
                <Text style={styles.active} fontFamily="MontserratMedium">
                  Pending
                </Text>
              </View>
            </View>
          ))}
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
  item: {
    flexDirection: "row",
    // marginLeft: "5%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  column: {
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingLeft: 10,
  },
  plan: {
    color: colors.light.input,
    fontSize: 12
  },
  planText: {
    color: colors.light.white,
    fontSize: 15,
    lineHeight: 30,
  },
  status: {
    alignItems: "flex-end",
    justifyContent: 'flex-end',
  },
  active: {
    color: colors.light.pending,
    fontSize: 14,
  },
  cards: {
    marginTop: -3,
    padding: 20,
    gap: 10
  },
});
