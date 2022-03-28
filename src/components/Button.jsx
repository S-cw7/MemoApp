import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { string, func } from 'prop-types';


export default function Button(props) {
    const { label, onPress } = props;
    return (
        <TouchableOpacity style={styles.ButtonContainer} onPress={onPress}>
            <Text style={styles.ButtonLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

Button.propTypes = {
    label: string.isRequired,
    onPress: func,
};

Button.defaultProps = {
    onPress: null,
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