import { StyleSheet } from "react-native";


export const ManageStyles = StyleSheet.create({
    main: {
        height: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
        padding: 20
    },

    wrapperContent: {
        flexDirection: 'column',
        width: "70%",
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    textStyle: {
        fontSize: 30
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center"
    },

    pressableButton: {
        backgroundColor: "#f194ff",
        padding: 15,
        margin: 10
    },

    inputContainer: {
        flexDirection: "column",
        marginBottom: 20,
    }

})