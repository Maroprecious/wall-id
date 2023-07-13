import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { PageLayout } from "../../component/layout/page-layout";
import { Image, StyleSheet } from "react-native";
import {
  EventsImage,
  HistoryImage,
  DateImage,
  GalleryImage,
  InvitationImage,
} from "../../constants/images";
import { colors } from "../../constants";
import { Route } from "react-native-tab-view";

interface SceneProps {
  jumpTo: (key: Route["key"]) => void;
}

export const Events = () => {
  return (
    <PageLayout title="Event Management" canGoGack={false} showActions={true}>
      <View style={style.container}>
        {[
          {
            image: EventsImage,
            name: "Upcoming Events",
            color: colors.light.membership,
            page: "Upcoming Events",
          },
          {
            image: GalleryImage,
            name: "Event Gallery",
            color: colors.light.sub,
            page: "Events Gallery",
          },
          {
            image: DateImage,
            name: "Create Event",
            color: colors.light.history,
            page: "Create Event",
          },
          {
            image: InvitationImage,
            name: "Invitations",
            color: colors.light.invite,
            page: "Invitations",
          },
          {
            image: HistoryImage,
            name: "History",
            color: colors.light.history2,
            page: "Upcoming Events",
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
    height: 146,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginBottom: 7,
  },
  text: {
    fontSize: 12,
    color: colors.light.black,
  },
  img: {
    resizeMode: "contain",
    marginLeft: -20,
  },
});
