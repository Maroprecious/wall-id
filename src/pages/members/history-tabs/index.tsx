import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { colors } from "../../../constants";
import { HistoryMembership } from "./history-membership";
import { HistorySubscription } from "./history-subscription";

const renderScene = SceneMap({
  Membership: HistoryMembership,
  Subscriptions: HistorySubscription,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    labelStyle={{
      fontFamily: "MontserratRegular",
      color: colors.light.text4,
      textTransform: "capitalize",
      fontSize: 11,
    }}
    indicatorStyle={{ backgroundColor: colors.light.primary }}
    style={{ backgroundColor: "transparent" }}
  />
);

export const HistoryTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Membership", title: "Membership" },
    { key: "Subscriptions", title: "Subscriptions" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
