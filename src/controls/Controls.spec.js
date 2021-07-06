// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper

beforeEach(() => {
  wrapper = rtl.render(<Controls />);
});

describe('Control Toggles On Click of Button', () => {
    it('clicking lock gate button doesn\'t open it', () => {
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/lock gate/i)).toBeDisabled();
        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        expect(wrapper.queryByText(/lock gate/i).closest('button')).toHaveClass('toggle-btn');
        rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        expect(wrapper.queryByText(/close gate/i)).toHaveClass('toggle-btn');
    })
})