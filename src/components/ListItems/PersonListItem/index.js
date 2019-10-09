import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {strings} from '../../../../res/strings';

export default class PersonListItem extends Component {
    render() {
        const {user} = this.props;
        return (
            <TouchableOpacity
                {...this.props}
                //onLongPress={() => {
                //    this.handlerLongClick(user, selectedItemIndex)
                //}}
                //onPress={this.handlerClick}
                //Here is the trick
                activeOpacity={0.6}
                style={styles.textInputStyle}>
                <Text style={styles.inputStyle}>{user.name}</Text>
                <Text style={styles.inputStyle}>{user.age}</Text>
                <Text>{strings.is_married_question} {user.isMarried ? strings.yes : strings.no}</Text>
            </TouchableOpacity>
        )
    }
}