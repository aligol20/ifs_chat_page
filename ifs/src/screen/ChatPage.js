import React, { useEffect, useRef } from 'react';
import {
    View,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    StatusBar
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ChatItem from './item/ChatItem'
import SendMessage from './item/SendMessage'


const ChatPage = ({ route, navigation }) => {
    const chat_data = useSelector(
        (state) => state.chatPage,
    );
    const chat_id = route.params.key
    console.log(chat_id, 'chat_id')
    const flatListRef = useRef();
    useEffect(() => {
        if (chat_data && chat_data[chat_id] && chat_data[chat_id].length > 0) {
            setTimeout(() => {
                flatListRef &&
                    flatListRef.current &&
                    flatListRef.current.scrollToEnd({ animated: true });
            }, 300);
        }
    }, [chat_data]);

    const showAvatar = (index) => {
        let result;
        if (index === 0) {
            result = true;
        } else if (index - 1 >= 0) {
            result =
                chat_data[chat_id][index].sender !==
                    chat_data[chat_id][index - 1].sender
                    ? true
                    : false;
        }
        return result;
    };

    return (
        <>
            <StatusBar barStyle={'light-content'} />

            <View style={{ flex: 1, paddingTop: 7 }}>
                <FlatList
                    ref={flatListRef}
                    data={chat_data && chat_data[chat_id] ? chat_data[chat_id] : []}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={({ item, index }) => (
                        <ChatItem
                            details={item}
                            showAvatar={showAvatar(index)}
                        />
                    )}


                />
                <SendMessage

                    chat_id={chat_id}
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    loading: { flex: 1 }
})
export default ChatPage
