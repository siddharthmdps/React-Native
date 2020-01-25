import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    return(
        <View 
            style={styles.inputContainer}>
        <TextInput 
          placeholder={props.placeholder}
          style={styles.input}
          onChangeText={props.changeText}
          value={props.value}/>
        <Button 
            title={props.title} 
            onPress={props.press} />
      </View>
    );
}

const styles = StyleSheet.create({
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
    }
});

export default GoalInput;