import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons'; 


interface IHeader {
    title: string;
    navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

const Header:FC<IHeader> = ({title, navigation}) => {
    const handleRedirect = () => {
        navigation.navigate('NewTaskForm');
    }

    return (
       <View style={styles.header}>
           <View />
           <View>
               <Text style={styles.headerTitle}>{title}</Text>
           </View>
           <View >
               <Pressable style={styles.addTaskBtn} onPress={handleRedirect}>
                   <MaterialIcons name="add" size={24} color="#fff" />
               </Pressable>
           </View>

       </View>
    );
} 
const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        // flex: 1,
        backgroundColor: 'red',
        flexDirection:'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 35,
        paddingHorizontal: 20,
        // marginBottom: 15,

    },
    headerTitle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
    },
    addTaskBtn: {
        backgroundColor: 'tomato',
        padding: 6,
        // width: 35,
        // height: 35,
        margin: 0,
        borderRadius: 30,
    },
    

});

export default Header;
