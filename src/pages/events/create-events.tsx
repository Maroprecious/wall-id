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

export const CreateEvents = () => {
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
                Create Event
              </Text>
              <View style={{ width: 25 }} />
            </View>
            <Text style={styles.header_text} fontFamily="MontserratRegular">
              Lets help you set up your event. Tell us more about it to get
              started!
            </Text>
            <Input label="Event name" placeholder="Enter your event name " />
            <Input
              label="Description"
              inputStyle={{
                height: 100,
                paddingTop: 15,
              }}
              placeholder="Tell us about your event "
              otherProps={{
                multiline: true,
                numberOfLines: 5,
              }}
            />
            <Select
              label="Event category"
              options={[
                { value: "Free pass / Open", label: "Free pass / Open" },
                { value: "Restricted / Closed", label: "Restricted / Closed" },
              ]}
              placeholder="Choose your event category"
              onChange={() => null}
            />
            <Select
              label="Event Type"
              options={[
                { value: "Free pass / Open", label: "Free pass / Open" },
                { value: "Restricted / Closed", label: "Restricted / Closed" },
              ]}
              placeholder="Choose your event name"
              onChange={() => null}
            />
            <View>
              <Text style={styles.label} fontFamily="MontserratRegular">
                Add Event photo
              </Text>
              <TouchableOpacity style={styles.upload}>
                <UploadIcon />
                <Text style={styles.label} fontFamily="MontserratRegular">
                  Choose Image
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              fontFamily="MontserratRegular"
              style={[styles.subText2, { paddingTop: 20 }]}
            >
              Location
            </Text>
            <Input
              label="Venue"
              inputStyle={{
                height: 100,
                paddingTop: 15,
              }}
              placeholder="Enter the venue of your event"
              otherProps={{
                multiline: true,
                numberOfLines: 5,
              }}
            />
           
            <Select
              label="State"
              options={[
                { value: "Free pass / Open", label: "Free pass / Open" },
                { value: "Restricted / Closed", label: "Restricted / Closed" },
              ]}
              placeholder="Choose state"
              onChange={() => null}
            />
            <Select
              label="Country"
              options={[
                { value: "Free pass / Open", label: "Free pass / Open" },
                { value: "Restricted / Closed", label: "Restricted / Closed" },
              ]}
              placeholder="Choose country"
              onChange={() => null}
            />
            <Text
              fontFamily="MontserratRegular"
              style={[styles.subText2, { paddingTop: 20 }]}
            >
              Time & Date
            </Text>
            <View style={styles.flex}>
              <Input
                label="Time (Starts)"
                placeholder="hh/mm/ss"
                style={{ width: "47%" }}
              />
              <Input
                label="Time (Ends)"
                placeholder="hh/mm/ss"
                style={{ width: "47%" }}
              />
              <Input
                label="Date (Starts)"
                placeholder="hh/mm/ss"
                style={{ width: "47%" }}
              />
              <Input
                label="Date (Ends)"
                placeholder="hh/mm/ss"
                style={{ width: "47%" }}
              />
            </View>
            <Text
              fontFamily="MontserratRegular"
              style={[styles.subText2, { paddingTop: 20 }]}
            >
              Tickets
            </Text>
            <Input
              label="Tickets Quantity"
              placeholder="Enter number of tickets "
            />
            <Text
              style={[styles.header_text, { paddingBottom: 10 }]}
              fontFamily="MontserratRegular"
            >
              Tell us about your event tickets
            </Text>
            <Text
              fontFamily="MontserratRegular"
              style={[styles.subText3, { paddingTop: 20 }]}
            >
              Accessibility
            </Text>
            <View style={styles.flexer1}>
              {["Free", "Paid"].map((element) => (
                <TouchableOpacity
                  onPress={() => setAccessibility(element)}
                  key={element}
                  style={[
                    styles.flexer,
                    {
                      borderColor:
                        accessibility === element
                          ? colors.light.primary
                          : colors.light.white,
                    },
                  ]}
                >
                  <Ionicons
                    name={
                      accessibility === element
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    size={16}
                    color={
                      accessibility === element
                        ? colors.light.primary
                        : colors.light.white
                    }
                  />
                  <Text
                    fontFamily="MontserratRegular"
                    style={[
                      styles.subText3,
                      {
                        paddingBottom: 0,
                        color:
                          accessibility === element
                            ? colors.light.primary
                            : colors.light.white,
                      },
                    ]}
                  >
                    {element}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Input
              label="Ticket quantity"
              placeholder="Enter number of tickets"
              style={{ marginTop: 20 }}
            />
            <Text
              fontFamily="MontserratRegular"
              style={[styles.subText3, { paddingTop: 10 }]}
            >
              Ticket Categories
            </Text>
            <View style={styles.flexer1}>
              {["Single", "Multiple"].map((element) => (
                <TouchableOpacity
                  onPress={() => setCategory(element)}
                  key={element}
                  style={[
                    styles.flexer,
                    {
                      borderColor:
                        category === element
                          ? colors.light.primary
                          : colors.light.white,
                    },
                  ]}
                >
                  <Ionicons
                    name={
                      category === element
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    size={16}
                    color={
                      category === element
                        ? colors.light.primary
                        : colors.light.white
                    }
                  />
                  <Text
                    fontFamily="MontserratRegular"
                    style={[
                      styles.subText3,
                      {
                        paddingBottom: 0,
                        color:
                          category === element
                            ? colors.light.primary
                            : colors.light.white,
                      },
                    ]}
                  >
                    {element}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.line} />
            <View style={styles.flex}>
              <Input
                label="Ticket Name"
                placeholder="Ticket name"
                style={{ width: "47%" }}
              />
              <Input
                label="Time (Ends)"
                placeholder="NGN"
                style={{ width: "47%" }}
              />
            </View>
            <View style={styles.add}>
              <EvilIcons name="plus" color={colors.light.white} size={18} />
              <Text
                fontFamily="MontserratRegular"
                style={[
                  styles.subText3,
                  {
                    paddingBottom: 0,
                    textDecorationColor: colors.light.white,
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                  },
                ]}
              >
                Add Ticket
              </Text>
            </View>
            <Button style={{ marginVertical: 50 }} onPress={() => null}>
              Create Event
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
    color: colors.light.white,
    paddingBottom: 30,
  },
});
