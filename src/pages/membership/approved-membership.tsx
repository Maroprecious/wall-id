import { View, Text } from "../../component/theme/themed"
import { StyleSheet, TouchableOpacity } from "react-native"
import { PageLayout } from "../../component/layout/page-layout"
import { NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../context/theme";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants";
import ApprovedMembers from "../../approved-members";

export const ApprovedMembersScreen = () => {
    const navigation = useNavigation<NavigationPropsHook>();
    const { isDarkTheme } = useTheme()
    return (
        <PageLayout>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={22} color={isDarkTheme ? colors.light.background : colors.light.white} />
                </TouchableOpacity>
                <Text style={styles.title} fontFamily="MontserratBold">
                    Approved Members
                </Text>
            </View>
            <View style={styles.members}>
                {
                    ApprovedMembers.map((elem, id) => (
                        <View key={id}>
                            <View style={styles.flex}>
                                <View style={styles.image}>
                                    {elem.image}
                                </View>
                                <Text style={styles.name} fontFamily='MontserratMedium'>{elem.name}</Text>
                            </View>
                            <View></View>
                        </View>
                    ))
                }
            </View>
        </PageLayout>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 3,
        gap: 85,
    },
    title: {
        textAlign: "center",
        color: colors.light.white,
        fontSize: 19,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        borderBottomColor: colors.light.t2,
        borderBottomWidth: .5
    },
    members: {
        marginTop: 35,
        paddingHorizontal: '5%'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: colors.light.text6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name:{
        marginLeft: 20,
        fontSize: 18,
        color: colors.light.white
    }
})