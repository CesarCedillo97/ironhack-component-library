import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List } from './src';

type ItemType = {
  name: string;
  age: number;
  favoriteColor?: 'red' | 'blue' | 'green' | 'yellow';
};

const MockedListData: ItemType[] = [
  { name: 'John', age: 25, favoriteColor: 'blue' },
  { name: 'Jane', age: 27, favoriteColor: 'red' },
  { name: 'Doe', age: 30, favoriteColor: 'green' },
  { name: 'Smith', age: 35, favoriteColor: 'yellow' },
  { name: 'Doe', age: 40 },
  { name: 'Smith', age: 45 },
];

export default function App() {
  const [textInputValue, setTextInputValue] = useState<string>('');
  const [numberInputValue, setNumberInputValue] = useState<number>(0);

  //aquí solo decidí hacer un pequeño ejemplo de cómo se verían los componentes usando diferentes tipos de datos
  return (
    <View style={styles.container}>
      <Text>Buttons:</Text>
      <Button
        onClick={() => console.log('Button clicked')}
        title="Me puedes clickear"
        isDisabled={false}
        bgColor="blue"
        textColor="white"
      />
      <Button
        onClick={() => console.log('Button clicked')}
        title="No me puedes clickear"
        isDisabled={true}
        bgColor="yellow"
        textColor="black"
      />
      <View style={styles.hr} />
      <Text>List:</Text>
      <Text>List with age greater than 30:</Text>
      <List data={MockedListData} filter={(item) => item.age > 30} />
      <Text>List with favorite color blue:</Text>
      <List
        data={MockedListData}
        filter={(item) => item.favoriteColor === 'blue'}
      />
      <View style={styles.hr} />
      <Text>InputField:</Text>
      <Text>Text input:</Text>
      <input
        type="text"
        value={textInputValue}
        onChange={(e) => setTextInputValue(e.target.value)}
      />
      <Text>Number input:</Text>
      <input
        type="number"
        value={numberInputValue}
        onChange={(e) => setNumberInputValue(Number(e.target.value))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
});
