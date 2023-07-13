import React, { useState, useRef } from "react";
import { ScrollView, Dimensions, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../constants";
import { AppLogo } from "../../../assets/svgs/app-logo";
import { Button } from "../../component";
import { Slide1 } from "../../../assets/svgs";
import { Text, View } from "../../component/theme/themed";
import { data as Slides } from "./data";
import { NavigationProps } from "../../navigations/types";

type OnboardingScreenProp = NavigationProps<"Onboarding">;

const { width, height } = Dimensions.get("screen");

export const Onboarding = ({ navigation }: OnboardingScreenProp) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [current, setCurrent] = useState<number>(0);
  const [data, setData] = useState(Slides);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(contentOffset / width);
    setCurrent(currentIndex);
  };

  return (
    <View style={styles.container}>
      <AppLogo />
      <ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={scrollViewRef}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slideContainer}>
            <View style={styles.icon}>{<item.image />}</View>
            <View style={styles.start}>
              <Text fontFamily="MontserratSemiBold" style={styles.header}>
                {item.header}
              </Text>
              <Text fontFamily="MontserratRegular" style={styles.subText}>
                {item.subText}{" "}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.btns}>
        <View style={styles.pagination}>
          {data.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.box,
                {
                  backgroundColor:
                    current === idx
                      ? colors.light.primary
                      : colors.light.pagination,
                },
              ]}
            />
          ))}
        </View>
        <View  style={{gap: 20}}>
          <Button onPress={() => navigation.navigate("Login")} variant="outline">
            Sign in
          </Button>
          <Button onPress={() => navigation.navigate("Account Type")}>
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 8,
    width: 8,
    borderRadius: 10,
  },
  pagination: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
    gap: 10
  },
  container: {
    width: "100%",
    height,
    backgroundColor: colors.light.background,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight ?? 40 + 30,
  },
  icon: {
    paddingTop: 90,
  },
  header: {
    fontSize: 18,
    color: colors.light.text,
  },
  start: {
    alignSelf: "flex-start",
    paddingLeft: 30,
    paddingTop: 40,
    width: "80%",
  },
  subText: {
    fontSize: 14,
    color: colors.light.subText,
    paddingTop: 10,
  },
  btns: {
    width: "100%",
    position: "absolute",
    bottom: 80,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  slideContainer: {
    width,
    alignItems: "center",
  },
});
