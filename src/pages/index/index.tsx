import { useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { produce } from 'immer'
import './index.css'

export default function Index() {

useEffect(()=>{
  const state = { name: 1 };
  const newState = produce(state, state2 => {
    state2.name = 2;
    return state2;
  });
  console.info('newState:', newState);
},[])

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
