import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screen types
import { RootStackParamList } from "./types";

//screens
import { Onboarding } from "../pages/onboarding";
import { AccountType, NewPassword } from "../pages/auth";
import {
  IndividualSignUp,
  OrganizationSignUp,
  Login,
  ResetPassword,
} from "../pages/auth";
import { GetHelp } from "../pages/get-help";
import { FaqScreen } from "../pages/faq";
import { ApprovedMembersScreen } from "../pages/membership/approved-membership";
import { JoinOrganization } from "../pages/id-cards/join-organizations";
import { CardRequest } from "../pages/membership-subscription/card-request";
import { MemberHistory } from "../pages/members/members-history";

//tabs
import { BottomBar } from "./tabs";
import { MembersTab } from "../pages/membership/member";
import { AddSubscriptionTab } from "../pages/membership/add-subscription";
import { NewSubscriptionTab } from "../pages/membership/new-subscriptin";
import { SubscriptionTab } from "../pages/membership/subscription-tab";
import { AccountInfo, AddCard, AddCards, AppMemebership, CreateCard, CreateEvents, EventDetails, EventGallery, Events, History, IDCards, Invitation, MemberShip, Members, MemeberShipAndSubscrition, MyCard, MyCards, OrganizationDetails, OrganizationDetails2, PendingCards, PersonalData, Security, TicketDetails, UpcomingEvents, Verify } from "../pages";
import SideBar from "./side-bar";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Account Type" component={AccountType} />
        <Stack.Screen name="Individual Signup" component={IndividualSignUp} />
        <Stack.Screen
          name="Organization Signup"
          component={OrganizationSignUp}
        />
        <Stack.Screen name="Reset Password" component={ResetPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="New Password" component={NewPassword} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="Tabs" component={SideBar} />
        {/* <Stack.Screen name="Side bar" component={SideBar} /> */}
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="ID Card" component={IDCards} />
        <Stack.Screen name="Verify" component={Verify} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name='Create Event' component={CreateEvents} />
        <Stack.Screen name="Event Gallery" component={EventGallery} />
        <Stack.Screen name="Upcoming Event" component={UpcomingEvents} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name='Event Details' component={EventDetails} />
        <Stack.Screen name="Invitation" component={Invitation} />
        <Stack.Screen name="History" component={History}/>
        <Stack.Screen name="Membership" component={AppMemebership} />
      </Stack.Group>


      <Stack.Group>
        <Stack.Screen name='MembersTab' component={MembersTab} />
        <Stack.Screen name='SubscriptionTab' component={SubscriptionTab} />
        <Stack.Screen name='AddSubscriptionTab' component={AddSubscriptionTab} />
        <Stack.Screen name='NewSubscriptionTab' component={NewSubscriptionTab} />
      </Stack.Group>


      <Stack.Group>
        <Stack.Screen name="Personal Data" component={PersonalData} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="Account Info" component={AccountInfo} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="Membership and subscription" component={MemeberShipAndSubscrition} />
        <Stack.Screen name="Add Cards" component={AddCards} />
        <Stack.Screen name="JoinOrganization" component={JoinOrganization} />
        <Stack.Screen name="Create Card" component={CreateCard} />
        <Stack.Screen name="My Cards" component={MyCards} />
        <Stack.Screen name="Card Request" component={CardRequest} />
        <Stack.Screen name="Member History" component={MemberHistory} />
        <Stack.Screen name='Organization details' component={OrganizationDetails} />
        <Stack.Screen name='Organization details 2' component={OrganizationDetails2} />
        <Stack.Screen name="Pending Cards" component={PendingCards} />
        <Stack.Screen name="Ticket Details" component={TicketDetails} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="FAQ" component={FaqScreen} />
        <Stack.Screen name="GetHelp" component={GetHelp} />
        <Stack.Screen name="Approved Members" component={ApprovedMembersScreen} />
      </Stack.Group>

    </Stack.Navigator>
  );
};
