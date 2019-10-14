// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

let wrapper

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

describe('Dashboard component', () => {
    it('dashboard component matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    });
    it('dashboard component to have a lock gate button', () => {
        expect(wrapper.queryByText(/Lock Gate/i)).toBeInTheDocument();
    });
})