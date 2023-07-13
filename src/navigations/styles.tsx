import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { colors } from "../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 10000,
  },
  tabItem: {
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    // borderColor: "red",
  },
  bg: {
    // height: Dimensions.get("screen").height,
    // backgroundColor: colors.light.bg,
  },
  side: {
    width: 70,
    height: "100%",
    justifyContent: "flex-start",
    backgroundColor: colors.light.bg,
    paddingTop: 40,
  },
  bottom: {
    flexDirection: "row",
    bottom: 0,
    width: Dimensions.get("screen").width,
  },
  bottomTab: {
    bottom: 0,
    flex: 1,
    height: 85,
    backgroundColor: colors.light.bottom,
  },
  text: {
    color: colors.light.text7,
    fontSize: 13,
    paddingTop: 6,
  },
  move: {
    backgroundColor: colors.light.bottom,
    height: 63,
    width: 63,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 50,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowColor: colors.light.primary,
    shadowRadius: 4,
    shadowOpacity: 0.5,
    zIndex: 100,
    elevation: 10,
  },
  top: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light.bg2,
  },
  indicator: {
    width: 4,
    height: 60,
    backgroundColor: colors.light.primary,
    position: "absolute",
    left: 0,
    top: 40,
  },
});
