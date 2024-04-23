

import React from 'react';

import Cardapio from './src/cadarpio';
import Carrinho  from './src/carrinho'
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroCliente';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


  
function App(): React.ReactElement {
  return (
  <NavigationContainer>

      <Stack.Screen  name='CadastroProdutos' component={CadastroProduto}
      options={{headerShown: false}}/>
      <Stack.Screen  name='Cardapio' component={Cardapio}
      options={{headerShown: false}}/>
   
  </NavigationContainer>
  
  );
 
  }


export default App;
