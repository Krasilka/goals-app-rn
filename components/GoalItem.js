import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteGoal.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedGoalItem}
    >
      <View style={styles.goalItem}>
        <Text style={[styles.goalItemText]}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 4,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  pressedGoalItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: '#2C0F35',
  },
});
