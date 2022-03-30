import React from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LoginScreen (props){
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.Inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.Input} value='Email Adress'/>
                <TextInput style={styles.Input} value='Password'/>
                <Button 
                    label='submit'
                    onPress={() => { 
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'MemoList'}],
                        });
                    }} 
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered? </Text>
                    <TouchableOpacity
                        onPress={ () => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'SignUp' }],
                            });
                        }}
                    >
                        <Text style={styles.footerLink}>Click here!</Text>
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