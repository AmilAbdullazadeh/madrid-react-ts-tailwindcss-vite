import { useState } from "react";
import { copyToClipboard, generatePassword } from "../../helpers/password";
import Input from "../Input/Input";
import { Button } from "reactstrap";

interface IPasswordGeneratorProps {
  length: number;
}

const PasswordGenerator: React.FC<IPasswordGeneratorProps> = ({
  length = 12,
}: IPasswordGeneratorProps) => {
  const [password, setPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<
    "weak" | "strong" | "medium"
  >("weak");

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-primary border border-solid rounded shadow-md">
      <h2 className="text-2xl font-bold mb-5">Password Generator</h2>
      <div className="flex items-center mb-4">
        <Input value={password} />
        <Button
          className="ml-3 bg-gray-200 text-black hover:bg-gray-300"
          onClick={() => setPassword(generatePassword(length))}
        >
          Generate
        </Button>
      </div>
      <p
        className={`mb-4 text-${
          passwordStrength === "strong"
            ? "green"
            : passwordStrength === "medium"
            ? "yellow"
            : "red"
        }`}
      >
        This password is {passwordStrength}.
      </p>
      <Button
        className="w-full p-3 bg-blue-500 text-white border border-solid rounded hover:bg-blue-600"
        onClick={() => copyToClipboard(password)}
      >
        Copy password
      </Button>
    </div>
  );
};

export default PasswordGenerator;
