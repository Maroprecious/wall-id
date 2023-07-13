import React from "react";
import { View, Text } from "../../component/theme/themed";
import { ScrollView, StyleSheet, TouchableOpacity, View as RNView, Platform } from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { PageLayout } from "../../component/layout/page-layout";
import { NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants";
import { MembersInfo } from "../../members-info";
import { useTheme } from "../../context/theme";

export const MembersTab = () => {
  const { isDarkTheme } = useTheme();
  const navigation = useNavigation<NavigationPropsHook>();
  return (
    <PageLayout>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={22} color={isDarkTheme ? colors.light.background : colors.light.white} />
        </TouchableOpacity>
        <Text style={styles.title} fontFamily="MontserratBold">
          Members
        </Text>
      </View>
      <RNView style={styles.members}>
        {MembersInfo.map((elem, id) => (
          <TouchableOpacity onPress={() => navigation.navigate(elem.page as any)} key={id}>
            <RNView style={[styles.text_container, { backgroundColor: elem.bg_color, }]}>
              <RNView style={[styles.overlay, { backgroundColor: isDarkTheme ? colors.light.text2 : colors.light.input }]}>
                <RNView style={[{ backgroundColor: elem.icon_color }, styles.icon_background]}>
                  {elem.icon}
                </RNView>
                <Text style={styles.memberText} fontFamily='MontserratMedium'>{elem.name}</Text>
              </RNView>
            </RNView>
          </TouchableOpacity>
        ))}
      </RNView>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 3,
    gap: 110,
  },
  title: {
    textAlign: "center",
    color: colors.light.white,
    fontSize: 19,
  },
  icon_background: {
    width: 80,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
    height: Platform.OS === 'android' ? 54 : 57,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text_container: {
    flexDirection: 'row',
    height: Platform.OS === 'android' ? 54 : 57,
    borderRadius: 6
  },
  members: {
    height: '34%',
    justifyContent: 'space-between',
    marginTop: 35,
    width: '95%',

  },
  overlay: {
    width: Platform.OS === 'android' ? '95%' : '97%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  memberText: {
    marginLeft: 15,
    fontSize: Platform.OS === 'android' ? 15 : 17,
    color: colors.light.white
  }
});
