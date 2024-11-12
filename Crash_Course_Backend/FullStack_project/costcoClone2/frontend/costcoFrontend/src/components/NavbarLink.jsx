import { Link } from "react-router-dom"

const listOfLink = [
    {
        to: "/",
        displayText: ""
    },
    {
        to: "/signup",
        // displayText: "Account"
    },
    {
        to: "/login",
        // displayText: "Login"
    }
]

export default function NavbarLink() {
    return (
        <>
            {
                listOfLink.map((link) => (
                    <Link key={link.to} to={link.to}>
                        {link.displayText}
                    </Link>

                ))
            }



        </>
    )
}