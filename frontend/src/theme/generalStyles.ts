import colors from './colors';
import {StyleSheet} from 'react-native';

const generalStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.background,
    },
    title: {
        marginBottom: 32,
        color: colors.primaryWhite,
    },
    card: {
        marginBottom: 16,
        backgroundColor: colors.primary,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        marginBottom: 16,
    },
    buttonLabel: {
        color: colors.primaryWhite,
    },
    input: {
        marginBottom: 16,
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.inputBackground,
        color: colors.primaryWhite,
        borderRadius: 14,
    },
    inputText: {
        color: colors.primaryWhite,
        fontSize: 16,
    },
    backButton: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default generalStyles;
