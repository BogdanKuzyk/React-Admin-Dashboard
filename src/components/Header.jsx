import "./Header.css"
import Logo from "./Logo"

function Header() {
	return (
		<>
			<header
				id="header"
				className="header fixed-top d-flex aling-items-center"
			>
				{/* logo */}
				<Logo />
				{/* search */}
				{/* nav */}
			</header>
		</>
	)
}

export default Header
