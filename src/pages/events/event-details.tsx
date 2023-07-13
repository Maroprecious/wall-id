import React from "react";
import { View, Text } from "../../component/theme/themed";
import { StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { PageLayout } from "../../component/layout/page-layout";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Conf, EImage } from "../../constants/images";
import { Button, Icon } from "../../component";
import { NavigationProps } from "../../navigations/types";

type EventDetailsScreenProp = NavigationProps<"Event Details">;

export const EventDetails = ({ navigation, route }: EventDetailsScreenProp) => {
  return (
    <PageLayout w="full">
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={25}
                color={colors.light.white}
              />
            </TouchableOpacity>
            <Text fontFamily="MontserratBold" style={styles.text}>
              Event Details
            </Text>
            <View style={{ width: 25 }} />
          </View>
          {route?.params?.type === "Invitation" ? (
            <Text style={styles.edu2} fontFamily="MontserratRegular">
              You were Invited by : <Text style={{color: colors.light.green}}>Chukka Uzo</Text>
            </Text>
          ) : (
            <Text style={styles.edu} fontFamily="MontserratRegular">
              Education
            </Text>
          )}
          <Text style={styles.event} fontFamily="MontserratSemiBold">
            Google UI Event
          </Text>
          <View style={styles.flex}>
            <Image source={Conf} style={styles.img} />
            <View style={[styles.act]}>
              <View style={styles.act2}>
                <Text fontFamily="MontserratBold" style={styles.day}>
                  18
                </Text>
                <Text fontFamily="MontserratSemiBold" style={styles.year}>
                  JUNE 2023
                </Text>
                <Text style={{ fontSize: 12 }} fontFamily="MontserratRegular">
                  Monday
                </Text>
              </View>
              <View style={styles.time}>
                <Text
                  style={{ color: colors.light.white, fontSize: 11 }}
                  fontFamily="MontserratRegular"
                >
                  7:30pm - 1pm
                </Text>
              </View>
            </View>
          </View>
          <Text fontFamily="MontserratRegular" style={styles.id}>
            Event ID: SDFYUIKGU
          </Text>
          <Text fontFamily="MontserratRegular" style={styles.text1}>
            Hey guys we are here again with another round of our regular design
            show. This one is bigger, and everything more. Learn the inner scope
            of user interface. Grab your tickets, its selling out fast! And
            lastly, enjoy again with another round of our regular design show.
            This one is bigger, and everything more. Learn the inner scope of
            user interface....
          </Text>
          <Icon
            icon={
              <AntDesign name="calendar" size={25} color={colors.light.text2} />
            }
            text=" Tue 22 Jun, 2022 - Tue 24 Jun, 2022"
          />
          <Icon
            icon={
              <Ionicons
                name="md-time-outline"
                size={25}
                color={colors.light.text2}
              />
            }
            text=" Tue 22 Jun, 2022 - Tue 24 Jun, 2022"
          />
          <Icon
            icon={
              <Ionicons
                name="ios-location-outline"
                size={25}
                color={colors.light.text2}
              />
            }
            text=" Tue 22 Jun, 2022 - Tue 24 Jun, 2022"
          />
        </View>
      </ScrollView>
      <View style={styles.btn}>
        {route?.params?.type === "Invitation" && (
          <Button style={styles.btn2}>N3,000</Button>
        )}
        <Button
          style={[
            styles.btn1,
            {
              width: route?.params?.type === "Invitation" ? "65%" : "100%",
            },
          ]}
        >
          {route?.params?.type === "Invitation"
            ? "Buy Ticket"
            : "Accept Invitation"}
        </Button>
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.light.white,
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    padding: 20,
    paddingBottom: 200
  },
  edu: {
    color: colors.light.green,
    textTransform: "uppercase",
    paddingTop: 30,
  },
  edu2: {
    color: colors.light.text5,
    textTransform: "uppercase",
    paddingTop: 30,
    fontSize: 10
  },
  event: {
    color: colors.light.white,
    fontSize: 16,
    paddingVertical: 10,
  },
  flex: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 250,
    backgroundColor: colors.light.white,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  img: {
    width: "65%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  act: {
    alignItems: "flex-end",
    flexGrow: 1,
    paddingRight: 10,
    gap: 50,
  },
  act2: {
    alignItems: "flex-end",
  },
  day: {
    fontSize: 60,
    textAlign: "left",
  },
  year: {
    fontSize: 13,
  },
  time: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: colors.light.black,
    borderRadius: 6,
  },
  id: {
    color: colors.light.text3,
    fontSize: 12,
    paddingVertical: 15,
  },
  text1: {
    color: colors.light.text2,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 40,
  },
  btn: {
    position: "absolute",
    bottom: 80,
    padding: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btn1: {
    borderRadius: 50,
  },
  btn2: {
    borderRadius: 50,
    width: "35%",
    backgroundColor: colors.light.t7,
  },
});
