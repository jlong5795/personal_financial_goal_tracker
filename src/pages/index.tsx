import { useSession } from "next-auth/react";
import { type NextPage } from "next";
import { useRouter } from "next/router";


const Home: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  return (
    <>

        <div>
          This is a placeholder
        </div>
    </>
  );
};

export default Home;