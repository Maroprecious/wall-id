import React from "react";
import { View, Text } from "../theme/themed";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { colors } from "../../constants";

type props = {
  text1: string;
  text2: string;
  image: ImageSourcePropType;
};

export const Card: React.FC<props> = ({ text1, text2, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Image source={image} style={styles.img} />
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.text1} fontFamily="MontserratMedium">
            {text1}
          </Text>
          <Text style={styles.text2} fontFamily="MontserratMedium">
            {text2}
          </Text>
        </View>
      </View>
      <Text
        style={[styles.text2, { fontSize: 13 }]}
        fontFamily="MontserratMedium"
      >
        Active
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 30
  },
  img: {
    height: 47,
    width: 47,
    borderRadius: 50,
    resizeMode: "cover",
  },
  text1: {
    fontSize: 13,
    color: colors.light.text,
  },
  text2: {
    fontSize: 11,
    color: colors.light.text8,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
