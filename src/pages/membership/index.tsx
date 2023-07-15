import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { ScrollView, StyleSheet, View as RNView } from "react-native";
import { PageLayout } from "../../component/layout/page-layout";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants";
import { NavigationPropsHook } from "../../navigations/types";
import { useTheme } from "../../context/theme";


export const AppMemebership = () => {
  const {isDarkTheme} = useTheme()
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout
      icon={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color={colors.light.white} />
        </TouchableOpacity>
      }
      variant="bottom"
      title="Membership & Subscriptions"
    >
      <ScrollView>
        <View style={styles.container}>
          {[
            {
              name: "Membership",
              text: "View all your memberships",
              color: colors.light.t8,
              icon: "people-circle",
              page: 'MembersTab'
            },
            {
              name: "Subscriptions",
              text: "See organisations you are subscribed to",
              color: colors.light.t9,
              icon: "book-outline",
              page: 'SubscriptionTab'

            },
            {
              name: "History",
              text: "See history of all your joined memberships and subscriptions",
              color: colors.light.t10,
              icon: "newspaper-outline",
              page: "Member History",
            },
          ].map((element) => (
            <TouchableOpacity
            activeOpacity={.9}
              style={[
                styles.card,
                {
                  backgroundColor: element.color,
                },
              ]}
              key={element.name}
              onPress={() => navigation.navigate(element.page as any)}
            >
              <RNView style={[styles.box, {backgroundColor: isDarkTheme ? colors.light.text2 : colors.light.bg2}]}>
                <Ionicons name={element.icon as any} size={25} color={element.color} />
                <Text style={styles.header} fontFamily="MontserratSemiBold">
                  {element.name}
                </Text>
                <Text style={styles.text} fontFamily="MontserratRegular">
                  {element.text}
                </Text>
              </RNView>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  card: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  box: {
    width: "90%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    gap: 10,
  },
  header: {
    fontSize: 20,
    color: colors.light.white,
  },
  text: {
    color: colors.light.white,
    fontSize: 13,
    width: "90%",
  },
});
