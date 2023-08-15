import { FC, useState } from 'react';
import AddBtn from './AddBtn'; 
import { SubTask } from '../types/task';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddSubTaskModal from './AddSubTaskModal';
import {
    Button,
    Pressable,
    Modal,
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';



interface ISubtasks {
}

const SubTasks:FC = () => {
    const [subTasks, updateSubTasks] = useState<SubTask[]>([]);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    
    const maxSubTasksCount = 5;
    console.log('Subtasks render');


    const toggleModal = () => setIsModalVisible(!isModalVisible);

    const handleOpenNewSubTaskModal = () => {

    }

    const handleAddSubTask = (text: string) => {

        updateSubTasks([...subTasks, {
            text,
            id: uuidv4(),
            finished: false,
        }])
    }

    const handleAdd = (saveAnother: boolean, subtask: SubTask) => {
        updateSubTasks([...subTasks, subtask]);
        if(!saveAnother) {
            toggleModal()
        } 
    }

    return (
        <View style={styles.container}>
            <AddSubTaskModal
                isVisible={isModalVisible}
                toggleModal={toggleModal}
                handleAdd={handleAdd}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Sub-tasks ({subTasks.length}/{maxSubTasksCount})</Text>
                <AddBtn handleClick={toggleModal}/>
            </View>
            <View style={styles.subtaskListContainer}>
                <FlatList 
                    data={subTasks}
                    renderItem={({item}) => (
                        <View>
                            <View></View>
                            <Text style={{
                                textDecorationLine: item.finished ? 'line-through' : 'none',
                                fontStyle: item.finished ? 'italic' : 'normal',
                                color: item.finished ? '#777' : '#000',
                            }}>
                                {item.text}
                            </Text>
                            <View></View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        minWidth: 250,
        width: '100%',
        backgroundColor: 'blue',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f4e801',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    titleText: {
        fontSize: 16,
        marginRight: 8,
    },
    subtaskListContainer: {

    }
});

export default SubTasks;
