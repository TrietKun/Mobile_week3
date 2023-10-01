import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Cau1c() {
    return ( 
        <View style={styles.wrapper}>
            <Text style={[styles.title, styles.txt]}>CODE</Text>
            <Text style={[styles.title2, styles.txt]}>VERIFICATION</Text>
            <Text style={[styles.instruction, styles.txt]}>Enter ontime password sent on <br /> ++849092605798</Text>
            <View style={styles.blockWrapper}>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
                <View style={styles.block}></View>
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn}>   
                    <Text style={styles.btnTxt}>VERIFY CODE</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default Cau1c;

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
        width: '100%',
    },
    txt: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 60,
    },
    title: {
        paddingTop: 40,
        fontSize: 60,
    },
    title2: {
        fontSize: 20,
    },
    instruction: {
        fontSize: 15,
    },
    blockWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    block: {
        width: 50,
        height: 50,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    btnWrapper: {
        display: 'flex',
        alignItems: 'center',    
    },
    btn: {
        width: '80%',
        height: 50,
        backgroundColor: '#E3C000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnTxt: {
        fontFamily: 'Roboto', 
        fontWeight: 700,
        fontSize: '15px',
        paddingTop: 16,
    }

})