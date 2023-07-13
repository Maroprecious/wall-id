import React from "react";
import { View, Text } from "../../component/theme/themed";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { PageLayout } from "../../component/layout/page-layout";
import { NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants";
import { SubscriptionInfo, addCard } from "../../members-info";
import { Input } from "../../component";
import { Bar, Conf } from "../../constants/images";

export const TicketDetails = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout w="full">
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={colors.light.white} />
          </TouchableOpacity>
          <Text style={styles.title} fontFamily="MontserratBold">
            Ticket details
          </Text>
          <View style={{ width: 20 }} />
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "85%" }}>
            <ImageBackground
              source={Bar}
              resizeMode="contain"
              style={styles.bg}
            >
              <Image source={Conf} style={styles.header_img} />
              <View style={{ padding: 20, gap: 30 }}>
                <Text style={styles.header_text} fontFamily="MontserratBold">
                  Google UI Event
                </Text>
                <View>
                  <Text style={styles.ven}>Venue</Text>
                  <Text
                    style={styles.header_text1}
                    fontFamily="MontserratRegular"
                  >
                    7 Ikovi Plaza Admiralty street, Exit busstop, Lagos State
                  </Text>
                </View>
                <View>
                  <Text style={styles.ven}>Holder's name</Text>
                  <Text
                    style={styles.header_text1}
                    fontFamily="MontserratRegular"
                  >
                    Ticket type
                  </Text>
                </View>
                <View>
                  <Text style={styles.ven}>Holder's name</Text>
                  <Text
                    style={styles.header_text1}
                    fontFamily="MontserratRegular"
                  >
                    VVIP
                  </Text>
                </View>
                <View
                    style={styles.flexed}
                >
                  <View>
                    <Text style={styles.ven}>Date (From)</Text>
                    <Text
                      style={styles.header_text1}
                      fontFamily="MontserratRegular"
                    >
                      12-23-2303
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.ven}>Date (To)</Text>
                    <Text
                      style={styles.header_text1}
                      fontFamily="MontserratRegular"
                    >
                      12-23-2303
                    </Text>
                  </View>
                </View>
                <View
                    style={styles.flexed}
                >
                  <View>
                    <Text style={styles.ven}>Time (From)</Text>
                    <Text
                      style={styles.header_text1}
                      fontFamily="MontserratRegular"
                    >
                      5:30am
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.ven}>Time (To)</Text>
                    <Text
                      style={styles.header_text1}
                      fontFamily="MontserratRegular"
                    >
                      5:30am
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
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
  bg: {
    width: "100%",
    height: 690,
    resizeMode: "contain",
    overflow: "hidden",
  },
  header_img: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header_text: {
    color: colors.light.white,
    fontSize: 14,
  },
  header_text1: {
    color: colors.light.white,
    fontSize: 13,
  },
  ven: {
    color: colors.light.text7,
    fontSize: 11,
  },
  flexed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
