import { useField } from 'react-final-form';
import React from 'react'

import { Input } from './Input';

export const InputField = ({
  name,
  defaultValue,
  validate,
  ...props
}) => {
  const { input, meta } = useField(name, {
    defaultValue,
    validate,
  })

  return (
    <Input
      {...input}
      {...meta}
      {...props}
    />
  )
}

InputField.defaultProps = {
  defaultValue: '',
}
