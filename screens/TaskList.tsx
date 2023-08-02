import { StyleSheet, View, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/task';
import { FC } from 'react';

interface ITaskList {
  tasks: Task[];
  handleDeleteTask: (taskId: string) => void;
}

const TaskList:FC<ITaskList> = ({tasks, handleDeleteTask}) => (
      <View style={styles.listContainer}> 
          <FlatList
              style={styles.taskList}
              keyExtractor={(item) => item.id.toString()}
              data={tasks}
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
