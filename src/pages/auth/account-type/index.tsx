import React from "react";
import { View, Text, TouchableOpacity } from "../../../component/theme/themed";
import { StyleSheet } from "react-native";
import { AuthLayout } from "../../../component";
import { IndividualSvg, OrganizationSvg } from "../../../../assets/svgs";
import { colors } from "../../../constants";
import { NavigationProps } from "../../../navigations/types";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons'


const GradientText = (props: any) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.light.primary, colors.light.white]}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

type AccountTypeScreenProps = NavigationProps<"Account Type">;

export const AccountType = ({ navigation }: AccountTypeScreenProps) => {
  return (
    <AuthLayout title="" subText="">
      <View>
        <GradientText style={styles.text1}>
          What are you{"\n"}signing up as
        </GradientText>
        <View style={styles.container}>
          {[
            {
              image: IndividualSvg,
              type: "Individual",
              text: "This account type is for regular user",
              color: colors.light.individual,
              page: "Individual Signup",
            },
            {
              image: OrganizationSvg,
              type: "Organization",
              text: "This account type is for organisations",
              color: colors.light.organization,
              page: "Organization Signup",
            },
          ].map((element, idx) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(element.page as any)}
              activeOpacity={0.8}
              key={idx}
              style={[
                styles.card,
                {
                  backgroundColor: element.color.bg,
                  borderColor: element.color.border,
                },
              ]}
            >
              <View>
              <element.image />
              <Text style={styles.header} fontFamily="MontserratBold">
                {element.type}
              </Text>
              <Text style={styles.text} fontFamily="MontserratRegular">
                {element.text}
              </Text>
              </View>
              <Ionicons name="arrow-forward" color={colors.light.white} size={25} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: 50,
    gap: 20
  },
  card: {
    width: "100%",
    height: 150,
    borderRadius: 7,
    alignItems: "center",
    borderWidth: 2,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  header: {
    alignSelf: "flex-start",
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 16,
    color: colors.light.white,
  },
  text: {
    alignSelf: "flex-start",
    paddingLeft: 10,
    fontSize: 12,
    color: colors.light.text3,
  },
  text1: {
    fontFamily: "MontserratSemiBold",
    fontSize: 30,
  },
});
