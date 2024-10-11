import theme from '../../theme';
import {Pressable, Image, StyleSheet} from 'react-native';

const SendButton = ({handleSend}: {handleSend: () => void}) => {
    return (
        <Pressable style={styles.button} onPress={handleSend}>
            <Image
                source={require('../../../assets/chat/cross.png')}
                style={{height: 34, width: 34}}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 71,
        width: 71,
        borderRadius: 36,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SendButton;
