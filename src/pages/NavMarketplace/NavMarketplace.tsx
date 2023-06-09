import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ScreenSinglePost } from './ScreenPostDetails';
// import { ScreenPostsList } from './NavigatorFeedLists/ScreenPostsList';
import { ButtonIconCircle } from '../../atoms/Buttons/ButtonIconCircle';
import { View } from 'react-native';
import { NavMarketplaceLists } from './NavMarketplaceLists';
// import { NavigatorFeedLists } from './NavigatorFeedLists';

const Stack = createNativeStackNavigator();


/* @ts-ignore */
export const NavMarketplace = ({ navigation }) => {

  return (
    <Stack.Navigator initialRouteName="MarketplaceLists">
      <Stack.Screen name="MarketplaceLists" component={NavMarketplaceLists}
      options={{
        headerLeft: () => <View style={{ marginRight: 20}}><ButtonIconCircle func={() => navigation.openDrawer()} iconTitle='menu' size={36} color="#333" /></View>
      }}
      />
      {/* <Stack.Screen name="PostDetails" component={ScreenSinglePost} /> */}
    </Stack.Navigator>
  )
}
