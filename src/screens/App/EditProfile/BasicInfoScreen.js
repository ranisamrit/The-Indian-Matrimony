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


const BasicInfoScreen = (props) => {
    const [text, setText] = useState('');
    const [selectedValue, setSelectedValue] = useState("Self");
    const [value, setValue] = React.useState('Kgs');
    return (

        <ScrollView>

            <HeaderComponent
                title={'My  Profile'}
                leftPress={() => props.navigation.pop()} />

            <SafeAreaView style={styles.mainBody}>

                <View style={{ padding: 13 }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Basic Info</Text>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Profile create by</Text>
                        <Text style={{
                            color: "red", fontSize: 15,
                            fontWeight: "bold"
                        }}>*</Text>

                    </View>

                    <View style={{ borderColor: "red", borderWidth: 1, borderRadius: 5, height: 40 }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 40, width: 200, }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Self" value="Self" />
                            <Picker.Item label="Parent/Guardian" value="Parent/Guardian" />
                            <Picker.Item label="Sibling" value="Sibling" />
                            <Picker.Item label="Friend" value="Friend" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>
                        <View style={{ height: 10 }}></View>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Gender</Text>


                    </View>

                    <View style={{
                        borderColor: "red", borderWidth: 1,
                        borderRadius: 5, height: 40, marginLeft: 60
                    }}>
                        <TextInput
                            style={{ height: 40, width: 200, }}
                            // placeholder="Type here to translate!"
                            onChangeText={text => setText(text)}
                            defaultValue={text}
                        />

                    </View>
                    <View style={{ height: 10 }}></View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Date Of Birth</Text>


                    </View>

                    <View style={{ borderColor: "red", borderWidth: 1, borderRadius: 5, height: 40 }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 40, width: 200, }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                        <View style={{ height: 10 }}></View>
                    </View>

                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Marital status</Text>
                        <Text style={{
                            color: "red", fontSize: 15,
                            fontWeight: "bold"
                        }}>*</Text>

                    </View>

                    <View style={{ borderColor: "red", borderWidth: 1, borderRadius: 5, height: 40 }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 40, width: 200, }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Never Married" value="Never Married" />
                            <Picker.Item label="Divorced" value="Divorced" />
                            <Picker.Item label="Awaiting Divorce" value="Awaiting Divorce" />
                        </Picker>
                        <View style={{ height: 10 }}></View>
                    </View>

                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Height</Text>


                    </View>

                    <View style={{ borderColor: "red", borderWidth: 1, borderRadius: 5, height: 40 }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 40, width: 200, }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                        </Picker>
                        <View style={{ height: 10 }}></View>
                    </View>

                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Marital status</Text>
                        <Text style={{
                            color: "red", fontSize: 15,
                            fontWeight: "bold"
                        }}>*</Text>

                    </View>

                    <View style={{ borderColor: "red", borderWidth: 1, borderRadius: 5, height: 40 }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 40, width: 200, }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="None" value="None" />
                            <Picker.Item label="Physical Disability" value="Physical Disability" />

                        </Picker>
                        <View style={{ height: 10 }}></View>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Body Weight</Text>


                    </View>

                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13
                    }}>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View style={{
                                justifyContent: "space-between",
                                flexDirection: "row",
                            }}>
                                <Text style={{ padding: 8 }}>First</Text>
                                <RadioButton value="Kgs" />


                                <Text style={{ padding: 8 }}>Second</Text>
                                <RadioButton value="Ibs" />
                            </View>
                        </RadioButton.Group>
                    </View>

                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Health Information</Text>


                    </View>

                    <View style={{ borderColor: "red", borderWidth: 1, borderRadius: 5, height: 40 }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 40, width: 180, }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="No Health Problems" value="No Health Problems" />
                            <Picker.Item label="HIV positive" value="HIV positive" />
                            <Picker.Item label="Diabetes" value="Diabetes" />
                            <Picker.Item label="Low BP" value="Low BP" />
                            <Picker.Item label="High BP" value="High BP" />
                            <Picker.Item label="Herat Ailments" value="Herat Ailments" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>
                        <View style={{ height: 10 }}></View>
                    </View>

                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,

                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row", padding: 13,
                    }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Blood Group</Text>


                    </View>

                    <View style={{ borderColor: "red", borderWidth: 1, borderRadius: 5, height: 40 }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 40, width: 200, }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="Don't Know" value="Don't Know" />
                            <Picker.Item label="A+" value="A+" />
                            <Picker.Item label="A-" value="A-" />
                            <Picker.Item label="B+" value="B+" />
                            <Picker.Item label="B-" value="B-" />
                            <Picker.Item label="AB+" value="AB+" />
                            <Picker.Item label="AB-" value="AB-" />
                            <Picker.Item label="O+" value="O+" />
                            <Picker.Item label="O-" value="O-" />

                        </Picker>
                        <View style={{ height: 10 }}></View>
                    </View>

                </View>
                <View style={{ alignSelf: "center", }}>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle1}
                        activeOpacity={.10}
                    //   onPress={() =>

                    // this.props.navigation.navigate('Customerlogin')
                    // navigation.navigate('Customerlogin')}


                    >

                        <Text style={styles.TextStyle1}>Update</Text>

                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView >

    );
}


export default BasicInfoScreen;

export const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: "#ECECEC",


    },

    SubmitButtonStyle1: {
        width: 150,
        height: 40,
        alignSelf: "center",

        // paddingTop: 10,
        // paddingBottom: 15,
        // marginLeft: 100,
        // marginRight: 100,
        // backgroundColor: '#ffe4e1',
        borderRadius: 10,
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