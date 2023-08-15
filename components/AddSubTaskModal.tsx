import { FC, useEffect, useRef, useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {
    StyleSheet,
    Pressable,
    TextInput,
    Modal,
    View,
    Text,
} from 'react-native';
import { SubTask } from '../types/task';

interface IAddSubTaskModal {
    isVisible: boolean;
    toggleModal: () => void;
    handleAdd: (saveAnother: boolean, subtask: SubTask) => void;
}

const AddSubTaskModal:FC<IAddSubTaskModal> = ({isVisible, toggleModal, handleAdd}) => {
    const [newTask, updateNewTask] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [subTaskIsChecked, setSubTaskIsChecked] = useState<boolean>(false);

    const toggleCheckbox = () => setIsChecked(!isChecked);
    const toggleSubtask = () => setSubTaskIsChecked(!subTaskIsChecked);

    const hadnleSaveSubtask = () => {
        if(newTask.length > 0) {
            const newSubtask = {
                text: newTask,
                id: uuidv4(),
                finished: subTaskIsChecked,
            };
            updateNewTask('');
            setSubTaskIsChecked(false);
            handleAdd(isChecked, newSubtask);
        }
    };

    return(
        <Modal
            animationType='fade'
            transparent={true}    
            visible={isVisible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.inputContainer}>
                        <View style={styles.subtaskCheckboxContainer}> 
                            <BouncyCheckbox
                                size={18}
                                isChecked={subTaskIsChecked}
                                onPress={toggleSubtask}
                            />
                        </View>
        		        <TextInput
        		            style={[styles.input, {
                                textDecorationLine: subTaskIsChecked ? 'line-through' : 'none',
                                fontStyle: subTaskIsChecked ? 'italic' : 'normal',
                                color: subTaskIsChecked ? '#777' : '#000',
                            }]}
                            value={newTask}
        		            placeholder='Get ruller, saw and board'
        		            onChangeText={updateNewTask}
        		        />
        		    </View>
                    <View>
                        <View style={styles.checkboxContainer}>
                            <View style={styles.BouncyCheckboxContainer}> 
                                <BouncyCheckbox
                                    isChecked={isChecked}
                                    onPress={toggleCheckbox}
                                />
                            </View>
                            <Text style={styles.BouncyCheckboxContainer}>
                                {isChecked ? 'Will save and create one more' : 'Create another after saving?'}
                            </Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Pressable style={[styles.closeModalBtn, styles.shadowProp]} onPress={toggleModal}>
                                <Text style={styles.closeModalBtnText}>Cancel</Text>
                            </Pressable>
                            <Pressable style={[styles.closeModalBtn, styles.shadowProp]} onPress={hadnleSaveSubtask}>
                                <Text style={styles.closeModalBtnText}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        padding: 15,
        borderRadius: 15,
        width: 250,
        height: 250,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    inputContainer: {
        paddingTop: 35,
        flexDirection: 'row',
        
    },
    subtaskCheckboxContainer: {
        marginRight: -40,
        paddingTop: 3,
        zIndex:2
    },
    input: {
        paddingBottom: 10,
        width: '100%',
        maxHeight: 40,
        paddingHorizontal: 8,
        paddingLeft: 35,
        borderBottomWidth: 1,
        borderColor: '#555',
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 250,
        marginBottom: 15,
    },
    BouncyCheckboxContainer: {
        marginRight: -5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    closeModalBtn: {
        backgroundColor: 'coral',
        paddingHorizontal: 15,
        paddingVertical: 10,
        height: 40
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
      },
    closeModalBtnText: {
        color: "#fff",
        textTransform: 'uppercase',
        fontWeight: '600'
    },
});

export default AddSubTaskModal;
