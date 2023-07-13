import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TouchableOpacity as TouchView,
} from "react-native";
import { useTheme } from "../../context/theme";
import { colors } from "../../constants";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type FontFamilyProps = {
  fontFamily?:
    | "MontserratBold"
    | "MontserratMedium"
    | "MontserratRegular"
    | "MontserratSemiBold";
};

export type TextProps = ThemeProps & DefaultText["props"] & FontFamilyProps;
export type ViewProps = ThemeProps & DefaultView["props"];
export type TouchableOpacityProps = ThemeProps & TouchView["props"];

export function Text(props: TextProps) {
  const { isDarkTheme } = useTheme();
  const { style, lightColor, darkColor, ...otherProps } = props;
  const defaultFont = "MontserratMedium";

  return (
    <DefaultText
      maxFontSizeMultiplier={1}
      style={[
        { fontFamily: props.fontFamily },
        style,
        isDarkTheme && { color: colors.light.black },
      ]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { isDarkTheme } = useTheme();
  const { style, lightColor, darkColor, ...otherProps } = props;

  return (
    <DefaultView
      style={[style, isDarkTheme && { backgroundColor: colors.light.white }]}
      {...otherProps}
    />
  );
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  return <TouchView style={[style]} {...otherProps} />;
}
