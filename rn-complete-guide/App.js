import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const  [isAddMode, setIsAddMode] = useState(false);
  
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
    setIsAddMode(false);
    setEnteredGoal('');
  };

  const removeGoalHandler = goadID => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter( (goal) => goal.key !== goadID);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} placeholder="Course Goal" changeText={goalInputHandler} value={enteredGoal} addGoal={addGoalHandler} cancelGoal={() => {setIsAddMode(false); setEnteredGoal('') }}/>
      <FlatList
      keyExtractor={(item, index) => item.key} 
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
