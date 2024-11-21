import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

//apliqué lo que vimos en clase para poder mandar lo que sea en el array
interface ListProps<T> {
  data: Array<T>;
  filter: (value: T) => boolean;
}

//decidí no hacer una función de filtrado independiente y hacerla dentro del mismo componente
export default function List<T>({ data, filter }: ListProps<T>) {
  const filterData = data.filter((item) => filter(item as T));

  //esto ta medio chafón pero no se me ocurrió otra forma de hacer que pueda renderizar cualquier cosa
  const ItemToRender = ({ item }: { item: T }) => {
    return (
      <View>
        <Text>{JSON.stringify(item)}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={filterData}
          renderItem={({ item }) => <ItemToRender item={item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
