import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Title} from 'react-native-paper';
import theme from '../../theme';
import {useLogin} from '../../store/authStore';
import {AppScreens} from '../../navigation/AppNavigation/AppScreens';
import StyledInput from '../../components/ui/StyledInput';
import StyledButton from '../../components/ui/StyledButton';

interface SignInScreenProps {
    navigation: {
        navigate: (screen: AppScreens) => void;
    };
}

const SignInScreen = ({navigation}: SignInScreenProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();

    const handleSignIn = () => {
        if (!email || !password) return;
        login(email, password);
    };

    const handleNavigateSingUp = () => {
        navigation.navigate(AppScreens.SIGN_UP_SCREEN);
    };

    return (
        <SafeAreaView style={theme.styles.container}>
            <View style={theme.styles.container} className="marginTop-15">
                <Title style={theme.styles.title}>Sign In</Title>
                <StyledInput
                    placeholder="Email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <StyledInput
                    autoCapitalize="none"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <StyledButton mode="contained" onPress={handleSignIn}>
                    Sign In
                </StyledButton>
                <StyledButton mode="contained" onPress={handleNavigateSingUp}>
                    Go to Sign Up
                </StyledButton>
            </View>
        </SafeAreaView>
    );
};

export default SignInScreen;
