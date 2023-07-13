import React from "react";
import { Dimensions, Modal, StyleSheet } from "react-native";
import { View, Text } from "../theme/themed";
import { colors } from "../../constants";
import { Button } from "../button";
import { useNavigation } from "@react-navigation/native";

type props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RequestSentModal = ({ visible, setVisible }: props) => {
    const navigation = useNavigation();
  return (
    <Modal
      visible={visible}
      onRequestClose={() => null}
      animationType="fade"
      transparent={false}
    >
      <View style={style.container}>
        <Text style={style.header} fontFamily="MontserratSemiBold">
          Request Sent
        </Text>
        <Text style={style.text} fontFamily="MontserratRegular">
          We would notify vou when the organisation responds to your request
        </Text>
        <Button 
            onPress={() => {
                setVisible(false);
            }}
        style={{ marginTop: 40 }}>Okay, thanks</Button>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: colors.light.bg4,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    color: colors.light.white,
    fontSize: 19,
  },
  text: {
    color: colors.light.text7,
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 30,
  },
});
