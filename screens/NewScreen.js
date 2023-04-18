import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const NewScreen = () => {
  const [balance, setBalance] = useState(500); // початковий баланс 500
  const [dailyExpense, setDailyExpense] = useState(0); // початкові витрати 0
  const [textInputValue, setTextInputValue] = useState(''); // значення текстового поля
  const [operations, setOperations] = useState([]); // масив попередніх операцій

  // функція для додавання нової операції
  const addOperation = () => {
    const operation = {
      id: Math.random().toString(),
      amount: Number(textInputValue), // конвертуємо значення в число
      date: new Date().toLocaleDateString() // дата в форматі "дд/мм/рр"
    };
    setOperations([...operations, operation]); // додаємо нову операцію в кінець масиву
    setBalance(balance - operation.amount); // зменшуємо баланс на величину операції
    setDailyExpense(dailyExpense + operation.amount); // збільшуємо витрати на величину операції
    setTextInputValue(''); // очищуємо текстове поле
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.balance}>Баланс: {balance} грн</Text>
        <Text style={styles.expense}>Витрати за день: {dailyExpense} грн</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, textInputValue.includes('-') && styles.inputError]}
          keyboardType="numeric"
          placeholder="Введіть суму операції"
          value={textInputValue}
          onChangeText={setTextInputValue}
        />
        <Button title="OK" onPress={addOperation} />
      </View>
      <FlatList
        style={styles.list}
        data={operations}
        renderItem={({ item }) => (
          <View style={styles.operation}>
            <Text style={styles.operationAmount}>{item.amount} грн</Text>
            <Text style={styles.operationDate}>{item.date}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  expense: {
    fontSize: 18,
    color: 'gray'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    width: '70%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginRight: 10
  },
  inputError: {
    borderColor: 'red'
  },
  list: {
    width: '100%'
  },
  operation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  operationAmount: {
    fontSize: 18
  },
  operationDate: {
    fontSize: 14,
    color: 'gray'
  }
});

export default NewScreen;

