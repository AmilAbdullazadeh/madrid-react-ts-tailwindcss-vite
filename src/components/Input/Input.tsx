interface InputProps {
  value: string;
  onChange?: (value: string) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      className="w-full p-2 bg-gray-500 border border-solid rounded"
      value={value}
      readOnly
    />
  );
};

export default Input;
