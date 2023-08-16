import { FC, useState } from 'react';
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
    FlatList
} from 'react-native';



interface ISubtasks {
}

const SubTasks:FC = () => {
    const [subTasks, updateSubTasks] = useState<SubTask[]>([]);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    
    const maxSubTasksCount = 5;

    const toggleModal = () => setIsModalVisible(!isModalVisible);

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
                    renderItem={({item}) => <SubTaskItem item={item}/>}
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
