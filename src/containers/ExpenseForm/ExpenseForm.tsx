import {useState} from "react";
import {addExpense} from "../../store/expense/expenseSlice.ts";
import {useDispatch} from "react-redux";
import * as React from "react";

export function ExpenseForm() {
    const [name, setName] = useState<string | null>(null)
    const [price, setPrice] = useState<number | null>(null)
    const dispatch = useDispatch()


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addExpense({name, price}))
        setName(null)
        setPrice(null)
    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="flex flex-row justify-content-center" >
                <div className="w-full mb-2">
                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                    <input name="price" type="number" value={price} onChange={(e) => setPrice(+e.target.value)}/>

                    <button type="submit">Elave et</button>
                </div>
            </div>
        </form>
    )
}
