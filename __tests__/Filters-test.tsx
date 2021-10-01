import * as React from "react";
import renderer from "react-test-renderer";
import TopFiveList from "../src/components/countryList/Filters";
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom'
import Filters from "../src/components/countryList/Filters";

test("Render component", () => {
    const clickFn = jest.fn();
    const buttons = [{label: "recovered"},{label: "deaths"},{abel: "active"}]
    const tree = renderer.create(<Filters data={buttons} onValueChange={clickFn}/>).toJSON();
    expect(tree).not.toBeNull()
  });


  test('Click filter recovered', () => {

    const clickFn = jest.fn();
    const buttons = [{label: "recovered"},{label: "deaths"},{label: "active"}]
    const { getByText } = render(<Filters data={buttons} onValueChange={clickFn}/>)
    fireEvent.press(getByText("recovered"));
  
  });

  test('Click filter deaths', () => {

    const clickFn = jest.fn();
    const buttons = [{label: "recovered"},{label: "deaths"},{label: "active"}]
    const { getByText } = render(<Filters data={buttons} onValueChange={clickFn}/>)
    fireEvent.press(getByText("deaths"));
  
  });

  test('Click filter deaths', () => {

    const clickFn = jest.fn();
    const buttons = [{label: "recovered"},{label: "deaths"},{label: "active"}]
    const { getByText } = render(<Filters data={buttons} onValueChange={clickFn}/>)
    fireEvent.press(getByText("active"));
  
  });


  test('Renders snapshot as expected', () => {
    const clickFn = jest.fn();
    const buttons = [{label: "recovered"},{label: "deaths"},{label: "active"}]
    const tree = render(<Filters data={buttons} onValueChange={clickFn}/>)
    expect(tree).toMatchSnapshot();
  });