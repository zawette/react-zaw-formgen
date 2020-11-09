import React from 'react';

interface Props {
  data: { type: string; label?: string; key?: string ,[key:string]:any }[];
  template : (label:string,input:React.ReactNode)=>React.ReactNode;
}

function FormGen(props: Props) {
  const {  } = props;

  return <form></form>;
}

export default FormGen;
