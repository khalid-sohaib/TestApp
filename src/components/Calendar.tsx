import moment from 'moment'; // Import moment for formatting
import React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function CalendarView({ selected, setSelected }: { selected: string, setSelected: any } ) {
  return (
    <View>
       <Calendar
      key={selected} 
      style={styles.calendar}
      theme={styles.calendarTheme}
      current={selected}
      onDayPress={day => {
        console.log('Selected day:', day);
        setSelected(day.dateString); 
      }}
      markedDates={{
        [selected]: { selected: true, selectedColor: '#D84340', textColor: '#FFFFFF' } 
      }}
      renderHeader={date => (
        <Text style={styles.headerText}>
          {moment(date.toISOString()).format('MMMM YYYY')}
        </Text>
      )}
    />
    </View>
  )
}
const styles = StyleSheet.create({
    background: {
      backgroundColor: Colors.black,
      flex: 1,
    },
    container: {
      // paddingTop: 10,
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: Colors.black,
      paddingBottom:50
      
    },
    calendar: {
      borderWidth: 1,
      height: 350,
      borderRadius: 8,
      borderColor:Colors.black
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF', // White header text
      textAlign: 'center',
      padding: 10,
    },
    calendarTheme: {
      backgroundColor: '#2D2F33',
      calendarBackground: '#2E2E2E',
      textSectionTitleColor: '#4A90E2',
      selectedDayBackgroundColor: '#D84340',
      selectedDayTextColor: '#FFFFFF',
      todayTextColor: '#4A90E2',
      dayTextColor: '#FFFFFF',
      textDisabledColor: '#6B6D70',
      arrowColor: '#FFFFFF',
      monthTextColor: '#FFFFFF',
    },
  });