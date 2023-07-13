import React, { useState } from "react";
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
import { SubscriptionPlan } from "../../members-info";
import { Input } from "../../component";
import { screen } from "../../constants/images";

export const NewSubscriptionTab = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  const [selected, setSelected] = useState("");

  return (
    <PageLayout w="full">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={colors.light.white} />
          </TouchableOpacity>
          <Text style={styles.title} fontFamily="MontserratBold">
            Add New Subscriptions
          </Text>
          <View style={{ width: 20 }} />
        </View>
        <View style={styles.cards}>
          <ImageBackground
            source={screen}
            style={{ width: "100%", height: 200 }}
          />
        </View>
        <View style={styles.plans}>
          <Text style={styles.subTitle} fontFamily="MontserratMedium">
            Choose a subscription plan that suits you:
          </Text>
          <View style={styles.planCard}>
            {SubscriptionPlan.map((elem, id) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setSelected(elem.plan)}
                key={id}
                style={[
                  styles.card,
                  {
                    borderColor: colors.light.primary,
                    borderWidth: selected === elem.plan ? 1 : 0,
                  },
                ]}
              >
                <View style={styles.texts}>
                  <View style={styles.flex}>
                    <Ionicons
                      size={20}
                      color={
                        selected === elem.plan
                          ? colors.light.primary
                          : colors.light.white
                      }
                      name={
                        selected === elem.plan
                          ? "radio-button-on"
                          : "radio-button-off-outline"
                      }
                    />
                    <Text style={styles.plan} fontFamily="MontserratMedium">
                      {elem.plan}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.num} fontFamily="MontserratMedium">
                      {elem.month}
                    </Text>
                    <Text style={styles.month}>months</Text>
                  </View>
                </View>
                <Text style={styles.amount}>{elem.amount}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  subTitle: {
    color: colors.light.white,
    fontSize: 15,
    paddingVertical: 22,
  },
  cards: {
    marginTop: 30,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  name: {
    color: colors.light.white,
    fontSize: 14.7,
  },
  plans: {
    width: "90%",
    alignSelf: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.light.input,
    paddingHorizontal: 20,
    height: 95,
    borderRadius: 12,
  },
  planCard: {
    gap: 17,
    justifyContent: "space-between",
  },
  texts: {
    justifyContent: "space-between",
    gap: 24,
  },
  plan: {
    color: colors.light.white,
    fontSize: 16,
  },
  num: {
    fontSize: 19,
    color: colors.light.white,
  },
  month: {
    marginLeft: 8,
    color: colors.light.text5,
    fontSize: 16,
  },
  amount: {
    color: colors.light.white,
    fontSize: 17,
  },
  flex: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
});
