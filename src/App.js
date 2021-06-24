import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
