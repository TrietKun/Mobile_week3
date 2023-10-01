import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

function Cau1e() {
    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.title}>REGISTER</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Name"/>
                <TextInput style={styles.input} placeholder="Phone"/>
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={[styles.input, {position: 'relative'}]} placeholder="Password"/>
                <Image style={[styles.imgEye]} source={require('./assets/eye1.png')} />
                <TextInput style={styles.input} placeholder="Birthday"/>
            </View>
            <View style={styles.radioWrapper}>
                <View style={styles.circle}></View>`
                <Text style={styles.sex}>Male</Text>
                <View style={styles.circle}></View>
                <Text style={styles.sex}>Female</Text>`
            </View>
            <View style={styles.btnRegisterWrapper}>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.btnRegisterTxt}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.agreeTxt}>When you agree to terms and conditions</Text>
        </View>
     );
}

export default Cau1e;

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        textAlign: 'center',
        marginTop: 50,
    },
    inputWrapper: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#c4c4c4',
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 20,
    },
    imgEye: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 45,
        bottom: 80,
    },
    radioWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    circle: {
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        width: 20,
        height: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    sex: {
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        marginTop: 20,
        marginLeft: 10,
    },
    btnRegisterWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },
    btnRegister: {
        backgroundColor: '#E53935',
        width: 330,
        height: 54,  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    btnRegisterTxt: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        color: '#fff'
    },
    agreeTxt: {
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Roboto',
        marginTop: 20,
        textAlign: 'center',
    },
})