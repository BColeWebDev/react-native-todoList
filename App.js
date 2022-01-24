import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Tasks from './components/tasks';
export default function App() {
  const [input, setinput] = useState();
  const [tasks, setTask] = useState([]);
  const handleAddTask = (input) => {
    Keyboard.dismiss()
    setTask([...tasks, input])
    setinput(null)
  }

  const hanldeCompletedTask = (index) => {
    let taskCopy = [...tasks]
    taskCopy.splice(index, 1)
    setTask(taskCopy)
  }


  return (
    <View style={styles.container}>
      {/* Tasks Title*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today Task's</Text>
        <View style={styles.items}>
          {/* Task */}
          {tasks.length <= 0 ? <Text>No task Created</Text> : tasks.map((task, index) => {
            return (
              <>

                <TouchableOpacity onPress={() => hanldeCompletedTask(index)}>
                  <Tasks key={index} text={task} />
                </TouchableOpacity>
              </>
            )
          })}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder='Write a task' value={input} onChangeText={text => setinput(text)}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask(input)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-around'
  },
  input: {
    padding: 15,
    width: 270,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "white"
  },
  addText: {
    fontSize: 30,
  }

});
