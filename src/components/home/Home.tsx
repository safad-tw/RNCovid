import React, { useEffect } from 'react';
import TopFiveList from './TopFiveList';
import GlobalCard from './GlobalCard';
import Section from '../../common/Section';
import LanguagesStrings from './../../localization/LanguagesStrings';
import { useQuery } from 'react-query'
import { URLs } from '../../common/URL'

import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import covidSummaryStore from '../../store/CovidSummaryStore'


const Home = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const setCovidSummary = covidSummaryStore((state) => state.setCovidSummary);
  const covidCases = covidSummaryStore((state) => state.covidCases);

  const { isLoading, error, data } = useQuery('covidSummary', () =>
    fetch(URLs.covidSummary).then(res =>
      res.json()
    ))


  useEffect(() => {
    if (isLoading == false && data) {
      setCovidSummary(data)
    }
  }, [data])

  LanguagesStrings.setLanguage('en');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigateToList = () => {
    props.navigation.navigate('CountryList', { data: covidCases });
  }

  const top5Countries = () => {
    if (covidCases != undefined && covidCases.length != 0) {
      const sortedCountries = covidCases.Countries.sort(function (a: any, b: any) {
        return parseFloat(b.TotalConfirmed) - parseFloat(a.TotalConfirmed);
      });
      return sortedCountries.slice(0, 5)
    }

  }

  const reportNewCase = () => {
    props.navigation.navigate('ReportCase');
  }

  const CovidCasesView = () => {
    if (covidCases != undefined && covidCases.length != 0) {
      return (
        < View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={LanguagesStrings.top5countries}>
            <TopFiveList data={top5Countries()} navigateTo={navigateToList} />
          </Section>
          {<Section title={LanguagesStrings.global}>
            <GlobalCard data={covidCases.Global} />
          </Section>}
        </View>
      );
    }
  }

  const HeaderView = () => {
    return (
      <View style={styles.headerContainer}>
        <Text
          style={styles.headerTitle}>
          CORONA
        </Text>
        <TouchableOpacity
          onPress={reportNewCase}
          style={styles.reportCaseButtonContainer}>
          <Text style={styles.reportCaseButton}>+</Text>
        </TouchableOpacity>

      </View>
    );
  }


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {HeaderView()}
      {CovidCasesView()}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 10,
    width: '100%'
  },
  headerContainer: {
    height: 60
  },
  headerTitle: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: "Avenir-heavy",
    margin: 5
  },
  reportCaseButtonContainer: {
    position: 'absolute',
    top: 5,
    right: 20,
  },
  reportCaseButton: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: "Avenir-black",
    color: 'blue'
  },


  sectionTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: "Avenir-black",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;