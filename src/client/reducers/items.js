
let items = (state = [], action) => {
    switch (action.type) {
      case 'LISTAR_INVOICES_SUCCESS':
        console.log('items invoices ' + JSON.stringify(action.payload))
          const returnedArray = (action.payload)
          console.log('return ' + JSON.stringify(returnedArray.data))
          var fullA = [];
          returnedArray.data.forEach(item =>
              fullA.push({
                id:item.id,
                invoice_number:item.invoice_number,
                total:item.total,
                currency:item.currency,
                invoice_date:item.invoice_date,
                due_date:item.due_date,
                vendor_name:item.vendor_name,
                remittance_address:item.remittance_address,
                status:item.status,
                completed:false})
          )
           return fullA;
       case 'LISTAR_INVOICES_ERROR':
           return [
             {
                 error: action.payload,
             }
           ];
           )
        case 'ADD_ITEMS':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'UPDATE_ITEM':
            return state.map(item =>
                item.id === action.id ? { ...item, completed: !item.completed } : item
            )
        default:
            return state
    }
}

export default items;
