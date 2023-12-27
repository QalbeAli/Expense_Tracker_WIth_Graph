import { ExpenseType } from "./commonTypes"

export interface ExpensePropsType {
    expense:ExpenseType
    isOpen:boolean,
    onClose:() => void
    onAddExpense:(expense:ExpenseType) => void
    onUpdateExpense:(expense:ExpenseType) => void
}

export interface ChartComponentType {
    expenses:ExpenseType[]
}