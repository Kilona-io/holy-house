import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppScreens} from '../AppScreens';
import MainScreen from '../../../screens/App/MainScreen';
import ChatScreen from '../../../screens/App/ChatScreen';
import HistoryChatsScreen from '../../../screens/App/HistoryChatsScreen';
import theme from '../../../theme';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={AppScreens.MAIN_SCREEN}
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.background,
                },
                headerTintColor: theme.colors.primary,
                headerTitleStyle: {
                    fontSize: 24,
                    color: theme.colors.primaryWhite,
                },
            }}
        >
            <Stack.Screen
                name={AppScreens.MAIN_SCREEN}
                options={{
                    headerTitle: 'Holy House',
                }}
                component={MainScreen}
            />
            <Stack.Screen
                name={AppScreens.CHAT_SCREEN}
                component={ChatScreen}
                options={{
                    headerTitle: 'Holy House',
                }}
            />
            <Stack.Screen
                name={AppScreens.HISTORY_CHATS_SCREEN}
                component={HistoryChatsScreen}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
