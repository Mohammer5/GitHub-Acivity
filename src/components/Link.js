import React from 'react';
import propTypes from 'prop-types'

export const Link = ({ href, label }) => {
  const content = label || href

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  )
}

Link.propTypes = {
  href: propTypes.string.isRequired,
  label: propTypes.string,
}
