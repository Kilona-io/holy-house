import {Button, ButtonProps} from 'react-native-paper';
import theme from '../../theme';

type Pros = ButtonProps & {
    onPress: () => void;
    children: React.ReactNode;
};

const StyledButton = ({onPress, children, ...props}: Pros) => {
    return (
        <Button
            style={theme.styles.button}
            labelStyle={theme.styles.buttonLabel}
            onPress={onPress}
            {...props}
        >
            {children}
        </Button>
    );
};

export default StyledButton;
