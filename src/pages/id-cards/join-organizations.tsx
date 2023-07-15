import React from "react";
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
import { useAppThunkDispatch, useAppSelector } from "../../redux/store";


export const JoinOrganization = () => {
    const navigation = useNavigation<NavigationPropsHook>();
    const dispatch = useAppThunkDispatch();
    const { loading, joinedList } = useAppSelector(({ userOrganizationReducer }) => userOrganizationReducer)
    return (
        <PageLayout w="full">
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={20} color={colors.light.white} />
                </TouchableOpacity>
                <Text style={styles.title} fontFamily="MontserratBold">
                    Joined Organizations
                </Text>
                <View style={{ width: 20 }} />
            </View>
            <View style={styles.flex}>
                <TouchableOpacity onPress={() => navigation.navigate('Add Cards')}>
                    <AntDesign name="pluscircle" size={24} color={colors.light.t9} />
                </TouchableOpacity>
                <Text style={styles.subtext} fontFamily="MontserratMedium">
                    Join New Organization
                </Text>
            </View>
            <FlatList
                data={joinedList}
                renderItem={() => null}
                ListEmptyComponent={() =>
                    <View style={styles.center}>
                        <Text style={styles.text} fontFamily='MontserratRegular'>Sorry No Organizations</Text>
                    </View>}
            />

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
        paddingLeft: 4,
        fontSize: 15,
        marginLeft: "3%",
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginTop: 10
    },
    text: {
        textAlign: 'center',
        color: colors.light.white,
        fontSize: 15
    },
    center: {
        marginTop: '70%'
    }

});
