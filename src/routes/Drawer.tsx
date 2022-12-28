/* eslint-disable react/no-unstable-nested-components */
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '@components/Drawer';
import { HomeScreen } from '@screens/Home';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ViewRegisterScreen } from '@screens/ViewRegisterPoint';

const Drawer = createDrawerNavigator();

export function DrawerRouter() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerAllowFontScaling: true,
        drawerStyle: {
          width: wp('89%'),
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="View" component={ViewRegisterScreen} />
    </Drawer.Navigator>
  );
}
