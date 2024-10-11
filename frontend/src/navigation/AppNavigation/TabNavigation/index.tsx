import * as React from 'react';
import {AppScreens, AppScreensParamList} from '../AppScreens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import theme from '../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingScreen from '../../../screens/Settings/SettingsScreen';
import StackNavigation from '../StackNavigation';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator<AppScreensParamList>();

const SCREENS_WITHOUT_TABS = [AppScreens.CHAT_SCREEN];

const TabNavigation = () => {
    const {t} = useTranslation();

    const getTabBarStyle = (routeName: AppScreens): any => ({
        display: SCREENS_WITHOUT_TABS.includes(routeName) ? 'none' : 'flex',
        backgroundColor: theme.colors.background,
        borderTopWidth: 0,
        tabBarLabel: '',
    });

    return (
        <Tab.Navigator
            initialRouteName={AppScreens.STACK_NAVIGATION}
            screenOptions={({route}) => {
                const routeName =
                    getFocusedRouteNameFromRoute(route) ??
                    AppScreens.STACK_NAVIGATION;
                return {
                    tabBarStyle: getTabBarStyle(routeName as AppScreens),
                    headerShown: false,
                };
            }}
        >
            <Tab.Screen
                name={AppScreens.STACK_NAVIGATION}
                component={StackNavigation}
                options={{
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                        <Icon name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={AppScreens.SETTING_SCREEN}
                component={SettingScreen}
                options={{
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                        <Icon name="cog" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;
