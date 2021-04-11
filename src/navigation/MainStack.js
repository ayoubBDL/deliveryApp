import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './tabs';

import { Home, OrderDelivery, Restaurant } from '../screens';


const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={'Home'} component={Tabs} />
            <Stack.Screen name={'OrderDelivery'} component={OrderDelivery} />
            <Stack.Screen name={'Restaurant'} component={Restaurant} />
        </Stack.Navigator>
    )
}

export default MainStack;