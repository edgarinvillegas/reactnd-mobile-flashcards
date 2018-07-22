import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BasicButton = ({ title, borderColor, fontColor = borderColor, backgroundColor, onPress = () => {} }) => {
    const styles = StyleSheet.create({
        container: {
            borderWidth: 2,
            borderColor,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            padding: 17,
            backgroundColor,
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
        <TouchableOpacity onPress={onPress}>
            <View alignItems='center' style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Button = ({ title, type, onPress = () => {} }) => {
    switch(type){
        case 'WHITE': return <BasicButton title={title} borderColor="black" onPress={onPress} />;
        case 'BLACK': return <BasicButton title={title} backgroundColor="black" onPress={onPress} />;
        case 'GREEN': return <BasicButton title={title} backgroundColor="green" onPress={onPress} />;
        case 'RED': return <BasicButton title={title} backgroundColor="red" onPress={onPress} />;
    }
}

export default Button;