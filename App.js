import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    finishAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentGoalsList) => {
      return currentGoalsList.filter((item) => item.id != id);
    });
  }

  function renderGoalItem(itemData) {
    return (
      <GoalItem
        id={itemData.item.id}
        text={itemData.item.text}
        onDeleteGoal={deleteGoalHandler}
      />
    );
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function finishAddGoalHandler() {
    setModalIsVisible(false);
  }

  const emptyList = !!goalsList.length;

  return (
    <>
      <StatusBar style="light" />
      <View style={[styles.appContainer, emptyList && { paddingTop: 100 }]}>
        <View style={styles.button}>
          <Button
            title="Add New Goal"
            color="#ffffff"
            accessibilityLabel="Add New Goal"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={finishAddGoalHandler}
        />

        {emptyList && (
          <View style={styles.goalsContainer}>
            <FlatList
              alwaysBounceVertical={false}
              data={goalsList}
              renderItem={renderGoalItem}
              keyExtractor={(goal) => goal.id}
            ></FlatList>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  goalsContainer: {
    flex: 6,
    color: 'red',
    paddingVertical: 40,
  },
  button: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#ffffff90',
    width: '100%',
    justifyContent: 'center',
    height: 40,
  },
});

export default App;
