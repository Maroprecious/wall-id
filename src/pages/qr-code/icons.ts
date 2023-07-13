import { MemberInactiveIcon, EventsInactiveIcon, IDInactiveIcon, VerifyInactiveIcon, VerifyIcon, IDIcon } from "../../../assets/svgs/tabs"

export const pages = [
    {
        key: "Members",
        title: "Members",
        icon: MemberInactiveIcon,
        page: "Membership"
    },
    {
        key: "Events",
        title: "Events",
        icon: EventsInactiveIcon,
        page: "Members"
    },
    {
        key: "ID Card",
        title: "ID Card",
        icon: IDIcon,
        page: "Membership and subscription"
    },
    {
        key: "Verify",
        title: "Verify",
        icon: VerifyIcon,
        page: ""
    },
]