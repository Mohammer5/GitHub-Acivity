import React, { useEffect, useState } from 'react';

export const Toggles = ({
  children,
}) => {
  const [ open, setOpen ] = useState(-1)
  useEffect(() => {
    if (open !== -1) {
      document
        .getElementById(`toggle-${open}`)
        .scrollIntoView()
    }
  }, [ open ])
  
  return (
    <React.Fragment>
      {React.Children.map(children, (child, index) => React.cloneElement(
        child,
        {
          id: `toggle-${index}`,
          open: index === open,
          onClick: () => {
            if (index !== open) {
              setOpen(index)
            } else {
              setOpen(-1)
            }
          },
        }
      ))}
    </React.Fragment>
  )
}
