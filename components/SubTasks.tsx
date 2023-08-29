import { FC, useEffect, useState } from 'react';
import AddBtn from './AddBtn'; 
import { SubTask } from '../types/task';
import 'react-native-get-random-values';
import AddSubTaskModal from './AddSubTaskModal';
import SubTaskItem from './SubTaskItem';
import {
    Button,
    Pressable,
    Modal,
    StyleSheet,
    View,
    Text,
    FlatList,
    Keyboard
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import DragAndDrop from './DragAndDrop';



interface ISubtasks {
    updateSubTasksList: React.Dispatch<React.SetStateAction<SubTask[]>>
}

const SubTasks:FC<ISubtasks> = ({updateSubTasksList}) => {
    const [subTasks, updateSubTasks] = useState<SubTask[]>([]);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    
    const maxSubTasksCount = 5;

    const toggleModal = () => setIsModalVisible(!isModalVisible);

    const handleAdd = (saveAnother: boolean, subtask: SubTask) => {
        updateSubTasks([...subTasks, subtask]);
        if(!saveAnother) {
            Keyboard.dismiss();
            toggleModal();
        } 
    };

    useEffect(() => updateSubTasksList(subTasks), [subTasks]);

    return (
        <View style={styles.container}>
            <AddSubTaskModal
                isVisible={isModalVisible}
                toggleModal={toggleModal}
                handleAdd={handleAdd}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Sub-tasks ({subTasks.length}/{maxSubTasksCount})</Text>
                <AddBtn
                    disabled={subTasks.length === maxSubTasksCount}
                    handleClick={toggleModal}
                />
            </View>
            <View style={styles.subtaskListContainer}>
                {/* <DraggableFlatList
                    data={subTasks}
                    renderItem={({item, drag}) => <SubTaskItem drag={drag} item={item}/>}
                    keyExtractor={(item) => item.id}
                    onDragEnd={({ data }) => {
                      // Update the state with the new data order
                      // You can save the new order to your state or perform any other actions
                    }}
                /> */}
                <FlatList 
                    data={subTasks}
                    renderItem={({item}) => (
                        <DragAndDrop >
                            <SubTaskItem item={item}/>
                        </DragAndDrop>
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
        height: '100%',
        minHeight: 200
    }
});

export default SubTasks;
