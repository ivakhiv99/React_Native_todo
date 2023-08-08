import { FC, useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


interface ITaskItem {
    title: string;
    id: string;
    handleDeleteTask: (taskId: string) => void;
}

const TaskItem:FC<ITaskItem> = ({title, id, handleDeleteTask}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false); //will use for displaying subtasks and control buttons

    const toggleItem = () => setIsExpanded(!isExpanded);
    return (
        <TouchableHighlight
            onPress={toggleItem}
            activeOpacity={0.7}
            underlayColor="#fff"
        >
            <View style={styles.taskItem}>
                <Text>{title}</Text>
                {
                    isExpanded && 
                    <View style={styles.expandedItem}>
                        <Pressable
                            style={styles.deleteBtn}
                            onPress={() => handleDeleteTask(id)}
                        >
                            <MaterialIcons name="delete" size={24} color="#fff" />
                        </Pressable>
                    </View>
                }
            </View>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    taskItem: {
      padding: 15,
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: '#555',
      borderRadius: 15,
      marginBottom: 5,
      backgroundColor: 'coral',
      width: '95%'
    },
    expandedItem: {
        width: '100%',
        height: 30,
        borderColor: '#333',
        borderTopWidth: 1,
        alignItems: 'flex-end',
    },
    deleteBtn: {
        paddingHorizontal: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        margin: 0,
        padding: 0,
    }
});

export default TaskItem;
