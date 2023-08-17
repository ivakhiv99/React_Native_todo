import { FC, useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Button, StyleSheet, TextInput, View, Keyboard } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';
import { SubTasks } from '../components';
import { SubTask } from '../types/task'; 

interface INewTaskForm {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

const NewTaskForm:FC<INewTaskForm> = ({navigation}) => {
    const [newTask, updateNewTask] = useState<string>('');
    const [taskDescription, updateTaskDescription] = useState<string>('');
    const [subTasks, updateSubtasks] = useState<SubTask[]>([]);

    const inputRef = useRef<TextInput | null>(null);
    
    const handleSave = () => {
      if(newTask.length > 0 && inputRef.current) {
        inputRef.current.setNativeProps({ text: '' });
        updateNewTask('');
        Keyboard.dismiss();
        navigation.navigate('TaskList', {
          data: {
            title: newTask,
            description: taskDescription,
            subTasks: subTasks,
          },
          id: uuidv4(),
        });
      }
    };

    return (
		<View style={styles.container}>
			{/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
				{/* <KeyboardAvoidingView style={styles.keyboardContainer} behavior="position"> */}
        		    <View style={styles.inputContainer}>
        		        <TextInput
        		            ref={inputRef}
        		            style={styles.input}
        		            placeholder='Build a house'
        		            onChangeText={updateNewTask}
        		        />
        		    </View>
        		    <View style={styles.textAreaContainer}>
        		        <TextInput
        		            placeholder="Well let me have a ruller and a saw and board and I'll cut it"
        		            style={styles.textArea}
        		            multiline
        		            numberOfLines={4}
        		            maxLength={500}
                        value={taskDescription}
        		            onChangeText={updateTaskDescription}
        		        />
        		    </View>
        		    <View style={styles.subtasksContainer}>
        		        <SubTasks updateSubTasksList={updateSubtasks}/>
        		    </View>
        		    <View style={styles.buttonContainer}>
        		        <Button
        		            onPress={handleSave}
        		            title="Save Task"
        		            color="coral"
        		            accessibilityLabel="Add new task to your ToDo list"
        		        />
        		    </View>
        		{/* </KeyboardAvoidingView>
			</ScrollView> */}
        </View>
    );
};


const styles = StyleSheet.create({
	keyboardContainer: {
		flex: 1,
		// justifyContent: 'flex-end',
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: 'space-between',
	},
    container: {
		flex: 1,
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15
    },
    input: {
      width: 300,
      maxHeight: 40,
      paddingHorizontal: 8,
      backgroundColor: 'orange',
      borderBottomWidth: 1,
      borderColor: '#555',
      marginBottom: 15,
    },
    inputContainer: {
        flex: 1,
    },
    textAreaContainer: {
        flex: 3,  
    },
    textArea: {
      width: 300,
      maxHeight: 300,   
      paddingHorizontal: 8,
      backgroundColor: 'orange',
      borderBottomWidth: 1,
      borderColor: '#555',
      marginBottom: 15,
    },
    subtasksContainer: {
        flex: 3,  
        backgroundColor: 'blue',

    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 20,
    }
});

export default NewTaskForm;
