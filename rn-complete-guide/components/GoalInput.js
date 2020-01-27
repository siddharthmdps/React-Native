import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    return(
        <Modal visible={props.visible} animationType="slide">
            <View 
                style={styles.inputContainer}>
            <TextInput 
            placeholder={props.placeholder}
            style={styles.input}
            onChangeText={props.changeText}
            value={props.value}
            color="#000"/>
            <View style={styles.ButtonContainer}>
                <View style={styles.button}>
                    <Button 
                        title = "Cancel"
                        color = "#f00" 
                        onPress={props.cancelGoal} />

                </View>
                <View style={styles.button}>
                    <Button 
                        title="Add"
                        onPress={props.addGoal} />

                </View>
            </View>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    input: {
        width: '80%', 
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10 
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: 20
    }, 
    button: {
        width: '40%',
        borderWidth: 1,
        borderRadius: 30
        
    }
});

export default GoalInput;