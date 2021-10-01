import React, { memo } from 'react';
import {
  Dimensions
} from 'react-native';
import {
  BarChart
} from 'react-native-chart-kit'

import LanguagesStrings from './../../localization/LanguagesStrings';
import {GlobalData} from './../../models/GlobalData'


interface GlobalCardProps {
  data: GlobalData
}



const GlobalCard = (props: GlobalCardProps) => {

  const getBarChartData = () => {
    if (props.data) {
      return [props.data.TotalDeaths / 1000, props.data.TotalRecovered / 1000, (props.data.TotalConfirmed - props.data.TotalRecovered) / 1000]
    }
    return []
  }

  return (
    <>
      <BarChart
        data={{
          labels: [LanguagesStrings.globalDeaths, 
            LanguagesStrings.recoveries, 
            LanguagesStrings.activeCases],
           datasets: [
            {
              data: getBarChartData()
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={250}
        yAxisLabel={''}
        xAxisLabel={'(K)'}
        yAxisSuffix={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>);

}


export default memo(GlobalCard);