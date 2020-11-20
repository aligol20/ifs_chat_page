import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const ChatList = ({ navigation }) => {


    const chat_list = useSelector(
        (state) => state.chatPage,
    );
    const lastChat = (chatList) => {

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
                                <TouchableOpacity onPress={() => navigation.navigate('ChatPage', { key })}>
                                    <View style={styles.container}>
                                        <Image
                                            style={styles.stretch}
                                            source={require('../icon/user.png')}
                                        />
                                        <View style={styles.txtContainer}>
                                            <Text>{key}</Text>
                                            <Text style={{ color: "grey" }}>{lastChat(chat_list[key]).substr(0, 10)}{lastChat(chat_list[key]).length > 10 && '...'}</Text>

                                        </View>
                                    </View>
                                </TouchableOpacity>
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
    stretch: { width: 50, height: 50, borderRadius: 25 },
    container: { flexDirection: "row", backgroundColor: "white", alignItems: "center", paddingVertical: 5, borderColor: 'grey', marginTop: 3, marginLeft: 5 },
    txtContainer: { flexDirection: "column", justifyContent: "space-between", height: 50, width: "80%", marginLeft: 5 }
})