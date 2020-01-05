import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
      container:{
        flex:1,
        backgroundColor:"#ddd"
      },
      contentList:{
        flex:1,
      },
      image:{
        width:(width / 8),
        height:(height / 15),
        borderRadius:50,
        // paddingTop:20,
        borderColor:'#aaa',
        borderWidth:0.9,
      },
    
      card:{
        height:(height / 10),
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 4,
    
        marginLeft: 20,
        marginRight: 20,
        marginTop:10,
        marginBottom:5,
        backgroundColor:"white",
        padding: 5,
        // flexDirection:'row',
        borderRadius:10,
      },
    
      name:{
        fontSize:16,
        alignSelf:'center',
        color:"#3399ff",
        fontWeight:'bold',
        justifyContent: 'center',
        lineHeight:20,
        // textAlign:'center',
        textTransform:'capitalize'
      },
      rfqId:{
        flex:1,
        fontSize:14,
        alignSelf:'center',
        color:"#3477eb",
        fontWeight:'bold',
        // textAlign:'center',
      },
      biddingStatus:{
        fontSize:14,
        color:"green",
        fontWeight:'bold',
      },
      actionFlag:{
        fontSize:14,
        color:"#eb6e34",
        fontWeight:'bold',
      },
      Icon:{
        fontSize:20,
        color:'#1085c9',
        paddingRight:2
      }
};
