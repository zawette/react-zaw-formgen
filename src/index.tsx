import React from 'react';

interface Props {
  data: { type: string; label?: string; key?: string; [key: string]: any }[];
  template: (label: string, input: React.ReactNode) => React.ReactNode;
}

const renderElement = (input: any) => {
  const { type, label, ...props } = input;
  switch (type) {
    case 'dropdown':
      const { options, ...dProps } = props;
      return (
        <select {...dProps}>
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
      return <input type={type} {...props} />;
  }
};

function FormGen(props: Props) {
  const { data, template } = props;
  return (
    <form>
      {data.map(element => template(element.label!, renderElement(element)))}
    </form>
  );
}

export default FormGen;
