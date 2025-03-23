import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import moment from 'moment'; 
import CalendarView from '../components/Calendar';
import Cards from '../components/Cards';

export default function MainScreen() {
    // const [selected, setSelected] = useState<string | null>(null);
    const [selected, setSelected] = useState('2025-03-04');
    const getRandomDate = async () => {
        try {
          const response = await axios.get('https://randomuser.me/api/');
          console.log('API Response:', response.data);
      
          if (response.data?.results?.[0]?.dob?.date) {
            const formattedDate = moment(response.data.results[0].dob.date).format('YYYY-MM-DD'); // Ensure correct format
            setSelected(formattedDate);
          }
        } catch (error) {
          console.error('Error fetching random date:', error);
        }
      };
      
    useEffect(() => {
        getRandomDate();
      }, []);

  return (
    <View style={styles.container}>
    <Cards/>
    <CalendarView selected={selected} setSelected={setSelected}/> 
    {/* <View style={{backgroundColor:'tomato'}}>
      <Text style={{color:'white'}}>Highlighted Random Date: {selected || 'Loading...'}</Text>
    </View> */}
  </View>
  )
}
const styles = StyleSheet.create({
    background: {
      backgroundColor: Colors.black,
      flex: 1,
    },
    container: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: Colors.black,
      paddingBottom:50
      
    },
  });