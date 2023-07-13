import {
    HomeIcon,
    HomeInactiveIcon,
    CameraIcon,
    CameraInactiveIcon,
    ProfileIcon,
    ProfileInactiveIcon,
    QRCodeIcon,
    QrCodeInactive,
    MemberIcon,
    MemberInactiveIcon,
    EventsIcon,
    EventsInactiveIcon,
    VerifyIcon,
    VerifyInactiveIcon,
    IDIcon,
    IDInactiveIcon
} from "../../assets/svgs/tabs";
import { Route } from "react-native-tab-view";

export interface routesProps extends Route {
    active?: any;
    inActive?: any
}

export const routes: routesProps[] = [
    {
        key: "QR Code",
        title: "QR Code",
        active: QRCodeIcon,
        inActive: QrCodeInactive,
    },
    {
        key: "Members",
        title: "Members",
        active: MemberIcon,
        inActive: MemberInactiveIcon,
    },
    {
        key: "Events",
        title: "Events",
        active: EventsIcon,
        inActive: EventsInactiveIcon,
    },
    {
        key: "Verify",
        title: "Verify",
        active: VerifyInactiveIcon,
        inActive: VerifyIcon,
    },
    {
        key: "ID Card",
        title: "ID Card",
        active: IDInactiveIcon,
        inActive: IDIcon,
    },
    {
        key: "Home",
        title: "Home",
        active: HomeIcon,
        inActive: HomeInactiveIcon,
    },
    {
        key: "Scan",
        title: "Scan",
        active: CameraInactiveIcon,
        inActive: CameraIcon,
    },
    {
        key: "Profile",
        title: "Profile",
        active: ProfileInactiveIcon,
        inActive: ProfileIcon,
    },
    {
        key: "Membership",
        title: "Membership",
    },
    {
        key: "Subscription",
        title: "Subscription",
    },
    {
        key: "History",
        title: "History",
    },
    {
        key: "Upcoming Events",
        title: "Upcoming Events"
    },
    {
        key: "Events Gallery",
        title: "Events Gallery"
    },
    {
        key: "Invitations",
        title: "Invitations"
    },
    {
        key: "Create Event",
        title: "Create Event"
    },
    {
        key: "Add card",
        title: "Add card"
    },
    {
        key: "My card",
        title: "My card"
    },
    {
        key: "Pending card",
        title: "Pending card"
    }
]