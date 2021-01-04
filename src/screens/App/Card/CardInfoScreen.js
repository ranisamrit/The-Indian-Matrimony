import React from 'react';
import { appStyles, ASPECT_RATIO, fontStyle, SCREEN_WIDTH, shadow } from "../../../themes/styles";
import {
    Animated,
    Platform,
    Text,
    TouchableWithoutFeedback,
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { Divider } from 'react-native-paper';
import { Card, Icon } from 'native-base';
import { BACKGROUNDCOLOR, BLACK, WHITE } from "../../../themes/colors";
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';



const IMAGE_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === "ios" ? 64 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = "rgba(85,186,255, 1)";
const FADED_THEME_COLOR = "rgba(85,186,255, 0.8)";

class CardInfoScreen extends React.Component {
    nScroll = new Animated.Value(0);
    scroll = new Animated.Value(0);
    textColor = this.scroll.interpolate({
        inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
        outputRange: [THEME_COLOR, FADED_THEME_COLOR, "white"],
        extrapolate: "clamp"
    });
    imgScale = this.nScroll.interpolate({
        inputRange: [-25, 0],
        outputRange: [1.1, 1],
        extrapolateRight: "clamp"
    });

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
        this.nScroll.addListener(Animated.event([{ value: this.scroll }], { useNativeDriver: false }));
    }

    onTapLeftPress = () => {
        const { currentIndex } = this.state;
        const { images } = this.props.navigation.state.params.item;
        if (currentIndex < images.length - 1) {
            let newIndex = currentIndex + 1;
            this.setState({ currentIndex: newIndex });
        }
    };

    onTapRightPress = () => {
        const { currentIndex } = this.state;
        if (currentIndex !== 0) {
            let newIndex = currentIndex - 1;
            this.setState({ currentIndex: newIndex });
        }
    };

    renderBackground = () => {
        const { images } = this.props.navigation.state.params.item;
        const { currentIndex } = this.state;
        const width = (SCREEN_WIDTH - 20 - (4 * images.length)) / images.length;
        return (
            <View style={styles.imageView}>
                <Image style={styles.imageView} source={{ uri: images[currentIndex].image }} />
                <View style={styles.imageIndicatorView}>
                    {
                        images.length > 1 && images.map((item, index) => {
                            return (<View key={index.toString()} style={[styles.indicatorView, {
                                backgroundColor: currentIndex === index ? '#FFFFFF' : '#00000070',
                                width: width
                            }]} />)
                        })
                    }
                </View>
                <View style={styles.tapView}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableWithoutFeedback onPress={() => this.onTapRightPress()}>
                            <View style={{ flex: 2 }} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.onTapLeftPress()}>
                            <View style={{ flex: 2 }} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        )
    };

    render() {
        const { currentIndex } = this.state;
        const { username, age, education, distance, images } = this.props.navigation.state.params.item;
        return (
            <View style={appStyles.container}>
                <Animated.ScrollView
                    scrollEventThrottle={5}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
                    style={{ zIndex: 0 }}>
                    <Animated.View
                        style={{ transform: [{ translateY: Animated.multiply(this.nScroll, 0.65) }, { scale: this.imgScale }] }}>
                        {this.renderBackground()}
                    </Animated.View>
                    <View style={styles.foregroundView}>
                        <View style={styles.userInfoView}>
                            <View style={styles.nameView}>
                                <Text style={styles.textName}>{username},</Text>
                                <Text style={styles.textAge}>{age}</Text>
                            </View>
                            <View style={styles.textView}>
                                <Image resizeMode={'contain'} style={styles.smallIcon}
                                    source={require('../../../assets/education_black.png')} />
                                <Text style={styles.textInfo}>{education}</Text>
                            </View>
                            <View style={styles.textView}>
                                <Image resizeMode={'contain'} style={styles.smallIcon}
                                    source={require('../../../assets/location_black.png')} />
                                <Text style={styles.textInfo}>{distance}</Text>
                            </View>
                        </View>





                        <View style={styles.textBioView}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}>About Rani S</Text>
                            <Card>
                                <Card >
                                    <Text style={styles.textBio}>
                                        {'Hi I am Rani Ib am from Nagpur my family is Nuclear...Hi I am Rani Ib am from Nagpur my family is Nuclear...'}</Text>
                                </Card>
                            </Card>
                        </View>

                        <View style={{ paddingBottom: 10 }}>

                            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}>Basic Details</Text>
                            <Card style={styles.maincard}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 120,
                                            height: 35,
                                            textAlign: 'center',
                                            borderRadius: 30,
                                            borderWidth: 1,
                                            borderColor: '#62D248',
                                            top: 10,
                                            left: 30

                                        }}>
                                        <Text style={{ color: "#62D248" }}>Created by Self</Text>

                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 180,
                                            height: 35,
                                            textAlign: 'center',
                                            borderRadius: 30,
                                            borderWidth: 1,
                                            borderColor: '#62D248',
                                            top: 10,
                                            left: 40

                                        }}>
                                        <Text style={{ color: "#62D248" }}>Profile ID-SH37006765</Text>

                                    </View>



                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 100,
                                            height: 35,
                                            textAlign: 'center',
                                            borderRadius: 30,
                                            borderWidth: 1,
                                            borderColor: '#62D248',
                                            top: 15,
                                            left: 30

                                        }}>
                                        <Text style={{ color: "#62D248" }}>25 yrs old</Text>

                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 100,
                                            height: 35,
                                            textAlign: 'center',
                                            borderRadius: 30,
                                            borderWidth: 1,
                                            borderColor: '#62D248',
                                            top: 15,
                                            left: 40

                                        }}>
                                        <Text style={{ color: "#62D248" }}>Hight - 5'3"</Text>

                                    </View>



                                </View>

                                <Image style={{ width: 30, height: 30, top: 30, marginLeft: 40 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png', }} />
                                <Text style={styles.textBio5}>{'Birth Date'}</Text>
                                <Text style={styles.textBio6}>{'Born On **/**/****'}</Text>

                                <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                                    <Image style={{ width: 20, height: 20, bottom: 100, marginLeft: 200 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61457.png', }} />
                                </TouchableWithoutFeedback>

                                <View style={{ bottom: 5, left: 20 }}>
                                    <Image style={{ width: 30, height: 30, bottom: 75, marginLeft: 20 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo57VS7U3vDIVSz8kIP-_4u4YW-gIvj4G6Sg&usqp=CAU', }} />
                                    <Text style={styles.textBio7}>{'Marital Staus'}</Text>
                                    <Text style={styles.textBio8}>{'Never Married'}</Text>

                                </View>
                                <View style={{ bottom: 60, left: 20 }}>
                                    <Image style={{ width: 30, height: 30, bottom: 75, marginLeft: 20 }} source={{
                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyHYjMyjCsvEN3N2qlJS0s32HdmJi2x0M6A&usqp=CAU',
                                    }} />
                                    < Text style={styles.textBio9} > {'Live in '}</Text>
                                    <Text style={styles.textBio10}>{'Live in Wardha.Maharashtra,India'}</Text>

                                </View>
                                <View style={{ bottom: 120, left: 20 }}>
                                    <Image style={{ width: 30, height: 30, bottom: 75, marginLeft: 20 }} source={{
                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwycfCuU4R_zyBd-uUiZcGJgAB9PKQsgUbA&usqp=CAU',
                                    }} />
                                    < Text style={styles.textBio11} > {'Religion & Mother Tongue '}</Text>
                                    <Text style={styles.textBio12}>{'Hindu,Marathi'}</Text>

                                </View>
                                <View style={{ bottom: 170, left: 20 }}>
                                    <Image style={{ width: 30, height: 30, bottom: 75, marginLeft: 20 }} source={{
                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaUNcWIg3JtbAOQT_pFHlklr7jQlMaaCVBg&usqp=CAU',
                                    }} />
                                    < Text style={styles.textBio13} > {'Community'}</Text>
                                    <Text style={styles.textBio14}>{'Teli'}</Text>

                                </View>
                                <View style={{ bottom: 265 }}>
                                    <View style={{ top: 20, left: 20 }}>
                                        <Image style={{ width: 30, height: 30, bottom: 60, marginLeft: 20 }} source={{
                                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ6MrmAJbARjDKThdn0Y2BUHbqRn3AIB6uQ&usqp=CAU',
                                        }} />
                                        < Text style={styles.textBio15} > {'Diet Prferences'}</Text>
                                        <Text style={styles.textBio16}>{'Vegetarian'}</Text>

                                    </View>

                                    <Divider style={{ backgroundColor: 'gray', height: 1, bottom: 85, marginRight: 40, marginLeft: 40, }} />

                                    < Text style={styles.textBio17} > {'To Unlock Birth Date'}</Text>

                                    <View style={styles.MainContainer}>
                                        <TouchableOpacity
                                            style={styles.SubmitButtonStyle}
                                            activeOpacity={.10}
                                        // onPress={() =>
                                        //     // this.callApi()
                                        //     navigation.navigate('Lorryidactive')
                                        // }
                                        >

                                            <Text style={styles.TextStyle}>Go Primium Now</Text>

                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <Card style={styles.contact}>

                                    <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>{'Contact Details'}</Text>
                                    <Image
                                        style={{ width: 30, height: 30, top: 40, marginLeft: 20 }} source={{
                                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd8l2yfEtzVbvqbkZkR9Invo7QY1tdvckbw&usqp=CAU',
                                        }} />
                                    <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Contact No.'}</Text>
                                    <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'+91 7775*******'}</Text>
                                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                                        <Image style={{ width: 20, height: 20, bottom: 10, marginLeft: 170 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61457.png', }} />
                                    </TouchableWithoutFeedback>

                                    <View style={{ bottom: 30 }}>
                                        <Image
                                            style={{ width: 30, height: 30, top: 40, marginLeft: 20 }} source={{
                                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4fnpNNntpKUgom0-lB7s5TDs61_ys7Lk2NA&usqp=CAU',
                                            }} />
                                        <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Email ID'}</Text>
                                        <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'*************@gmail.com'}</Text>

                                        <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                                            <Image style={{ width: 20, height: 20, bottom: 10, marginLeft: 220 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61457.png', }} />
                                        </TouchableWithoutFeedback>

                                        <Divider style={{ backgroundColor: 'gray', height: 1, top: 60, marginRight: 40, marginLeft: 40, }} />
                                        <View style={{ top: 160 }}>
                                            < Text style={styles.textBio17} > {'To Unlock Contact No.& Email ID'}</Text>
                                            <View style={styles.MainContainer}>
                                                <TouchableOpacity
                                                    style={styles.SubmitButtonStyle}
                                                    activeOpacity={.10}
                                                // onPress={() =>
                                                //     // this.callApi()
                                                //     navigation.navigate('Lorryidactive')
                                                // }
                                                >

                                                    <Text style={styles.TextStyle}>Go Primium Now</Text>

                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>

                                </Card>
                                <Card style={styles.contact1}>

                                    <Text style={{ fontSize: 18, fontWeight: "bold", justifyContent: "flex-start" }}>{'Career & Education'}</Text>
                                    <Image
                                        style={{ width: 30, height: 30, top: 40, marginLeft: 20 }} source={{
                                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFopxV9iDjjXtmJwH_zsaOECmneMnOxXESEg&usqp=CAU',
                                        }} />
                                    <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Profession'}</Text>
                                    <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Fashion Designer'}</Text>

                                    <View style={{ height: 5 }}>
                                        <Image
                                            style={{ width: 30, height: 30, top: 40, marginLeft: 20 }} source={{
                                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSv2rJTN1d3RMpoKWuBBP5htKkIFQZO6gZyg&usqp=CAU',
                                            }} />
                                        <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Company Name'}</Text>
                                        <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'*****************'}</Text>
                                        <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                                            <Image style={{ width: 20, height: 20, bottom: 15, marginLeft: 170 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61457.png', }} />
                                        </TouchableWithoutFeedback>
                                        <View style={{ bottom: 20 }}>
                                            <Image
                                                style={{ width: 30, height: 30, top: 40, marginLeft: 20 }} source={{
                                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFY6gWGWYbQsc0OdvliQf_fNPdXetxXjvhg&usqp=CAU',
                                                }} />
                                            <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Annual Income'}</Text>
                                            <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Earns Upto 1NR 1 Lakh annually'}</Text>
                                            <View style={{ bottom: 10 }}>
                                                <Image
                                                    style={{ width: 30, height: 30, top: 40, marginLeft: 20 }} source={{
                                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNJGeIYS71h2im4fKdZnDb7qBvonMwtXiMQ&usqp=CAU',
                                                    }} />
                                                <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Highest Qualification'}</Text>
                                                <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'B.Sc - Bachelor of Science'}</Text>

                                                <View style={{ bottom: 10 }}>
                                                    <Image
                                                        style={{ width: 30, height: 30, top: 40, marginLeft: 20 }} source={{
                                                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5VCZYgX5xmQQMYPjXjEdwSR3iZAoGGbJZQ&usqp=CAU',
                                                        }} />
                                                    <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Education Field'}</Text>
                                                    <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'Science'}</Text>

                                                    <View style={{ bottom: 10 }}>
                                                        <Image
                                                            style={{ width: 30, height: 30, top: 40, marginLeft: 20 }} source={{
                                                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYuKdaIaEY1QREIQvRcdFl2zEG-gCofQA9w&usqp=CAU',
                                                            }} />
                                                        <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'College Name'}</Text>
                                                        <Text style={{ left: 80, fontSize: 12, top: 10 }}>{'*****************'}</Text>
                                                        <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                                                            <Image style={{ width: 20, height: 20, bottom: 15, marginLeft: 170 }} source={{ uri: 'https://image.flaticon.com/icons/png/512/61/61457.png', }} />
                                                        </TouchableWithoutFeedback>

                                                        <Divider style={{ backgroundColor: 'gray', height: 1, top: 50, marginRight: 40, marginLeft: 40, }} />
                                                        <View style={{ top: 160 }}>
                                                            < Text style={styles.textBio17} > {'To Unlock Contact No.& Email ID'}</Text>
                                                            <View style={styles.MainContainer}>
                                                                <TouchableOpacity
                                                                    style={styles.SubmitButtonStyle}
                                                                    activeOpacity={.10}
                                                                // onPress={() =>
                                                                //     // this.callApi()
                                                                //     navigation.navigate('Lorryidactive')
                                                                // }
                                                                >

                                                                    <Text style={styles.TextStyle}>Go Primium Now</Text>

                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </Card>
                                <Card style={styles.contact2}>

                                    <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>{'You & Her'}</Text>
                                    <View style={{ height: "70%", top: 200 }}>

                                        <Image style={styles.imageView1} source={{ uri: images[currentIndex].image }} />
                                        <Image style={styles.imageView2} source={{ uri: images[currentIndex].image }} />
                                    </View>
                                    <View style={{ height: 20, bottom: 330 }}>
                                        <Text style={{ fontSize: 14, alignSelf: "center" }}>{'Your Match is 9/9 for her preferences'}</Text>

                                    </View>
                                    <View style={{ bottom: 320 }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center', justifyContent: "flex-start"
                                        }}>
                                            <View
                                                style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: 80,
                                                    height: 35,
                                                    textAlign: 'center',
                                                    borderRadius: 30,
                                                    borderWidth: 1,
                                                    borderColor: '#602F56',
                                                    top: 10,
                                                    marginHorizontal: 10

                                                }}>
                                                <Text>Age</Text>

                                            </View>
                                            <View
                                                style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: 80,
                                                    height: 35,
                                                    textAlign: 'center',
                                                    borderRadius: 30,
                                                    borderWidth: 1,
                                                    borderColor: '#602F56',
                                                    top: 10,
                                                    marginHorizontal: 1

                                                }}>
                                                <Text>Hight</Text>

                                            </View>



                                        </View>
                                        <View style={{
                                            flexDirection: 'column', alignItems: 'center',
                                            justifyContent: "flex-start"
                                        }}>
                                            <View
                                                style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: 150,
                                                    height: 35,
                                                    textAlign: 'center',
                                                    borderRadius: 30,
                                                    borderWidth: 1,
                                                    borderColor: '#602F56',
                                                    top: 20,
                                                    // marginHorizontal: 10
                                                    right: 75
                                                }}>
                                                <Text style={{ alignItems: 'center', }}>Marital Status</Text>

                                            </View>
                                            <View style={{
                                                flexDirection: 'column', alignItems: 'center',
                                                justifyContent: "flex-start"
                                            }}>
                                                <View
                                                    style={{
                                                        justifyContent: 'center',

                                                        alignItems: 'center',
                                                        width: 180,
                                                        height: 35,
                                                        textAlign: 'center',
                                                        borderRadius: 30,
                                                        borderWidth: 1,
                                                        borderColor: '#602F56',
                                                        // bottom: 200,
                                                        right: 60,
                                                        top: 30,
                                                    }}>
                                                    <Text style={{ alignItems: 'center', }}>Religion / Community</Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                flexDirection: 'column', alignItems: 'center',
                                                justifyContent: "flex-start"
                                            }}></View>
                                            <View
                                                style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: 150,
                                                    height: 35,
                                                    textAlign: 'center',
                                                    borderRadius: 30,
                                                    borderWidth: 1,
                                                    borderColor: '#602F56',
                                                    // bottom: 190,
                                                    right: 75,
                                                    top: 40,

                                                }}>
                                                <Text style={{ alignItems: 'center', }}>Mother Tongue</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View
                                                    style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: 150,
                                                        height: 35,
                                                        textAlign: 'center',
                                                        borderRadius: 30,
                                                        borderWidth: 1,
                                                        borderColor: '#602F56',
                                                        top: 5,
                                                        left: 90
                                                    }}>
                                                    <Text style={{ alignItems: 'center', }}>Country Living in</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "flex-start" }}>
                                                <View
                                                    style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: 150,
                                                        height: 35,
                                                        textAlign: 'center',
                                                        borderRadius: 30,
                                                        borderWidth: 1,
                                                        borderColor: '#602F56',
                                                        top: 20,
                                                        // marginHorizontal: 10
                                                        right: 75
                                                    }}>
                                                    <Text style={{ alignItems: 'center', }}>State Living in</Text>
                                                </View>
                                                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "flex-start" }}>
                                                    <View
                                                        style={{
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            width: 150,
                                                            height: 35,
                                                            textAlign: 'center',
                                                            borderRadius: 30,
                                                            borderWidth: 1,
                                                            borderColor: '#602F56',
                                                            top: 30,
                                                            // marginHorizontal: 10
                                                            right: 75
                                                        }}>
                                                        <Text style={{ alignItems: 'center', }}>Annual Income</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View
                                                    style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: 100,
                                                        height: 35,
                                                        textAlign: 'center',
                                                        borderRadius: 30,
                                                        borderWidth: 1,
                                                        borderColor: '#602F56',
                                                        bottom: 50,
                                                        left: 65
                                                    }}>
                                                    <Text style={{ alignItems: 'center', }}>Dite</Text>
                                                </View>

                                            </View>
                                            <View style={{ height: 20, top: 20 }}>
                                                <Text style={{ fontSize: 18, justifyContent: "flex-start" }}>{'Common between the both of you'}</Text>

                                                <Image
                                                    style={{ width: 30, height: 30, top: 5, justifyContent: "flex-start" }} source={{
                                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcEfPtQMPLqHup0KUsQRS6qXP5xJ2iSAz4w&usqp=CAU',
                                                    }} />
                                                <Text style={{ fontSize: 12, left: 55, bottom: 20 }}>{'She is a vegetarian too'}</Text>
                                                <Image resizeMode="contain"
                                                    style={{ width: 30, height: 30, top: 5, justifyContent: "flex-start" }} source={{
                                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sjV4Ajkp76qYz_DGNpvIYTMoLZmsGvlluA&usqp=CAU',
                                                    }} />
                                                <Text style={{ fontSize: 12, left: 55, bottom: 20 }}>{'You Both are Gemini'}</Text>
                                                <Image resizeMode="contain"
                                                    style={{ width: 30, height: 30, top: 5, justifyContent: "flex-start" }} source={{
                                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdQ7gnmEZ8VJkTjCytdAhK1S5pgJomCVVRg&usqp=CAU',
                                                    }} />
                                                <Text style={{ fontSize: 12, left: 55, bottom: 20 }}>{'She is from the Marathi community as well'}</Text>
                                            </View>
                                        </View>

                                    </View>



                                </Card>
                            </Card>
                        </View>




                    </View>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
                        <Image resizeMode={'contain'} style={styles.backButtonView}
                            source={require('../../../assets/down_arrow.png')} />
                    </TouchableWithoutFeedback>
                </Animated.ScrollView>
                <SafeAreaView style={styles.bottomView}>
                    <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.rewindLogo} />
                    </TouchableWithoutFeedback>
                    {/* <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.likeLogo}
                            source={require('../../../assets/nope.png')} />
                    </TouchableWithoutFeedback> */}

                    <View style={{ alignSelf: "center", marginRight: 50 }}>
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle1}
                            activeOpacity={.10}
                        //   onPress={() =>

                        // this.props.navigation.navigate('Customerlogin')
                        // navigation.navigate('Customerlogin')}


                        >

                            <Text style={styles.TextStyle1}>CONNECTED</Text>

                        </TouchableOpacity>
                    </View>
                    {/* <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.rewindLogo}
                            source={require('../../../assets/super_like.png')} />
                    </TouchableWithoutFeedback> */}
                    {/* <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.likeLogo}
                            source={require('../../../assets/like.png')} />
                    </TouchableWithoutFeedback> */}
                    {/* <TouchableWithoutFeedback>
                        <Image resizeMode={'contain'} style={styles.rewindLogo} />
                    </TouchableWithoutFeedback> */}
                </SafeAreaView>
            </View>
        );
    }
}

