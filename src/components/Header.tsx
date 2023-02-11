import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const { status } = useSession();

    return (
        <nav>
            <div>Financial Goals Planner</div>
            <ul>
                <li>Home</li>
                <li>Settings</li>
                {status === "unauthenticated" && <Login />}
                {status === "authenticated" && <Logout />}
            </ul>
        </nav>
    );
}

export default Header;

const Login = () => (
    <li
        onClick={() => void signIn()}
    >
        Log In
    </li>
)

const Logout = () => (
    <li
        onClick={() => void signOut()}
    >
        Log Out
    </li>
)