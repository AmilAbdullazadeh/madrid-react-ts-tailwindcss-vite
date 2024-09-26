import { useEffect, useState } from "react";
import Logo from "./components/Logo/Logo";
import { IncomeInput } from "./containers/IncomeInput/IncomeInput";

function App() {


  return (
    <div className="p-6 min-h-screen bg-gray-100">
        <header className="flex justify-between items-center mb-6 shadow-md p-4 rounded-md">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex-1 ml-6">
            <IncomeInput />
          </div>
        </header>


        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6" >
          <section className="p-6 shadow-md rounded-md" >
            {/* Expense Input */}
          </section>

          <section className="p-6 shadow-md rounded-md" >
            {/* Expense List */}
            <div className="lt-4">
              {/* Expense Total */}
            </div>
          </section>
        </main>
    </div>
  );
}

export default App;
