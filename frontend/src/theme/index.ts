import {DefaultTheme, useTheme} from 'react-native-paper';
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import fonts from './fonts';
import colors from './colors';
import generalStyles from './generalStyles';

const THEME_VERSION = 3;

export let theme = {
    ...DefaultTheme,
    ...NavigationDefaultTheme,
    styles: generalStyles,
    colors,
    fonts,
    version: THEME_VERSION,
    roundness: 3,
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export default theme;
