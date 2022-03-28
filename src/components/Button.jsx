import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { string } from 'prop-types';


export default function Button(props) {
    const { label } = props;
    return (
        <View style={styles.ButtonContainer}>
            <Text style={styles.ButtonLabel}>{label}</Text>
        </View>
    );
}

Button.propTypes = {
    label: string.isRequired,
};

const styles = StyleSheet.create({
    ButtonContainer: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    ButtonLabel: {
        color: 'white',
        lineHeight: 32,
        fontSize: 16,
        paddingHorizontal: 8,
        paddingHorizontal: 32,

    },
});