import * as React from "react";
import renderer from "react-test-renderer";
import TopFiveList from "../src/components/home/TopFiveList";
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom'
const data: any = [
  {
    ID: "d81abd15-3c81-4c98-82e7-6042959daa6d",
    Country: "Afghanistan",
    CountryCode: "AF",
    Slug: "afghanistan",
    NewConfirmed: 0,
    TotalConfirmed: 155093,
    NewDeaths: 0,
    TotalDeaths: 7201,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-09-29T12:04:59.613Z",
    Premium: {}
  },
  {
    ID: "39714019-ce94-461b-b81a-1236f961c02a",
    Country: "Albania",
    CountryCode: "AL",
    Slug: "albania",
    NewConfirmed: 0,
    TotalConfirmed: 168782,
    NewDeaths: 0,
    TotalDeaths: 2668,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-09-29T12:04:59.613Z",
    Premium: {}
  },
  {
    ID: "729b2b5d-848c-4597-98b2-d35a90045c80",
    Country: "Algeria",
    CountryCode: "DZ",
    Slug: "algeria",
    NewConfirmed: 0,
    TotalConfirmed: 203045,
    NewDeaths: 0,
    TotalDeaths: 5797,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-09-29T12:04:59.613Z",
    Premium: {}
  },
  {
    ID: "da4c9b7a-5f18-4105-a349-0af456ebc00b",
    Country: "Andorra",
    CountryCode: "AD",
    Slug: "andorra",
    NewConfirmed: 0,
    TotalConfirmed: 15192,
    NewDeaths: 0,
    TotalDeaths: 130,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-09-29T12:04:59.613Z",
    Premium: {}
  },
  {
    ID: "e0737d69-f4ee-417d-b781-83ceb157efd9",
    Country: "Angola",
    CountryCode: "AO",
    Slug: "angola",
    NewConfirmed: 0,
    TotalConfirmed: 56040,
    NewDeaths: 0,
    TotalDeaths: 1526,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-09-29T12:04:59.613Z",
    Premium: {}
  }];
test("Render component", () => {
  const clickFn = jest.fn();
  const tree = renderer.create(<TopFiveList data={data} navigateTo={clickFn} />).toJSON();
  expect(tree).not.toBeNull()
});

test("Render view all button", () => {

  const clickFn = jest.fn();
  const tree = renderer.create(<TopFiveList data={data} navigateTo={clickFn} />).toJSON();
  expect(tree).not.toBeNull()
});

test('Renders snapshot as expected', () => {
  const clickFn = jest.fn();
  const tree = renderer.create(<TopFiveList data={data} navigateTo={clickFn} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Click view all', () => {

  const clickFn = jest.fn();
  const { getByText } = render(<TopFiveList data={data} navigateTo={clickFn} />)
  fireEvent.press(getByText("View All"));

});

test('Click view all and verify call back is called', () => {

  const mockcallBack = jest.fn();
  const { getByText } = render(<TopFiveList data={data} navigateTo={mockcallBack} />)
  fireEvent.press(getByText("View All"));
  expect(mockcallBack).toHaveBeenCalled();


});