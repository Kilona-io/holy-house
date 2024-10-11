import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../../screens/auth/SignInScreen';
import SignUpScreen from '../../../screens/auth/SignUpScreen';
import {AppScreens} from '../AppScreens';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={AppScreens.SIGN_IN_SCREEN}
                component={SignInScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={AppScreens.SIGN_UP_SCREEN}
                component={SignUpScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigation;
