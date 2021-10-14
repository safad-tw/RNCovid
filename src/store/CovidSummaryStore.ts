import create from "zustand";
import { useQuery } from 'react-query'
import { URLs } from '../common/URL'
import { Country } from "../models/Country";
import {CovidCaseTypes} from '../common/CovidCaseTypes'

interface CovidSummaryState {
  covidCases: any;
  setCovidSummary: (data: any) => void;
  updateCovid: (type: string, countryCode: string, count: number) => void;
}

const covidSummaryStore = create<CovidSummaryState>(set => ({
  covidCases: [],
  setCovidSummary: (data) => {
    set({ covidCases: data })
  },
  updateCovid: (type, countryCode, count) => {
    set((state) => {
      let newCovidCountries = state.covidCases.Countries.map((country: Country) => {
        if (country.CountryCode === countryCode) {
          switch (type) {
            case CovidCaseTypes.death:
              state.covidCases.Global.TotalDeaths += count
              state.covidCases.Global.NewDeaths += count
              return {
                ...country,
                TotalDeaths: country.TotalDeaths + count,
                NewDeaths: country.NewDeaths + count
              }
            case CovidCaseTypes.recovery:
              state.covidCases.Global.TotalRecovered += count
              state.covidCases.Global.NewRecovered += count
              return {
                ...country,
                TotalRecovered: country.TotalRecovered + count,
                NewRecovered: country.NewRecovered + count
              }
            case CovidCaseTypes.active:
              state.covidCases.Global.NewConfirmed += count
              state.covidCases.Global.TotalConfirmed += count
              return {
                ...country,
                NewConfirmed: country.NewConfirmed + count,
                TotalConfirmed: country.TotalConfirmed + count
              }
            default:
              return country
          }
        } else {
          return country
        }
      })
      return {
        covidCases: { ...state.covidCases, Countries: newCovidCountries }
      }
    }
    );
  }
}))

export default covidSummaryStore;