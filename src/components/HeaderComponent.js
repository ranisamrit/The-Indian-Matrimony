import React from 'react';
import { View, Text, Image } from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Title, Container } from "native-base";

import { fontStyle } from "../themes/styles";

class HeaderComponent extends React.PureComponent {

    render() {
        return (
            <View>
                <Header transparent>
                    <Left>
                        <Button transparent onPress={this.props.leftPress}>
                            {/* <Icon name='arrow-back' style={{ color: '#000' }} /> */}
                            <Image style={{ width: 10, height: 30, marginBottom: 1, marginRight: 100 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png', }} />
                        </Button>
                    </Left>
                    <Body>
                        <Text
                            style={[fontStyle.mediumBoldBlackText, { textAlign: 'center' }]}>
                            {this.props.title}
                        </Text>
                    </Body>
                    <Right />
                </Header>
            </View>
        );
    }
}

export default HeaderComponent;