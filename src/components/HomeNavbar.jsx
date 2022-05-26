import Logo from "../assets/logo.png"

export default function HomeNavbar({ showConnectWallet, connectWallet, currentAccount }) {
	return (
		<nav className="navbar bg-white">
			<div className="container-fluid">
				<a className="navbar-brand ms-3">
					<img src={Logo} width={100} />
				</a>
				<div className="d-flex">
          <div className="d-flex align-items-center">
						{
							!showConnectWallet && <button className="btn btn-primary" disabled={currentAccount} onClick={connectWallet}>Connect Wallet</button>
						}
          </div>
        </div>
			</div>
		</nav>
	);
}
