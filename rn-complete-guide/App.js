import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList
      keyExtractor={(item, index) => item.key} 
        data={courseGoals} 
        renderItem={itemData => 
        <View style={styles.listItems}>
          <Text>{itemData.item.value}</Text>
        </View>
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  input: {
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10 
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
     
  }
});
