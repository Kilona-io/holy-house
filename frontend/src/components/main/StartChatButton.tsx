import {Pressable, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import theme from '../../theme';

const StartChatButton = ({
    handleNavigation,
}: {
    handleNavigation: () => void;
}) => {
    return (
        <Pressable
            onPress={handleNavigation}
            style={[theme.styles.input, {padding: 15}]}
        >
            <Text style={styles.text}>What is your question today?</Text>
        </Pressable>
    );
};

export default StartChatButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        padding: 15,
        borderRadius: 8,
    },
    text: {
        color: theme.colors.placeholder,
    },
});
