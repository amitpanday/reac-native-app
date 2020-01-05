import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {

    container:{
        // flex:1,
        backgroundColor:"#ddd"
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:(height / 13),
        backgroundColor:'#3464a2',
    },
    heading:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:22,
        alignItems:'center',
        color:'#fff'
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
        borderRadius: 25,
        width: (width / 6),
        height: (height / 10.5),
      },
      nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: (width / 1),
      },
      nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 15,
      }
};
