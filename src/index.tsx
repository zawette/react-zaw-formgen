import React, { useState } from 'react';

interface Props {
  data: { type: string; label?: any; key?: any; [key: string]: any }[];
  template?: (label: string, input: any) => JSX.Element;
  onChange?: (values: any) => any;
  onSubmit?: (values: any) => any;
  className?: string;
}

const DefaultTemplate = (label: string, input: any) => {
  return (
    <div key={input.key}>
      {label && <label htmlFor={input.key}>{label}</label>}
      {input}
    </div>
  );
};

const renderElement = (
  input: any,
  handleChange: (input: any) => (e: React.ChangeEvent<any>) => void
) => {
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
  const { data, template, onChange, onSubmit, className } = props;
  const [values, setValues] = useState({});

  const handleChange = (input: any) => (e: React.ChangeEvent<any>) => {
    setValues((oldValues: any) => ({
      ...oldValues,
      [input.key]: e.target.value,
    }));
    onChange && onChange(values)(e);
  };

  return (
    <form onSubmit={onSubmit && onSubmit(values)} className={className}>
      {data &&
        data.map(element =>
          template!(element.label!, renderElement(element, handleChange))
        )}
    </form>
  );
}

FormGen.defaultProps = {
  className: '',
  template: DefaultTemplate,
} as Partial<Props>;

export default FormGen;
