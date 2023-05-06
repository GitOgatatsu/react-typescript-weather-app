import { useState } from "react";

import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';

import './App.css';

function App() {

	const [city, setCity] = useState<String>();

	const getWeather = async (e: any) => {
		await e.preventDefault();
		await fetch("https://api.weatherapi.com/v1/current.json?key=3313f751bedb4a2996e105911230505&q=London&aqi=no")
			.then(res => res.json())
			.then(data => console.log(data))
	};

  return (
		<div className="test">
			<Title />
			<Form setCity={setCity} getWeather={getWeather} />
			<Result />
		</div>
  );
}

export default App;
