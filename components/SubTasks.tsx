import { StyleSheet, View, FlatList } from 'react-native';
import { FC, useState } from 'react';

interface ISubtasks {
}

const SubTasks:FC = () => {
    console.log('Subtasks render');

    return (
        <View style={styles.container}>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
    }
});

export default SubTasks;
