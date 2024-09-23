import { Input } from "reactstrap";
import Logo from "../../components/Logo/Logo";

export default function Header() {
  return (
    <header className='bg-blue-500 w-full h-[250px] p-4' >
        <div className='mx-auto flex justify-between items-center' >
            <Logo />
            <Input />
        </div>
    </header>
  )
}
