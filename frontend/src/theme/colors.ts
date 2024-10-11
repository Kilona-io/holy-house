import {DefaultTheme} from 'react-native-paper';
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';

const colors = {
    ...DefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    background: '#181B29',
    primary: '#DD69A4',
    onPrimary: '#181B29',
    primaryWhite: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.10)',
    placeholder: '#FFFFFF99',
    darkBlueish: '#24252E',
    inputBackground: 'rgba(255, 255, 255, 0.02)',
};

export default colors;
