import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { IMAGES, SCREEN } from "../constants/constants";
import { Image } from "react-native";
import ShopScreen from "../screens/tabs/ShopScreen";
import ExploreScreen from "../screens/tabs/ExploreScreen";
import CartScreen from "../screens/tabs/CartScreen";
import FavoriteScreen from "../screens/tabs/FavoriteScreen";
import AccountScreen from "../screens/tabs/AccountScreen";
import { COLORS } from "../theme/theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN.SHOP}>
      <Stack.Screen
        name={SCREEN.SHOP}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREEN.SHOP}
        component={ShopScreen}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.SHOP}
              style={{
                height: 20,
                width: 20,
                tintColor: focused
                  ? COLORS.primaryGreenHex
                  : COLORS.primaryBlackHex,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.primaryGreenHex,
          tabBarInactiveTintColor: COLORS.primaryBlackHex,
        }}
      />
      <Tab.Screen
        name={SCREEN.EXPLORE}
        component={ExploreScreen}
        options={{
          title: "Find Products",
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.EXPLORE}
              style={{
                height: 15,
                width: 20,
                tintColor: focused
                  ? COLORS.primaryGreenHex
                  : COLORS.primaryBlackHex,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.primaryGreenHex,
          tabBarInactiveTintColor: COLORS.primaryBlackHex,
        }}
      />
      <Tab.Screen
        name={SCREEN.CART}
        component={CartScreen}
        options={{
          title: "My Cart",
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.CART}
              style={{
                height: 20,
                width: 20,
                tintColor: focused
                  ? COLORS.primaryGreenHex
                  : COLORS.primaryBlackHex,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.primaryGreenHex,
          tabBarInactiveTintColor: COLORS.primaryBlackHex,
        }}
      />
      <Tab.Screen
        name={SCREEN.FAVOURITE}
        component={FavoriteScreen}
        options={{
          title: "Favourite",
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.FAVOURITE}
              style={{
                height: 20,
                width: 20,
                tintColor: focused
                  ? COLORS.primaryGreenHex
                  : COLORS.primaryBlackHex,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.primaryGreenHex,
          tabBarInactiveTintColor: COLORS.primaryBlackHex,
        }}
      />
      <Tab.Screen
        name={SCREEN.ACCOUNT}
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <Image
              source={IMAGES.ACCOUNT}
              style={{
                height: 20,
                width: 20,
                tintColor: focused
                  ? COLORS.primaryGreenHex
                  : COLORS.primaryBlackHex,
              }}
            />
          ),
          tabBarActiveTintColor: COLORS.primaryGreenHex,
          tabBarInactiveTintColor: COLORS.primaryBlackHex,
        }}
      />
    </Tab.Navigator>
  );
};
