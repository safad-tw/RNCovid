import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


interface FilterProps {
  data: any,
  onValueChange: (data: number) => void
}

const Filters = ({ data, onValueChange }: FilterProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <View style={{ flexDirection: 'row' }}>
      {data.map((x: any, i: number) => (
        <FilterButton
          text={x.label}
          id={i}
          key={i}
          selectedIndex={selectedIndex}
          callback={(id) => {
            setSelectedIndex(id);
            if (onValueChange) {
              onValueChange(id);
            }
          }}
        />
      ))}
    </View>
  );
};

export interface FilterButtonProps {
  callback: (data: number) => void, id: number, selectedIndex: number, text: string
}

const FilterButton = ({ callback, text, id, selectedIndex }: FilterButtonProps) => {
  const clicked = selectedIndex === id;
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        { backgroundColor: clicked ? 'black' : 'white' },
      ]}
      onPress={() => {
        callback(id);
      }}>
      <Text style={{ color: clicked ? 'white' : 'black' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 20,
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 10, 
    margin: 5
  }
})

export default Filters;