import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View as RnView,
} from "react-native";
import { QRCode_, Scan, Profile, Wallet } from "../pages";
import { RouteProp, NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants";
import { useTheme } from "../context/theme";
import { Text, View } from "../component/theme/themed";

const Tab = createBottomTabNavigator();

const TabBar = ({ state, descriptors, navigation }: any) => {
  const { isDarkTheme } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.light.bottom }}>
      <View style={style.container}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              key={index}
              onLongPress={onLongPress}
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Ionicons
                name={
                  route.name === "Home"
                    ? "ios-home-outline"
                    : route.name === "Scan"
                    ? "scan-outline"
                    : route.name === "Profile"
                    ? "md-person-circle-outline"
                    : route.name === "Wallet"
                    ? "wallet-outline"
                    : "home"
                }
                size={23}
                color={
                  !isDarkTheme
                    ? isFocused
                      ? colors.light.white
                      : colors.light.text7
                    : colors.light.black
                }
              />
              <Text
                fontFamily={
                  isFocused ? "MontserratSemiBold" : "MontserratRegular"
                }
                style={{
                  fontSize: isFocused ? 13 : 11,
                  color: isFocused ? colors.light.white : colors.light.text7,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={QRCode_} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  container: {
    height: 60,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: -10,
    backgroundColor: colors.light.bottom,
  },
});
