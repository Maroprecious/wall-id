import React, { useEffect, useState } from "react";
import { View, Text } from "../../component/theme/themed";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { AntDesign, Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import { PageLayout } from "../../component/layout/page-layout";
import { NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants";
import { SubscriptionInfo, addCard } from "../../members-info";
import { Input } from "../../component";
import { useAppThunkDispatch, useAppSelector } from "../../redux/store";
import { getListOrganizations } from "../../redux/reducers/user-organization/thunk-action";

export const AddCards = () => {
  const navigation = useNavigation<NavigationPropsHook>();
  const dispatch = useAppThunkDispatch();
  const [value, setValue] = useState('')
  const { loading, list } = useAppSelector(({ userOrganizationReducer }) => userOrganizationReducer)

  const getList = (name: string) => {
    dispatch(getListOrganizations(name))

  }
  const Item = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Organization details 2', {
          name: item.name,
          email: item.user.email,
          username: item.user.name,
          reg_date: item.created_at,
          id_card: item.id_card_number
        })}
      >
        {/* <ImageBackground
          source={item.image}
          style={{ width: "100%", height: 120 }}
          resizeMode="cover"
        /> */}
        <View>
          <Text style={styles.bigText}>{item.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name} fontFamily="MontserratBold">
          {item.name}
        </Text>
        <View style={styles.flexer}>
          <Text style={styles.text} fontFamily="MontserratRegular">
            {item.user.email}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  console.log(value, 'valll')
  return (
    <PageLayout w="full">
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} color={colors.light.white} />
        </TouchableOpacity>
        <Text style={styles.title} fontFamily="MontserratBold">
          All Organizations
        </Text>
        <View style={{ width: 20 }} />
      </View>
      <View>
        <Input
          style={{ width: "90%", alignSelf: "center", marginTop: 30 }}
          placeholder="Search"
          otherProps={{
            value: value
          }}
          onChange={(e) => {
            console.log(e)
            setValue(e)
            getList(e)
          }}
        />
      </View>
      {/* <View style={styles.cards}> */}
        {/* {addCard.map((elem, id) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(elem.page as any)}
              key={id}
            >
              <ImageBackground
                source={elem.image}
                style={{ width: "100%", height: 120 }}
                resizeMode="cover"
              />
              <Text style={styles.name} fontFamily="MontserratMedium">
                {elem.name}
              </Text>
              <View style={styles.flexer}>
                <Text style={styles.text} fontFamily="MontserratRegular">
                  {elem.email}
                </Text>
              </View>
            </TouchableOpacity>
          ))} */}
       <View style={styles.cards}>
       <FlatList
       contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 20, width: '100%', paddingHorizontal: 20}}
          data={list}
          renderItem={({ item }) => <Item item={item}/>}
          ListEmptyComponent={() =>
            <View style={styles.text_container}>
              <Text style={styles.text2} fontFamily='MontserratRegular'>Sorry, No Organizations</Text>
            </View>}
        />
       </View>
      {/* </View> */}
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: colors.light.white,
    fontSize: 19,
  },
  subtext: {
    color: colors.light.text5,
    opacity: 1,
    marginTop: 20,
    paddingLeft: 7,
    fontSize: 14,
    marginLeft: "5%",
  },
  subtext2: {
    color: colors.light.white,
    fontSize: 15,
  },
  addIcon: {
    backgroundColor: colors.light.icon,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {},
  item: {
    alignItems: "center",
  },
  image: {
    width: 175,
    height: 175,
  },
  column: {
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingLeft: 10,
  },
  plan: {
    color: colors.light.input,
  },
  planText: {
    color: colors.light.white,
    fontSize: 15,
    lineHeight: 30,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    alignSelf: "center",
    alignItems: "center",
    rowGap: 40,
  },
  name: {
    color: colors.light.white,
    fontSize: 14.7,
  },
  card: {
    width: 180,
    alignItems: "center",
    gap: 15,
    height: 200,
    justifyContent: 'center',
  },
  flexer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: colors.light.white,
    fontSize: 12,
  },
  text_container: {
    height: '100%',
    marginTop: '60%',
    width: '100%'
  },
  text2: {
    color: colors.light.white,
    textAlign: 'center',
    fontSize: 15
  },
  bigText: {
    color: colors.light.white,
    fontSize: 65,
    textAlign: 'center'
  }
});
