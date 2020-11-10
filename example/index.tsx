import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FormGen from '../.';

const Formdata = [
  { type: 'text', label: 'full name', key: 'full_name', id:'full_name' },
  { type: 'email', label: 'email', key: 'email' , id: 'email' },
  {
    type: 'dropdown',
    label: 'country',
    key: `country`,
    id: `country`,
    value:'FR',
    options: [
      { label: 'Morocco', value: 'MAR' },
      { label: 'France', value: 'FR' },
      { label: 'Spain', value: 'SP' },
    ],
  },
  { type: 'jsx', content: <hr /> },
  { type: 'submit', value: 'Send', key: 'send' },
];

const template = (label, input) => {
  return (
    <div key={input.key}>
      {label && <label htmlFor={input.key}>{label}</label>}
      {input}
    </div>
  );
};

const handleChange = (values) => (e) => {
  console.log(values)
  console.log(e);
}

const handleSubmit = (values) => (e) => {
  e.preventDefault()
console.log(values)
}

const App = () => {
  return (
    <div>
      <FormGen data={Formdata} template={template} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
