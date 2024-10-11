import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import theme from '../../theme';
import {Message} from '../../utils/types/Message';
import {Role} from '../../utils/types/Role';

type Props = {
    message: Message;
};

const MessageComponent = ({message}: Props) => {
    return (
        <View
            style={[
                message.sender == Role.USER
                    ? styles.userMessage
                    : styles.aiMessage,
                styles.messageContainer,
            ]}
        >
            <Text style={theme.styles.inputText}>{message.content}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderWidth: 1,
        borderColor: ' rgba(255, 255, 255, 0.10)',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.primary,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    messageContainer: {
        paddingHorizontal: 20,
        paddingVertical: 28,
        borderRadius: 40,
        width: '75%',
        minWidth: 99,
    },
});

export default MessageComponent;
