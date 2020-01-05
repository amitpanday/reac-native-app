import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default {

    heading:{
        fontSize:20,
        fontWeight:'bold',
        padding:10
    },
    // separator:{
    //     width: (deviceWidth / 35),
    // },
    link:{
        justifyContent: "center",
        width: (deviceHeight / 4),
        height: (deviceHeight / 16),
        borderWidth: 0.6,
        borderRadius: 100/2,
        borderColor: '#ddd',
        padding:10,
        backgroundColor:'#fff',
        borderBottomWidth: 0.5,
        shadowColor: '#000',
        shadowOffset: 8,
        shadowOpacity: 2,
        shadowRadius: 1,
    },
}