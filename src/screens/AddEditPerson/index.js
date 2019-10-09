import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Switch} from 'react-native'
import InputText from '../../components/InputText';
import styles from './style'
import {addUser} from "../AddEditPerson/action";
import {connect} from "react-redux";
import {strings} from '../../../res/strings';

class AddEditPerson extends Component {

    //State'te veri tanımı yapmak için constructor kullanılır
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            isMarried: false
        }
    }

    addButtonClicked = (name, age, isMarried) => {
        const user = {name: name, age: age, isMarried: isMarried};
        const {addUserDispatch, users, navigation} = this.props;
        addUserDispatch(user, users);

        navigation.goBack();
    };

    render() {
        const {name, age, isMarried} = this.state;
        return (
            <View style={{paddingVertical: 50}}>
                <Text>{strings.add_new_user_title}</Text>
                <InputText title={strings.inputtext_name_surname}
                           placeholder={strings.inputtext_name_surname_placeholder}
                           onChangeText={
                               (text) => {
                                   this.setState({name: text})
                               }}
                />
                <InputText keyboardType='numeric'
                           title={strings.inputtext_age}
                           placeholder={strings.inputtext_age_placeholder}
                           onChangeText={(text) => {
                               this.setState({age: text})
                           }}
                />
                <Text>{strings.is_married_question_kind}</Text>
                <Switch
                    value={isMarried}
                    onValueChange={(value) => {
                        this.setState({isMarried: value});
                        console.log(value);
                    }}/>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        this.addButtonClicked(name, age, isMarried);
                    }}
                >
                    <Text>{strings.continue}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        users: store.listPerson.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUserDispatch: (user, userList) => {
            dispatch(addUser(user, userList))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditPerson);