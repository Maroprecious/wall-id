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
import { SubscriptionInfo, addCard } from "../../members-info";
import { Input } from "../../component";

export const AddCards = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout w="full">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={colors.light.white} />
          </TouchableOpacity>
          <Text style={styles.title} fontFamily="MontserratBold">
           All Organizations
          </Text>
          <View style={{ width: 20 }} />
        </View>
        <View>
          <Input
            style={{ width: "90%", alignSelf: "center", marginTop: 30 }}
            placeholder="Search"
          />
        </View>
        <View style={styles.cards}>
          {addCard.map((elem, id) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(elem.page as any)}
              key={id}
            >
              <ImageBackground
                source={elem.image}
                style={{ width: "100%", height: 120 }}
                resizeMode="cover"
              />
              <Text style={styles.name} fontFamily="MontserratMedium">
                {elem.name}
              </Text>
              <View style={styles.flexer}>
                <Text style={styles.text} fontFamily="MontserratRegular">
                  {elem.email}
                </Text>
              </View>
            </TouchableOpacity>
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
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
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
    fontSize: 14,
    marginLeft: "5%",
  },
  subtext2: {
    color: colors.light.white,
    fontSize: 15,
  },
  addIcon: {
    backgroundColor: colors.light.icon,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {},
  item: {
    alignItems: "center",
  },
  image: {
    width: 175,
    height: 175,
  },
  column: {
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingLeft: 10,
  },
  plan: {
    color: colors.light.input,
  },
  planText: {
    color: colors.light.white,
    fontSize: 15,
    lineHeight: 30,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    alignSelf: "center",
    alignItems: "center",
    rowGap: 40,
    padding: 20,
  },
  name: {
    color: colors.light.white,
    fontSize: 14.7,
  },
  card: {
    width: "47%",
    alignItems: "flex-start",
    gap: 15,
    // height: 200
  },
  flexer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: colors.light.text7,
    fontSize: 13,
  },
});
