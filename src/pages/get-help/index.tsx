import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { StyleSheet } from "react-native";
import { PageLayout } from "../../component/layout/page-layout";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationPropsHook } from "../../navigations/types";
import { colors } from "../../constants";
import { ServiceCard } from "../../component/card/service-card";
import { useAppSelector } from "../../redux/store";

export const GetHelp = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  const {user:{userInfo:{name}}} = useAppSelector(({userReducer})=> userReducer)
  return (
    <PageLayout
      icon={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color={colors.light.white} />
        </TouchableOpacity>
      }
    >
      <View style={styles.container}>
        <View style={styles.title_container}>
          <AntDesign
            name="customerservice"
            size={27}
            color={colors.light.white}
          />
          <Text style={styles.welcome} fontFamily='MontserratBold'>Hello, {name}</Text>
        </View>
        <View>
          <ServiceCard
            title="Wall-ID Customer Service"
            icon={<FontAwesome5 name="envelope" size={20} color={colors.light.text5} />}
            text1="customerservice@wallid.com"
            icon2={<AntDesign name="customerservice" size={22} color={colors.light.text5} />}
            text2="help@wallid.com"
            icon3={<Ionicons name="md-call-outline" size={22} color={colors.light.text5} />}
            text3="+2348145405006"
            cardStyle={{
              backgroundColor: colors.light.bg2,
              marginTop: 25,
              padding: 15,
              height: 180,
              borderRadius: 13
            }}
            textStyle={{marginLeft: 12, fontSize: 15, color: colors.light.text5}}
          />
        </View>
        <View>
          <ServiceCard
            title="Customer Service Center Address"
            icon={<Ionicons name="location" size={24} color={colors.light.text5} />}
            text1="No 52, WallID office off Banana Island, Lagos, Nigeria"
            cardStyle={{
              backgroundColor: colors.light.bg2,
              marginTop: 25,
              padding: 15,
              height: 120,
              borderRadius: 13
            }}
            textStyle={{paddingHorizontal: 10, fontSize: 15, color: colors.light.text5}}
          />
        </View>
      </View>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  title_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  welcome: {
    marginLeft: 10,
    color: colors.light.white,
    fontSize: 20,
  },
});
