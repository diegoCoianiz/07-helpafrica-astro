
export function Navigation()
{
    return (
        <nav className="grid grid-cols-2">
            <ul className="mr-5 ">
                <li>
                    <a className="text-indigo-500 hover:underline" href="/about">About Us</a>
                    <a className="text-indigo-500 hover:underline" href="/causes">Study Causes</a>
                    <a className="text-indigo-500 hover:underline" href="/blog">News</a>
                    <a className="text-indigo-500 hover:underline" href="/contact">Get In Touch</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation