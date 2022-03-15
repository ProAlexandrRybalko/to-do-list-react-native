import { StyleSheet } from "react-native";
import { muchDarkBlue, red, redViolet, white } from "./Colors";

export const styles = StyleSheet.create({
    form: {
        height: '100%',
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: muchDarkBlue,
    },
    paddingTopLogin: {
        paddingTop: '30%',
    },
    paddingTopSignUp: {
        paddingTop: '15%',
    },
    input: {
        backgroundColor: white,
        borderRadius: 5,
        borderWidth: 0,
        padding: "6%",
        fontSize: 20,
        width: '100%',
    },
    labelInputContainer: {
        width: "90%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingBottom: "4%",
    },
    labelRequiredContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: "3%",
    },
    label: {
        color: white,
        fontSize: 25,
    },
    required: {
        fontSize: 16,
        color: red,
    },
    buttonSubmit: {
        borderWidth: 0,
        borderRadius: 5,
        marginTop: "5%",
        marginBottom: "3%",
        padding: "5%",
        width: '90%',
        backgroundColor: redViolet,
    },
    titleButton: {
        color: white,
        fontSize: 25,
        textAlign: "center",
    },
    signupText: {
        color: white
    },
    buttonLink: {
        borderBottomWidth: 1,
        borderColor: white,
    }
})