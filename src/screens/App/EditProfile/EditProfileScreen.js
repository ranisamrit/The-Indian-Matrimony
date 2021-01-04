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
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from "../../../components/HeaderComponent";
import { BACKGROUNDCOLOR, BLACK, WHITE } from "../../../themes/colors";


const EditProfileScreen = (props) => {
    const [text, setText] = useState('dcdsdsvdvdgvkjjnvdndvjnjvjnjknmvkvmdkvmdvkmvkdmvkdmckvmvkmvkdvmkvmkmkmv')
    const [height, setHeight] = useState(100)

    console.log('PROPS::', props)
    // const { bio, job_title, company, university, sex } = state;

    return (

        <ScrollView>

            <HeaderComponent
                title={'Edit Profile'}
                leftPress={() => props.navigation.pop()} />

            <SafeAreaView style={styles.mainBody}>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Basic Info</Text>


                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('BasicInfo')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Posted by</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold",
                        }}>: Sibling</Text>


                        <View style={{ height: 10, }}></View>

                    </View>

                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Age</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 10
                        }}>: 25</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Marital Status</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 20
                        }}>: Never Married</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Height</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 55
                        }}>: 6'0"(182cm)</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Any Disability?</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 44
                        }}>: None</Text>

                        <View style={{ height: 5 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Body Weight</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 30
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Health Information</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 10
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>More about Myself,Partner and Family</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <TextInput
                            {...props}
                            multiline={true}
                            onChangeText={(text) => {
                                setText(text)
                            }}
                            onContentSizeChange={(event) => {
                                setHeight(event.nativeEvent.contentSize.height)
                            }}
                            style={[styles.default, { height: Math.max(35, height) }]}
                            value={text}
                        />

                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Religious Background</Text>


                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Religious')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Religion</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold",
                        }}>: Hindu</Text>


                        <View style={{ height: 10, }}></View>

                    </View>

                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Mother Tongue</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 30
                        }}>: Marathi</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Community</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 28
                        }}>: Teli</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Sub Community</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 10
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Cast No Bar</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 35,
                        }}>: Not Specified</Text>

                        <View style={{ height: 5 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Gothra/Gothram</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", flexDirection: "row",
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Health Information</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 10, flexDirection: "row",
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Family</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUTExMVFRUXFRgWGBgYFxUYFxgYFRcWGBgXFRcYHSggGBolGxUXITEhJSkrLjAuFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALwBDAMBIgACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAAAQIDBwgGBQT/xABAEAABAwMCAwUGBAUCBAcAAAABAAIRAyExEkEEUWEHEyJxgQUGMkKhwRSRsfAjUmLh8YLRM0NysggVU2ODkqL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7W94IIBuoojTmyBS035JudrsLboFWGoyLq2PAABN1LXaLG+6Rpar80E02EEEiyusdWLoNXVbmk0aLm6CqJ0iDZZvYSZAsqc3XcW2umKwbblZBVR4IgXKiiNObJCnpudk3O12GyBVhqMi60Y8AQTdQ1+ixvv+/wAkjTnxc7oFTYQZNgrrHVi6DVDrc0m+DN55IKpHSINlm5hJmLTKot13Ftk++At6IKqPBEC5UUfDmyQp6bn97JuOuw2QKq3UZF1o14iJvEKGv0WPmkac+LndAqTCDJsFdbxYug1Q7w80m+DN55IKpO0iDZZlhmYtMqi3XcJ98Bb0+yCqrgRAuVFHwzNkBmm5QTrxt90CqtLjIuFoHiIm8R6qW1NNspd183r90CpNLTJsFVbxRF4QamqwQ3wZvP2QOk4NEGxWegzMWmfRUWa7hPvfl9PsgdVwcIFyse6dyWgZouVX4gciggVS6x3VObouPK6qo0AEjKiiZN7+aBtbrufKyk1S2w2TrGDa3krY0EAkXQI0g242UtOux+imm4kgHCusIxbyQS92iw87oFKfEcnZVSEi9zO6ye4gkAoG2oXHTa+SqcNGPWVVRoAMW6qKJn4sbBA2t13NtoCk1SDFuQRWJBt+QWjGCOsXKCTT03GUmHXY2A5KaTiTBxurrWAIt5IE5+iwxm6oUp8RybwikJEuuVm5xBgHdA21C46eeT9U3DRjG8qqjQAYtG6mjf4sbBA2t13NtgApNUgxbkisSDb8gtGsEdYuUEmnpuM9UmeOxsByU0nEmDjfquUdrfaeOG1cHwLv4121arcUubGHepzPy+fwh/b2k9q7fZ7zw3CNZVrj4y6TTpH+UhpGp/SbbybL4HgO232gyoHVWUKrZu3SWH/S5psfMFfidnXuJW9r1jcs4drv4tY5nOhk/FUM+kydgev+8vZHwNej3fD0xQqsEMqAuIJGBVBJ1A7nO/Qh9L7k++dD2tSLqJ0uH/EpujXTO3QtMWcPoZC+hd4MYOZ6LyPw9fjPYvGyJpcRSMOabtc05Dtn03CPoReCvSvuF74UPatDvGWeyBUpEy6m4/8Ac0xZ3TYggB9Kxmu5ttAS70/Dtj7KapINvotg0RO8T6oJczTcJN8eduXVKk4kwbhVWtEW8kCc/TYfVV3Q+LfP3RSaCJNys9RmNpj0QU1+qx+ir8OOqKrQBIsVj3juZQUymQZIsrqnUIF0GrqtzSDdF87IHSOkQbKH0yTIFlRbrvjZMVdNowgp9QEQMqKQ05sgUtN5wmTrtiEE1ml1232VMeAImIylq0WPn+/yUmlq8WBsEEsYQQSIAV1Tqxc8uSDV1Wi5x0SA0dZQOkdNjnKh1MkyMZlUW67iwwn3sWIxZA6jw4QPQKaQ0mXb4QKenxG/T6IJ12GdygVVpcfDfmVo14AicZUB2i22ZQaU+LbICCabC0gkQArqnVEXP6INTVaLn6bpAaOsoKpO0iDYrM0yTIxMzzVFmu4sMea472t9qfdh3A8C/wAYllas0/BsWUiPm5u2wL3Aadr3an3erguBf/E+GtWb/wAvnTpn+fm75cDxXbzbs29yXe1uILS/RRpw6q6RrhxMNY3mYPiIgdbA/Hr9H3f9uV+Brt4ig/S9vq1zTljx8zTy9cgFB669m+yaXD0mUOGphlJjdLQNuZM3LiTJJuSSSv7w8RE7R6r5j3D99KHtLh+8p+F7YFWkT4qbj+rDBh2/QggfSd1Pi9QPqg+P7QvcKn7Uo+KKddgPdVY//D4uWE/lkbg+duA4zi/Y/HSAadai7S9hw9tiWO/mY4QZ8iNivW3FcW1rHOe4Ma1pc5ziA1rW3JcTgADK8s9qPvLS9o8c6tRaRTaxtJrjY1NBce8LflnVABvDRMGwD097ve1afE8PSrs+GqxtQTkah8JjcGR6L+s0zMxaZ9F8l2T+zKlL2TwjKnhdoc6DMgVKj6jR08LwvsO9+WOn2QOo8OEC5U0fDM2lAp6b5TPj6R9/8IJqtLjIuFp3giN4j1Uh+i2Uu6+aev3QKm0tMmwW3fN5/qsy/XbCX4bqgp1INuNlLDrsfOymmTN5jqrrCB4fogT3aLDzuqbSDrndKiJHi+qh5M2mEDbVLrHdU8aLj6qqgABiJ6KKN/i+qAa0PEnysodVLTHoFVYkHw/RUxojadygTqYbcZUsOuxwFNMkmDMbyrrWAi3kgT3aLDGf3+SoUwfEcm6KVx4rnryWbiZIEoG2oXHTzyU3jRjG8qqgEGIHUZU0b/FjYFA2t13PkAFJqkGLckViQbctsLRrRG0xcoJdTDbjKTPHY4HLdTSJJgzp3ndcX7Xe1EePguAfAu2tWac7GnTI+rvQc0Gna32o6NfA8A+921qzTjY06ThvsXDGBe44chCAQhCD9T3a9vVuA4hvEUHQ5uQfhe05Y8btMfQEXAXqD3P99aHtDhu/puazSIqscRNGBfUf5YBIdgjlBA8lrajxT2BwY9zQ9ul4a4gObIMOAyJAMHkg6J2sdov4554bhnEcK03dg13A/EeVMHDfU7Aftdj3ZgK2njeNZ/DEOo0nD4+VSoD8nIb5xldkfZf3pZxvHM/h/FSouHx7h9QH5OTd97Z7pWtEW6BAOeWmBhad0InfP3U0QCPFc9eSkkzvE+kIKa8usU3+DG/PonVAAtnopo3nV9UDYzVcqe9M6dsfZFUkG2Oi0gRtMesoJcwNuFH4g9E6RJN8dVtpbyH0QS+oCIGSopDTc2R3Wm84TLtdsboFVGq4urZUAEHIUh2i2d0u61XnKCWUy0ycBXVOqwujvdVoiUgNF8ygdM6RBsVk6mSZGOfNaObrvjZLvYtGLIG+oHCB6BTTGgy7fCO60+LJ5InXYW5lAqjS4+G/Mq21ABExGVIdotkZn9+SO6nxeoCCWMLSCRACuqdWLn9Ed7qtFz9EgNHWUDpO02OcqDTJMj4cyqLdd8ALhPaz2p98HcFwL/4Xw1azT/xNiymR/wAvmfm2t8Qb9rvap3mvguBf4Phq1mn4ubKZ/l5u3wLZ4uhCAQhCAQhCAXaeybssLtHHcczw2dSou33FSqDtuG75PI7dknZXZvG8c29nUaLhjcVKo58m+p5LtPfbEdPtKB1HhwgegU0vBnJR3ei+Sj47C0ZKAe3UZF+ZWoqCI3iPVZtfptsn3XzT1+6BU2Fpk4VVfFi8I7zXbCQ8HWft/lBVN4aIOVn3Zmdpn0VaNd8J978sdPsgdR4cIGVl3DuX6K9Gi+U/xPRBLahcYOCqeNFwqqRBiJ6ZUUc+L6/3QNjddz5KXVSDAwE62fD9P7K2RAmJ65QJ1MNEjIU0zrsVNOZvMdcK639P0/sgmo7RYeabaYNzkp0sXz1/usnTJifsgbKhcdPPKp40i2FVSIMR6ZUUv6sbA/3QNjdd3eQCl1Qgx6eiK0zbltj6LRgEbTuTE/5QJ1MNuM81DHap1WaLzjzvyUtdF3GGiSScQBkk7Lgna52n/ii7g+CdHDjw1KrbGtza3/2v+7yyFdrfaf8AiNfBcC+OHu2rVGa2xYw/+lzPzf8AT8XJEIQCEIQCEIAQC7n2Q9lwbp43jmeKzqNFw+HlUqg/Nybtk3sL7Iuy/uizjePZ4/ipUXCzOVSqD8/Jvy5N7N7FW2j8h94QKo8tNvQKhTGdyJ6IpYvE9eXqszMwJifRA2PLjpPqU6nhxj9VVWItHplTR/q9Af7oKpt1XKXemY2mPspqTNvpj6LYRG0x6ygT2BokZU0/Hnb7pUpm8x1x9VVbbT9P7IJe8tMDCvuxE75+6KUReJ65+qzvO8T1iP8AZA2PLjBwtO4CVWItE9M/RYy7+r6oLbTLTJwFVQ6rBLvdVoiU9Oi+duSApnTY+al1MkyMFVp13xtzR3um0TCBvqBwgZKmmNFyn3Wm8zCJ12xHqgmq3XceSbagAjkgu0Wzvy/eFPdavFicBAmUy0hxwFVQ6sXP6Jd7qtFz9ERo6znZA6btNjnMrOq2xcSAwS4kmBAuSScBOq5paXucGMaCSSbAC5JJwF577V+053GzwnCOLeFaYe8SDXI/SnyG+TyQbdrfaieNLuE4NxHDC1SoLGtGw5U/18lyhCEAhCEAhCpjC4gAEkmABcknAA3QJrSSABJNgBuu+dk/Zb+H0cbxrAatnU6RxS3D3jepyHy+eNuybsuHDBvGcYAa+WUyJFLqedT9PPHVO+i0dB/ugqpUDhAzsFNPwZyUd3ovMlA8dsRk5QJ7NRlvqVYqCI5CFOvRbI/JHdT4vUD6oExhadRVVPFi5/RLvNVoud+SI0dZycYQVScG2Od0u7MztM+mUBmu+BhV3vyx0+yBveHCBlTT8Gd0+70Xyj4+keuf8IJewuMjCvvBEbxHrhTr0Wyn3XzT1+6CWMLTJwte/Cz7zXbCf4br9EDfTAEjIU0zqsVNMGbzHWYV1seH6f2QKodNgqbTBEnJRRx4s9f7rN4M2mOkwgbKhcYOCqqDTcKqhEWiemVFH+r6/wB0DYNQk+SydUIMD/CutM+H6Y+ipkRFp3mJQJ1MNEjI3WL67Q1zqjg1jAXOcSAABcknYRuqpgzedPWYXM//ABAe8Ao8EzhWGH8Q7xAbUqcF0xzdoHlqQfBdqvaW7jnO4XhSWcID4jcOrkbncU+Td8nYDmaEIBCEIBCFdGk57g1rS5ziGtaASSSYAAFySdkCpUy4hrQXOJAAAJJJsAAMmV6G7JOzJvCAcVxbQ7iSJYzIog/rU67YHNX2T9mg4DTxXFtB4kiwN20QRgHBqcztgbk9NrbR+Q+8IJqO0m3oFYpiJ+YiUUrC8T15eqzIM2mJygdN5cdJxunU8OLD9VVUiLR6ZKmj/V6A/wB0DY3UJdnZSahBj09EVZnw38sfRaNiItMX5z/ugT2Bokfmpp+POAppTN509cK620fkPvCBPeWmB+S0FMRO8T6qaMR4s9eXqpIM7xPWIQNjy4wcKqngxunVIi0T0z9FNHfV9f7oKYwOEnKjvDMbTHphFWZtMdMfRaSI2mPWUCewNEjKy78qqUzeY64+q2lvT6IIdUDhAyVLBouU+603nCQdrtjdAPbruPJU2qGiDkKS7RbO6fdarzlBLaZaZOAqeddgkKuq0RKZGi+ZQDDpEHzWbqU3GFZbrubbfv8ANSa0WjFggp9QOtucBec/a8+3PeAUhegx/dyMdzQJNQgjZx1wf6wuxdpftv8A8u9n1qwdFVw7qlz7yoCAR/0jU7/Svh//AA8+7kUq3GOEGoe6pn+hhl5Hm+B/8aD+Ptd7MR4+O4Cn4RJrUWjG5qU2jbctGMjdcUXtfVottlcN7X+zHuw7j+DZ/DMurUWj4NzUpgfJuRtnEwHGkIW3CcM+q9tOm0ve4hrWtEkk4ACCeHoOqOaxjS5ziGta0Ekk2AAGSvRXZZ2YjgGt4riQ13FESBYiiCLtbsXxYu9BaS7fss7NWcAwV68O4pwuctpAj4WHd14LvQWz0LvYtHQIKfUDrbnAUsGjOSn3ei8yf2Eh47YjdAPZqu3G5VCoIjlZSX6LbZT7qfF6gIJawtOo/kqf48ZSFTVbc78t0RoxecoGx2mx9SpNMnxfLlPRrvgYR3sWjoP0QU+oHWGdgpp+DOSn3ei8yUh47YjdAOZqMjC07wRG+Pso16bbKu6+aev3QSxhaZOFVTx42+6Qqa7YTPg6z9v8oBjw0Qcqe7MztM/dUGa74S735Y6fZA3vDhAyo/Dnor0aL5S/E9EEsqEmDgq6o03FlVRwIMRKijY+L6oHSGoSbqH1CDAwFVa58P0VscABMSgH0w0SMhRSOrN1NMEETMdVda/w/RBNZ2mw8/3KptMESbkopGBfPVfn+2ePbw1GrXfPd02OqOPMNEwOpx6oOGdv3vEa3FU+DDvDQbqfy72oAbgD5Waf/uV2v3Y4ajQ4Lh2cM8PotpNDXiCHiLv8y6SepK8ke1vaD+JrVa9Qy+q9z3ebiTA6CYX0/uP2jcV7LZUp0wyrTcCWsqai2m/+dsEG+43QepC9oaX1CAG7khoAG5OAuc+9PbJwXC6mcOTxVQW8ECkOhqkeIf8ASD5hfB0vdj257dcKnFPfSokyO9ljAJP/AA6DcnqQJt4l0j3U7JvZ3Bw6o38TWGXVQNAP9FL4R/q1Ec0HEfZvulxvtas+tw3Bto0nuLpGpnDsk4Y55MidmzE4AgLt/Zn2cUfZoNSoRW4giDUghrAflpg383ZPQL7eiyItDRbp09FpWMxF+gQTVcWm1ui0bTBE5JEpUjAvnryWbmmTExOUBTeXGCbbqqo0i1h+qqqQRaOkbqaVvi9JQVTbqEuucBZmoQYnp5BOqCT4b22wtGkREjF+coE9gaCRaN1NI6/iwMKaYIMmzequteIueQQTVcWm3oFoKYifmiZSpGBBz1WZaZtMTlA6by4wTbdOr4Yiw/VVVIIt6AZU0bfF6Sgqk3Vd2VJqGY2mPRKoCTa/lhbBwiLTHrKBVGBokWKml4pm8fvZKkCDfHVVWvGn6IJqPLTAsFp3Yid4n1SpEAXz1WekzN4n0hA6by4wbha9w3l+qmqQRbPRY6HcigttItudlTzrsPO6Qq6rRlMt0XF9kAx2ix87KTSLrjdUG67m2yRq6bRhBTqodYbqWDRc/RM0tN+SQOu2IQFRuu48rrlfbx7aeOHo+zqDXPq8Q7U5rAXONOkZADRc6nwRb/lldUcdFs7/AL/JZM4Bhea2loqOaGlwA1FrZIaXZgEm2Lnmg8+e7HYpxlcB/FuHC0/5bPrEdGg6W+pkcl173X9wOA4ED8PRDqozVqw+p5gxDP8ASAvqBULrc90y3RjfKAY7TY+ZKk0pvaMqgzXc2i37/NI1CLRiwQU6oHW3OFLBozk8tkzS0+LJQPHbCBOZruMYJKYqgCOVvNBOi22U+5nxesIIbTLTqP5KnnXYZ6pB5dbnv9Uy3RjdAMdpsfMlSaU+LbKoU9dzbaEu9ItHRA3VNVtzhJg0ZyeSZpaLi5QBrtiPugTma7jG8p96Ijlb7ILtNtk+5nxb5j6oIawtOo/kE3+PGd5QHl1ue6ZboxugdN4bZLujOrbP3TbT13xtCO9+WOn2QNzw6wQzwZ35dEGnpvlA8ebR9/8ACBOZquFXeiNO+PspL9Fsp9183r90CazTcq/xA6qA/XbCr8OOaBvYAJAuopHVY3WdH4gtuJwPNBNU6TAsrZTBEkXS4bHqsa3xFBVN5JgmyuqNOLLStgrHhcnyQVSGoSbqH1CDANk+Jz6f7ral8I8kE1GACRlRROrN1nQ+ILbicDzQRVdpMCy0bTBEkXS4bHr/ALLGp8R80FU3lxg3CusNOLK6/wAJ/e6z4XdBVJuoSbrN1QgxNphPic+i2Z8I8kE1GBokWKiidWbqKHxD97LTisBBNV2kwLBaCmCJi8Sjhseqwd8Xqgqm8uMG4V1vDiyuv8J/e6z4XdBVJocJNyszUMxNpj0RxOfRbt+H0+yCKjA0SLFTR8UzeFHD/EtOK2QTVcWmBYLQUxExeJ9UcPhYH4vX7oLpvLjBuFVbwxFpV8R8Kz4Xf0+6CqTQ4SblZ94ZibTHojiMrf5fT7IIqNDRIsVj3zuf6KuHyv6oQf/Z', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Father's Status</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold",
                        }}>: Enter Now</Text>


                        <View style={{ height: 10, }}></View>

                    </View>

                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Mother's Status</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 10
                        }}>: Enter Now</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Native Place</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 30
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>No. of Brothers</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 70
                        }}>: 0</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>No. fo Sisters</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 60
                        }}>: 0</Text>

                        <View style={{ height: 5 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Family Values</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", flexDirection: "row", marginLeft: 20
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Family Affluence</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 20, flexDirection: "row",
                        }}>: Enter Now</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Astro Details</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,


                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Manglik/Chevvai dosham</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 30
                        }}>: Dont'Know</Text>


                        <View style={{ height: 10, }}></View>

                    </View>

                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold",
                        }}>Nakshatra</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 90
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Rashi/Moon Sign</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 40
                        }}>: Not Specified</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Location,Education & Career</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Country Living in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 40
                        }}>: India</Text>


                        <View style={{ height: 10, }}></View>

                    </View>

                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>State Living in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 30
                        }}>: Maharashtra</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>City Living in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 10
                        }}>: Nagpur</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Residency Status</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 30
                        }}>: Citizen</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Zip/Pin code</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 45
                        }}>: Not Specified</Text>

                        <View style={{ height: 5 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Grew Up in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", flexDirection: "row", marginLeft: 5
                        }}>: India</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Highest Qualification</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 100, flexDirection: "row",
                        }}>: </Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>College(s) Attended</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 1, flexDirection: "row",
                        }}>: College Name</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Working With</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 60, flexDirection: "row",
                        }}>: Private company</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Working As</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 95, flexDirection: "row",
                        }}>: Software Developer/Programmer</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Annual Income</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 70, flexDirection: "row",
                        }}>: INR 2 Lakh to 4 Lakh</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Employer Name</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 65, flexDirection: "row",
                        }}>: Rect Native Developer</Text>

                        <View style={{ height: 10 }}></View>
                    </View>
                </View>


                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Lifestyle</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUTExMVFRUXFRgWGBgYFxUYFxgYFRcWGBgXFRcYHSggGBolGxUXITEhJSkrLjAuFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALwBDAMBIgACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAAAQIDBwgGBQT/xABAEAABAwMCAwUGBAUCBAcAAAABAAIRAyExEkEEUWEHEyJxgQUGMkKhwRSRsfAjUmLh8YLRM0NysggVU2ODkqL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7W94IIBuoojTmyBS035JudrsLboFWGoyLq2PAABN1LXaLG+6Rpar80E02EEEiyusdWLoNXVbmk0aLm6CqJ0iDZZvYSZAsqc3XcW2umKwbblZBVR4IgXKiiNObJCnpudk3O12GyBVhqMi60Y8AQTdQ1+ixvv+/wAkjTnxc7oFTYQZNgrrHVi6DVDrc0m+DN55IKpHSINlm5hJmLTKot13Ftk++At6IKqPBEC5UUfDmyQp6bn97JuOuw2QKq3UZF1o14iJvEKGv0WPmkac+LndAqTCDJsFdbxYug1Q7w80m+DN55IKpO0iDZZlhmYtMqi3XcJ98Bb0+yCqrgRAuVFHwzNkBmm5QTrxt90CqtLjIuFoHiIm8R6qW1NNspd183r90CpNLTJsFVbxRF4QamqwQ3wZvP2QOk4NEGxWegzMWmfRUWa7hPvfl9PsgdVwcIFyse6dyWgZouVX4gciggVS6x3VObouPK6qo0AEjKiiZN7+aBtbrufKyk1S2w2TrGDa3krY0EAkXQI0g242UtOux+imm4kgHCusIxbyQS92iw87oFKfEcnZVSEi9zO6ye4gkAoG2oXHTa+SqcNGPWVVRoAMW6qKJn4sbBA2t13NtoCk1SDFuQRWJBt+QWjGCOsXKCTT03GUmHXY2A5KaTiTBxurrWAIt5IE5+iwxm6oUp8RybwikJEuuVm5xBgHdA21C46eeT9U3DRjG8qqjQAYtG6mjf4sbBA2t13NtgApNUgxbkisSDb8gtGsEdYuUEmnpuM9UmeOxsByU0nEmDjfquUdrfaeOG1cHwLv4121arcUubGHepzPy+fwh/b2k9q7fZ7zw3CNZVrj4y6TTpH+UhpGp/SbbybL4HgO232gyoHVWUKrZu3SWH/S5psfMFfidnXuJW9r1jcs4drv4tY5nOhk/FUM+kydgev+8vZHwNej3fD0xQqsEMqAuIJGBVBJ1A7nO/Qh9L7k++dD2tSLqJ0uH/EpujXTO3QtMWcPoZC+hd4MYOZ6LyPw9fjPYvGyJpcRSMOabtc05Dtn03CPoReCvSvuF74UPatDvGWeyBUpEy6m4/8Ac0xZ3TYggB9Kxmu5ttAS70/Dtj7KapINvotg0RO8T6oJczTcJN8eduXVKk4kwbhVWtEW8kCc/TYfVV3Q+LfP3RSaCJNys9RmNpj0QU1+qx+ir8OOqKrQBIsVj3juZQUymQZIsrqnUIF0GrqtzSDdF87IHSOkQbKH0yTIFlRbrvjZMVdNowgp9QEQMqKQ05sgUtN5wmTrtiEE1ml1232VMeAImIylq0WPn+/yUmlq8WBsEEsYQQSIAV1Tqxc8uSDV1Wi5x0SA0dZQOkdNjnKh1MkyMZlUW67iwwn3sWIxZA6jw4QPQKaQ0mXb4QKenxG/T6IJ12GdygVVpcfDfmVo14AicZUB2i22ZQaU+LbICCabC0gkQArqnVEXP6INTVaLn6bpAaOsoKpO0iDYrM0yTIxMzzVFmu4sMea472t9qfdh3A8C/wAYllas0/BsWUiPm5u2wL3Aadr3an3erguBf/E+GtWb/wAvnTpn+fm75cDxXbzbs29yXe1uILS/RRpw6q6RrhxMNY3mYPiIgdbA/Hr9H3f9uV+Brt4ig/S9vq1zTljx8zTy9cgFB669m+yaXD0mUOGphlJjdLQNuZM3LiTJJuSSSv7w8RE7R6r5j3D99KHtLh+8p+F7YFWkT4qbj+rDBh2/QggfSd1Pi9QPqg+P7QvcKn7Uo+KKddgPdVY//D4uWE/lkbg+duA4zi/Y/HSAadai7S9hw9tiWO/mY4QZ8iNivW3FcW1rHOe4Ma1pc5ziA1rW3JcTgADK8s9qPvLS9o8c6tRaRTaxtJrjY1NBce8LflnVABvDRMGwD097ve1afE8PSrs+GqxtQTkah8JjcGR6L+s0zMxaZ9F8l2T+zKlL2TwjKnhdoc6DMgVKj6jR08LwvsO9+WOn2QOo8OEC5U0fDM2lAp6b5TPj6R9/8IJqtLjIuFp3giN4j1Uh+i2Uu6+aev3QKm0tMmwW3fN5/qsy/XbCX4bqgp1INuNlLDrsfOymmTN5jqrrCB4fogT3aLDzuqbSDrndKiJHi+qh5M2mEDbVLrHdU8aLj6qqgABiJ6KKN/i+qAa0PEnysodVLTHoFVYkHw/RUxojadygTqYbcZUsOuxwFNMkmDMbyrrWAi3kgT3aLDGf3+SoUwfEcm6KVx4rnryWbiZIEoG2oXHTzyU3jRjG8qqgEGIHUZU0b/FjYFA2t13PkAFJqkGLckViQbctsLRrRG0xcoJdTDbjKTPHY4HLdTSJJgzp3ndcX7Xe1EePguAfAu2tWac7GnTI+rvQc0Gna32o6NfA8A+921qzTjY06ThvsXDGBe44chCAQhCD9T3a9vVuA4hvEUHQ5uQfhe05Y8btMfQEXAXqD3P99aHtDhu/puazSIqscRNGBfUf5YBIdgjlBA8lrajxT2BwY9zQ9ul4a4gObIMOAyJAMHkg6J2sdov4554bhnEcK03dg13A/EeVMHDfU7Aftdj3ZgK2njeNZ/DEOo0nD4+VSoD8nIb5xldkfZf3pZxvHM/h/FSouHx7h9QH5OTd97Z7pWtEW6BAOeWmBhad0InfP3U0QCPFc9eSkkzvE+kIKa8usU3+DG/PonVAAtnopo3nV9UDYzVcqe9M6dsfZFUkG2Oi0gRtMesoJcwNuFH4g9E6RJN8dVtpbyH0QS+oCIGSopDTc2R3Wm84TLtdsboFVGq4urZUAEHIUh2i2d0u61XnKCWUy0ycBXVOqwujvdVoiUgNF8ygdM6RBsVk6mSZGOfNaObrvjZLvYtGLIG+oHCB6BTTGgy7fCO60+LJ5InXYW5lAqjS4+G/Mq21ABExGVIdotkZn9+SO6nxeoCCWMLSCRACuqdWLn9Ed7qtFz9EgNHWUDpO02OcqDTJMj4cyqLdd8ALhPaz2p98HcFwL/4Xw1azT/xNiymR/wAvmfm2t8Qb9rvap3mvguBf4Phq1mn4ubKZ/l5u3wLZ4uhCAQhCAQhCAXaeybssLtHHcczw2dSou33FSqDtuG75PI7dknZXZvG8c29nUaLhjcVKo58m+p5LtPfbEdPtKB1HhwgegU0vBnJR3ei+Sj47C0ZKAe3UZF+ZWoqCI3iPVZtfptsn3XzT1+6BU2Fpk4VVfFi8I7zXbCQ8HWft/lBVN4aIOVn3Zmdpn0VaNd8J978sdPsgdR4cIGVl3DuX6K9Gi+U/xPRBLahcYOCqeNFwqqRBiJ6ZUUc+L6/3QNjddz5KXVSDAwE62fD9P7K2RAmJ65QJ1MNEjIU0zrsVNOZvMdcK639P0/sgmo7RYeabaYNzkp0sXz1/usnTJifsgbKhcdPPKp40i2FVSIMR6ZUUv6sbA/3QNjdd3eQCl1Qgx6eiK0zbltj6LRgEbTuTE/5QJ1MNuM81DHap1WaLzjzvyUtdF3GGiSScQBkk7Lgna52n/ii7g+CdHDjw1KrbGtza3/2v+7yyFdrfaf8AiNfBcC+OHu2rVGa2xYw/+lzPzf8AT8XJEIQCEIQCEIAQC7n2Q9lwbp43jmeKzqNFw+HlUqg/Nybtk3sL7Iuy/uizjePZ4/ipUXCzOVSqD8/Jvy5N7N7FW2j8h94QKo8tNvQKhTGdyJ6IpYvE9eXqszMwJifRA2PLjpPqU6nhxj9VVWItHplTR/q9Af7oKpt1XKXemY2mPspqTNvpj6LYRG0x6ygT2BokZU0/Hnb7pUpm8x1x9VVbbT9P7IJe8tMDCvuxE75+6KUReJ65+qzvO8T1iP8AZA2PLjBwtO4CVWItE9M/RYy7+r6oLbTLTJwFVQ6rBLvdVoiU9Oi+duSApnTY+al1MkyMFVp13xtzR3um0TCBvqBwgZKmmNFyn3Wm8zCJ12xHqgmq3XceSbagAjkgu0Wzvy/eFPdavFicBAmUy0hxwFVQ6sXP6Jd7qtFz9ERo6znZA6btNjnMrOq2xcSAwS4kmBAuSScBOq5paXucGMaCSSbAC5JJwF577V+053GzwnCOLeFaYe8SDXI/SnyG+TyQbdrfaieNLuE4NxHDC1SoLGtGw5U/18lyhCEAhCEAhCpjC4gAEkmABcknAA3QJrSSABJNgBuu+dk/Zb+H0cbxrAatnU6RxS3D3jepyHy+eNuybsuHDBvGcYAa+WUyJFLqedT9PPHVO+i0dB/ugqpUDhAzsFNPwZyUd3ovMlA8dsRk5QJ7NRlvqVYqCI5CFOvRbI/JHdT4vUD6oExhadRVVPFi5/RLvNVoud+SI0dZycYQVScG2Od0u7MztM+mUBmu+BhV3vyx0+yBveHCBlTT8Gd0+70Xyj4+keuf8IJewuMjCvvBEbxHrhTr0Wyn3XzT1+6CWMLTJwte/Cz7zXbCf4br9EDfTAEjIU0zqsVNMGbzHWYV1seH6f2QKodNgqbTBEnJRRx4s9f7rN4M2mOkwgbKhcYOCqqDTcKqhEWiemVFH+r6/wB0DYNQk+SydUIMD/CutM+H6Y+ipkRFp3mJQJ1MNEjI3WL67Q1zqjg1jAXOcSAABcknYRuqpgzedPWYXM//ABAe8Ao8EzhWGH8Q7xAbUqcF0xzdoHlqQfBdqvaW7jnO4XhSWcID4jcOrkbncU+Td8nYDmaEIBCEIBCFdGk57g1rS5ziGtaASSSYAAFySdkCpUy4hrQXOJAAAJJJsAAMmV6G7JOzJvCAcVxbQ7iSJYzIog/rU67YHNX2T9mg4DTxXFtB4kiwN20QRgHBqcztgbk9NrbR+Q+8IJqO0m3oFYpiJ+YiUUrC8T15eqzIM2mJygdN5cdJxunU8OLD9VVUiLR6ZKmj/V6A/wB0DY3UJdnZSahBj09EVZnw38sfRaNiItMX5z/ugT2Bokfmpp+POAppTN509cK620fkPvCBPeWmB+S0FMRO8T6qaMR4s9eXqpIM7xPWIQNjy4wcKqngxunVIi0T0z9FNHfV9f7oKYwOEnKjvDMbTHphFWZtMdMfRaSI2mPWUCewNEjKy78qqUzeY64+q2lvT6IIdUDhAyVLBouU+603nCQdrtjdAPbruPJU2qGiDkKS7RbO6fdarzlBLaZaZOAqeddgkKuq0RKZGi+ZQDDpEHzWbqU3GFZbrubbfv8ANSa0WjFggp9QOtucBec/a8+3PeAUhegx/dyMdzQJNQgjZx1wf6wuxdpftv8A8u9n1qwdFVw7qlz7yoCAR/0jU7/Svh//AA8+7kUq3GOEGoe6pn+hhl5Hm+B/8aD+Ptd7MR4+O4Cn4RJrUWjG5qU2jbctGMjdcUXtfVottlcN7X+zHuw7j+DZ/DMurUWj4NzUpgfJuRtnEwHGkIW3CcM+q9tOm0ve4hrWtEkk4ACCeHoOqOaxjS5ziGta0Ekk2AAGSvRXZZ2YjgGt4riQ13FESBYiiCLtbsXxYu9BaS7fss7NWcAwV68O4pwuctpAj4WHd14LvQWz0LvYtHQIKfUDrbnAUsGjOSn3ei8yf2Eh47YjdAPZqu3G5VCoIjlZSX6LbZT7qfF6gIJawtOo/kqf48ZSFTVbc78t0RoxecoGx2mx9SpNMnxfLlPRrvgYR3sWjoP0QU+oHWGdgpp+DOSn3ei8yUh47YjdAOZqMjC07wRG+Pso16bbKu6+aev3QSxhaZOFVTx42+6Qqa7YTPg6z9v8oBjw0Qcqe7MztM/dUGa74S735Y6fZA3vDhAyo/Dnor0aL5S/E9EEsqEmDgq6o03FlVRwIMRKijY+L6oHSGoSbqH1CDAwFVa58P0VscABMSgH0w0SMhRSOrN1NMEETMdVda/w/RBNZ2mw8/3KptMESbkopGBfPVfn+2ePbw1GrXfPd02OqOPMNEwOpx6oOGdv3vEa3FU+DDvDQbqfy72oAbgD5Waf/uV2v3Y4ajQ4Lh2cM8PotpNDXiCHiLv8y6SepK8ke1vaD+JrVa9Qy+q9z3ebiTA6CYX0/uP2jcV7LZUp0wyrTcCWsqai2m/+dsEG+43QepC9oaX1CAG7khoAG5OAuc+9PbJwXC6mcOTxVQW8ECkOhqkeIf8ASD5hfB0vdj257dcKnFPfSokyO9ljAJP/AA6DcnqQJt4l0j3U7JvZ3Bw6o38TWGXVQNAP9FL4R/q1Ec0HEfZvulxvtas+tw3Bto0nuLpGpnDsk4Y55MidmzE4AgLt/Zn2cUfZoNSoRW4giDUghrAflpg383ZPQL7eiyItDRbp09FpWMxF+gQTVcWm1ui0bTBE5JEpUjAvnryWbmmTExOUBTeXGCbbqqo0i1h+qqqQRaOkbqaVvi9JQVTbqEuucBZmoQYnp5BOqCT4b22wtGkREjF+coE9gaCRaN1NI6/iwMKaYIMmzequteIueQQTVcWm3oFoKYifmiZSpGBBz1WZaZtMTlA6by4wTbdOr4Yiw/VVVIIt6AZU0bfF6Sgqk3Vd2VJqGY2mPRKoCTa/lhbBwiLTHrKBVGBokWKml4pm8fvZKkCDfHVVWvGn6IJqPLTAsFp3Yid4n1SpEAXz1WekzN4n0hA6by4wbha9w3l+qmqQRbPRY6HcigttItudlTzrsPO6Qq6rRlMt0XF9kAx2ix87KTSLrjdUG67m2yRq6bRhBTqodYbqWDRc/RM0tN+SQOu2IQFRuu48rrlfbx7aeOHo+zqDXPq8Q7U5rAXONOkZADRc6nwRb/lldUcdFs7/AL/JZM4Bhea2loqOaGlwA1FrZIaXZgEm2Lnmg8+e7HYpxlcB/FuHC0/5bPrEdGg6W+pkcl173X9wOA4ED8PRDqozVqw+p5gxDP8ASAvqBULrc90y3RjfKAY7TY+ZKk0pvaMqgzXc2i37/NI1CLRiwQU6oHW3OFLBozk8tkzS0+LJQPHbCBOZruMYJKYqgCOVvNBOi22U+5nxesIIbTLTqP5KnnXYZ6pB5dbnv9Uy3RjdAMdpsfMlSaU+LbKoU9dzbaEu9ItHRA3VNVtzhJg0ZyeSZpaLi5QBrtiPugTma7jG8p96Ijlb7ILtNtk+5nxb5j6oIawtOo/kE3+PGd5QHl1ue6ZboxugdN4bZLujOrbP3TbT13xtCO9+WOn2QNzw6wQzwZ35dEGnpvlA8ebR9/8ACBOZquFXeiNO+PspL9Fsp9183r90CazTcq/xA6qA/XbCr8OOaBvYAJAuopHVY3WdH4gtuJwPNBNU6TAsrZTBEkXS4bHqsa3xFBVN5JgmyuqNOLLStgrHhcnyQVSGoSbqH1CDANk+Jz6f7ral8I8kE1GACRlRROrN1nQ+ILbicDzQRVdpMCy0bTBEkXS4bHr/ALLGp8R80FU3lxg3CusNOLK6/wAJ/e6z4XdBVJuoSbrN1QgxNphPic+i2Z8I8kE1GBokWKiidWbqKHxD97LTisBBNV2kwLBaCmCJi8Sjhseqwd8Xqgqm8uMG4V1vDiyuv8J/e6z4XdBVJocJNyszUMxNpj0RxOfRbt+H0+yCKjA0SLFTR8UzeFHD/EtOK2QTVcWmBYLQUxExeJ9UcPhYH4vX7oLpvLjBuFVbwxFpV8R8Kz4Xf0+6CqTQ4SblZ94ZibTHojiMrf5fT7IIqNDRIsVj3zuf6KuHyv6oQf/Z', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Diet</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 50
                        }}>: Veg</Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Partner Basic Info</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Age</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 70
                        }}>: 20 to 25</Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Height</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 120
                        }}>: 5'3"(160cm) to 6'0"</Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Marital Status</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 40
                        }}>: Naver Married</Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Religion/Community</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 30
                        }}>: Hindu:Teli</Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Mother Tongue</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold",
                        }}>: Marathi</Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Partner Location Details</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Country living in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold",
                        }}>: India</Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>State living in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 15
                        }}>: </Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>City/District</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold",
                        }}>: </Text>


                        <View style={{ height: 10, }}></View>

                    </View>

                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Partner,Education & Career</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Country Living in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 40
                        }}>: India</Text>


                        <View style={{ height: 10, }}></View>

                    </View>

                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>State Living in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 30
                        }}>: Maharashtra</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>City Living in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 10
                        }}>: Nagpur</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Residency Status</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 30
                        }}>: Citizen</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Zip/Pin code</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 45
                        }}>: Not Specified</Text>

                        <View style={{ height: 5 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Grew Up in</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", flexDirection: "row", marginLeft: 5
                        }}>: India</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Highest Qualification</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 100, flexDirection: "row",
                        }}>: </Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>College(s) Attended</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 1, flexDirection: "row",
                        }}>: College Name</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Working With</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 60, flexDirection: "row",
                        }}>: Private company</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Working As</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 95, flexDirection: "row",
                        }}>: Software Developer/Programmer</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Annual Income</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 70, flexDirection: "row",
                        }}>: INR 2 Lakh to 4 Lakh</Text>

                        <View style={{ height: 10 }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,
                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Employer Name</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 65, flexDirection: "row",
                        }}>: Rect Native Developer</Text>

                        <View style={{ height: 10 }}></View>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row", padding: 13,
                }}>
                    <Text style={{
                        color: "#cc2b5e", fontSize: 16,
                        fontWeight: "bold", alignSelf: "center"
                    }}>Partner Other Details</Text>


                    <TouchableWithoutFeedback onPress={() => alert('Log out')}>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 30, height: 30,
                                backgroundColor: "#ECECEC"
                            }}
                            source={{ uri: 'data:image/jpeg;base64,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', }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: "column", padding: 10, }}>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Profile created by</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginRight: 60
                        }}>: </Text>


                        <View style={{ height: 10, }}></View>

                    </View>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: '#ffffff',
                            padding: 16,

                        }}>
                        <Text style={{
                            color: "gray", fontSize: 15,
                            fontWeight: "bold"
                        }}>Diet</Text>
                        <Text style={{
                            color: "#454F63", fontSize: 15,
                            fontWeight: "bold", marginLeft: 30
                        }}>: </Text>


                        <View style={{ height: 10, }}></View>

                    </View>

                </View>

            </SafeAreaView>
        </ScrollView >

    );
}


export default EditProfileScreen;

export const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: "#ECECEC"

    },


});