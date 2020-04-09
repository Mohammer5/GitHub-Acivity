import React from 'react';
import cx from 'classnames';
import styles from './Toggle.module.css'

export const Toggle = ({
  headline,
  children,
  open,
  onClick,
  id,
}) => {
  return (
    <div id={id} className={cx(styles.toggle, { [styles.open]: open })}>
      <div className={cx(styles.headline)} onClick={onClick}>
        {headline}
      </div>

      <div className={cx(styles.content)}>
        {children}
      </div>
    </div>
  )
}
