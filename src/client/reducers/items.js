
let items = (state = [], action) => {
    switch (action.type) {
      case 'LISTAR_INVOICES_SUCCESS':
        console.log('items invoices ' + JSON.stringify(action.payload))
          const returnedArray = (action.payload)
          console.log('return ' +JSON.stringify(returnedArray.data))
          var fullA = [];
          returnedArray.data.forEach(item =>
              fullA.push({ id:item.id, text:item.currency, completed:false})
          )
           return fullA;
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
