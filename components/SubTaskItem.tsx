import { FC, useState } from "react";
import {
    Button,
    Pressable,
    Modal,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { SubTask } from '../types/task';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface ISubTaskItem {
    item: SubTask;
}

const SubTaskItem:FC<ISubTaskItem> = ({item}) => {
    const [isChecked, setIsChecked] = useState<boolean>(item.finished);

    const toggleSubtask = () => setIsChecked(!isChecked);

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                    size={18}
                    isChecked={isChecked}
                    onPress={toggleSubtask}
                />
            </View>
            <Text style={[ styles.text, {
                textDecorationLine: isChecked ? 'line-through' : 'none',
                fontStyle: isChecked ? 'italic' : 'normal',
                color: isChecked ? '#777' : '#fff',
            }]}>
                {item.text}
            </Text>
            <View></View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5,
        padding: 5,
        backgroundColor: '#111012',
    },
    checkboxContainer: {
        marginRight: -10,
    },
    text: {

    }

});

export default SubTaskItem;
