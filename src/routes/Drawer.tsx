import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { CustomDrawer } from '../components/Drawer';
import { HomeScreen } from '../screens/Home';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();

export function DrawerRouter() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{
        headerShown: false,
        drawerAllowFontScaling: true,
        drawerStyle: {
            width: wp('89%')
        }
    }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}