import React from 'react';
import { connect } from 'react-redux';
import { addItems, listarItems } from '../actions';

const App = ({ qty, dispatch }) => {
    let input, item;


    dispatch(listarItems());


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) { return }
        item = {
            text: input.value
        }
        dispatch(addItems(item));
        input.value = '';
    };

    return (
        <div className={'wrapper'}>
      <h1>2ULAUNDRY INVOICES</h1>
      {/*        <form onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                    <label>Todo: </label>
                    <input type="text" name="name" ref={node => (input = node)} />
                </div>
                <div className={'div-wrapper'}>
                    <label>&nbsp;</label>
                    <input type="submit" value="Submit" />
                </div>
            </form>*/}
        </div>
    )
}

export default connect()(App)
