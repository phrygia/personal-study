import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./componenets/GoalItem";
import GoalInput from "./componenets/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const endAddGoalHanlder = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.length > 0) {
      // setEnteredGoalText("");
      setCourseGoals((prev) => [
        ...prev,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      endAddGoalHanlder();
    }
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
    // console.log("delete");
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHanlder}
        />
        <View style={styles.goalsContianer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContianer: {
    flex: 4,
  },
});
