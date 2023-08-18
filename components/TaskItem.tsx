import { FC, useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import SubTaskItem from './SubTaskItem';
import {
    TouchableHighlight,
    StyleSheet,
    Pressable,
    FlatList,
    Text,
    View,
} from 'react-native';
import { SubTask } from '../types/task';


interface ITaskItem {
    handleDeleteTask: (taskId: string) => void;
    subtasks?: SubTask[];
    title: string;
    id: string;
}

const TaskItem:FC<ITaskItem> = ({title, id, handleDeleteTask, subtasks}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false); //will use for displaying subtasks and control buttons

    const toggleItem = () => setIsExpanded(!isExpanded);

    return (
        <TouchableHighlight
            onPress={toggleItem}
            activeOpacity={0.7}
            underlayColor="#fff"
        >
            <View style={styles.taskItem}>
                <View style={[styles.taskHeaderContainer, {
                    paddingBottom: isExpanded ? 5 : 0,
                }]}>
                    <Text>{title}</Text>
                    <View>
                    {
                        isExpanded && 
                            <Pressable
                                style={styles.deleteBtn}
                                onPress={() => handleDeleteTask(id)}
                            >
                                <MaterialIcons name="delete" size={24} color="#fff" />
                            </Pressable>
                    }
                    </View>
                </View>
                {
                    isExpanded && 
                    <View style={styles.expandedItem}>
                        <View style={styles.subtaskContainer}>
                            <FlatList 
                                data={subtasks}
                                renderItem={({item}) => <SubTaskItem item={item}/>}
                            />
                        </View>
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
    taskHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    expandedItem: {
        width: '100%',
        borderColor: '#333',
        borderTopWidth: 1,
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subtaskContainer: {
        width: '100%',
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
    },
});

export default TaskItem;
