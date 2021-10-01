import create from "zustand";
import { useQuery } from 'react-query'
import {URLs} from '../common/URL'

interface CovidSummaryState {
  covidCases: any;
  getCovidSummary: () => void;
  updateCovid: (type: string, countryCode: string, count: number) => void;
}

const covidSummaryStore = create<CovidSummaryState>(set => ({
  covidCases: [],
  getCovidSummary: async () => {
   await fetchSummary(set)
  },
  updateCovid: (type, countryCode, count) => {
    set((state) => ({
      covidCases: updateCovidCase(state.covidCases, type, countryCode, count)
    }));
  }
}))

const fetchSummary = async (set:any) => {
  const { isLoading, error, data } = useQuery('covidSummary', () =>
      fetch(URLs.covidSummary).then(res =>
        res.json()
    ))
    set({covidCases: data})
 }


const updateCovidCase = (covidCases: any, type: string, countryCode: string, count: number) => {
  return covidCases.Countries.filter((country: any) => country.CountryCode == countryCode)
    .forEach((country: any) => {
      switch (type) {
        case 'death':
          country.TotalDeaths += count
          country.NewDeaths += count
          covidCases.Global.TotalDeaths += count
          covidCases.Global.NewDeaths += count
          break;
        case 'recovery':
          country.TotalRecovered += count
          country.NewRecovered += count
          covidCases.Global.TotalRecovered += count
          covidCases.Global.NewRecovered += count
          break;
        case 'active':
          country.NewConfirmed += count
          country.TotalConfirmed += count
          covidCases.Global.NewConfirmed += count
          covidCases.Global.TotalConfirmed += count
          break;
        default:
          break;
      }

    })
}

// covidSummaryStore.getState().getCovidSummary()

export default covidSummaryStore;