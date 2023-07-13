import React from "react";
import { View, Text } from "../theme/themed";
import { Dimensions, Modal, StyleSheet } from "react-native";
import { colors } from "../../constants";
import { Button } from "../button";
import { useNavigation } from "@react-navigation/native";

type prop = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LogoutModal = ({ visible, setVisible }: prop) => {
  const navigation = useNavigation<any>();
  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType="slide"
      transparent={true}
    >
      <View style={style.container}>
        <View style={style.box}>
          <Text fontFamily="MontserratRegular" style={style.text}>
            Are vou sure vou want to logout?
          </Text>
          <Button
            onPress={() => navigation.navigate('Login')}
            textStyle={{ color: colors.light.error }}
            style={style.btn1}
          >
            Logout
          </Button>
          <Button onPress={() => setVisible(false)} style={style.btn2}>
            Cancel
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.light.bgFaded2,
    width: "100%",
    height: Dimensions.get("window").height,
    justifyContent: "flex-end",
  },
  box: {
    width: "100%",
    height: "40%",
    backgroundColor: colors.light.bg4,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    padding: 30,
  },
  text: {
    fontSize: 15,
    color: colors.light.text,
  },
  btn1: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.light.error,
    backgroundColor: "transparent",
  },
  btn2: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.light.white,
    backgroundColor: "transparent",
  },
});
