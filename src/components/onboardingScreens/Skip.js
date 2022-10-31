import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

const Skip = () => {
  return (
    <TouchableOpacity>
      <Text>Skip</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
    skipContainer : {
        flex:1,
        justifyContent:"flex-end"
    }
})

export default Skip;
