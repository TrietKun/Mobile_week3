import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
// import eclipse from '../assets/Ellipse1circle.svg'

function Cau1a() {
    return ( 
        <View style={styles.wrapper}>
            <View style={styles.circleWrapper}>
                {/* <Image source={require('../assets/Ellipse1circle.svg')} /> */}
                <svg style={styles.circle} width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="71" cy="71" r="63.5" stroke="black" stroke-width="15"/>
                </svg>
            </View>
            <Text style={styles.title}>GROW<br /> YOUR BUSINESS</Text>
            <Text style={styles.description}>We will help you to grow your business using <br /> online server</Text>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>SIGNUP</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.txtEnd}>HOW WE WORK</Text>
        </View>
     );
}

export default Cau1a;

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
        width: '100%',
    },
    circleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle: {
        marginTop: '50px',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto', 
        fontWeight: 700,
        fontSize: '25px',
        marginTop: '50px',
        // lineHeight: '29.3px',
        // marginTop:
    },
    description: {
        fontSize: '15px',
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontWeight: 700,
        marginTop: '50px',
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '50px',
    },
    btn: {
        backgroundColor: '#E3C000',
        color: '#000',
        width: '40%',
        padding: '10px',
    },
    btnText: {
        fontWeight: 700,
        fontSize: '25px',
        textAlign: 'center',   
    },
    txtEnd: {
        fontSize: '18px',
        fontWeight: 'Roboto',
        fontWeight: 700,
        marginTop: '30px',
        textAlign: 'center'
    }
})
