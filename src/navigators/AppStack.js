import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../screens/App/HomeScreen";
import React from 'react';
import SettingScreen from "../screens/App/Settings/SettingScreen";
import EditProfileScreen from "../screens/App/EditProfile/EditProfileScreen";
import BasicInfoScreen from '../screens/App/EditProfile/BasicInfoScreen';
import ReligiousScreen from '../screens/App/EditProfile/ReligiousScreen';

import MessageScreen from "../screens/App/Chat/MessageScreen";
import EmailScreen from "../screens/App/Settings/EmailScreen";
import PhoneNumberScreen from "../screens/App/Settings/PhoneNumberScreen";
import ShowMeScreen from "../screens/App/Settings/ShowMeScreen";
import NotificationScreen from "../screens/App/Settings/NotificationScreen";
import TeamScreen from "../screens/App/Settings/TeamScreen";
import UniversityScreen from "../screens/App/EditProfile/UniversityScreen";
import GenderScreen from "../screens/App/EditProfile/GenderScreen";
import AddMediaScreen from "../screens/App/EditProfile/AddMediaScreen";
import CardInfoScreen from "../screens/App/Card/CardInfoScreen";
import { RED } from "../themes/colors";

let HomeStack = createStackNavigator({
    Home: HomeScreen,

    // Card Info
    // CardInfo: CardInfoScreen,

    // Setting
    Settings: SettingScreen,
    PhoneNumber: PhoneNumberScreen,
    ShowMe: ShowMeScreen,
    Email: EmailScreen,
    PushNotification: NotificationScreen,
    TeamCareMatch: TeamScreen,

    // Edit
    EditProfile: EditProfileScreen,
    BasicInfo: BasicInfoScreen,
    Religious: ReligiousScreen,

    AddUniversity: UniversityScreen,
    Gender: GenderScreen,
    AddMedia: AddMediaScreen,

    Chat: MessageScreen,
}, {
    defaultNavigationOptions: {
        header: null
    }
});

let AppStack = createStackNavigator({
    Home: HomeStack,
    CardInfo: { screen: CardInfoScreen },
}, {
    mode: 'modal',
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        header: null
    },
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0,
        },
    }),
});


export default AppStack;