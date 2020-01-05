import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default {
      sliderContainer:{
        // flex:1,
        // paddingRight:5,
        width: (deviceWidth), 
        height:(deviceHeight / 5),
        alignContent:'center',
        alignItems: 'stretch'
      },
      contentContainer: {
        // borderWidth: 2,
        // borderColor: '#CCC',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      sliderImage:{
        width: (deviceWidth), 
        height: (deviceHeight / 5),
        alignContent:'center',
        alignItems: 'stretch'
      },
      sliderText: {
        position: "absolute",
        left: 30,
        bottom: 30,
        color: "red",
        fontSize: 25,
        fontWeight:'bold',
      },
}