import "./App.css";

function App() {
	return (
		<main>
			<h1>
				$400<span>.00</span>
			</h1>
			<form>
				<div className="basic">
					<input type="text" placeholder={"+200 new transactions"} />
					<input type="datetime-local" />
				</div>
				<div className="description">
					<input type="text" placeholder={"Description"} />
				</div>
				<button>Add transaction</button>
			</form>
			<div className="transactions">
				<div className="transaction">
					<div className="left">
						<div className="name">New TV</div>
						<div className="description">
							it was time for a New TV
						</div>
					</div>
					<div className="right">
						<div className="price">$500</div>
						<div className="datetime">2024-02-20 2:45</div>
					</div>
				</div>
				<div className="transaction">
					<div className="left">
						<div className="name">New TV</div>
						<div className="description">
							it was time for a New TV
						</div>
					</div>
					<div className="right">
						<div className="price">$500</div>
						<div className="datetime">2024-02-20 2:45</div>
					</div>
				</div>
				<div className="transaction">
					<div className="left">
						<div className="name">New TV</div>
						<div className="description">
							it was time for a New TV
						</div>
					</div>
					<div className="right">
						<div className="price">$500</div>
						<div className="datetime">2024-02-20 2:45</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
