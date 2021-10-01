import * as React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom'
import ReportCase from "../src/components/reportcase/ReportCase";


test("Render component", () => {
    const tree = renderer.create(<ReportCase/>).toJSON();
    expect(tree).not.toBeNull()
  });

  test('Renders snapshot as expected', () => {
    const tree = renderer.create(<ReportCase/>).toJSON();
    expect(tree).toMatchSnapshot();
  });