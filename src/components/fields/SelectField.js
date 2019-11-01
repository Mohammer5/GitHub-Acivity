import { useField } from 'react-final-form';
import React from 'react'

import { Select } from './Select';

export const SelectField = ({
  defaultValue,
  validate,
  name,
  ...props
}) => {
  const { input, meta } = useField(name, {
    defaultValue,
    validate,
  })

  return (
    <Select
      {...input}
      {...meta}
      {...props}
    />
  )
}

SelectField.defaultProps = {
  defaultValue: '',
}
