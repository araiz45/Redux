import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index'
import { useSelector } from 'react-redux'

function Shop() {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount);
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <h2>Deposit / Withdraw Money</h2>
        <button type="button" class="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
            Update Balance : {amount}
        <button type="button" class="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop  