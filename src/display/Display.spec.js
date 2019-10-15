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

    it('displays "Locked" when gate is locked', () => {
        rtl.cleanup();
        wrapper = rtl.render(<Display locked={true} closed={true} />);
        expect(wrapper.queryByText(/unlocked/i)).not.toBeInTheDocument();
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
      });
      it("uses the red-led class when locked or closed", () => {
        rtl.cleanup();
        wrapper = rtl.render(<Display locked={true} closed={true} />);
        expect(wrapper.queryByText(/Locked/i)).toHaveClass("red-led");
        expect(wrapper.queryByText(/Closed/i)).toHaveClass("red-led");
      });
      it("uses the green-led class when unlocked or open", () => {
        expect(wrapper.queryByText(/Unlocked/i)).toHaveClass("green-led");
        expect(wrapper.queryByText(/Open/i)).toHaveClass("green-led");
      });
    
})