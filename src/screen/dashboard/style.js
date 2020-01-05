import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const style = {
      container:{
        flex: 1,
        // marginTop: 20,
        backgroundColor:'#ddd'
        // backgroundColor:'red'
      },
      scrollView:{
        // backgroundColor: 'pink',
        // marginHorizontal: 20,
        // width:
      },
      header:{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height:(deviceHeight / 13),
          backgroundColor:'#3464a2'
      },
      leftHeader:{
        alignItems:'flex-start',
      },
      rightHeader:{
        alignItems:'flex-end',
      },
      heading:{
        fontSize:20,
        fontWeight:'bold',
        padding:10
      },
      heading2:{
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        color:'#fff'
      },
      text: {
        fontSize: 42,
      },
      bulletsContainerStyle: {
        bottom: 0,
      },
      category:{
        alignItems:'center',
        backgroundColor:'#fff',
        height:(deviceHeight / 4.5),
        borderRadius:5,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
      },
}
export default style;