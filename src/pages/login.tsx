import { signIn, useSession } from "next-auth/react";

import { Button, Card } from "@mui/material";

const Login: React.FC = () => (
    <div className="bg-gray-200 p-60">
        <Card
            className="m-auto p-10 w-6/12"
            variant="outlined">
            <h1 className="font-bold py-10">
                Welcome to my financial goal tracking app.
            </h1>
            <p>Please sign in using Discord to continue.</p>
            <Button
                // className="justify-self-center"
                variant="contained"
                onClick={() => void signIn()}
            >
                Sign In
            </Button>
        </Card>
    </div>
);

export default Login;