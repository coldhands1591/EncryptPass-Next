"use client"
import { useState } from "react";
import { encrypt } from "./CryptoPass";

export default function Home() {
  const [password, setPassword] = useState<string>();
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setPassword(newValue);
  };

  const onEncrypt = async () => {
    const dataEncrypt = await encrypt(password!)
    console.log(dataEncrypt)
  };
  return (
    <main className="flex-col justify-center items-center mt-10">
      <div className="flex justify-center items-center space-x-3">
        <div>
          <input
            type="text"
            onChange={onChange}
            className=" border border-gray-200 rounded-sm px-2 py-1"
            name="pass"
            id=""
          />
        </div>
        <div>
          <button onClick={onEncrypt} className="bg-green-500 px-1 rounded-sm py-1">EnCrypt</button>
        </div>
      </div>
    </main>
  );
}