export default CardInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUNDCOLOR
    },
    imageView: {
        width: SCREEN_WIDTH,
        height: ASPECT_RATIO(450)
    },
    imageView1: {
        width: 120,
        height: ASPECT_RATIO(150),
        bottom: 170,
        borderRadius: 100,
        marginHorizontal: 30
    },
    imageView2: {
        width: 120,
        height: ASPECT_RATIO(150),
        bottom: 300,
        borderRadius: 100,
        marginHorizontal: 180
    },
    imageIndicatorView: {
        position: 'absolute',
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    },
    indicatorView: {
        height: 4,
        borderRadius: 2,
        marginLeft: 2,
        marginRight: 2
    },
    tapView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent'
    },
    foregroundView: {
        paddingBottom: ASPECT_RATIO(450),
        backgroundColor: BACKGROUNDCOLOR
    },
    userInfoView: {
        paddingLeft: 10,
        paddingRight: 10
    },
    nameView: {
        flexDirection: 'row',
        marginTop: ASPECT_RATIO(10),
        alignItems: 'center',
        marginBottom: ASPECT_RATIO(10),
    },
    textName: {
        fontSize: ASPECT_RATIO(35),
        fontWeight: '600'
    },
    textAge: {
        fontSize: ASPECT_RATIO(25),
        fontWeight: '200',
        marginLeft: ASPECT_RATIO(8)
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: ASPECT_RATIO(10),
    },
    textBioView: {
        // marginTop: ASPECT_RATIO(10),
        borderTopWidth: 1,
        borderColor: 'lightgray',
        paddingLeft: 5,
        paddingRight: 10,
        // paddingBottom: ASPECT_RATIO(15),
        // paddingTop: ASPECT_RATIO(15),

    },
    textBio: {
        marginLeft: 10,
        ...fontStyle.smallGrayText,
        alignSelf: "center"
    },
    textBio1: {
        // marginLeft: 10,
        // ...fontStyle.smallGrayText,
        fontSize: 12,
        alignSelf: "center",
        padding: 10
    },
    textBio2: {
        // marginLeft: 15,
        // ...fontStyle.smallGrayText,
        fontSize: 12,
        alignSelf: "center",
        padding: 10
    },
    textBio3: {
        // marginLeft: 15,
        // ...fontStyle.smallGrayText,
        fontSize: 12,
        alignSelf: "center",
        padding: 10
    },
    textBio4: {
        // marginLeft: 15,
        // ...fontStyle.smallGrayText,
        fontSize: 12,
        alignSelf: "center",
        padding: 10
    },

    textShare: {
        ...fontStyle.largeBoldRedText
    },
    textThink: {
        ...fontStyle.smallRedText,
    },
    textReport: {
        ...fontStyle.mediumBoldGrayText
    },
    backButtonView: {
        width: ASPECT_RATIO(70),
        height: ASPECT_RATIO(70),
        borderRadius: ASPECT_RATIO(70) / 2,
        position: 'absolute',
        right: 10,
        top: ASPECT_RATIO(450) - ASPECT_RATIO(70) / 2,
        ...shadow(5)
    },
    textInfo: {
        marginLeft: 5,
        fontSize: ASPECT_RATIO(18),
        color: BLACK
    },
    smallIcon: {
        width: 20,
        height: 20
    },
    rewindLogo: {
        width: 44,
        height: 44
    },
    likeLogo: {
        width: 65,
        height: 65
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: SCREEN_WIDTH,
        paddingRight: 8,
        paddingLeft: 8,
        height: ASPECT_RATIO(100),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: ASPECT_RATIO(10),
        marginTop: ASPECT_RATIO(10),
        backgroundColor: 'transparent'
    },

    card: {
        flex: 1,
        borderRadius: 30,
        width: "30%",
        height: "5%",
        borderColor: '#7fff00',
        borderWidth: 1,
        marginLeft: 30,

    },
    card1: {
        flex: 1,
        borderRadius: 30,
        width: "45%",
        height: "5%",
        borderColor: '#7fff00',
        borderWidth: 1,
        marginLeft: 150,

        bottom: 58
    },
    card2: {
        flex: 1,
        borderRadius: 30,
        width: "30%",
        height: "5%",
        borderColor: '#7fff00',
        borderWidth: 1,
        marginLeft: 30,

        bottom: 52
    },
    card3: {
        flex: 1,
        borderRadius: 30,
        width: "30%",
        height: "5%",
        borderColor: '#7fff00',
        borderWidth: 1,
        marginLeft: 150,

        bottom: 110
    },
    textBio5: {
        flex: 1,
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        right: 53,
        bottom: 10
    },
    textBio6: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        right: 30,
        bottom: 70,

    },
    textBio7: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 125,
        bottom: 120
    },
    textBio8: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 120,
        bottom: 140
    },
    textBio9: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 160,
        bottom: 120
    },
    textBio10: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 17,
        bottom: 140
    },
    textBio11: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 60,
        bottom: 120
    },
    textBio12: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 120,
        bottom: 140
    },
    textBio13: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 130,
        bottom: 120
    },
    textBio14: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 170,
        bottom: 140
    },
    textBio15: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 110,
        bottom: 100
    },
    textBio16: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        marginRight: 132,
        bottom: 120
    },
    textBio17: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10,
        // marginRight: 132,
        bottom: 90
    },
    SubmitButtonStyle: {
        width: "50%",
        height: 35,
        marginTop: -90,

        alignSelf: "center",
        paddingTop: 5,
        // paddingBottom:20,
        // marginLeft: 220,
        // marginRight: 20,

        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#62D248'
    },

    TextStyle: {
        color: '#62D248',
        textAlign: 'center',
        // fontWeight:"bold",
        fontSize: 14,
    },
    contact: {
        height: "14%",
        bottom: 320,
        padding: 16,
        borderRadius: 10,
    },
    contact1: {
        height: "23%",
        bottom: 320,
        borderRadius: 10,
        padding: 16,
    },
    contact2: {
        height: "30%",
        bottom: 320,
        borderRadius: 10,
        padding: 16,
        marginBottom: 10
    },
    SubmitButtonStyle1: {
        width: 200,
        height: 50,
        alignSelf: "center",

        // paddingTop: 10,
        // paddingBottom: 15,
        // marginLeft: 100,
        // marginRight: 100,
        // backgroundColor: '#ffe4e1',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#c71585',
        // bottom: 60
    },

    TextStyle1: {
        color: '#c71585',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 14,
        padding: 10,


    },
});