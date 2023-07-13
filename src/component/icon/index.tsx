import React, { ReactNode } from "react";
import { View, Text } from "../theme/themed";
import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { Ionicons } from '@expo/vector-icons'

type props = {
  icon: ReactNode;
  text: string | ReactNode;
};

export const Icon = ({ icon, text }: props) => (
  <View style={styles.flex}>
    <View style={styles.box}>{icon}</View>
    <Text style={styles.text} fontFamily="MontserratRegular">
      {text}
    </Text>
  </View>
);

export const HistoryCard = () => (
  <View style={styles.parent}>
    <View>
      <Text style={styles.date} fontFamily="MontserratMedium">
        22
      </Text>
      <Text style={styles.month} fontFamily="MontserratBold">
        Aug
      </Text>
      <Text style={styles.day} fontFamily="MontserratRegular">
        Mon
      </Text>
    </View>
    <View style={{
        gap: 5
    }}>
      <Text style={styles.day} fontFamily="MontserratRegular">7:30 - 2pm</Text>
      <Text style={styles.name} fontFamily="MontserratMedium">The Xperience Concert</Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 7,
        width: '87%'
      }}>
        <Ionicons name="location-outline" size={20} color={colors.light.text7} />
        <Text style={[styles.day]} fontFamily="MontserratRegular">7 Ikoyi Plaza, Admiralty street, Exit busstop, Lagos State</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    marginBottom: 15,
  },
  box: {
    width: 50,
    backgroundColor: colors.light.input,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    borderWidth: .6,
    borderColor: colors.light.text7
  },
  text: {
    color: colors.light.text7,
    fontSize: 15,
  },
  parent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    width:'100%',
    borderColor: colors.light.text7,
    borderTopWidth: 1,
    paddingTop: 20,
    marginVertical: 25
  },
  date: {
    fontSize: 30,
    color: colors.light.text7,
  },
  month: {
    fontSize: 15,
    color: colors.light.white,
  },
  day: {
    fontSize: 12,
    color: colors.light.text7,
  },
  name: {
    fontSize: 14,
    color: colors.light.white,
  },
});
