import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "../../component/theme/themed";
import { PageLayout } from "../../component/layout/page-layout";
import { StyleSheet, View as RNView } from "react-native";
import { colors } from "../../constants";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LogoutModal } from "../../component/modal/logout";
import { useAppSelector } from "../../redux/store";
import { useTheme } from "../../context/theme";

export const User = () => {
  const {isDarkTheme} = useTheme()
  const {
    user: {
      type,
      details: {lastname},
    },
  } = useAppSelector(({ userReducer }) => userReducer);
  return (
    <View style={style.header}>
      <RNView style={[style.profile, {borderColor: isDarkTheme ? colors.light.black : colors.light.white}]} />
      <View style={{ justifyContent: "center", gap: 5 }}>
        <Text fontFamily="MontserratSemiBold" style={style.name}>
           {lastname}
        </Text>
        <Text fontFamily="MontserratRegular" style={style.act}>
          {type ? 'Coorperate Account' : "Individual Account"}
        </Text>
      </View>
    </View>
  );
};

export const Profile = ({ navigation }: any) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <PageLayout
      icon={
        <TouchableOpacity 
        onPress={() => navigation.toggleDrawer()
        
        
        }
        style={style.flexer}>
          {[1, 2, 3, 4].map((ele, idx) => (
            <View key={idx} style={style.box} />
          ))}
        </TouchableOpacity>
      }
      element={
        <View style={style.flexer1}>
          <Text fontFamily="MontserratRegular" style={style.time}>
            Profile
          </Text>
        </View>
      }
    >
      <User />
      <View style={style.container}>
        {[
          {
            name: "Personal Data",
            icon: "person",
            page: "Personal Data",
          },
          {
            name: "Account Info",
            icon: "information-circle-sharp",
            page: "Account Info",
          },
          {
            name: "Security",
            icon: "lock-closed",
            page: "Security",
          },
          {
            name: "Help",
            icon: "help-circle",
            page: "Help",
          },
          {
            name: "Logout",
            icon: "md-enter-outline",
            page: "Logout",
          },
        ].map((element) => (
          <TouchableOpacity
            onPress={() => {
              if (element.page === "Logout") {
                setShowModal(true);
              } else {
                navigation.navigate(element.page);
              }
            }}
            style={style.flex}
            key={element.name}
          >
            <View style={style.flexer2}>
              <View style={style.icon}>
                <Ionicons
                  name={element.icon as any}
                  size={20}
                  color={
                    element.name === "Logout"
                      ? colors.light.error
                      : colors.light.text7
                  }
                />
              </View>
              <Text
                style={[
                  style.act_name,
                  {
                    color:
                      element.name === "Logout"
                        ? colors.light.error
                        : colors.light.text,
                  },
                ]}
                fontFamily="MontserratMedium"
              >
                {element.name}
              </Text>
            </View>
            {element.name !== "Logout" && (
              <AntDesign name="right" color={colors.light.text7} size={20} />
            )}
          </TouchableOpacity>
        ))}
        <LogoutModal visible={showModal} setVisible={setShowModal} />
      </View>
    </PageLayout>
  );
};

const style = StyleSheet.create({
  flexer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
  },
  box: {
    width: 8,
    height: 8,
    backgroundColor: colors.light.white,
    borderRadius: 2,
  },
  flexer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "88%",
  },
  time: {
    color: colors.light.white,
    fontSize: 17,
  },
  header: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 15,
    marginTop: 20,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.light.white,
  },
  name: {
    color: colors.light.white,
    fontSize: 17,
  },
  act: {
    color: colors.light.text7,
    fontSize: 14,
  },
  container: {
    padding: 20,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: colors.light.input,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: colors.light.text7,
  },
  act_name: {
    color: colors.light.text,
    fontSize: 15,
  },
  flexer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
});
