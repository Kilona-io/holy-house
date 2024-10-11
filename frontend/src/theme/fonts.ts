import {DefaultTheme} from 'react-native-paper';
import colors from './colors';

enum fontWeight {
    BOLD = 'Bold',
    BOLD_ITALIC = 'BoldItalic',
    REGULAR = 'Regular',
    REGULAR_ITALIC = 'RegularItalic',
}
enum fontFamily {
    NOAH = 'Noah',
}

export const getFont = (weight: fontWeight) => {
    switch (weight) {
        case fontWeight.BOLD:
            return `${fontFamily.NOAH}-Bold`;
        case fontWeight.BOLD_ITALIC:
            return `${fontFamily.NOAH}-BoldItalic`;
        case fontWeight.REGULAR:
            return `${fontFamily.NOAH}-Regular`;
        case fontWeight.REGULAR_ITALIC:
            return `${fontFamily.NOAH}-RegularItalic`;
    }
};

const fonts = {
    default: {
        ...DefaultTheme.fonts.default,
        color: colors.primaryWhite,
    },
    titleLarge: {
        ...DefaultTheme.fonts.titleLarge,
        fontFamily: getFont(fontWeight.BOLD),
        lineHeight: 36,
        fontSize: 30,
        color: colors.primaryWhite,
    },
    titleMedium: {
        ...DefaultTheme.fonts.titleMedium,
        fontFamily: getFont(fontWeight.BOLD),
        lineHeight: 32,
        fontSize: 24,
        color: colors.primaryWhite,
    },
    titleSmall: {
        ...DefaultTheme.fonts.titleSmall,
        fontFamily: getFont(fontWeight.BOLD),
        letterSpacing: 0.1,
        lineHeight: 28,
        fontSize: 22,
        color: colors.primaryWhite,
    },
    bodyLarge: {
        ...DefaultTheme.fonts.bodyLarge,
        fontFamily: getFont(fontWeight.REGULAR),
        lineHeight: 32,
        fontSize: 24,
        color: colors.primaryWhite,
    },
    bodyMedium: {
        ...DefaultTheme.fonts.bodyMedium,
        fontFamily: getFont(fontWeight.REGULAR),
        letterSpacing: 0.25,
        lineHeight: 28,
        fontSize: 22,
        color: colors.primaryWhite,
    },
    bodySmall: {
        ...DefaultTheme.fonts.bodySmall,
        fontFamily: getFont(fontWeight.REGULAR),
        letterSpacing: 0.4,
        lineHeight: 24,
        fontSize: 20,
        color: colors.primaryWhite,
    },
};

export default fonts;
