import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  container: {
    backgroundColor: "#fff",
  },
  drawerProfileCover: {
    flex:1,
    height: height / 4,
    backgroundColor: '#3464a2'
  },
  drawerImage: {
    top: (height / 13),
    justifyContent: 'center',
    alignItems: 'center',
    overFlow:'hidden',
    width: (width / 4),
    height: (height / 8),
    borderRadius: (100 / 2),
  },
  profileImage: {
    width: 60,
    height: 60,
  },
  emailText: {
    marginLeft: ( width / 6),
  },
  menuList:{
    paddingTop:20,
  },
  menuTitle: {
    padding: 2,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    paddingTop: (height / 9),
  },
  nameText:{
    fontWeight: 'bold',
    fontSize: 18,
    color:'#fff'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerText: {
    textAlign: "center",
    marginTop: 5
  },
  menuicon:{
    fontSize:30,
    color:'#3464a2',
    padding:5
  }
};
