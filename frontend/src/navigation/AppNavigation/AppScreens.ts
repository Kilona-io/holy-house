import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Chat} from '../../utils/types/Chat';

export enum AppScreens {
    LOGIN_SCREEN = 'LoginScreen',
    AUTH_NAVIGATION = 'AuthNavigation',
    SETTING_SCREEN = 'SettingScreen',
    SIGN_IN_SCREEN = 'SignInScreen',
    SIGN_UP_SCREEN = 'SignUpScreen',
    MAIN_SCREEN = 'MainScreen',
    CHAT_SCREEN = 'ChatScreen',
    HISTORY_CHATS_SCREEN = 'HistoryChatsScreen',
    STACK_NAVIGATION = 'StackNavigation',
}

export type AppScreensParamList = {
    [AppScreens.AUTH_NAVIGATION]: undefined;
    [AppScreens.LOGIN_SCREEN]: undefined;
    [AppScreens.SETTING_SCREEN]: undefined;
    [AppScreens.SIGN_IN_SCREEN]: undefined;
    [AppScreens.SIGN_UP_SCREEN]: undefined;
    [AppScreens.MAIN_SCREEN]: undefined;
    [AppScreens.CHAT_SCREEN]: {
        chat?: Chat;
    };
    [AppScreens.HISTORY_CHATS_SCREEN]: undefined;
    [AppScreens.STACK_NAVIGATION]: undefined;
};

export type AppScreensRouteProp<T extends AppScreens> = {
    navigation: NativeStackNavigationProp<AppScreensParamList, T>;
    route: RouteProp<AppScreensParamList, T>;
};
