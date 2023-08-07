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
                header: () => <Header title='All Tasks' navigation={navigation}/>,
                headerStyle:{
                    height: 60,
                    backgroundColor: 'blue',
                    padding: 0,

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
