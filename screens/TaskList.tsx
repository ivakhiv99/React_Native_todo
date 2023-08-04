import { StyleSheet, View, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/task';
import { FC } from 'react';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


interface ITaskList {
  tasks: Task[];
  handleDeleteTask: (taskId: string) => void;
}

const TaskList:FC = () => {
  
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
  


  return (
      <View style={styles.listContainer}> 
          <FlatList
              style={styles.taskList}
              keyExtractor={(item) => item.id.toString()}
              data={allTasks}
              renderItem={({item}) => (
                  <TaskItem
                    handleDeleteTask={handleDeleteTask}
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
        backgroundColor: 'blue',
    },
    taskList: {
      backgroundColor: 'tomato',
    },
    taskItem: {
      padding: 15,
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: '#555',
      borderRadius: 15,
      marginBottom: 5,
      backgroundColor: 'coral',
      width: '95%'
    }
});


export default TaskList;
