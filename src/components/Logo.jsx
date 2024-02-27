import "./Logo.css"
function Logo() {
	return (
		<div className="d-flex align-items-center justify-content-between">
			<a href="/" className="logo d-flex alighn-items-center">
				<span className="d-none d-lg-block">AdminDashboard</span>
			</a>

			{/* Icon to toggle the sidebar  */}
			<i
				className="bi bi-list toggle-sidebar-btn"
				onClick={handleToggleSidebar}
			></i>
		</div>
	)
}

export default Logo
