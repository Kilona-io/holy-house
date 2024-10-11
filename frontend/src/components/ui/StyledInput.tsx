import {TextInput, TextInputProps} from 'react-native-paper';
import theme from '../../theme';

interface Props extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
}

const StyledInput = ({value, onChangeText, ...props}: Props) => {
    return (
        <TextInput
            {...props}
            value={value}
            onChangeText={onChangeText}
            style={theme.styles.input}
            placeholderTextColor={theme.colors.primaryWhite}
            textColor={theme.colors.primaryWhite}
        />
    );
};

export default StyledInput;
