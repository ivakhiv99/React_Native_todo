import { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface ITaskItem {
    title: string;
}

const TaskItem:FC<ITaskItem> = ({title}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false); //will use for displaying subtasks

    return (
        <View style={styles.taskItem}>
            <Text>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

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

export default TaskItem;
