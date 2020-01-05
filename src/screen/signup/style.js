import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  container:{
    backgroundColor:'#ddd'
  },
  logoContainer: {
    height:(height / 6),
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    // flex: 0.80,
    // alignItems: "center",
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 10
  },
  menuIcon: {
    fontSize: 26,
    color: "#000"
  },
  logo: {
    width: (width),
  },
  form: {
  },
  input: {
      width: (width - 80),
      height: (height / 12),
      padding: 10,
      borderWidth: 0.8,
      borderColor: '#aaa',
      marginBottom: 15,
  },
  button: {
    justifyContent: "center",
    width: (width - 80),
    height: (height / 12),
    marginTop: (height / 48),
  },
  buttonText: {
    color:'#fff',
    alignSelf: "center",
    fontSize: 20
  },
  link:{
    marginTop: (height / 35),
    justifyContent: "center",
    width: (width - 80),
    height: (height / 12),
    borderWidth: 2,
    borderRadius: 1,
    borderColor: 'green',
  },
  linkContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  linkText:{
    color:'green',
    alignSelf: "center",
    fontSize: 20
  },
  linkTextButton:{
    padding:10,
    color:'green',
    alignSelf: "center",
    fontSize: 20
  },
  headerText:{
    color:'black',
    fontWeight:'bold',
    alignSelf: "center",
    fontSize: 20,
    paddingTop:60,
    paddingBottom:20
  },
  cardView: {
    paddingTop:20,
    width: width - 50,
    height: height / 1.7,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'white',
},
};
