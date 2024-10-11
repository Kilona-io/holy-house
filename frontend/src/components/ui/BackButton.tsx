import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => navigation.goBack()}
            style={theme.styles.backButton}
        >
            <Icon
                name="arrow-left"
                size={24}
                color={theme.colors.primaryWhite}
            />
        </Pressable>
    );
};

export default BackButton;
