import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { ScrollView, StyleSheet } from "react-native";
import { PageLayout } from "../../component/layout/page-layout";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants";
import { NavigationPropsHook } from "../../navigations/types";

export const MemeberShipAndSubscrition = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout
      icon={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color={colors.light.white} />
        </TouchableOpacity>
      }
      variant="bottom"
      title="ID Card Management"
    >
      <ScrollView>
        <View style={styles.container}>
          {[
            {
              name: "Add Card",
              text: "Request new card from any organisation",
              color: colors.light.t11,
              icon: "people-circle",
              page: 'JoinOrganization'
            },
            {
              name: "My Cards",
              text: "See your cards from all your organisations",
              color: colors.light.t12,
              icon: "book-outline",
              page: 'My Cards'

            },
            {
              name: "Pending Cards",
              text: "View all your cards yet to be approved",
              color: colors.light.t13,
              icon: "newspaper-outline",
              page: 'Pending Cards'
            },
            {
              name: "Card Requests",
              text: "View all your pending card requests",
              color: colors.light.t10,
              icon: "newspaper-outline",
              page: 'Card Request'
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
              <View style={styles.box}>
                <Ionicons name={element.icon as any} size={25} color={element.color} />
                <Text style={styles.header} fontFamily="MontserratSemiBold">
                  {element.name}
                </Text>
                <Text style={styles.text} fontFamily="MontserratRegular">
                  {element.text}
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
    backgroundColor: colors.light.text3,
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
    color: colors.light.text2,
    fontSize: 13,
    width: "90%",
  },
});
