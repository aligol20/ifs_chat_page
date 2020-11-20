import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    StatusBar
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

const ChatList = ({ navigation }) => {


    const chat_list = useSelector(
        (state) => state.chatPage,
    );
    const lastChat = (chatList) => {
        console.log(chatList, 'chatList')

        if (chatList && chatList.length && chatList.length > 0) {
            return chatList[chatList.length - 1].message
        }
    }
    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <View style={{ flex: 1, backgroundColor: "white" }}>

                {Object.keys(chat_list).map(function (key, index) {
                    return (
                        <>
                            {key.includes('C') &&
                                <TouchableHighlight onPress={() => navigation.navigate('ChatPage', { key })}>
                                    <View style={{ flexDirection: "row", backgroundColor: "white", alignItems: "center", paddingVertical: 5, borderColor: 'grey', marginTop: 3, marginLeft: 5 }}>
                                        <Image
                                            style={styles.stretch}
                                            source={require('../icon/user.png')}
                                        />
                                        <View style={{ flexDirection: "column", justifyContent: "space-between", height: 50, width: "80%", marginLeft: 5 }}>
                                            <Text>{key}</Text>
                                            <Text style={{ color: "grey" }}>{lastChat(chat_list[key]).substr(0, 10)}{lastChat(chat_list[key]).length > 10 && '...'}</Text>

                                        </View>
                                    </View>
                                </TouchableHighlight>
                            }
                        </>
                    )
                }
                )
                }




            </View>
        </>
    )
}
export default ChatList

const styles = StyleSheet.create({
    stretch: { width: 50, height: 50, borderRadius: 25 }
})