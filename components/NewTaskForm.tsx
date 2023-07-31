import { FC, useRef, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Task } from '../types/task';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface INewTaskForm {
    handleAddTask: (tasl: Task) => void;
}

const NewTaskForm:FC<INewTaskForm> = ({handleAddTask}) => {
    const [newTask, updateNewTask] = useState<string>('');
    const inputRef = useRef<TextInput | null>(null);
    const handleSave = () => {
      if(newTask.length > 0 && inputRef.current) {
        inputRef.current.setNativeProps({ text: '' });
        handleAddTask({
          title: newTask,
          id: uuidv4(),
        });
        updateNewTask('');
      }
    }
 
    return (
        <View style={styles.container}>
            <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder='Build a house'
                onChangeText={updateNewTask}
            />
            <Button
                onPress={handleSave}
                title="Save Task"
                color="coral"
                accessibilityLabel="Add new task to your ToDo list"
            />
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    maxHeight: 120,
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },
  input: {
    maxWidth: 300,
    minWidth: 100,
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: 'orange',
    borderBottomWidth: 1,
    borderColor: '#555',
    marginBottom: 15,
  },
});

export default NewTaskForm;
