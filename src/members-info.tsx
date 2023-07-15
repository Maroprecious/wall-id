import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from './constants';
import { ImageBackground } from 'react-native';
import { screen2, screen, screen3, screen4 } from './constants/images';


export const MembersInfo = [
    {
        name: 'Approved Members',
        icon: <Ionicons name="checkmark-outline" size={33} color={colors.light.white} />,
        icon_color: colors.light.icon,
        bg_color: colors.light.t8,
        page: 'Approved Members'
    },
    {
        name: 'Declined Members',
        icon: <Ionicons name="md-close-sharp" size={30} color={colors.light.white} />,
        icon_color: '#95241D',
        bg_color: colors.light.t8,
        page: 'Approved Members'
    },
    {
        name: 'Pending Members',
        icon: <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={28} color={colors.light.white} />,
        icon_color: 'green',
        bg_color: colors.light.t10,
        page: 'Approved Members'
    },
    {
        name: 'Deactivated Members',
        icon: <FontAwesome5 name="stop-circle" size={28} color={colors.light.white} />,
        icon_color: '#6F1C16',
        bg_color: colors.light.t8,
        page: 'Approved Members'
    },

]
export const SubscriptionInfo = [
    {
        image: screen,
        plan: 'Premium Plan',
        valid: '1 month',
        status: 'Active',
        name: 'Attach Enterprise',
        page: 'Organization details'
    },
    {
        image: screen2,
        plan: 'Premium Plan',
        valid: '1 month',
        status: 'Active',
        name: 'Adrite Solutions',
        page: 'Organization details'

    },
    {
        image: screen3,
        plan: 'Premium Plan',
        valid: '1 month',
        status: 'Active',
        name: 'Travelgenics',
        page: 'Organization details'

    },
    {
        image: screen4,
        plan: 'Premium Plan',
        valid: '1 month',
        status: 'Active',
        name: 'Joy Agriculture',
        page: 'Organization details'

    },
]

export const addCard = [
    {
        image: screen,
        email: 'cleanerprog@gmail.com',
        name: 'Attach Enterprice',
        page: 'Organization details 2'
    },
    {
        image: screen2,
        email: 'abigailjoseph@gmail.com',
        name: 'Adrite Solutions',
        page: 'Organization details 2'

    },
    {
        image: screen3,
        email: 'travelgenic@yahoo.com',
        name: 'Travelgenics',
        page: 'Organization details 2'

    },
    {
        image: screen4,
        email: 'joyagriculture@email.com',
        name: 'Joy Agriculture',
        page: 'Organization details 2'
    },
]
export const SubscriptionPlan = [
    {
        plan: 'Premium Plan',
        month: '1',
        amount: 'N 1,500'
    },
    {
        plan: 'Silver Plan',
        month: '2',
        amount: 'N 3,000'
    },
    {
        plan: 'Gold Plan',
        month: '3',
        amount: 'N 5,000'
    },
]
