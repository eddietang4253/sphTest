import React, {Component} from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Dimensions,
  FlatList,
  StatusBar,
  ActivityIndicator
} from "react-native";

import styles from "./styles";

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
  }
  componentDidMount() {
    this.getData();
  }
  groupBy(objectArray, property) {
    return objectArray.reduce(function(acc, obj) {
      var key = obj[property];

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  getData() {
    this.setState({loading: true});
    fetch(
      "https://data.gov.sg/api/action/datastore_search?resource_id=a807b7ab-6cad-4aa6-87d0-e283a7353a0f"
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log("responseJson", responseJson.result.records);
        this.setState(
          {
            loading: false,
            data: responseJson.result.records
          },
          () => {
            this.processData(responseJson.result.records);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  processData(data) {
    //  var res = data.split(" ");

    var array1 = []; // better to define using [] instead of new Array();
    var array2 = [];

    for (var i = 0; i < data.length; i++) {
      var split = data[i].quarter.split("-"); // just split once
      array1.push({
        year: split[0],
        quarter: split[1],
        data: data[i].volume_of_mobile_data
      }); // before the dot
      array2.push(split[1]); // after the dot
    }
    var processedData = this.groupBy(array1, "year");
    console.log("processedData", processedData);
    var finalData = [];
    for (var i = 0; i < processedData.length; i++) {
      if (finalData.length == 0) {
        finalData = [{}];
      }
    }
    console.log("array2", array2);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{}}
          data={this.state.data}
          onRefresh={() => this.getData()}
          contentContainerStyle={{paddingTop: 16}}
          refreshing={this.state.loading}
          renderItem={({item, index}) => (
            <View>
              <Text>
                {item.quarter} : {item.volume_of_mobile_data}
              </Text>
            </View>
          )}
          keyExtractor={item => item._id.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default HomeView;
