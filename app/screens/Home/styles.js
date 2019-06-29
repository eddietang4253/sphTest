import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8"
  },
  cards: {
    width: 350,
    height: 150,
    alignSelf: "center",
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    zIndex: 1,
    elevation: 2,
    padding: 10
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    marginTop: 30
  },
  yearText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    alignSelf: "center",
    flex: 1
  },
  title: {
    fontWeight: "500",
    fontSize: 22,
    textAlign: "center",
    color: "salmon"
  },
  data: {
    paddingTop: 10,
    fontSize: 16,
    textAlign: "center"
  },
  reloadButton: {
    width: 200,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#666666",
    alignSelf: "center",
    marginTop: 50
  },
  reloadButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  }
});

export default styles;
