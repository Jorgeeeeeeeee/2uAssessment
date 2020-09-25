
let items = (state = [], action) => {
    switch (action.type) {
      case 'LISTAR_INVOICES_SUCCESS':
          const returnedArray = (action.payload)
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
       var removeIndex = prevState.map(item => item.id)
                              .indexOf(updArray.data.id);
       //(removeIndex >= 0)
       ~removeIndex && prevState.splice(removeIndex, 1);

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
       alert('Approved Invoice Number: ' + updArray.data.invoice_number)
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
