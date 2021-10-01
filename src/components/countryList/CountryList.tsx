import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList, TextInput
} from 'react-native';

import Filters from './Filters'
import LanguagesStrings from './../../localization/LanguagesStrings';


function CountryList(props: any) {

  const data = props.route.params.data.Countries
  const [query, setQuery] = useState('');
  const [filterData, setFilterData] = useState(data);
  const [filters] = useState([
    { label: LanguagesStrings.recovered },
    { label: LanguagesStrings.deaths },
    { label: LanguagesStrings.active}
  ]);
  const [selected, setSelected] = useState(filters[0]);

  const filterByDeaths = () => {
    const sortedCountries = data.sort(function (a: any, b: any) {
      return parseFloat(b.TotalDeaths) - parseFloat(a.TotalDeaths);
    });
    setFilterData(sortedCountries)
  }

  const filterByActiveCases = () => {
    const sortedCountries = data.sort(function (a: any, b: any) {
      return parseFloat(b.TotalConfirmed) - parseFloat(a.TotalConfirmed);
    });
    setFilterData(sortedCountries)
  }

  const filterByRecovered = () => {
    const sortedCountries = data.sort(function (a: any, b: any) {
      return parseFloat(b.TotalRecovered) - parseFloat(a.TotalRecovered);
    });
    setFilterData(sortedCountries)
  }

  const callback = (id: number) => {
    switch(id) {
      case 0:
        setSelected(filters[0])
        filterByRecovered()
        break;   
      case 1:
        setSelected(filters[1])
        filterByDeaths()
        break;
      case 2:
        setSelected(filters[2])
        filterByActiveCases()
         break;
      default:
        break;       
    }
  }

  const handleSearch = (text: string) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = data.filter(function (a: any) {
      return a.Country.toLowerCase().includes(formattedQuery)
    });
    setFilterData(filteredData);
    setQuery(text);
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.searchBarContainer}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder={LanguagesStrings.searchByCountry}
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
      <View style={{ flexDirection: 'row', margin: 5 }}>
        <Filters data={filters} onValueChange={(id) => callback(id)} />
      </View>
      <FlatList
        data={filterData}
        keyExtractor={item => item.CountryCode}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.Country}</Text>
            <Text style={styles.listItemCaseText}>Total Confirmed: {item.TotalConfirmed}</Text>
            <Text style={styles.listItemCaseText}>TotalDeaths: {item.TotalDeaths}</Text>
            <Text style={styles.listItemCaseText}>NewConfirmed: {item.NewConfirmed}</Text>
            <Text style={styles.listItemCaseText}>NewDeaths: {item.NewDeaths}</Text>
            <Text style={styles.listItemCaseText}>NewRecovered: {item.NewRecovered}</Text>
            <Text style={styles.listItemCaseText}>TotalRecovered: {item.TotalRecovered}</Text>
          </View>
        )}
      />
    </View>
  )

}

export default CountryList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    width: '100%',
  },
  listItem: {
    margin: 10,
    width: '95%',
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  listItemText: {
    margin: 5,
    fontSize: 18,
    fontFamily: "Avenir-black",
  },
  listItemCaseText: {
    margin: 5,
    fontSize: 16,
    fontFamily: "Avenir-medium"
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    width: '95%',
    fontSize: 16,
    fontFamily: "Avenir-medium"
  },
  fliter_container: {
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  filterButton: {
    borderRadius: 15, 
    padding: 8, 
    paddingLeft: 24, 
    paddingRight: 24,
    marginRight: 8
  },
});