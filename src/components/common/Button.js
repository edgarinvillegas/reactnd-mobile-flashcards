import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BasicButton = ({ title, borderColor, fontColor = borderColor, backgroundColor, disabled = false, onPress = () => {} }) => {
    const styles = StyleSheet.create({
        container: {
            borderWidth: 2,
            borderColor,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            padding: 17,
            // backgroundColor: disabled ? 'gray' : backgroundColor,
            backgroundColor,
            opacity: disabled ? 0.3 : 1,
            width: 200,
            margin: 10
        },
        text: {
            fontSize: 17,
            fontWeight: 'bold',
            color: fontColor || 'white'
        }
    });
    
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <View alignItems='center' style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Button = ({ title, type, disabled = false, onPress = () => {} }) => {
    switch(type){
        case 'WHITE': return <BasicButton title={title} disabled={disabled} borderColor="black" onPress={onPress} />;
        case 'BLACK': return <BasicButton title={title} disabled={disabled} backgroundColor="black" onPress={onPress} />;
        case 'GREEN': return <BasicButton title={title} disabled={disabled} backgroundColor="green" onPress={onPress} />;
        case 'RED': return <BasicButton title={title} disabled={disabled} backgroundColor="red" onPress={onPress} />;
    }
}

export default Button;