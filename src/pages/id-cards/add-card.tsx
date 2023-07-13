import React from "react";
import { PageLayout } from "../../component/layout/page-layout";
import { View, Text } from "../../component/theme/themed";
import { StyleSheet } from "react-native";
import { Route } from "react-native-tab-view";
import { Input } from "../../component";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../constants";
import { Card } from "../../component/card";
import { Image1 } from "../../constants/images";

interface SceneProps {
  jumpTo: (key: Route["key"]) => void;
}

export const AddCard = () => {
    
  return (
    <PageLayout
      title="Add Card"
      showActions={true}
      canGoGack={true}
      subText="All ID Cards (7)"
      variant="bottom"
    >
      <View style={styles.container}>
        <Input
          icon={
            <View style={{ marginTop: -5 }}>
              <Feather name="search" color={colors.light.text7} size={20} />
            </View>
          }
          placeholder="Search with name"
        />
        {[
          {
            text1: "Greenmouse",
            text2: "Role : Designer",
            image: Image1,
          },
          {
            text1: "Greenmouse",
            text2: "Role : Designer",
            image: Image1,
          },
          {
            text1: "Greenmouse",
            text2: "Role : Designer",
            image: Image1,
          },
          {
            text1: "Greenmouse",
            text2: "Role : Designer",
            image: Image1,
          },
          {
            text1: "Greenmouse",
            text2: "Role : Designer",
            image: Image1,
          },
          {
            text1: "Greenmouse",
            text2: "Role : Designer",
            image: Image1,
          },
        ].map((element, idx) => (
          <Card {...element} key={idx} />
        ))}
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
