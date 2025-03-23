import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OfficeTimeCard from './OfficeTimeCard';

const cardsData = [
  { id: '1', title: 'Monthly Attendance', value: '1', icon: 'check-square', color: '#A970FF' },
  { id: '2', title: 'Monthly Hours', value: '00:00', icon: 'clock', color: '#51A6FF' },
  { id: '3', title: 'Monthly Late', value: '0', icon: 'user', color: '#53C983' },
  { id: '4', title: 'Remaining Leaves', value: '27.25', icon: 'calendar-alt', color: '#FFB547' },
//   { id: '5', title: 'Extra Card', value: 'N/A', icon: 'star', color: '#FF6347' }, // Example for 5th card
];

export default function Cards() {
  return (
    <View style={styles.container}>
        <OfficeTimeCard/>
      <FlatList
        data={cardsData}
        numColumns={2}
        keyExtractor={item => item.id}
        columnWrapperStyle={styles.row} // Applying gap here
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Icon name={item.icon} size={20} color={item.color} style={styles.icon} />
            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 10,
  },
  card: {
    backgroundColor: '#2E2E2E',
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'flex-start',
    minWidth: '48%',
  },
  icon: {
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 14,
    color: '#A0A0A0',
    marginTop: 5,
  },
});

