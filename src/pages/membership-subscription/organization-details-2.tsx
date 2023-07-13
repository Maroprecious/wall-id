import React, { useState } from "react";
import { View, Text } from "../../component/theme/themed";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { PageLayout } from "../../component/layout/page-layout";
import { NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants";
import { SubscriptionInfo, addCard } from "../../members-info";
import { Button, Icon, Input } from "../../component";
import { DetailsImage } from "../../constants/images";
import { RequestSentModal } from "../../component/modal/request-sent";

export const OrganizationDetails2 = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  const [visible, setVisible] = useState(false);
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
        <View style={{ padding: 20 }}>
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
              field: "Username",
              value: "Fraya Harris",
              icon: (
                <Ionicons name="person" color={colors.light.text7} size={25} />
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
                <AntDesign name="idcard" color={colors.light.text7} size={25} />
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

          <View style={styles.line} />
          <Input label="Enter your role" placeholder="Enter your role" />
          <Button
            onPress={() => setVisible(true)}
            style={{
              marginTop: 30,
              borderRadius: 30,
            }}
          >
            Send Request
          </Button>
          <RequestSentModal visible={visible} setVisible={setVisible} />
        </View>
        <View style={{ width: "100%", height: 200 }} />
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
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.light.text7,
    fontSize: 15,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light.input,
    marginVertical: 30,
  },
});
