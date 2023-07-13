import React from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { PageLayout } from "../../component/layout/page-layout";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants";
import { User } from ".";
import { Button, Input } from "../../component";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const AccountInfo = ({ navigation }: any) => {
  return (
    <PageLayout w="full">
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="left" color={colors.light.white} size={20} />
              </TouchableOpacity>
              <Text fontFamily="MontserratMedium" style={styles.header_text}>
                Account Info
              </Text>
              <View style={{ width: 20 }} />
            </View>
            <User />
            <Input label="Date Joined" placeholder="09-04-22" />
            <Input label="Account type" placeholder="Individual" />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_text: {
    fontSize: 18,
    color: colors.light.white,
  },
});
