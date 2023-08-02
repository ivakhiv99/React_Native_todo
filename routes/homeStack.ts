import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { TaskList, NewTaskForm } from "../screens";

const screens = {
    TaskList: {
        screen: TaskList,
    },
    NewTaskForm: {
        screen: NewTaskForm,
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
