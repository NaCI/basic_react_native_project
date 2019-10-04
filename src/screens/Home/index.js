import React, {Component} from 'react';
import {View, Text, Button} from 'react-native'
import CityList from '../../components/CityList';

class Home extends Component {

    //State'te veri tanımı yapmak için constructor kullanılır
    constructor(props) {
        super(props);
        this.state = {
            name: 'AliVeli',
            cities: [
                {name: 'İstanbul', plateNumber: 34},
                {name: 'Bursa', plateNumber: 16},
                {name: 'İzmir', plateNumber: 35}
            ],
            country: {
                name: 'Turkey',
                code: 90
            },
            districts: ['Kazan', 'Kadıköy']
        }
    }

    render() {
        //const {cities, country/*: {name, code}*/, district} = this.state;
        const {cities, country: {code}, districts} = this.state;
        //const {firstName, lastName} = this.props;

        // Navigation üzerinden gelen değişkenleri almak için getParam kullanılıyor
        const firstName = this.props.navigation.getParam('firstName', 'No Name');
        const lastName = this.props.navigation.getParam('lastName', 'No Surname');
        return (
            <View style={{paddingVertical: 50, paddingHorizontal: 50}}>
                <Text>{this.state.country.name}</Text>
                <Text>{`${firstName} - ${lastName}`}</Text>

                {/* Javascript yazmak için kod bloğu açılır, yorum için de aynı şekilde */}
                <CityList data={cities}/>
                <Text style={{color:'red'}}>Districts</Text>
                {/* Javascript kod bloğu tek return döner */}
                {
                    districts.map((district) => (
                        <Text>{`${district}`}</Text>
                    ))
                }
                <Button title={"ali veli"}/>
            </View>
        )
    }
}

export default Home;