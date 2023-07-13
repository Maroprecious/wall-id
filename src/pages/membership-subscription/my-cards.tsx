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
import { Add } from "../../component/card/add";

export const MyCards = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout w="full">
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={colors.light.white} />
          </TouchableOpacity>
          <Text style={styles.title} fontFamily="MontserratBold">
            My Cards
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddSubscriptionTab")}
          >
            <View style={styles.addIcon}>
              <Entypo name="plus" size={20} color={colors.light.white} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtext} fontFamily="MontserratMedium">
          All your organisation cards
        </Text>
        <View>
          <Input
            icon={
              <View>
                <AntDesign
                  name="search1"
                  size={15}
                  color={colors.light.text7}
                />
              </View>
            }
            style={{ marginTop: 30 }}
            placeholder="Search"
          />
        </View>

        <Add />
        <Add />
        <Add />
        <Add />
      </ScrollView>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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
  },
  addIcon: {
    backgroundColor: colors.light.icon,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
