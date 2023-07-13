import React from "react";
import { View, Text } from "../theme/themed";
import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";

export const Add = () => (
  <View style={styles.card}>
    <View style={styles.header}>
      <Text style={styles.name} fontFamily="MontserratRegular">
        Attach Enterprice Ltd
      </Text>
    </View>
    <View style={{ paddingHorizontal: 20, gap: 20 }}>
      <View style={styles.flex}>
        <View style={styles.flexer}>
          <View style={styles.img}>
            <FontAwesome name="user" size={60} color={colors.light.input} />
          </View>
          <View style={{ gap: 5 }}>
            <Text style={styles.name1} fontFamily="MontserratRegular">
              Name
            </Text>
            <Text fontFamily="MontserratBold">Chukka Uzo</Text>
          </View>
        </View>
        <View />
      </View>
      <View style={styles.actions}>
        {[
          {
            label: "Date issued",
            value: "30 - 12 - 2012",
          },
          {
            label: "Role",
            value: "Product Manager",
          },
          {
            label: "ID Number",
            value: "325D45678",
          },
        ].map((element) => (
          <View
            style={{
              width: "35%",
              paddingRight: element.label === "ID Number" ? 17 : 0,
              alignItems:
                element.label === "ID Number"
                  ? "flex-end"
                  : element.label === "Date issued"
                  ? "flex-start"
                  : "center",
              borderLeftWidth: element.label === "Role" ? 1 : 0,
              borderRightWidth: element.label === "Role" ? 1 : 0,
            }}
            key={element.label}
          >
            <View>
              <Text style={styles.label} fontFamily="MontserratRegular">
                {element.label}
              </Text>
              <Text style={styles.value} fontFamily="MontserratSemiBold">
                {element.value}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 170,
    backgroundColor: colors.light.white,
    borderRadius: 15,
    marginVertical: 10
  },
  header: {
    height: 40,
    width: "100%",
    backgroundColor: colors.light.t14,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
  },
  name: {
    color: colors.light.white,
    fontSize: 12,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -25,
  },
  flexer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.light.white,
    backgroundColor: colors.light.white,
    justifyContent: "center",
    alignItems: "center",
  },
  name1: {
    color: colors.light.text7,
    fontSize: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  label: {
    fontSize: 10,
    color: colors.light.t14,
  },
  value: {
    fontSize: 11,
    color: colors.light.black,
  },
});
