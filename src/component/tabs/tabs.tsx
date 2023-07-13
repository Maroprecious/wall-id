import * as React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { colors } from "../../constants";
import { Text, View } from "../theme/themed";
import { Input } from "../input";
import { FontAwesome } from "@expo/vector-icons";
import { Accordion } from "../accordion/accordion";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: colors.light.bg4 }}>
    <View style={styles.search}>
      <Input
        icon={
          <FontAwesome name="search" size={13} color={colors.light.white} />
        }
        placeholder="Search Keywords"
      />
    </View>
    <Accordion />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: colors.light.bg4 }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: colors.light.bg4 }} />
);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "FAQs" },
    { key: "second", title: "Feedback" },
    { key: "third", title: "What's new" },
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      contentContainerStyle={{
        backgroundColor: colors.light.bg4,
        height: "95%",
        width: "95%",
      }}
      indicatorStyle={{ backgroundColor: colors.light.white }}
      indicatorContainerStyle={{ backgroundColor: colors.light.bg4 }}
      labelStyle={{ textTransform: "none", fontFamily: "MontserratRegular" }}
    />
  );
  return (
    <TabView
      style={{ width: "92%", alignSelf: "center" }}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
const styles = StyleSheet.create({
  search: {
    marginTop: 16
  },
});
