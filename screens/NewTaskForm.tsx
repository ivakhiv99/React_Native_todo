import { FC, useRef, useState } from 'react';
import { Button, StyleSheet, TextInput, View, Keyboard } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';

interface INewTaskForm {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

const NewTaskForm:FC<INewTaskForm> = ({navigation}) => {
    const [newTask, updateNewTask] = useState<string>('');
    const inputRef = useRef<TextInput | null>(null);
    const handleSave = () => {
      if(newTask.length > 0 && inputRef.current) {
        inputRef.current.setNativeProps({ text: '' });
        updateNewTask('');
        Keyboard.dismiss();
        navigation.navigate('TaskList', {
          title: newTask,
          id: uuidv4(),
        });
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
