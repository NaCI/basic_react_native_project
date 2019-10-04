import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native'
import InputText from '../../components/InputText';

class Profile extends Component {

    //State'te veri tanımı yapmak için constructor kullanılır
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName:''
        }
    }

    buttonClicked = (firstName, lastName)=>{
        //alert(`${firstName} - ${lastName}`)
        // Navigation ile sayfa ('Home') ve değişken (jsonObject) ataması yapılır
        this.props.navigation.navigate(
            'Home', {firstName:firstName, lastName:lastName}
        )
    };

    render() {
        const {firstName, lastName} = this.state;
        return (
            <View style={{paddingVertical: 50}}>
                <Text>Deneme Profile</Text>
                <InputText title='name' placeholder='First Name' onChangeText = {
                    (text) => { this.setState({firstName:text})}}
                />
                <InputText title='lastname' placeholder='Last Name' onChangeText = {(text) => {
                    this.setState({lastName:text})}}
                />
                <TouchableOpacity
                    style={{borderWidth:2, backgroundColor:'purple', justifyContent:'center', alignItems:'center', borderRadius:5, alignSelf:'center', padding:5}}
                    onPress={ ()=>{
                        this.buttonClicked(firstName, lastName);
                    }}
                >
                    <Text>Devam</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Profile;