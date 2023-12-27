"use client"
import React, { useState } from 'react'
import styles from '@/form.module.css';

type Expense = {
    text:string,
    amount:number,
}

interface addExpenseProps {
    addExpense: (expense: Expense) => void;
    

}


const AddExpenseForm = ({addExpense}:addExpenseProps) => {

const [text,setText] = useState<string>("")
const [amount,setAmount] = useState<any>(0)

const handleSubmit =(e:any) => {
    e.preventDefault()
    addExpense({text,amount:+amount})
    setText("")
    setAmount(0)
}

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input className='text-black' type="text" placeholder='Enter expense name' value={text} onChange={(e) => setText(e.target.value)} /><br/>
        <input className='text-black' type="number" placeholder='Number' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button  className={styles.button}type='submit'>
            Add Expense
        </button>
        
    </form>
  )
}

export default AddExpenseForm