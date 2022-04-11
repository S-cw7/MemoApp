import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Button from '../components/Button';
import firebase from 'firebase';


export default function SignUpScreeen (props){
    const { navigation } = props;
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    function handlePress() {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const {user} = userCredential;
                console.log(user.uid);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'MemoList'}],
                });
            })
            .catch((error) => {
                console.log(error.code, error.message);
                Alert.alert(error.code);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.Inner}>
                <Text style={styles.title}>Sign Up</Text>
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
                    <Text style={styles.footerText}>Aready registered?  </Text>
                    <TouchableOpacity 
                        onPress={ () => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'LogIn' }],
                            }); 
                        }}
                    >
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