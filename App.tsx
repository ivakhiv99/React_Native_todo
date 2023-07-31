import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header, TaskList, NewTaskForm } from './components';
import { Task } from './types/task';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

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

  return (
    <View style={styles.container}>
      <Header/>
      <NewTaskForm handleAddTask={handleAddTask}/>
      <TaskList tasks={allTasks}/>

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
