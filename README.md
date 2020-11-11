# react-zaw-formgen

Generate forms using a json array .

## install

> npm i react-zaw-formgen

## Usage

```jsx
import FormGen from 'react-zaw-formgen';

const template = (label, input) => {
  return (
    <div key={input.key}>
      {label && <label htmlFor={input.key}>{label}</label>}
      {input}
    </div>
  );
};

const Formdata = [
  { type: 'text', label: 'full name', key: 'full_name', id: 'full_name' },
  { type: 'tel', label: 'phone', key: 'phone', id: 'phone' },
  { type: 'email', label: 'email', key: 'email', id: 'email' },
  {
    type: 'dropdown',
    label: 'country',
    key: `country`,
    id: `country`,
    value: 'FR',
    options: [
      { label: 'Morocco', value: 'MAR' },
      { label: 'France', value: 'FR' },
      { label: 'Spain', value: 'SP' },
    ],
  },
  { type: 'jsx', content: <hr /> },
  { type: 'submit', value: 'Send', key: 'send' },
];

<FormGen
  data={Formdata}
  template={template}
  onChange={handleChange}
  onSubmit={handleSubmit}
  className="myform"
/>
```
## API
| name  |type    |description   |  
|---|---|---|
| data  |{ type: string; label?: any; key?: any; [key: string]: any }[]   |   formData   |   
| className | string   |    custom className  |   
| template | JSX  |  specifies the structure, check Usage for an example  |   
| onChange |  func |     |   
| onSubmit |  func |     |   