import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import { TaskList, NewTaskForm } from './screens';
import { Task } from './types/task';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Navigator from './routes/homeStack'; 

export default function App() {
  const [allTasks, setAllTasks] = useState<Task[]>([
    {title: 'learn react native', id: uuidv4()},
    {title: 'make an app', id: uuidv4()},
    {title: 'stonks', id: uuidv4()},
  ]);

  const handleAddTask = (task: Task) => {
    console.log('NEW TASK', {task});
    setAllTasks([...allTasks, task])
  }
  
  const handleDeleteTask = (taskId: string) => {
    setAllTasks(allTasks.filter((task: Task) => task.id !== taskId));
  }
  
      
  // return(<Navigator/>);

  return (
    <View style={styles.container}>
      <Header/>
      <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
