import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OfficeTimeCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Office Time</Text>
      <Text style={styles.time}>03:40:09</Text>
      <Text style={styles.date}>Mon, Mar 03 2025</Text>

      <View style={styles.row}>
        <View style={styles.sectionLeft}>
          <Text style={styles.label}>Check In</Text>
          <Text style={styles.value}>10:54 am</Text>
        </View>

        <View style={styles.sectionRight}>
          <Text style={styles.label}>Work Time</Text>
          <Text style={styles.value}>3 hrs & 40 mins</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.sectionLeft}>
          <Text style={styles.label}>Check Out</Text>
          <Text style={styles.value}>--:--</Text>
        </View>

        <View style={styles.sectionRight}>
          <Text style={styles.label}>Break Time</Text>
          <Text style={styles.value}>Unable to calculate</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D84340',
    padding: 10,
    paddingHorizontal:20,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  time: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // backgroundColor: 'white'
  },
  sectionLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  sectionRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  label: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: 'white',
    marginTop: 2,
  },
});
