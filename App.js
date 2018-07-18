import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Họ và Tên :  Nguyễn Tuấn Anh</Text>
          <Text style={styles.welcome}>Tuổi :  30</Text>
          <Text style={styles.welcome}>Giới Tính : Nam</Text>
          <Text style={styles.welcome}>Trường : Đại Học Bách Khoa Hà Nội</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
