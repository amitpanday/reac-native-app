import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default {
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    category: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: (deviceHeight / 4.5),
        borderRadius: 5,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },
    pieContainer: {
        // backgroundColor:'red'
    },
    piChart: {
        height: (deviceHeight / 7),
        width: (deviceWidth / 3),
        alignSelf: 'center',
        borderColor: '#fff',
        borderRadius: 0.4,
        borderWidth: 0.5,
        borderBottomWidth: 0.5,
        shadowColor: '#000',
        shadowOffset: 15,
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
    ullist: {
        // backgroundColor:'yellow',
        // alignItems: 'center',
        // marginButtom:20
    },
    ulCircle: {
        width: 10,
        height: 10,
        borderRadius: 100 / 2,
        borderColor: 'orange',
        borderWidth: 2,
        margin: 5
    },
    ul: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },
    contentContainer: {
        // backgroundColor:'red',
        height: (deviceHeight / 4.5),
    },
    content: {
        flexDirection: 'row'
    },
}