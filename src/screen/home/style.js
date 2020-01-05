import { Dimensions } from 'react-native';
const deviceWidth  = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const styles = {
  container:{
    backgroundColor:'#ddd',
  },
  sliderContainer:{
    // paddingLeft:(deviceWidth / 18),
    // alignSelf:'center',
    // alignItems:'center',
    // backgroundColor:'red'
  },
  categorySlider:{
    // paddingTop :1,
    // paddingLeft:(deviceWidth / 18),
    backgroundColor:'#fff',
    height:(deviceHeight / 10)
  },
}
export default styles;