import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FormGen from '../src';

describe('FormGen', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormGen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
