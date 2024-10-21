import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      <Button title="Decrementar" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default Counter;
