import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

export default {
    container: {
        // flex:1,
        backgroundColor: "#ddd"
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    pic: {
        borderRadius: 50,
        width: (deviceWidth / 6),
        height: (deviceHeight / 12),
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: (deviceWidth / 1),
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: 'bold',
        color: '#140f0e',
        fontSize: 15,
    }
}