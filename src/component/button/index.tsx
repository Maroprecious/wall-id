import React, { ReactNode } from "react";
import { TouchableOpacity, View, Text } from "../theme/themed";
import {
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../constants";

type props = {
  children: ReactNode;
  variant?: "outline" | "filled";
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: "failed" | "pending" | "successful" | "idle";
  disabled?: boolean;
};

export const Button: React.FC<props> = ({
  children,
  variant = "filled",
  onPress,
  style,
  textStyle,
  loading,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        variant === "filled" && styles.filled,
        variant === "outline" && styles.outline,
        style,
        {
          opacity: disabled ? 0.6 : 1,
        },
      ]}
    >
      {loading === "pending" ? (
        <ActivityIndicator size="small" color={colors.light.white} />
      ) : (
        <Text fontFamily="MontserratRegular" style={[styles.text, textStyle]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  filled: {
    backgroundColor: colors.light.primary,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.light.white,
  },
  text: {
    color: colors.light.white,
    fontSize: 14,
  },
});
