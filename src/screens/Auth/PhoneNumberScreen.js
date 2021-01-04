import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native'

import DeviceInfo from 'react-native-device-info'
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal'
import { appStyles, fontStyle, shadow } from "../../themes/styles";
import HeaderComponent from "../../components/HeaderComponent";
import { Input, Button } from 'native-base';
import { ICONBACKGROUNDCOLOR, LIGHT_GRAY } from "../../themes/colors";
import { regex } from "../../utils/regex";
import * as messages from "../../utils/messages";

class PhoneNumberScreen extends React.Component {
    constructor(props) {
        super(props);
        let userLocaleCountryCode = DeviceInfo.getDeviceCountry();
        const userCountryData = getAllCountries()
            .filter(country => country.cca2 === userLocaleCountryCode)
            .pop();
        let callingCode = null;
        let cca2 = userLocaleCountryCode;
        if (!cca2 || !userCountryData) {
            cca2 = 'US';
            callingCode = '1'
        } else {
            callingCode = userCountryData.callingCode
        }
        this.state = {
            cca2,
            callingCode,
            phone_number: ''
        }
    }

    onPress = () => {
        const { phone_number } = this.state;
        if (regex.isEmpty(phone_number))
            alert(messages.enterPhoneNumber);
        else if (phone_number.length < 6)
            alert(messages.enterValidPhoneNumber);
        else {
            this.props.navigation.navigate("LoginPhoneVerification", { data: this.state });
        }
    };

    render() {
        return (
            <View style={appStyles.container}>
                <HeaderComponent transparent={true} leftPress={() => this.props.navigation.goBack()} />
                <View style={{ marginLeft: 25, marginRight: 25 }}>
                    <Text style={styles.textTitle}>My number is</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={styles.countryCodeView}>
                            <CountryPicker
                                onChange={value => {
                                    this.setState({ cca2: value.cca2, callingCode: value.callingCode })
                                }}
                                styles={{ itemCountryName: { borderBottomWidth: 0 } }}
                                cca2={this.state.cca2}
                                hideAlphabetFilter={true}
                                showCallingCode={true}
                                closeable={true}
                                filterable={true}
                                filterPlaceholder={'Select country...'}
                                translation="eng">
                                <Text>{`+${this.state.callingCode}`}</Text>
                            </CountryPicker>
                        </View>
                        <View style={styles.textInput}>
                            <Input
                                value={this.state.phone_number}
                                placeholder="Phone Number"
                                keyboardType={'phone-pad'}
                                maxLength={15}
                                onChangeText={(phone_number) => this.setState({ phone_number })}
                            />
                        </View>
                    </View>
                    <View style={styles.emailView}>
                        <Text style={styles.textPhone}>Changed your phone number?</Text>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('LoginEmail')}>
                            <Text style={styles.textEmail}>LOG IN BY EMAIL</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <Button onPress={this.onPress} style={styles.button} full rounded>
                        <Text style={fontStyle.mediumBoldGrayText}>CONTINUE</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default PhoneNumberScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        marginTop: 25,
        ...fontStyle.extraLargeBoldBlackText
    },
    countryCodeView: {
        width: 80,
        height: 50,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: LIGHT_GRAY
    },
    textInput: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: LIGHT_GRAY
    },
    emailView: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around'
    },
    textPhone: {
        ...fontStyle.smallBoldGrayText
    },
    textEmail: {
        ...fontStyle.smallRedText,
        textDecorationLine: 'underline',
    },
    button: {
        marginTop: 35,
        backgroundColor: ICONBACKGROUNDCOLOR,
        ...shadow()
    }
});