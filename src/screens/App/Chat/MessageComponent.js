import React from 'react';
import { ScrollView, View } from 'react-native';
import { appStyles } from "../../../themes/styles";
import NewMatchesComponent from "../../../components/messages/NewMatchesComponent";
import MessagesComponent from "../../../components/messages/MessagesComponent";
import UserData from "./UserData";
import NewUserData from "./NewUserData";

class MessageComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            messages: UserData,
            new_matches: NewUserData
        }
    }

    onMatchPress = (item, index) => {
        this.props.navigation.navigate('Chat', { item: item })
    };

    onPress = (item, index) => {
        this.props.navigation.navigate('Chat', { item: item })
    };

    render() {
        const { messages, new_matches } = this.state;
        return (
            <View style={appStyles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <NewMatchesComponent
                        new_matches={new_matches}
                        onMatchPress={this.onMatchPress} />
                    <MessagesComponent
                        messages={messages}
                        onPress={this.onPress} />
                </ScrollView>
            </View>
        );
    }
}

export default MessageComponent;