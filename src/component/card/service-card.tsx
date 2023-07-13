import { ReactNode } from "react";
import { Text, View } from "../theme/themed";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../constants";

type props = {
  title?: string;
  icon?: ReactNode;
  icon2?: ReactNode;
  icon3?: ReactNode;
  text1?: string;
  text2?: string;
  text3?: string;
  cardStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const ServiceCard = ({
  title,
  icon,
  text1,
  text2,
  text3,
  icon2,
  icon3,
  cardStyle,
  textStyle
}: props) => {
  return (
    <View style={cardStyle}>
      <Text style={styles.title} fontFamily='MontserratSemiBold'>{title}</Text>
      <View style={styles.column}>
        <View style={styles.flex}>
          <View>{icon}</View>
          <Text style={textStyle} fontFamily='MontserratRegular'>{text1}</Text>
        </View>
        <View style={styles.flex}>
          <View>{icon2}</View>
          <Text style={textStyle} fontFamily='MontserratRegular'>{text2}</Text>
        </View>
        <View style={styles.flex}>
          <View>{icon3}</View>
          <Text style={textStyle} fontFamily='MontserratRegular'>{text3}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    flex:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    column:{
        justifyContent: 'space-between',
        height: '100%',
        paddingTop: 22, 
        paddingBottom: 25
    },
    title:{
        fontSize: 15.5, 
        color: colors.light.text5
    }
})
