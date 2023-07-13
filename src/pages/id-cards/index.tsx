import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { PageLayout } from "../../component/layout/page-layout";
import { Image, StyleSheet } from "react-native";
import { AddCardImage, MyCardImage, SearchImg } from "../../constants/images";
import { colors } from "../../constants";
import { Route } from "react-native-tab-view";

interface SceneProps {
  jumpTo: (key: Route["key"]) => void;
}

export const IDCards = () => {
  return (
    <PageLayout title="ID Cards" canGoGack={false} showActions={true}>
      <View style={style.container}>
        {[
          {
            image: AddCardImage,
            name: "Add Cards",
            color: colors.light.invite,
            page: "JoinOrganization",
          },
          {
            image: MyCardImage,
            name: "My Cards",
            color: colors.light.sub,
            page: "My card",
          },
          {
            image: MyCardImage,
            name: "Pending Cards",
            color: colors.light.history,
            page: "Pending card",
          },
        ].map((element) => (
          <TouchableOpacity
            key={element.name}
            style={[style.box, { backgroundColor: element.color }]}
          >
            <Image source={element.image} style={style.img} />
            <Text fontFamily="MontserratRegular" style={style.text}>
              {element.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </PageLayout>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 50,
  },
  box: {
    width: "47%",
    height: 176,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginBottom: 7,
  },
  text: {
    fontSize: 12,
    color: colors.light.black,
    textAlign: "center",
    width: "80%",
    paddingBottom: 10,
  },
  img: {
    resizeMode: "contain",
    marginLeft: -20,
  },
});
