import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

 
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
      </View>
    );
  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
  
  const Drawer = createDrawerNavigator();
  
  function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName="Details">
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{ drawerLabel: 'Updates' }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ drawerLabel: 'Profile' }}
        />
      </Drawer.Navigator>
    );
  }
  
    const Header = () => {
        return (
            <MyDrawer />
        );
    }

export default Header;
  