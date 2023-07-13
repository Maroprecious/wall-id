import React from "react";
import { View, Text } from "../../../component/theme/themed";
import { Card } from "../../../component/card";
import { Image1 } from "../../../constants/images";

export const HistorySubscription = () => {
  return (
    <View style={{marginTop: 30}}>
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
      ].map((element, idx) => (
        <Card {...element} key={idx} />
      ))}
    </View>
  );
};
