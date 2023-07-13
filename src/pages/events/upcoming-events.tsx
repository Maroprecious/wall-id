import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Input } from "../../component";
import { PageLayout } from "../../component/layout/page-layout";
import { Route } from "react-native-tab-view";
import { AntDesign, Feather } from "@expo/vector-icons";
import { colors } from "../../constants";
import { EventsCard } from "../../component/card/events-card";
import { EventsCard2 } from "../../component/card/events-card-two";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/theme";


export const UpcomingEvents = () => {
  const navigation = useNavigation();
  const {isDarkTheme} = useTheme()

  return (
    <PageLayout w="full">
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.flexer1]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={25} color={isDarkTheme ? colors.light.black : colors.light.white} />
            </TouchableOpacity>
            <Text fontFamily="MontserratSemiBold" style={styles.subText2}>
              Upcoming Events
            </Text>
            <View style={{ width: 25 }} />
          </View>
          <Text style={styles.header_text} fontFamily="MontserratRegular">
            All vour Upcoming events (7)
          </Text>
          <Input
            icon={
              <View style={{ marginTop: -5 }}>
                <Feather name="search" color={colors.light.text7} size={20} />
              </View>
            }
            placeholder="Search"
          />
          <View style={styles.line}>
            <Text
              style={[styles.header_text, { paddingBottom: 10 }]}
              fontFamily="MontserratRegular"
            >
              This month
            </Text>
          </View>
          <FlatList
            horizontal={true}
            data={[1, 2]}
            renderItem={() => <EventsCard2 />}
            keyExtractor={(item) => item.toString()}
          />
          <View style={[styles.line, { marginTop: 40 }]}>
            <Text
              style={[styles.header_text, { paddingBottom: 10 }]}
              fontFamily="MontserratRegular"
            >
              Later
            </Text>
          </View>
          <EventsCard type="Free" />
          <EventsCard type="Paid" />
          <EventsCard type="Free" />
        </View>
      </ScrollView>
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
  line: {
    width: "100%",
    borderColor: colors.light.input,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
