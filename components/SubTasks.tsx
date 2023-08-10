import { FC, useState } from 'react';
import AddBtn from './AddBtn'; 
import { SubTask } from '../types/task';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
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

    return (
            <View style={styles.container}>
                <Modal
                    animationType='fade'
                    transparent={true}    
                    visible={isModalVisible}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text>This is a modal!</Text>
                            <Pressable style={styles.closeModalBtn} onPress={toggleModal}>
                                <Text style={styles.closeModalBtnText}>Close</Text>
                            </Pressable>

                        </View>
                    </View>
                </Modal>
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
                                <Text>{item.text}</Text>
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
        width: '100%',
        backgroundColor: 'blue',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 250,
        height: 250,
        backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    closeModalBtn: {
        
    },
    closeModalBtnText: {
        
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f4e801',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    titleText: {
        // color: ''
        fontSize: 16,
        marginRight: 8,
    },
    subtaskListContainer:{

    }

});

export default SubTasks;
