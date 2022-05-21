import PolygonLogo from '../assets/images/polygon_logo.png';
import BinanceCLogo from '../assets/images/binance_chain.png';
import EthereumLogo from '../assets/images/ethereum_logo.png';
import TransakLogo from '../assets/images/transak.png';
import WalletCLogo from '../assets/images/walletconnect_logo.png';

export default function Wallet() {
	return (
		<div className="container">
			<div className="pt-5 px-5 mt-5">
				<p className="h2">Connect Your Wallet</p>
				<p className="text-secondary mt-4">
					Select what network and wallet you want below
				</p>

				<div class="form-check my-5">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="flexCheckDefault"
					/>
					<p>
						Accept <strong className="text-primary">Terms of Service</strong> and{' '}
						<strong className="text-primary">Privacy Policy</strong>
					</p>
				</div>

				<p className="fw-semibold">Choose Network</p>

				<div className="row mb-5">
					<div className="col">
						<div className="card rounded-5 h-100">
							<div className="card-body d-flex justify-content-center flex-column align-items-center">
								<div>
									<img src={EthereumLogo} width={40} />
								</div>
								<p className="mb-0 pt-2">Ethereum</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card rounded-5 h-100">
							<div className="card-body d-flex justify-content-center flex-column align-items-center">
								<div>
									<img src={PolygonLogo} width={40} />
								</div>
								<p className="mb-0 pt-2">Polygon</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card rounded-5 h-100">
							<div className="card-body d-flex justify-content-center flex-column align-items-center">
								<div>
									<img src={BinanceCLogo} width={40} />
								</div>
								<p className="mb-0 pt-2">Binance Chain</p>
							</div>
						</div>
					</div>
					<div className="col">&nbsp;</div>
				</div>

				<p className="fw-semibold">Choose Wallet</p>

				<div className="row">
					<div className="col-3">
						<div className="card rounded-5 h-100">
							<div className="card-body d-flex justify-content-center flex-column align-items-center">
								<div>
									<img src={TransakLogo} width={40} />
								</div>
								<p className="mb-0 pt-2">Transak</p>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="card rounded-5 h-100">
							<div className="card-body d-flex justify-content-center flex-column align-items-center">
								<div>
									<img src={WalletCLogo} width={40} />
								</div>
								<p className="mb-0 pt-2">Wallet Connect</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
