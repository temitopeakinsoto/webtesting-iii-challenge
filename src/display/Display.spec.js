// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper

beforeEach(() => {
  wrapper = rtl.render(<Display />);
});

describe('Display component', () => {
    it('display component matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    });
    it('display component show gate as unlocked and open', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    });    
})