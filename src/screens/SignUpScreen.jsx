import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignUpScreeen (){
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.Inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.Input} value='Email Adress'/>
                <TextInput style={styles.Input} value='Password'/>
                <Button label='submit' />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Aready registered?  </Text>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Log In.</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
    Inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        lineHeight: 32,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    Input: {
        color: '#DDDDDD',
        fontSize: 16,
        height: 48,
        paddingHorizontal: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: 'white',
    },
    footer: {
        flexDirection: 'row',
    },
    footerText: {
        lineHeight: 24,
        fontSize: 14,
    },
    footerLink: {
        color: '#467FD3',
        lineHeight: 24,
        fontSize: 14,
    },
});