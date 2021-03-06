import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps146193Navigator from '../features/Maps146193/navigator';
import Add-Item146192Navigator from '../features/Add-Item146192/navigator';
import Maps146188Navigator from '../features/Maps146188/navigator';
import UserProfile146184Navigator from '../features/UserProfile146184/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps146193: { screen: Maps146193Navigator },
Add-Item146192: { screen: Add-Item146192Navigator },
Maps146188: { screen: Maps146188Navigator },
UserProfile146184: { screen: UserProfile146184Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
