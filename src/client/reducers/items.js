
let items = (state = [], action) => {
    switch (action.type) {
      case 'LISTAR_INVOICES_SUCCESS':
        console.log('items invoices ' + JSON.stringify(action.payload))
          const returnedArray = (action.payload)
          console.log('return ' + JSON.stringify(returnedArray.data))
          let fullA = [];
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
           ]

   case 'UPDATE_ITEM':
       let prevState = [...state];
       const updArray = (action.payload)
       console.log('update itemxx ' + JSON.stringify(prevState))

       // const idi = updArray.data.id;

       var removeIndex = prevState.map(item => item.id)
                              .indexOf(updArray.data.id);
       //(removeIndex >= 0)
       ~removeIndex && prevState.splice(removeIndex, 1);
       console.log('update item xxx ' + JSON.stringify(prevState))

       let fullB = [];
       prevState.forEach(item =>
           fullB.push({
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


       console.log('update item xxx ' + JSON.stringify(fullB))

       return fullB;

    case 'ADD_ITEMS':
          return [
              ...state,
              {
                  id: action.id,
                  text: action.text,
                  completed: false
              }
          ]

    default:
            return state
    }
}

export default items;
