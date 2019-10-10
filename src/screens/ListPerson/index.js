import React, {Component} from 'react';
import {Alert, View, FlatList, TouchableOpacity, Text} from 'react-native';
import PersonListItem from "../../components/ListItems/PersonListItem";
import styles from './style';
import {connect} from 'react-redux';
import {deleteUser} from './action';
import {strings} from '../../../res/strings';


class ListPersonScreen extends Component {

    handlerLongClick = (item, index) => {
        console.log('Long Press on Item : ' + item.name + ' - ' + item.age + '\nItem Index : ' + index);
        this.showDeleteAlertDialog(item, index);
    };

    handlerClick = (item) => {
        //console.log('Press on Item : ' + item);
    };

    addButtonClicked = () => {
        this.props.navigation.navigate('AddEditPerson')
    };

    onDeleteUserClicked = (index) => {
        const {deleteUserDispatch, users} = this.props;
        deleteUserDispatch(index, users);
    };

    showDeleteAlertDialog = (user, index) => {
        Alert.alert(
            'Uyarı',
            `${user.name} isimli kullanıcıyı silmek istiyor musunuz?`,
            [
                {
                    text: 'İptal',
                    style: 'cancel',
                },
                {
                    text: 'Sil',
                    onPress: () => {
                        console.log('Sil tıklandı');
                        this.onDeleteUserClicked(index);
                    }
                },
            ],
            {cancelable: false})
    };

    render() {
        const {users} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        borderWidth: 2,
                        backgroundColor: 'purple',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        alignSelf: 'center',
                        padding: 5
                    }}
                    onPress={this.addButtonClicked}
                >
                    <Text>{strings.add_new_user}</Text>
                </TouchableOpacity>
                <Text>{strings.user_list}</Text>
                <FlatList
                    //keyExtractor={item => item.key}
                    keyExtractor={(item, index) => index}
                    //data={this.MOCK_DATA}
                    data={users}
                    renderItem={({item, index}) =>
                        <PersonListItem
                            onLongPress={() => {
                                this.handlerLongClick(item, index)
                            }}
                            onPress={this.handlerClick}
                            user={item}
                        />
                    }
                />
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
        deleteUserDispatch: (index, userList) => {
            dispatch(deleteUser(index, userList))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPersonScreen);