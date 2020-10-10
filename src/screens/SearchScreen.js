import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <View style={styles.error}>
        <Text style={{ color: 'black', fontSize: 20 }}>{errorMessage}</Text> </View> : null}
      <Text style={{ margin: 15 }} >We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList results={filterResultsByPrice('€')} title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('€€')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('€€€')} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    backgroundColor: 'rgba(255,0,0,0.8)',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default SearchScreen;
