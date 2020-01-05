import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {

      container:{
        backgroundColor:'#ddd'
      },
      header:{
        flex:1,
        backgroundColor: "#425fe3",
        height:(height / 4.5)
      },
      headerContent:{
        paddingTop:10,
        alignItems: 'center',
      },
      avatar: {
        width: (width / 4.5),
        height: (height / 8),
        borderRadius: 100/2,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        paddingTop:20,
      },
      bodyContent:{
        // padding:8,
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      menuBox:{
        backgroundColor: "#fff",
        width:(width /3.5),
        height:(height / 7),
        alignItems: 'center',
        justifyContent: 'center',
        margin:7,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
          height:2,
          width:-2
        },
        elevation:4,
        borderRadius:6,
      },
      icon: {
        width:(width /8),
        height:(height / 16),
      },
      info:{
        fontSize:15,
        color: 'black',
        // fontWeight:'bold',
        alignItems:'center',
        margin:5
      }
};