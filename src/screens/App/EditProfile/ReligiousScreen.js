import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    SafeAreaView,
    Switch,
    TouchableWithoutFeedback,
    StyleSheet,
    TouchableOpacity,
    Image,
    Picker,
    Button, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from "../../../components/HeaderComponent";
import { BACKGROUNDCOLOR, BLACK, RED, WHITE } from "../../../themes/colors";
import { RadioButton, } from 'react-native-paper';


const ReligiousScreen = (props) => {
    const [text, setText] = useState('');
    const [selectedValue, setSelectedValue] = useState("Self");
    const [value, setValue] = React.useState('Kgs');
    return (

        <ScrollView>

            <HeaderComponent
                title={'My  Profile'}
                leftPress={() => props.navigation.pop()} />

            <SafeAreaView style={styles.mainBody}>


            </SafeAreaView>
        </ScrollView >

    );
}


export default ReligiousScreen;

export const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: "#ECECEC",


    },


});