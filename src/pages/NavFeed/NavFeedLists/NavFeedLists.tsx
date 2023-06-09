import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
// import { ScreenUserProfile } from './ScreenUserProfile'
// import { ScreenUserSettings } from './ScreenUserSettings'
import { Icon } from '@react-native-material/core'
// import { ScreenGardenPage } from './ScreenGardenPage'
// import { NavigatorGardenSettings } from '../NavigatorGardenSettings'
import { View } from 'react-native'
import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ScrNewsList } from './ScrNewsList'
import { ScrPostsList } from './ScrPostsList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { ScreenPostDetails } from '../ScrPostDetails'
// import { ScreenGardenInfo } from './ScreenGardenPage'
// import { ScreenGardenFeed } from './ScreenGardenFeed/ScreenGardenFeed'

const Tab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator();

/* @ts-ignore */
export const NavFeedLists = ({ navigation }) => {
  return (
    <Tab.Navigator screenOptions={() => ({
      tabBarActiveTintColor: '#1A6111',
      tabBarInactiveTintColor: "#000",
      tabBarIndicatorStyle: { backgroundColor: '#1B8113' },
    })}>
      {/* <Tab.Screen
        name="News"
        component={ScrNewsList}
        options={{
          // tabBarIcon: () => <Icon name='nature-people' size={26} color='#666' />,
          // headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
          
        }}
      /> */}
      <Tab.Screen
        name="Posts"
        component={ScrPostsList}
        options={{
          // headerShown: false,
          // tabBarIcon: () => <Icon name='settings' size={26} color='#666' />
        }}
      // navigation={navigation}
      />
      {/* <Stack.Screen name="PostDetails" component={ScreenPostDetails} /> */}
    </Tab.Navigator>
  )
}
