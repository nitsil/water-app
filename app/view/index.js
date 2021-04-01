import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import History from './history'
import WaterDetails from './water'
import LoginScreen from './login'
import { useSelector } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

const LoginStack = createStackNavigator();
const TabNavigator = createBottomTabNavigator()

function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center' }}
                        key={`tab_button_${index}`}
                    >
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

function Navigation() {
    const token = useSelector(store => store.auth.token)
    const isLogin = !!token
    return (
        <NavigationContainer>
            {
                !isLogin ?
                    <LoginStack.Navigator>
                        <LoginStack.Screen name="Login" component={LoginScreen} options={{ title: 'Log in' }} />
                    </LoginStack.Navigator>
                    :
                    <TabNavigator.Navigator initialRouteName="WaterDetails"
                        tabBarOptions={{
                            activeTintColor: 'blue',
                        }}
                        tabBar={props => <MyTabBar {...props} />}
                    >
                        <TabNavigator.Screen name="WaterDetails" component={WaterDetails} />
                        <TabNavigator.Screen name="History" component={History} />
                    </TabNavigator.Navigator>

            }
        </NavigationContainer>

    );
}



export default Navigation;