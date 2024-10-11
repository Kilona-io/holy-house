import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {Message} from '../../utils/types/Message';
import {Role} from '../../utils/types/Role';
import {createMessage} from '../../utils/db/message';
import {Chat} from '../../utils/types/Chat';
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../../theme';
import SendButton from '../../components/chat/SendButon';
import MessageComponent from '../../components/chat/MessageComponent';
import BackButton from '../../components/ui/BackButton';
import {
    AppScreens,
    AppScreensRouteProp,
} from '../../navigation/AppNavigation/AppScreens';
import {useUserData} from '../../store/authStore';

const IntroductionMessage: Message = {
    id: '1',
    content: 'Seek and you shall find; Open a dialogue on the enternal truth.',
    user_id: '1',
    created_at: new Date().toISOString(),
    sender: Role.AI,
};

const ChatScreen = ({
    navigation,
    route,
}: AppScreensRouteProp<AppScreens.CHAT_SCREEN>) => {
    const user = useUserData();

    navigation.setOptions({
        headerLeft: () => <BackButton />,
    });

    const [messages, setMessages] = useState<Message[]>([IntroductionMessage]);
    const [inputText, setInputText] = useState('');

    const handleSend = async () => {
        if (inputText.trim()) {
            const newMessage: Message = {
                content: inputText,
                user_id: '3',
                sender: Role.USER,
            };
            setInputText('');
            setMessages([...messages, newMessage]);
            const messageAi = await createMessage(
                newMessage,
                user,
                route?.params?.chat
            );

            if (messageAi) {
                setMessages((prevMessages) => [...prevMessages, ...messageAi]);
            }
        }
    };

    return (
        <View
            style={[
                theme.styles.container,
                {backgroundColor: theme.colors.darkBlueish},
            ]}
        >
            <FlatList
                ItemSeparatorComponent={() => <View style={{height: 25}} />}
                data={messages}
                renderItem={({item}) => <MessageComponent message={item} />}
                keyExtractor={(item) => item.id || item.created_at || ''}
            />
            <View>
                <TextInput
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="What is your question today?"
                    style={theme.styles.input}
                    placeholderTextColor={theme.colors.placeholder}
                    textColor={theme.colors.primaryWhite}
                />
                <View
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-3.5%',
                    }}
                >
                    <SendButton handleSend={handleSend} />
                </View>
            </View>
        </View>
    );
};

export default ChatScreen;
