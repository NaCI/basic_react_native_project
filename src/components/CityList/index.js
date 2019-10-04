import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';

export default class CityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: ''
        }
    }

    render() {
        const {data} = this.props;
        return (
            <View>
                <Text style={{color: 'red'}}>Cities</Text>
                {
                    data.map((city) => (
                        <Text>{city.name}</Text>
                    ))
                }
                <Picker
                    mode='dropdown'
                    selectedValue={this.state.selectedCity}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) => {
                        console.log(itemValue);
                        this.setState({selectedCity: itemValue})
                    }}>
                    {
                        data.map((city) => (
                            <Picker.Item label={city.name} value={city.plateNumber}/>
                        ))
                    }
                </Picker>
            </View>
        );
    }
}