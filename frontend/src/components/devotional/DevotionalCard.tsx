import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import theme from '../../theme';

type DevotionalCardProps = {
    day: string;
    month: string;
    isActive?: boolean;
};

const DevotionalCard = ({day, month, isActive}: DevotionalCardProps) => {
    return (
        <View style={[styles.container, isActive && styles.activeContainer]}>
            <Text style={styles.day}>{day}</Text>
            <Text style={styles.month}>{month.slice(0, 3)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        borderRadius: 14,
        rowGap: 4,
        paddingVertical: 22,
        paddingHorizontal: 20,
    },
    activeContainer: {
        backgroundColor: theme.colors.primary,
    },
    day: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.primaryWhite,
    },
    month: {
        fontSize: 12,
        color: theme.colors.primaryWhite,
    },
});

export default DevotionalCard;
