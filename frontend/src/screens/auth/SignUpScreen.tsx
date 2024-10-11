import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../theme';
import {useRegister} from '../../store/authStore';
import {AppScreens} from '../../navigation/AppNavigation/AppScreens';
import {Title} from 'react-native-paper';
import StyledInput from '../../components/ui/StyledInput';
import StyledButton from '../../components/ui/StyledButton';

interface SignUpScreenProps {
    navigation: {
        navigate: (screen: AppScreens) => void;
    };
}

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = useRegister();

    const handleSignUp = () => {
        register(email, password);
    };

    return (
        <SafeAreaView style={theme.styles.container}>
            <Title style={theme.styles.title}>Sign Up</Title>
            <StyledInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <StyledInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <StyledInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <StyledButton mode="contained" onPress={handleSignUp}>
                Sign Up
            </StyledButton>
            <StyledButton
                mode="contained"
                onPress={() => navigation.navigate(AppScreens.SIGN_IN_SCREEN)}
            >
                Go to Sign In
            </StyledButton>
        </SafeAreaView>
    );
};

export default SignUpScreen;
