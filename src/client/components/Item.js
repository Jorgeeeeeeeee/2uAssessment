import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, completed, id, text}) => (
  <li key={id} className={'item'}
    onClick={onClick}
    style={{
      textDecoration: (status == 'pending') ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  // key: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  // text: PropTypes.string.isRequired
}

export default Item
