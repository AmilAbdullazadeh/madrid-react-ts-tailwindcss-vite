import { useDispatch, useSelector } from "react-redux"
import { updateIncome } from "../../store/expense/expenseSlice"

interface IncomeState {
    expense: {income: number}
}

export function IncomeInput() {
    const currentIncome = useSelector((state: IncomeState) => state.expense.income)
    const dispatch = useDispatch()

    function setValue(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(updateIncome(Number(e.target.value)))
    }

  return (
    <div className='flex justify-center mb-2' >
            <h4 className="font-base bg-gray text-white" >Icome</h4>
            <input 
                type="number" 
                className="w-1/2 p-2"
                placeholder="Enter Income"
                defaultValue={currentIncome}
                onChange={setValue}        
             />
    </div>
  )
}
