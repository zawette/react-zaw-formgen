import React, { useState, ChangeEvent } from 'react';

interface Props {
  data: { type: string; label?: any; key?: any; [key: string]: any }[];
  template: (label: string, input: React.ReactNode) => React.ReactNode;
  onChange?:(values:any)=>any;
  onSubmit?:(values:any)=>any;
}




const renderElement = (input: any,handleChange: (input: any) => (e: React.ChangeEvent<any>) => void) => {
  const { type, label, ...props } = input;
  switch (type) {
    case 'dropdown':
      const { options, ...dProps } = props;
      return (
        <select onChange={handleChange(input)} {...dProps}>
          <option></option>
          {options.map((option: any) => {
            const { label, ...optionProps } = option;
            return (
              <option key={option.value} {...optionProps}>
                {option.label}
              </option>
            );
          })}
        </select>
      );
    case 'jsx':
      return props.content;
    default:
      return <input type={type} onChange={handleChange(input)} {...props} />;
  }
};

function FormGen(props: Props) {
  const { data, template,onChange } = props;
  const [values,setValues]=useState({});

  const handleChange = (input:any) => (e:ChangeEvent<any>) => {
    setValues((oldValues: any)=>{
      oldValues[input.key]=e.target.value;
      console.log(oldValues);
     return oldValues
    })
    onChange && onChange(values)
  }

  return (
    <form>
      {data.map(element => template(element.label!, renderElement(element,handleChange)))}
    </form>
  );
}

export default FormGen;
