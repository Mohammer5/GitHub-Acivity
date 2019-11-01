import React from 'react'
import cx from 'classnames'

import { Field } from './Field';
import { Help } from '../Help';
import { Label } from '../Label';
import styles from './Input.module.css'

export const Input = ({
  type,
  name,
  label,
  value,
  placeholder,
  help,
  onChange,
  onFocus,
  onBlur,
  error,
  touched,
}) => {
  return (
    <Field className="input-field">
      <Label>
        {label}
      </Label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
        className={cx(styles.input, { [styles.invalid]: !!error && touched })}
        placeholder={placeholder}
      />

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

Input.defaultProps = {
  defaultValue: '',
}
