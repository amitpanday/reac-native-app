import React                              from 'react';
import { Root }                           from "native-base";
import { createAppContainer }             from 'react-navigation';
import { createDrawerNavigator }          from 'react-navigation-drawer'
import { createStackNavigator }           from 'react-navigation-stack';

// custome component
import SideBar                            from './screen/common/sidebar/index'
import HomeScreen                         from './screen/home/index';
import Dashboard                          from './screen/dashboard/index';
import SignUp                             from './screen/signup/index';
import SignIn                             from './screen/login/index';
import ForgotPassword                     from './screen/user/forgotpassword/index';
import Profile                            from './screen/user/profile/index';
import Category                           from './screen/categories/category/index';
import Details                            from './screen/categories/details/index';
import Notification                       from './screen/notification/index';
import RFQ                                from './screen/rfq/index';



// const dashboard = createDrawerNavigator (
//     {
//       Dashboard      : Dashboard,
//       Profile        : Profile,
//     },
//     {
//       contentOptions: {
//         activeTintColor: "#e91e63"
//       },
//       initialRouteName: "Dashboard",
//     }
// );

const Drawer = createDrawerNavigator (
  {
    Home           : HomeScreen,
    Dashboard      : Dashboard,
    Profile        : Profile,
    RFQ            : RFQ,
    Notification   : Notification,
    // Logout         : HomeScreen
  },
  {
    initialRouteName: "Dashboard",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props =><SideBar {...props}/>
  }
);

// const tab  = createBottomTabNavigator (
//     {
//       Dashboard      : dashboard,
//       Profile        : profile,
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//           const { routeName } = navigation.state;
//           if (routeName === 'Dashboard') {

//             return <Icon name="home" size={25} style={{color:'green'}}/>;
//           } else if (routeName === 'Profile') {

//             return <Icon name="person" size={25} style={{color:'green'}}/>;
//           }
//         },
//       }),
//       tabBarOptions: {
//               activeTintColor: '#d39736',
//               inactiveTintColor: '#263238',
//               labelStyle: {
//                 fontSize: 16,
//                 fontWeight:'bold'
//               }
//             },
//       initialRouteName: "Dashboard",
//     }
// );

const AppNavigator = createStackNavigator(
    {
      // Dashboard      : tab,
      Drawer         : Drawer,
      Home           : HomeScreen,
      SignUp         : SignUp,
      SignIn         : SignIn,
      ForgotPassword : ForgotPassword,
      Category       : Category,
      Details        : Details
    },
    {
      initialRouteName: "SignIn",
      headerMode: 'none',
    }
);
const AppContainer = createAppContainer(AppNavigator);

    const App = () => (
        <Root>
          <AppContainer />
        </Root>
    )

    export default App