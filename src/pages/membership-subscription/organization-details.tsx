import React from "react";
import { View, Text } from "../../component/theme/themed";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, Ionicons, FontAwesome, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { PageLayout } from "../../component/layout/page-layout";
import { NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants";
import { SubscriptionInfo, addCard } from "../../members-info";
import { Button, Icon, Input } from "../../component";
import { DetailsImage } from "../../constants/images";

export const OrganizationDetails = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout w="full">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={colors.light.white} />
          </TouchableOpacity>
          <Text style={styles.title} fontFamily="MontserratBold">
            Organisation Details
          </Text>
          <View style={{ width: 20 }} />
        </View>
        <Image source={DetailsImage} style={styles.img} />
        <View style={{padding: 20}}>
          {[
            {
              field: "Name",
              value: "James Howells",
              icon: (
                <Ionicons
                  name="newspaper-outline"
                  color={colors.light.text7}
                  size={25}
                />
              ),
            },
            {
              field: "Email",
              value: "chukka@gmail.com",
              icon: (
                <MaterialCommunityIcons
                  name="email-fast-outline"
                  color={colors.light.text7}
                  size={25}
                />
              ),
            },
            {
              field: "Registered Date",
              value: "30 -11 -2022",
              icon: (
                <AntDesign
                  name="calendar"
                  color={colors.light.text7}
                  size={25}
                />
              ),
            },
            {
              field: "ID Card Number",
              value: "TYUIOLNBF",
              icon: (
                <AntDesign
                  name="idcard"
                  color={colors.light.text7}
                  size={25}
                />
              ),
            },
          ].map((element) => (
            <Icon
              key={element.value}
              icon={element.icon}
              text={
                <View style={styles.flex}>
                  <Text style={styles.text} fontFamily="MontserratRegular">
                    {element.field}
                  </Text>
                  <Text
                    style={[styles.text, { color: colors.light.white }]}
                    fontFamily="MontserratSemiBold"
                  >
                    {element.value}
                  </Text>
                </View>
              }
            />
          ))}
          <Button
            onPress={() => navigation.navigate('Create Card')}
            style={{
              marginTop: 30,
              borderRadius: 30
            }}
          >
            Proceed to create card
          </Button>
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
  img: {
    width: "100%",
    height: 200,
  },
  flex: {
    flexDirection: "row",
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.light.text7,
    fontSize: 15,
  },
});
