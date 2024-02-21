import "./App.css";
import { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [datetime, setDatetime] = useState("");
	const [description, setDescription] = useState("");

	function addNewTransaction() {
		
	}

	return (
		<main>
			<h1>
				$400<span>.00</span>
			</h1>
			<form onSubmit={addNewTransaction}>
				<div className="basic">
					<input
						type="text"
						value={name}
						onChange={(ev) => setName(ev.target.value)}
						placeholder={"+200 new transactions"}
					/>
					<input
						value={datetime}
						onChange={(ev) => setDatetime(ev.target.value)}
						type="datetime-local"
					/>
				</div>
				<div className="description">
					<input
						type="text"
						value={description}
						onChange={(ev) => setDescription(ev.target.value)}
						placeholder={"Description"}
					/>
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
						<div className="price red">-$500</div>
						<div className="datetime">2024-02-20 2:45</div>
					</div>
				</div>
				<div className="transaction">
					<div className="left">
						<div className="name">Paycheck</div>
						<div className="description">
							it was time for a New TV
						</div>
					</div>
					<div className="right">
						<div className="price green">+$500</div>
						<div className="datetime">2024-02-20 2:45</div>
					</div>
				</div>
				<div className="transaction">
					<div className="left">
						<div className="name">Groceries</div>
						<div className="description">
							it was time for a New TV
						</div>
					</div>
					<div className="right">
						<div className="price red">-$100</div>
						<div className="datetime">2024-02-20 2:45</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
