import { Pressable, StyleSheet, Text, View } from 'react-native';

const Header = () => (
    <View style={styles.header}>
        <View />
        <View>
            <Text style={styles.headerTitle}>All Tasks</Text>
        </View>
        <View >
            <Pressable style={styles.addTaskBtn}>
                <Text style={styles.headerTitle}>+</Text>
            </Pressable>
        </View>

    </View>
);

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'coral',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 20,
        marginBottom: 15,
        maxHeight: 100,
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
