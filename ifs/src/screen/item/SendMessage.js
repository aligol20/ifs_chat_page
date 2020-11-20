


import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../../store/chatPage/Actions'



const SendMessage = ({ chat_id }) => {

    const dispath = useDispatch()
    const [message, setMessage] = useState('');
    const pressed = () => {

        dispath(sendMessage({ index: chat_id, message: message }))
        setMessage('');
    };


    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'Type Your Message'}
                value={message}
                multiline
                maxLength={250}
                onChangeText={setMessage}
                style={styles.input}
            />
            <TouchableOpacity
                disabled={message.length === 0}
                style={styles.button}
                onPress={() => pressed()}>
                <Image
                    style={styles.stretch}
                    source={require('../../icon/send.png')}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "flex-end" },
    input: { textAlign: 'left', width: "85%", height: 48 },
    stretch: { width: 25, height: 25, marginRight: 13 }
})
export default SendMessage