import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('screen').height;
const deviceWidth  = Dimensions.get('screen').width;

export default {
    container: {
        marginTop:10,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 400,
        width: (deviceWidth),
        borderRadius: 5,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },
    barchart:{
        height: 390,
        padding:1
    }
}