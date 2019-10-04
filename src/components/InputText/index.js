import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';

export default class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedValue: ''
        }
    }

    render() {
        const {title} = this.props;
        return (
            <View style={styles.inputStyle}>
                <Text>{title}</Text>
                <TextInput
                    {...this.props}
                    style={styles.textInputStyle} placeholderTextColor='black'/>
            </View>
        )
    }
}