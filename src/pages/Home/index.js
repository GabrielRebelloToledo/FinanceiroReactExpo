import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '100,00',
    date: '14/01/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Boleto conta água',
    value: '40,00',
    date: '13/01/2023',
    type: 0 //despesas
  },
  {
    id: 3,
    label: 'Salário',
    value: '2.000,00',
    date: '06/01/2023',
    type: 1 //receitas
  },
  {
    id: 4,
    label: 'Pix cliente x',
    value: '1.002,00',
    date: '13/01/2023',
    type: 1 //receitas
  },


]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gabriel Toledo" />
      <Balance saldo="9.240,90" gastos="250,90" />
      <Actions/>
      <Text style={styles.title}>Útimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => {
          String(item.id)
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    
  },
  list: {
    marginEnd: 14,
    marginStart: 14
  }
});
