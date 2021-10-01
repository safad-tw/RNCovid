import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity, Alert
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import covidSummaryStore from '../../store/CovidSummaryStore'
import LanguagesStrings from './../../localization/LanguagesStrings';


const ReportCase = () => {

  const [numberOfCase, setNumberOfCases] = useState('')
  const [country, setCountry] = useState('')
  const [caseType, setCaseType] = useState('')

  const covidCases = covidSummaryStore((state) => state.covidCases.Countries);

  const updateCovid = covidSummaryStore((state) => state.updateCovid);

  const getCountries = () => {
    if (covidCases) {
      return covidCases.map((country: any) => (
        { 'label': country.Country, 'value': country.CountryCode }
      ));
    }
    return []
  }

  const pickerStyle: any = {
    inputIOS: {
      color: 'gray',
      paddingHorizontal: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      margin: 5,
      borderColor: 'black',
      borderWidth: 1,
      height: 40,
      fontSize: 18,
      textAlign: 'center',
      fontFamily: "Avenir-medium"
    },
    placeholder: {
      color: 'gray',
      fontSize: 18,
      textAlign: 'center',
      fontFamily: "Avenir-medium",
    },
    inputAndroid: {
      color: 'gray',
      paddingHorizontal: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      margin: 5,
      fontSize: 18,
      textAlign: 'center',
      fontFamily: "Avenir-medium",
    },
  };

  const caseTypes = [
    { label: 'Death', value: 'death' },
    { label: 'Recovery', value: 'recovery' },
    { label: 'Active', value: 'active' }
  ]

  const showAlert = (title:string,message:string) =>
    Alert.alert(
      title,
      message,
      [],
      {
        cancelable: true
      }
    );


  const submitClicked = () => {
    if (numberOfCase !== '' && country !== '' && caseType !== '') {
      updateCovid(caseType, country, Number(numberOfCase))
      showAlert(LanguagesStrings.success,LanguagesStrings.newCaseReported)
    } else {
      showAlert(LanguagesStrings.error,
      LanguagesStrings.enterAllTheFields)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Country: </Text>
      <RNPickerSelect
        style={pickerStyle}
        onValueChange={(value) => setCountry(value)}
        items={getCountries()}
      />

      <Text style={styles.label}> Case type: </Text>
      <RNPickerSelect
        style={pickerStyle}
        onValueChange={(value) => setCaseType(value)}
        items={caseTypes}
      />

      <Text style={styles.label}> Number of cases: </Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeholder={LanguagesStrings.enterNumberOfCase}
        onChangeText={(text) => setNumberOfCases(text)}
        value={numberOfCase}
      />
      <TouchableOpacity
        onPress={submitClicked}
        style={styles.submitButton}>
        <Text>Submit</Text>
      </TouchableOpacity>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  textInput: {
    color: 'gray',
    width: '95%',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 5,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: "Avenir-medium"
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: "Avenir-black",
  },
  countryContainer: {
    height: 50,
    paddingTop: 40,
    width: '90%',
    alignItems: "center",
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 5,
  },
  submitButton: {
    marginTop: 20,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
});

export default ReportCase;
