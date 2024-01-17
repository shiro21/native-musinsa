import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const notification = <Icon name="notifications-outline" size={30} color="#222" />;
const search = <Icon name="search-outline" size={30} color="#222" style={{paddingRight: 4}} />;
const bagOutline = <Icon name="bag-outline" size={30} color="#222" />;

const Headers = () => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                {notification}
                {/* 간격을 맞추기 위해 */}
                <Icon name="notifications-outline" size={30} color="transparent" style={{paddingLeft: 4}} />
            </View>

            <View style={styles.center}>
                <Text style={styles.mainTitle}>MUSINSA</Text>
            </View>

            <View style={styles.right}>
                {search}
                {bagOutline}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "nowrap",
        padding: 8,
    },

    center: {
        alignContent: "center",
        
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: "600",
    },
    left: {
        flexDirection: "row",
    },
    right: {
        flexDirection: "row",
    },
})

export default Headers;