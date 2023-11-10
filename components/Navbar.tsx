import Link from "next/link"
import { Home, Ticket } from "lucide-react"

const Navbar = () => {
	return (
		<nav className="flex justify-between p-4">
			<div className="flex items-center space-x-4">
				<Link href="/">
					<Home />
				</Link>
				<Link href="/">
					<Ticket />
				</Link>
			</div>
			<div>
				<p className=''>
					jake@gmail.com
				</p>
			</div>
		</nav>
	)
}

export default Navbar