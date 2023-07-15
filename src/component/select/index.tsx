import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Text, TouchableOpacity } from "../theme/themed";
import { colors } from "../../constants";

export type optionProps = {
  label: string;
  value: string | number;
};

type selectProps = {
  options: optionProps[];
  search?: boolean;
  onChange: (e: optionProps) => void;
  err?: boolean;
  errMsg?: string;
  valid?: boolean;
  extraStyles?: StyleProp<ViewStyle>;
  cardStyles?: StyleProp<ViewStyle>;
  viewStyles?: StyleProp<ViewStyle>;
  placeholder?: string;
  withInfo?: boolean;
  info?: any;
  disabled?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  label?: string;
};

export const Select = ({
  options,
  search = false,
  onChange,
  err,
  errMsg,
  valid = true,
  extraStyles,
  placeholder,
  withInfo,
  info: Info,
  disabled = false,
  labelStyle,
  label,
  viewStyles,
  cardStyles
}: selectProps) => {
  const [value, setValue] = useState<any>("");
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = (item: optionProps) => {
    return (
      <View style={[styles.card, cardStyles]}>
        <Ionicons
          name={
            item.value === value ? "radio-button-on" : "radio-button-off-sharp"
          }
          size={20}
          color={colors.light.white}
        />
        <Text style={styles.label}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={[{ width: "100%", marginBottom: 20 }, extraStyles]}>
      {label && (
        <Text style={styles.label} fontFamily="MontserratRegular">
          {label}
        </Text>
      )}
      <Dropdown
        style={[styles.dropdown, viewStyles]}
        disable={disabled}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={options}
        containerStyle={{ borderWidth: 0, backgroundColor: "transparent" }}
        itemContainerStyle={styles.itemContainer}
        maxHeight={300}
        search={search}
        labelField="label"
        confirmSelectItem={false}
        renderRightIcon={(visible) => (
          <AntDesign
            name={visible ? "caretup" : "caretdown"}
            size={17}
            style={{ paddingRight: 12 }}
            color={colors.light.text4}
          />
        )}
        valueField="value"
        renderItem={renderItem}
        placeholder={
          !isFocus ? (placeholder ? placeholder : "Select item") : "..."
        }
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item);
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      {err && (
        <Text fontFamily="MontserratRegular" style={styles.err}>
          {errMsg}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 55,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.light.input,
    // marginBottom: 20
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 13,
    color: colors.light.white,
    paddingBottom: 7,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: "MontserratRegular",
    paddingLeft: 20,
    color: colors.light.white,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: "MontserratRegular",
    paddingLeft: 20,
    color: colors.light.text4,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  label_tag: {
    fontSize: 12,
    paddingBottom: 5,

    // marginTop: 20,
  },
  flex: {
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  card: {
    width: "100%",
    height: 50,
    backgroundColor: colors.light.input,
    borderWidth: 0,
    justifyContent: "flex-start",
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemContainer: {
    backgroundColor: colors.light.input,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: colors.light.input,
  },
  err: {
    fontSize: 13,
    color: colors.light.error
  }
});
