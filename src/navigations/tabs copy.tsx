import * as React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { Text, View } from "../component/theme/themed";
import { TabView, SceneMap, TabBarProps, Route } from "react-native-tab-view";
import { colors } from "../constants";
import { routes, routesProps } from "./routes";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  
} from "react-native-reanimated";
import {
  AddCard,
  CreateEvents,
  EventGallery,
  Events,
  History,
  Home,
  IDCards,
  Invitations,
  MemberShip,
  Members,
  MyCard,
  PendingCard,
  Profile,
  QRCode_,
  Scan,
  Subscriptions,
  UpcomingEvents,
  Verify,
} from "../pages";
import { styles } from "./styles";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
export const BottomBar = () => {
  const radius = useSharedValue(0);
  const translateY = useSharedValue(0);
  const layout = useWindowDimensions();

  const [state, setState] = useState({
    index: 0,
    routes,
  });

  const _handleIndexChange = (index: number) => {
    setState({ ...state, index });
  };

  const _renderTabBar = (props: TabBarProps<Route>) => {
    const getTabStyle = (index: number) => {
      return {
        borderRadius: index === state.index ? 50 : 10,
      };
    };

    const rStyles = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: translateY.value,
          },
        ],
      };
    });

    const animateSide = (title: string) => {
      switch (title) {
        case "QR Code":
          translateY.value = withTiming(0);
          return;
        case "Members":
          translateY.value = withTiming(85);
          return;
        case "Events":
          translateY.value = withTiming(85 * 2);
          return;
        case "Verify":
          translateY.value = withTiming(85 * 3);
          return;
        case "ID Card":
          translateY.value = withTiming(85 * 4);
          return;
        default:
          null;
      }
    };

    return (
      <>
        <View style={[styles.tabBar, styles.side]}>
          <Animated.View style={[styles.indicator, rStyles]} />
          {props.navigationState.routes
            .slice(0, 5)
            .map((route: any, i: number) => {
              return (
                <View key={route.title} style={{ alignItems: "center" }}>
                  <AnimatedTouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.tabItem, styles.top, getTabStyle(i)]}
                    onPress={() => {
                      setState({ ...state, index: i });
                      radius.value =
                        i === state.index ? withTiming(50) : withTiming(10);
                      animateSide(route.title);
                    }}
                  >
                    {i === state.index ? <route.active /> : <route.inActive />}
                  </AnimatedTouchableOpacity>
                  <Text
                    fontFamily="MontserratRegular"
                    style={[
                      {
                        fontSize: 11,
                        marginBottom: 20,
                        color:
                          i === state.index
                            ? colors.light.white
                            : colors.light.text7,
                      },
                    ]}
                  >
                    {route.title}
                  </Text>
                </View>
              );
            })}
        </View>

        <View style={[styles.tabBar, styles.bottom]}>
          {props.navigationState.routes
            .slice(5, 8)
            .map((route: any, i: number) => {
              return (
                <React.Fragment key={route.title}>
                  {route.title === "Scan" ? (
                    <TouchableOpacity
                      activeOpacity={1}
                      style={[styles.tabItem, styles.bottomTab, styles.move]}
                      onPress={() => setState({ ...state, index: i })}
                    >
                      {i === state.index ? (
                        <route.active />
                      ) : (
                        <route.inActive />
                      )}
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      activeOpacity={1}
                      style={[styles.tabItem, styles.bottomTab]}
                      onPress={() => setState({ ...state, index: i + 5 })}
                    >
                      {i + 5 === state.index ? (
                        <route.active />
                      ) : (
                        <route.inActive />
                      )}
                      <Text
                        fontFamily="MontserratRegular"
                        style={[
                          styles.text,
                          {
                            color:
                              i === state.index
                                ? colors.light.white
                                : colors.light.text7,
                          },
                        ]}
                      >
                        {route.title}
                      </Text>
                    </TouchableOpacity>
                  )}
                </React.Fragment>
              );
            })}
        </View>
      </>
    );
  };

  const _renderScene = SceneMap({
    "QR Code": QRCode_,
    Members: Members,
    Events: Events,
    Verify: Verify,
    "ID Card": IDCards,
    Home: Home,
    Scan: Scan,
    Profile: Profile,
    Membership: MemberShip,
    Subscription: Subscriptions,
    History: History,
    "Upcoming Events": UpcomingEvents,
    "Events Gallery": EventGallery,
    Invitations: Invitations,
    "Create Event": CreateEvents,
    "Add card": AddCard,
    "My card": MyCard,
    "Pending card": PendingCard,
  });

  return (
    <TabView
      navigationState={state}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={_handleIndexChange}
      swipeEnabled={false}
      animationEnabled={false}
      initialLayout={{ width: layout.width }}
    />
    
  );
};
