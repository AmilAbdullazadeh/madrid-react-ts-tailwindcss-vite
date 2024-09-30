import {useSelector} from "react-redux";

export function Total() {
    const expenses = useSelector((state: any) => state.expense.expenses);
    const income = useSelector((state: any) => state.expense.income);

    const total = expenses.reduce((acc: number, item: any) => acc + item.price, 0);

    const remaining = income - total;

    return (
        <div className="lt-4">
            Total: {total} AZN <br />
            Qaliq mebleg: {remaining} AZN
        </div>
    );
}
