import React, {Component} from 'react'
import {View} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {strings} from "../../../res/strings";

class CalendarScreen extends Component {
    static navigationOptions = {
        title: strings.calendarScreen_title,
    };

    render() {
        return (
            <View>
                <Calendar

                />
            </View>
        )
    }
}

export default CalendarScreen;
