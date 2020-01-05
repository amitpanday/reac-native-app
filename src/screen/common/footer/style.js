import {Dimensions} from 'react-native';

const devicesHeight = Dimensions.get('screen').height;
const devicesWidth = Dimensions.get('screen').width;

const color = {
    color:'red'
};

export default{

    container:{
        backgroundColor:'#3464a2'
    },
    menuIcon:{
        color:'#fff',
        fontSize:28,
    },
    menuTitle:{
        color:'#fff'
    }
};