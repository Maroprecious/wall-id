import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Button, Input, Select } from "../../component";
import { PageLayout } from "../../component/layout/page-layout";
import { Route } from "react-native-tab-view";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants";
import { UploadIcon } from "../../../assets/svgs/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationPropsHook } from "../../navigations/types";

interface SceneProps {
  jumpTo: (key: Route["key"]) => void;
}

export const CreateCard = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  const [accessibility, setAccessibility] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <PageLayout w="full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={[styles.flexer1]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={25} color={colors.light.white} />
              </TouchableOpacity>
              <Text fontFamily="MontserratSemiBold" style={styles.subText2}>
                Create Card
              </Text>
              <View style={{ width: 25 }} />
            </View>

            <Input label="Organization" />
            <Input label="Role" />
            <Input label="Date Joined" />
            <Input label="Holders Full Name" />

            <View>
              <Text style={styles.label} fontFamily="MontserratRegular">
                Select ID Image
              </Text>
              <TouchableOpacity style={styles.upload}>
                <UploadIcon />
                <Text style={styles.label} fontFamily="MontserratRegular">
                  Choose Image
                </Text>
              </TouchableOpacity>
            </View>

            <Button style={{ marginVertical: 50 }} onPress={() => null}>
              Create Card
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // paddingBottom: 300,
  },
  label: {
    fontSize: 13,
    color: colors.light.label,
    paddingBottom: 7,
  },
  upload: {
    width: 140,
    height: 128,
    borderRadius: 10,
    backgroundColor: colors.light.input,
    justifyContent: "center",
    alignItems: "center",
  },
  subText2: {
    color: colors.light.text,
    fontSize: 15,
    paddingBottom: 20,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  subText3: {
    fontSize: 13,
    color: colors.light.label,
    paddingBottom: 7,
  },
  flexer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 6,
    width: "46%",
    borderWidth: 1,
    height: 50,
    paddingLeft: 20,
    borderRadius: 10,
  },
  flexer1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light.input,
    marginVertical: 30,
  },
  add: {
    flexDirection: "row",
    gap: 7,
  },
  header_text: {
    fontSize: 14,
    color: colors.light.text7,
    paddingBottom: 30,
  },
});
