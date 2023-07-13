import React, { ChangeEvent, ReactNode } from "react";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleProp,
  ViewStyle,
  TextInputFocusEventData,
} from "react-native";
import { View, Text } from "../theme/themed";
import { colors } from "../../constants";
import { PersonIcon } from "../../../assets/svgs/icons";

type props = {
  placeholder?: string;
  otherProps?: TextInputProps;
  isPassword?: boolean;
  action?: ReactNode;
  onChange?: (e: any) => void;
  style?: StyleProp<ViewStyle>;
  icon?: ReactNode;
  label?: string;
  inputStyle?: StyleProp<ViewStyle>;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  err?: boolean;
  errMsg?: string;
};

export const Input = ({
  placeholder,
  otherProps,
  isPassword,
  action: Action,
  onChange,
  style,
  icon: Icon,
  label,
  inputStyle,
  onBlur,
  err,
  errMsg
}: props) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={styles.label} fontFamily="MontserratRegular">
          {label}
        </Text>
      )}
      <View style={styles.icon}>{Icon}</View>
      <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={colors.light.text4}
        style={[styles.input, inputStyle, { paddingLeft: Icon ? 40 : 20 }]}
        {...otherProps}
      />
      {isPassword && <View style={styles.action}>{Action}</View>}
      {err && <Text fontFamily="MontserratRegular" style={styles.err}>{errMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    backgroundColor: colors.light.input,
    borderRadius: 12,
    paddingLeft: 20,
    fontFamily: "MontserratRegular",
    fontSize: 12,
    color: colors.light.text4,
  },

  container: {
    marginBottom: 20,
  },
  action: {
    position: "absolute",
    right: 20,
    top: 19,
  },
  icon: {
    position: "absolute",
    zIndex: 100,
    top: 19,
    left: 15,
  },
  label: {
    fontSize: 13,
    color: colors.light.label,
    paddingBottom: 7,
  },
  err: {
    fontSize: 13,
    color: colors.light.error
  }
});
