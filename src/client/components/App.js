import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { listarItems } from '../actions';

const App = ({ qty, dispatch }) => {
    let input, item;

    useEffect(() => {

      setInterval(function() {
          dispatch(listarItems());
      }, 3 * 1000);

    },[]);


    return (
        <div className={'wrapper'}>
      <h1>2ULAUNDRY INVOICES</h1>
      <span>Click on the invoice to Approve</span>
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
