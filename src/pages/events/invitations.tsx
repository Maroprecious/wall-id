import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { StyleSheet } from "react-native";
import { Input } from "../../component";
import { PageLayout } from "../../component/layout/page-layout";
import { Route } from "react-native-tab-view";
import { AntDesign, Feather } from "@expo/vector-icons";
import { colors } from "../../constants";
import { EventsCard } from "../../component/card/events-card";
import { useNavigation } from "@react-navigation/native";
import { NavigationPropsHook } from "../../navigations/types";
import { useTheme } from "../../context/theme";
import { Select } from "../../component";

export const Invitation = () => {
  const options = [
    {
      label: 'All',
      value: '0'
    },
    {
      label: 'Accepted',
      value: '1'
    },
    {
      label: 'Decline',
      value: '2'
    },
  ]
  const navigation = useNavigation<NavigationPropsHook>();
  const { isDarkTheme } = useTheme()
  return (
    <PageLayout w="full">
      <View style={styles.container}>
        <View style={[styles.flexer1]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={25} color={isDarkTheme ? colors.light.black : colors.light.white} />
          </TouchableOpacity>
          <Text fontFamily="MontserratSemiBold" style={styles.subText2}>
            Invitations
          </Text>
          <View style={{ width: 25 }} />
        </View>
        <View style={styles.flex}>
          <Text style={styles.header_text} fontFamily="MontserratRegular">
            All your Invitations
          </Text>
          <Select options={options} onChange={(e) => null} extraStyles={{width: '40%'}} viewStyles={{backgroundColor: 'transparent', borderColor: 'transparent'}}  />
        </View>
        <Input
          icon={
            <View style={{ marginTop: -5 }}>
              <Feather name="search" color={colors.light.text7} size={20} />
            </View>
          }
          placeholder="Search"
        />
        <EventsCard
          onPress={() =>
            navigation.navigate("Event Details", { type: "Invitation" })
          }
          type="Invitation"
        />
        <EventsCard
          onPress={() =>
            navigation.navigate("Event Details", { type: "Invitation" })
          }
          type="Invitation"
        />
        <EventsCard
          onPress={() =>
            navigation.navigate("Event Details", { type: "Invitation" })
          }
          type="Invitation"
        />
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
  },
  flexer1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subText2: {
    color: colors.light.text,
    fontSize: 15,
    paddingBottom: 20,
  },
  header_text: {
    fontSize: 14,
    color: colors.light.text7,
    paddingBottom: 30,
  },
  flex:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
