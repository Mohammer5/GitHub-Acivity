import React from 'react'
import cx from 'classnames'

import { Field } from './Field';
import { Help } from '../Help';
import { Label } from '../Label';
import styles from './Select.module.css'

export const Select = ({
  type,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  label,
  help,
  error,
  touched,
  children,
}) => {
  return (
    <Field className="input-field">
      <Label>
        {label}
      </Label>

      <select
        value={value}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        className={cx(styles.input, { [styles.invalid]: !!error && touched })}
      >
        {children}
      </select>

      {help && (
        <Help>
          {help}
        </Help>
      )}

      {error && touched && (
        <Help error>
          {error}
        </Help>
      )}
    </Field>
  )
}

Select.defaultProps = {
  defaultValue: '',
}
