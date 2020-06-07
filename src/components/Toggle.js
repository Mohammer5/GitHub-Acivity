import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Toggle.module.css'

export const Toggle = ({
  headline,
  children,
  id,
}) => {
  const [ open, setOpen ] = useState(false)
  const onClick = e => {
    e.preventDefault()
    setOpen(!open)

    console.log('id', id);
    document
      .getElementById(id)
      .scrollIntoView()
  }

  return (
    <div id={id} className={cx(styles.container, { [styles.open]: open })}>
      <a href="/" className={cx(styles.headline)} onClick={onClick}>
        {headline}
      </a>

      {open && (
        <div id={id} className={styles.toggle}>
          <div className={cx(styles.content)}>
            {children}
          </div>
        </div>
      )}

      {open && (
        <button onClick={onClick}>Close</button>
      )}
    </div>
  )
}
