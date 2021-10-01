/**
 * @format
 */

import 'react-native';
// import App from '../App';

import React from 'react';
import GlobalCard from '../src/components/home/GlobalCard';
import renderer from 'react-test-renderer';



it('renders correctly', () => {
  let globalData = {
    NewConfirmed: 257853,
    TotalConfirmed: 232449101,
    NewDeaths: 6292,
    TotalDeaths: 4762406,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-09-29T12:04:59.613Z"
    }
  const tree = renderer.create(<GlobalCard data={globalData} />);
  expect(tree).not.toBeNull()
});

it('Renders snapshot as expected', () => {
  let globalData = {
    NewConfirmed: 257853,
    TotalConfirmed: 232449101,
    NewDeaths: 6292,
    TotalDeaths: 4762406,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-09-29T12:04:59.613Z"
    }
  const tree = renderer.create(<GlobalCard data={globalData} />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('Find Graph element', () => {
  let globalData = {
    NewConfirmed: 257853,
    TotalConfirmed: 232449101,
    NewDeaths: 6292,
    TotalDeaths: 4762406,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-09-29T12:04:59.613Z"
    }
  const tree = renderer.create(<GlobalCard data={globalData} />).toJSON();
  const result = renderer.create(<GlobalCard data={globalData} />);
 
});
