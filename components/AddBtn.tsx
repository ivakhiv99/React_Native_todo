import { Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FC } from 'react';

interface IAddBtn {
    handleClick: () => void;
    size?: number;
}

const AddBtn:FC<IAddBtn> = ({ handleClick, size = 24 }) => (
    <Pressable style={styles.addTaskBtn} onPress={handleClick}>
        <MaterialIcons name="add" size={size} color="#fff" />
    </Pressable>
);

const styles = StyleSheet.create({
    addTaskBtn: {
        backgroundColor: 'tomato',
        padding: 6,
        margin: 0,
        borderRadius: 30,
    },
});

export default AddBtn;
