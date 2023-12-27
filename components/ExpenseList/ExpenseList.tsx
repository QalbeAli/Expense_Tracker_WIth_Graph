"use client";
import React from "react";
import styles from '@/expenselist.module.css';

type Expense = {
  text: string;
  amount: number;
};

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <div className={styles.expenseList}>
      <h2>Expense List</h2>
      <ul className={styles.list}>
        {expenses.map((expense, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.text}>{expense.text}</span>
            <span className={styles.amount}>${expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
