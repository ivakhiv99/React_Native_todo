import { StyleSheet, Text, View } from 'react-native';

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>All Tasks</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'coral', //'red', //
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        marginBottom: 15,
        maxHeight: 100,
        width: '100%',
    },
    headerTitle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
    }
});

export default Header;
