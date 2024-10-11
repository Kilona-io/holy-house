import React, {useRef} from 'react';
import {View, FlatList} from 'react-native';
import DevotionalCard from './DevotionalCard';

const DevotionalCarousel = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const flatListRef = useRef<FlatList>(null);
    const daysArray = Array.from({length: daysInMonth}, (_, i) => i + 1);

    const itemWidth = 69;

    return (
        <FlatList
            data={daysArray}
            keyExtractor={(item) => item.toString()}
            horizontal={true}
            initialScrollIndex={currentDay - 1}
            renderItem={({item}) => (
                <DevotionalCard
                    day={item.toString()}
                    month={new Date().toLocaleString('default', {
                        month: 'long',
                    })}
                    isActive={item <= currentDay}
                />
            )}
            getItemLayout={(data, index) => ({
                length: itemWidth,
                offset: itemWidth * index,
                index,
            })}
            ItemSeparatorComponent={() => <View style={{width: 8}} />}
            onScrollToIndexFailed={(info) => {
                const wait = new Promise((resolve) => setTimeout(resolve, 500));
                wait.then(() => {
                    flatListRef.current?.scrollToIndex({
                        index: info.index,
                        animated: true,
                    });
                });
            }}
        />
    );
};

export default DevotionalCarousel;
