'use strict';

import {

    StatusBar,
    Alert,
    Platform,
    TouchableWithoutFeedback,
    TouchableNativeFeedback
} from "react-native";
import
AsyncStorage
    from '@react-native-community/async-storage'
import { LOGIN } from "../actions/types";
import { getStore } from '../../App';
import * as messages from "./messages";
import { SCREEN_HEIGHT } from "../themes/styles";
import { NavigationActions } from 'react-navigation';

export const { OS } = Platform;
export const TouchableFeedback = OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback;

export const regex = {

    isEmpty: (val) => {
        switch (val) {
            case "":
            case 0:
            case "0":
            case null:
            case false:
            case typeof this === "undefined":
                return true;
            default:
                return false;
        }
    },

    validateEmail: (val) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
    },

    validatePassword: (val) => {
        return /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*_]\S{5,16}$/.test(val);
    },

    matchPassword: (val1, val2) => {

        if (val1 !== val2) {
            return false
        } else {
            return true
        }

    },

    checkPicture: (val) => {
        if (!this.isEmpty(val)) {
            return 'https://eva-vautier.com/wp-content/plugins/Products_Viewer/assets/img/default-avatar.png'
        } else {
            let pattern = /^((http|https|ftp):\/\/)/;
            if (!pattern.test(val)) {
                return 'https://eva-vautier.com/wp-content/plugins/Products_Viewer/assets/img/default-avatar.png'
            } else {
                return val;
            }
        }
    },

    checkNotchDevice: () => {
        if (SCREEN_HEIGHT > 811)
            return true;

        return false
    },

    sortData: (property) => {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    },

    isInt: (n) => {
        return Number(n) === n && n % 1 === 0;
    },

    isFloat: (n) => {
        return Number(n) === n && n % 1 !== 0;
    },

    changeStatusStyle: (type) => {
        StatusBar.setBarStyle(type, true);
    },

    setDashboard: (authToken, navigation) => {
        return new Promise(async (resolve, reject) => {
            await AsyncStorage.setItem('userToken', JSON.stringify(authToken));
            // getStore.dispatch({type: LOGIN, payload: authToken});
            navigation.navigate('App');
            resolve(true)
        })
    },

    logout: async (navigation) => {
        Alert.alert(
            'Logout',
            messages.logout,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => { regex.clearData(navigation) } },
            ],
            { cancelable: false }
        );
    },

    clearData: async (navigation) => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
        // getStore.dispatch({type: LOGIN});
    },
};
