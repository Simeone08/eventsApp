import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home';
import Content from './screens/contents';
import Notifications from './screens/notifications';
import Partners from './screens/partners';
import Schedule from './screens/schedule';

import { Entypo, Feather } from '@expo/vector-icons';
import { Palestrantes } from './screens/palestrantes';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarStyle:{
                    paddingBottom: 20,
                    paddingTop: 5,
                    backgroundColor: 'black',
                },
                
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                }} 
            />

            <Tab.Screen 
                name="Conteúdo" 
                component={Content} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="book-open" size={size} color={color} />
                    ),
                }} 
            />
            
            <Tab.Screen 
                name="Notificações" 
                component={Notifications} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="notification" size={size} color={color} />
                    ),
                }} 
            />
            
            <Tab.Screen 
                name="Parceiros" 
                component={Partners} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="users" size={size} color={color} />
                    ),
                }} 
            />
            
            <Tab.Screen 
                name="Programação" 
                component={Schedule} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="info" size={size} color={color} />
                    ),
                }}
            />

                        <Tab.Screen 
                name="Palestrantes" 
                component={Palestrantes} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="mic" size={size} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}