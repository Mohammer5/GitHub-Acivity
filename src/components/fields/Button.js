import React from 'react'
import cx from 'classnames'

import { Field } from './Field';
import styles from './Button.module.css'

export const Button = ({
  type,
  secondary,
  primary,
  children,
}) => (
  <Field>
    <button
      type={type}
      className={cx(styles.button, {
        [styles.secondary]: secondary,
        [styles.primary]: primary,
      })}
    >
      {children}
    </button>
  </Field>
)

Button.defaultProps = {
  type: 'submit',
  secondary: true,
}
