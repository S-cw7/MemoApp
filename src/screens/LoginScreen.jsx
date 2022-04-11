import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../components/Button';

export default function LoginScreen (props){
    const { navigation } = props;
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('useEffect!');
        return () => {
            console.log('Unmount!');
        };
    }, []);

    useEffect (() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if(user) => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'MemoList'}],
                }); 
            }
        });
        return unsubscribe;
    }, []);

    function handlePress() {
        firebase.auth() .signInWithEmailAndPassword(email.password)
            .then((userCredentail) => {
                const { user } = userCredentail;
                console.log(user.uid);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'MemoList'}],
                });
            })
            .catch((error) => {
                Alert.alert(erorr.code);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.Inner}>
                <TextInput 
                    style={styles.Input} 
                    value={email}
                    onChangeText={(text) => { setEmail(text); }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Adress"
                    textContentType="emailAddress"
                />
                <TextInput 
                    style={styles.Input} 
                    value={password}
                    onChangeText={(text) => { setPassword(text); }}
                    autoCapitalize="none"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />
                <Button 
                    label='submit'
                    onPress={handlePress} 
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