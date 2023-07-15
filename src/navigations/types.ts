import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Onboarding: undefined;
    "Sign up": undefined;
    "Account Type": undefined;
    "Individual Signup": undefined;
    "Organization Signup": undefined;
    Login: undefined;
    "Reset Password": undefined;
    "Tabs": undefined;
    "Members": undefined;
    Events: undefined;
    "ID Card": undefined;
    Verify: undefined;
    "Create Event": undefined;
    "Event Gallery": undefined;
    "Upcoming Event": undefined;
    "Event Details": {
        type: string | ''
    };
    "Invitation": undefined;
    History: undefined;
    "Membership": undefined;
    MembersTab: undefined;
    SubscriptionTab: undefined;
    AddSubscriptionTab: undefined;
    NewSubscriptionTab: undefined;
    "Approved Members": undefined

    "Personal Data": undefined;
    "Account Info": undefined;
    "Security": undefined;
    "Membership and subscription": undefined;
    "JoinOrganization": undefined;
    "Card Request": undefined;
    "Member History": undefined;
    "Add Cards": undefined;
    "Create Card": undefined;
    "My Cards": undefined;
    "Organization details": undefined;
    "Pending Cards": undefined;
    "Organization details 2": undefined;
    "Ticket Details": undefined;
    "New Password": {
        email: string
    }

    "FAQ": undefined
    "GetHelp": undefined;
    "Side bar": undefined;
}


export type NavigationProps<T extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
    route?: RouteProp<RootStackParamList, T>;
};

export type NavigationPropsHook = NativeStackNavigationProp<RootStackParamList>;



export type IUser = {
    id: number;
    username: string;
    email: string;
    type: string;
    status: string;
    details: IUserData
}


export type IUserData = {
    id: number;
    firstname: string;
    lastname: string;
    phone: string;
    dob: any;
    id_card_number: string;
    image: any;
    bio: any;
    created_at: string;
}

