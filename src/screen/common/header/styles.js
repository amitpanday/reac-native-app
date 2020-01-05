import {Dimensions} from 'react-native';

const deviceWidth   = Dimensions.get('screen').width;
const deviceHeight  = Dimensions.get('screen').height;



const iconStyle = {
  fontSize: 26,
  color: "#fff"
};

export default {
  header: {
    height: (deviceHeight / 18),
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#3464a2",
    flexDirection: "column",
    elevation: 0,
  },
  logo: {
    width: (deviceWidth / 2.5),
    height: (deviceHeight / 17),
  },
  menuIcon: {
    ...iconStyle,
    marginLeft: 15
  },
  cartIcon: {
    ...iconStyle,
    marginRight: 20,
  },
  headerContent: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  headerRow: {
    flex: 1,
    flexDirection: "row"
  },
  headerTopRow: {
    height: (deviceHeight / 20)
  },
  title : {
    color: "#fff",
  },

  // Header Default Type
  defaultHeader: {
    height: (deviceHeight / 12),
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#3464a2",
    flexDirection: "column",
    elevation: 0,
  },

  // Header Context Type
  contextHeader: {
    height: (deviceHeight / 12),
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#3464a2",
    flexDirection: "column",
    elevation: 0,
  }
};
