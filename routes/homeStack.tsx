import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { TaskList, NewTaskForm } from "../screens";
import { Header } from "../components";
import React from "react";
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';


const screens = {
    TaskList: {
        screen:({navigation}: {navigation: NavigationScreenProp<NavigationRoute, NavigationParams>}) => <TaskList navigation={navigation}/>,
        navigationOptions: ({navigation}: {navigation: NavigationScreenProp<NavigationRoute, NavigationParams>}) => {
            return {
                headerTitle: () => <Header title='All Tasks' navigation={navigation}/>,
                headerStyle: {
                    backgroundColor: 'blue',
                },
            }
        },

    },
    NewTaskForm: { 
        screen:({navigation}: {navigation: NavigationScreenProp<NavigationRoute, NavigationParams>}) => <NewTaskForm navigation={navigation}/>,
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
