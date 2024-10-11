import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {useUserData, useLogout} from '../../store/authStore';
import {User} from '@supabase/supabase-js';
import theme from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';

const SettingsScreen = () => {
    const userData: User = useUserData();
    const logout = useLogout();

    return (
        <SafeAreaView style={theme.styles.container}>
            <Text variant={'titleLarge'} style={theme.styles.title}>
                User Information
            </Text>
            <Text variant={'titleLarge'} style={theme.styles.title}>
                Email: {userData.email}
            </Text>
            <Text variant={'titleLarge'} style={theme.styles.title}>
                User ID: {userData.id}
            </Text>
            <Button mode={'contained'} onPress={logout}>
                Log Out
            </Button>
        </SafeAreaView>
    );
};

export default SettingsScreen;
