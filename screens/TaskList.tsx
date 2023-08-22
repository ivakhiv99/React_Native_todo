import { StyleSheet, View, FlatList, Button } from 'react-native';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/task';
import { FC, useEffect } from 'react';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ITaskList {
  navigation: NavigationScreenProp<NavigationRoute, NavigationParams>;
}

const defaultTasks = [
    {
		title: 'learn react native',
		description: '',
		subtasks: [],
		id: uuidv4(),
    },
    {
    	title: 'make an app',
    	description: '',
    	subtasks: [],
    	id: uuidv4(),
    },
    {
    	title: 'stonks',
    	description: '',
    	subtasks: [],
    	id: uuidv4(),
    },
];

const TaskList:FC<ITaskList> = ({navigation}) => {
  
  const [allTasks, setAllTasks] = useState<Task[]>([]);

  const syncWithAsyncStorage = async () => {
    try {
    	const dataFromAsyncStorage = await AsyncStorage.getItem('taskListArray');
    	if(dataFromAsyncStorage) {
    		setAllTasks(JSON.parse(dataFromAsyncStorage));
    	} else {
			setAllTasks(defaultTasks);
		}
    } catch(e) {
    	console.log('syncWithAsyncStorage error:', e);
    }
  }; 

//   useEffect(() => console.log('allTasks changed', allTasks), [allTasks]);

  useEffect(() => {
    syncWithAsyncStorage();
  }, []);

  const handleAddTask = async (task: Task) => {
    console.log('NEW TASK', {task});
    setAllTasks([...allTasks, task]);
    await AsyncStorage.setItem('taskListArray', JSON.stringify([...allTasks, task]));
  };
  
  const handleDeleteTask = (taskId: string) => {
    setAllTasks(allTasks.filter((task: Task) => task.id !== taskId));
  };
  
  useEffect(() => {
    const id = navigation.getParam('id');
    const data = navigation.getParam('data');

    if (data && id) {
      handleAddTask({...data, id});
    }
  }, [navigation]);

  const handleReset = async () => {
    setAllTasks(defaultTasks);
    await AsyncStorage.setItem('taskListArray', JSON.stringify([]))
  }

  return (
      <View style={styles.listContainer}>
        <Button 
          title='reset'
          onPress={handleReset}
        />
          <FlatList
              style={styles.taskList}
              keyExtractor={(item) => item.id.toString()}
              data={allTasks}
              renderItem={({item}) => (
                  <TaskItem
                    handleDeleteTask={handleDeleteTask}
                    subtasks={item.subtasks}
                    title={item.title}
                    id={item.id}
                  />
              )}
          />
      </View>
  );
};

const styles = StyleSheet.create({
    listContainer: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 15,
      backgroundColor: 'tomato',
    },
    taskList: {
      paddingTop: 15,
    },
    taskItem: {
      padding: 15,
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: '#555',
      borderRadius: 15,
      marginBottom: 5,
      marginHorizontal: 'auto',
      backgroundColor: 'coral',
      width: '95%'
    }
});


export default TaskList;
