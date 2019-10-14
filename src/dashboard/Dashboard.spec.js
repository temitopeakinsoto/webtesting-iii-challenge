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

describe('Dashboard component display and controls', () => {
    it('dashboard component matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    });
    it('dashboard component to have a lock gate button', () => {
        expect(wrapper.queryByText(/Lock Gate/i)).toBeInTheDocument();
    });
    it('dashboard component to have an open gate button', () => {
        expect(wrapper.queryByText(/Close Gate/i)).toBeInTheDocument();
    });

    it('dashboard component to have a lock gate button', () => {
        expect(wrapper.queryByText(/Unlocked/i)).toBeInTheDocument();
    });
    it('dashboard component to have an open gate button', () => {
        expect(wrapper.queryByText(/Open/i)).toBeInTheDocument();
    });
    
})