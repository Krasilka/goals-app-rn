import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#b53939" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#ffffff" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#A27FBE',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#ffffff90',
    width: '40%',
    height: 40,
    marginHorizontal: 34,
  },
  image: { width: 180, height: 180, marginVertical: 50, marginTop: 150 },
  textInput: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
});
