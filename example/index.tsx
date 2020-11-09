import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FormGen from '../.';

const Formdata = [
  { type: 'text', label: 'full name', key: 'full_name' },
  { type: 'email', label: 'email', key: 'email' },
  {
    type: 'dropdown',
    label: 'country',
    key: `country`,
    value: "FR",
    options: [
      { label: 'Morocco', value: 'MAR'},
      { label: 'France', value: 'FR'},
      { label: 'Spain', value: 'SP' },
    ],
  },
  { type: 'submit', value: 'Send', key: 'send' },
];

const template = (label, input) => {
  return (
    <div key={input.key}>
      <label>{label}</label>
      {input}
    </div>
  );
};
const App = () => {
  return (
    <div>
      <FormGen data={Formdata} template={template} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
