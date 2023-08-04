import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';


interface IHeader {
    title: string;
    navigation: NavigationScreenProp<NavigationRoute, NavigationParams>
}

const Header:FC<IHeader> = ({title, navigation}) => {
    console.log('rendering Header');

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
                   <Text style={styles.headerTitle}>+</Text>
               </Pressable>
           </View>

       </View>
    );
} 
const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingTop: 20,
        // paddingHorizontal: 20,
        // marginBottom: 15,
        height: '100%',
        width: '100%',
    },
    headerTitle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
    },
    addTaskBtn: {
        backgroundColor: 'tomato',
        padding: 15,
        margin: 0,
        // height: 60,
        borderRadius: 30,
        // flex: 1,
    },
    

});

export default Header;
