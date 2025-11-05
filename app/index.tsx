import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useCounterStore } from '../store/counterStore'

export default function App() {
  const { count, increase, decrease, reset } = useCounterStore()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Zustand State Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increase}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={reset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  resetButton: {
    marginTop: 30,
  },
  resetText: {
    color: '#FF3B30',
    fontSize: 18,
  },
})
