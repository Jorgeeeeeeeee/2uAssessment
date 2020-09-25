import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, completed, id, invoice_number, total, currency, invoice_date, due_date, vendor_name, remittance_address, status}) => (
  <li key={id} className={'item'}
    onClick={onClick}
    style={{
      textDecoration: (status == 'Approved') ? 'line-through' : 'none'
    }}
  >
  <div><b>Invoice Number</b>
  {invoice_number}
  </div>

  <div><b>Total</b>
  {total}
  </div>

  <div><b>Currency</b>
  {currency}
  </div>

  <div><b>Invoice Date</b>
    {invoice_date}
    </div>

  <div><b>Due Date</b>
    {due_date}
    </div>

  <div><b>Vendor Name</b>
    {vendor_name}
    </div>

  <div><b>Remittance Address</b>
    {remittance_address}
    </div>
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  // key: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  // text: PropTypes.string.isRequired
}

export default Item
