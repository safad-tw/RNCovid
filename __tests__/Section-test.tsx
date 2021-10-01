import * as React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom'
import Section from "../src/common/Section";

test("Render component", () => {
    const tree = renderer.create(<Section title={'Global'}/>).toJSON();
    expect(tree).not.toBeNull()
  });

  test('Renders snapshot as expected', () => {
    const tree = renderer.create(<Section title={'Global'}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });