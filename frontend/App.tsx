import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation/AppNavigation';

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Navigation />
        </>
    );
}
