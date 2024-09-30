import {useSelector} from "react-redux";

interface IItem {
    name: string;
    price: number;
}

const List = () => {
  const expenses = useSelector((state: any) => state.expense.expenses)

  return (
    <div className="flex overflow-x-scroll items-center justify-between gap-x-4 p-6" >
      {
        expenses?.map((item: IItem, index: number) => (
          <div style={{width: '100%', margin: '10px 20px'}} key={index}>
            {item.name} : {item.price}
          </div>
        ))
      }
    </div>
  );
};

export default List;
