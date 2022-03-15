import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#657580",
  },

  header: {
    flexDirection: "row",
    height: "18%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontStyle: "italic",
    fontSize: 32,
  },

  wrapperManaging: {
    height: "92%",
    flexDirection: "column",
    alignItems: "center",
  },

  managing: {
    flexDirection: "column",
    marginBottom: 20,
    height: "30%",
  },

  inputAccounting: {
    flexDirection: "column",
  },

  accountingInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#797979",
    borderRadius: 5,
    backgroundColor: "white",
    width: 280,
    height: 40,
    paddingLeft: 20,
  },

  listContaner: {
    height: "54%",
    padding: 0,
  },

  leftMenu: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: "100%",
    width: 205,
    backgroundColor: "rgba(52, 52, 52, 0.0)",
    zIndex: 1,
    position: "absolute",
    top: 0,
  },

  leftMenuItems: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
    height: "100%",
    width: 150,
    backgroundColor: "#999999",
  },

  fontAccounting: {
    fontSize: 18,
  },

  pressImage: {
    width: 50,
    height: 50,
  },

  menuImage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    paddingLeft: 5,
  },
});
