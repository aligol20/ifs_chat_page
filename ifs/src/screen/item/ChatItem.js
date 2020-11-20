import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const ChatItem = ({ details, showAvatar }) => {

    console.log(showAvatar, 'showAvatar')
    return (
        <View style={details.sender === 'me' ? styles.containerMe : styles.containerHim}>
            {showAvatar ?
                <Image
                    style={details.sender === 'me' ? styles.stretchMe : styles.stretchHim}
                    source={details.sender === 'me' ? require('../../icon/woman.png') : require('../../icon/user.png')}
                />
                :
                <View style={details.sender === 'me' ? styles.stretchMe : styles.stretchHim}
                />
            }
            <View style={details.sender === 'me' ? styles.me : styles.him}>
                <Text style={details.sender === 'me' ? styles.meText : styles.himText}>{details.message}</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    me: { backgroundColor: 'rgb(32,77,216)', marginBottom: 7, marginRight: 13, alignSelf: 'flex-end', alignItems: "center", justifyContent: "center", borderTopLeftRadius: 7, borderBottomLeftRadius: 7, borderBottomRightRadius: 7, maxWidth: "70%" },
    him: { backgroundColor: "white", marginBottom: 7, marginLeft: 13, alignSelf: "flex-start", borderTopRightRadius: 7, borderBottomLeftRadius: 7, borderBottomRightRadius: 7 },
    meText: { color: 'white', padding: 7, borderRadius: 7, textAlign: "center", textAlign: "left" },
    himText: { padding: 5 },
    stretchMe: { width: 30, height: 30, borderRadius: 15, marginRight: 13 },
    stretchHim: { width: 30, height: 30, borderRadius: 15, marginLeft: 13 },
    containerMe: { flexDirection: 'row-reverse', width: "100%", alignItems: "center", justifyContent: 'flex-start' },
    containerHim: { flexDirection: "row", width: "100%", alignItems: "center", justifyContent: 'flex-start' },
})

export default ChatItem