import {ScrollView, View} from 'react-native';
import {
    AppScreens,
    AppScreensRouteProp,
} from '../../navigation/AppNavigation/AppScreens';
import theme from '../../theme';
import DevotionalCarousel from '../../components/devotional/DevotionalCarousel';
import StartChatButton from '../../components/main/StartChatButton';
import {useNavigation} from '@react-navigation/native';

const MainScreen = ({
    navigation,
}: AppScreensRouteProp<AppScreens.MAIN_SCREEN>) => {
    return (
        <ScrollView style={theme.styles.container}>
            <View style={{rowGap: 24}}>
                <DevotionalCarousel />
                <StartChatButton
                    handleNavigation={() =>
                        navigation.navigate(AppScreens.CHAT_SCREEN)
                    }
                />
            </View>
        </ScrollView>
    );
};

export default MainScreen;
