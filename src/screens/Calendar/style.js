import {StyleSheet} from 'react-native'

const styles = StyleSheet.create(
    {
        inputStyle: {
            borderWidth: 5,
            backgroundColor: 'grey',
            margin: 10,
            paddingLeft: 10,
            paddingTop: 5
        },
        textInputStyle: {
            backgroundColor: 'silver',
            margin: 5
        },
        container: {
            flex: 1,
            paddingTop: 12
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
        buttonStyle: {
            borderWidth: 2,
            backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            alignSelf: 'center',
            padding: 5
        }
    }
);

export default styles;
