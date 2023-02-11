import { api } from "../utils/api";

const Banks = () => {
  const banks = api.bankAccounts.getAll.useQuery();
    console.log("🚀 ~ file: banks.tsx:5 ~ Banks ~ banks", banks)
    return (
        <div>
            <h1>Banks</h1>
        </div>
    )
};

export default Banks;