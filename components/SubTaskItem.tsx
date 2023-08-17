import { FC, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { SubTask } from '../types/task';
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface ISubTaskItem {
    item: SubTask;
    drag?: () => void;
}

const SubTaskItem:FC<ISubTaskItem> = ({item, drag}) => {
    const [isChecked, setIsChecked] = useState<boolean>(item.finished);

    const toggleSubtask = () => setIsChecked(!isChecked);

    return (
        <View style={styles.container}>
            <View style={styles.checkboxItemContainer}>
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
            </View>
            <View style={styles.dragIcon}>
                {/* <TouchableOpacity
                    onLongPress={drag}
                    // style={[
                    //   styles.rowItem,
                    //   { backgroundColor: isActive ? "red" : item.backgroundColor },
                    // ]}
                >

                </TouchableOpacity> */}
            </View>


        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        padding: 5,
        paddingHorizontal: 15,
        backgroundColor: '#111012',
    },
    checkboxContainer: {
        marginRight: -10,
    },
    text: {

    },
    checkboxItemContainer: {
        flexDirection: 'row',
    },
    dragIcon: {
        width: 20,
        height: 20,
        borderRadius: 3,
        backgroundColor: 'red',
        zIndex:3,

    }

});

export default SubTaskItem;
