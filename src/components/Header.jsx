import "./Header.css"
import Logo from "./Logo"
import SearchBar from "./SearchBar"

function Header() {
	return (
		<>
			<header
				id="header"
				className="header fixed-top d-flex aling-items-center"
			>
				<Logo />
				<SearchBar />
				{/* nav */}
			</header>
		</>
	)
}

export default Header
