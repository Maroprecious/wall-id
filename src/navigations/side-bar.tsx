import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { BottomBar } from "./tabs";
import { View, Text, TouchableOpacity } from "../component/theme/themed";
import { Dimensions, StyleSheet } from "react-native";
import { AppLogo2 } from "../../assets/svgs/app-logo-2";
import { colors } from "../constants";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { MemeberShipAndSubscrition } from "../pages";
import { MemberShip } from "../pages";
import { LogoutModal } from "../component/modal/logout";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const [visible, setVisible] = React.useState(false)
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <AppLogo2 />
        <View style={styles.line} />

        <View style={{ paddingLeft: 20 }}>
          {[
            {
              page: "Profile",
              name: "Account",
              icon: "person",
              type: 1,
            },
            {
              page: "Wallet",
              name: "Wallet",
              icon: "wallet",
              type: 1,
            },
            {
              page: "Members",
              name: "Events",
              icon: "md-business",
              type: 2,
            },
            {
              page: "Membership and subscription",
              name: "Members",
              icon: "people",
              type: 2,
            },
            {
              page: "GetHelp",
              name: "Support",
              icon: "help-circle",
              type: 2,
            },
            
          ].map((element) => (
            <DrawerItem
              key={element.icon}
              label={element.name}
              style={{ marginBottom: 20 }}
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.navigate(element.page);
                props.navigation.closeDrawer()
              }}
              icon={({ focused, color, size }) => (
                <Ionicons
                  name={element.icon as any}
                  size={25}
                  color={colors.light.white}
                />
              )}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={() => setVisible(true)
          }
          style={styles.bottom}
        >
          <DrawerItem
            label={""}
            labelStyle={styles.label}
            style={{ width: 50 }}
            onPress={() => null}
            icon={({ focused, color, size }) => (
              <Ionicons
                name={"md-log-out"}
                size={25}
                color={colors.light.white}
              />
            )}
          />
          <Text style={styles.label}>Logout</Text>
        </TouchableOpacity>
      </View>
      <LogoutModal visible={visible} setVisible={setVisible} />
    </DrawerContentScrollView>
  );
}

export default function SideBar() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "80%",
        },
      }}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomBar} />
      
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height,
    backgroundColor: colors.light.bg4,
    paddingTop: 100,
    marginTop: -50,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light.input,
    marginVertical: 30,
  },
  label: {
    fontFamily: "MontserratMedium",
    color: colors.light.white,
    fontSize: 15,
  },
  bottom: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 20,
  },
});
