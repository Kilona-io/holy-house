import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import * as React from 'react';
import TabNavigation from './TabNavigation';
import {Logger} from '../../utils/index';
import {useEffect} from 'react';
import {useIsAuthenticated} from '../../store/authStore';
import AuthNavigation from './AuthNavigation/idnex';

export default function Navigation() {
    const isAuthenticated = useIsAuthenticated();
    const navigationContainerRef =
        React.useRef<NavigationContainerRef<any>>(null);

    useEffect(() => {
        async function initialize() {
            Logger.success('App Initialized');
        }
        initialize();
    }, []);

    const handleNavigationStateChange = async () => {
        const currentRouteName =
            navigationContainerRef.current?.getCurrentRoute()?.name;
        try {
            Logger.info(`Screen: ${currentRouteName || 'Screen not known'}`);
        } catch (e) {
            Logger.error(`Error in handleNavigationStateChange: ${e}`);
        }
    };

    return (
        <NavigationContainer
            onStateChange={handleNavigationStateChange}
            ref={navigationContainerRef}
        >
            {isAuthenticated ? <TabNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    );
}
