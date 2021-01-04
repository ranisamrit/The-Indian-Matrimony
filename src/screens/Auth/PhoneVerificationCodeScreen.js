import React, { Component, createRef } from 'react';
import { Alert, Animated, Image, Text, View, StyleSheet, Platform } from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';
import { appStyles, ASPECT_RATIO, fontStyle, shadow } from "../../themes/styles";
import HeaderComponent from "../../components/HeaderComponent";
import { Button } from "native-base";
import { ICONBACKGROUNDCOLOR } from "../../themes/colors";

const codeLength = 4;
const CELL_SIZE = ASPECT_RATIO(70);
const CELL_BORDER_RADIUS = ASPECT_RATIO(8);
const DEFAULT_CELL_BG_COLOR = '#fff';
const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
const ACTIVE_CELL_BG_COLOR = '#f7fafe';

class PhoneVerificationCodeScreen extends Component {
    _animationsColor = [...new Array(codeLength)].map(
        () => new Animated.Value(0),
    );
    _animationsScale = [...new Array(codeLength)].map(
        () => new Animated.Value(1),
    );

    animateCell({ hasValue, index, isFocused }) {
        Animated.parallel([
            Animated.timing(this._animationsColor[index], {
                toValue: isFocused ? 1 : 0,
                duration: 250,
            }),
            Animated.spring(this._animationsScale[index], {
                toValue: hasValue ? 0 : 1,
                duration: hasValue ? 300 : 250,
            }),
        ]).start();
    }

    cellProps = ({ hasValue, index, isFocused }) => {
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? this._animationsScale[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                })
                : this._animationsColor[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                }),
            borderRadius: this._animationsScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: this._animationsScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        // Run animation on next event loop tik
        // Because we need first return new style prop and then animate this value
        setTimeout(() => {
            this.animateCell({ hasValue, index, isFocused });
        }, 0);

        return {
            style: [styles.input, animatedCellStyle],
        };
    };

    onFinishCheckingCode = code => {
        if (code !== '1234') {
            return Alert.alert(
                'Confirmation Code',
                'Code not match! Try 1234',
                [{ text: 'OK' }],
                { cancelable: false },
            );
        }

        this.props.navigation.navigate('Location');
    };

    onPress = () => {
        const { current } = this.field;
        this.onFinishCheckingCode(current.state.codeValue);
    };

    field = createRef();

    render() {
        const { navigation } = this.props;
        let data = navigation.state.params.data;
        return (
            <View style={appStyles.container}>
                <HeaderComponent transparent={true} leftPress={() => this.props.navigation.goBack()} />
                <View style={styles.mainView}>
                    <Text style={styles.textTitle}>My code is</Text>
                    <View style={styles.phoneView}>
                        <Text style={styles.textPhone}>{`+${data.callingCode} ${data.phone_number}`}</Text>
                        <Text style={styles.textResend}>RESEND</Text>
                    </View>
                </View>
                <CodeFiled
                    ref={this.field}
                    maskSymbol=" "
                    variant="clear"
                    codeLength={codeLength}
                    keyboardType="numeric"
                    cellProps={this.cellProps}
                    containerProps={{ style: styles.inputWrapStyle }}
                    onFulfill={this.onFinishCheckingCode}
                    CellComponent={Animated.Text}
                />
                <Button onPress={this.onPress} style={styles.button} full rounded>
                    <Text style={styles.textContinue}>CONTINUE</Text>
                </Button>
            </View>
        );
    }
}

export default PhoneVerificationCodeScreen;

const styles = StyleSheet.create({
    mainView: {
        marginLeft: 25,
        marginRight: 25,
    },
    textTitle: {
        marginTop: 25,
        ...fontStyle.extraLargeBoldBlackText
    },
    phoneView: {
        marginTop: 8,
        flexDirection: 'row',
    },
    textPhone: {
        ...fontStyle.largeBoldGrayText
    },
    textResend: {
        marginLeft: 15,
        ...fontStyle.largeBoldBlackText
    },
    button: {
        marginLeft: 25,
        marginRight: 25,
        marginBottom: ASPECT_RATIO(350),
        backgroundColor: ICONBACKGROUNDCOLOR,
        ...shadow()
    },
    textContinue: {
        ...fontStyle.mediumBoldGrayText
    },

    inputWrapStyle: {
        height: CELL_SIZE,
        marginTop: 30,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },

    input: {
        margin: 0,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: 55,
        ...Platform.select({
            web: {
                lineHeight: 65,
            },
        }),
        fontSize: 30,
        borderRadius: CELL_BORDER_RADIUS,
        color: '#3759b8',
        backgroundColor: '#fff',

        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        // Android
        elevation: 3,
    },
});