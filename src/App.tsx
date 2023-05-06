import { useState } from "react";

import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';

import './App.css';

type ResultsStateType = {
	country: string;
	cityName: string;
	temperature: string;
	conditionText: string;
	icon: string;
};

function App() {

	const [city, setCity] = useState<string>();
	const [results, setResults] = useState<ResultsStateType>({
		country: "",
		cityName: "",
		temperature: "",
		conditionText: "",
		icon: ""
	});

	const getWeather = async (e: any) => {
		await e.preventDefault();
		await fetch("https://api.weatherapi.com/v1/current.json?key=3313f751bedb4a2996e105911230505&q=London&aqi=no")
			.then(res => res.json())
			.then(data => {
				setResults({
					country: data.location.country,
					cityName: data.location.name,
					temperature: data.current.temp_c,
					conditionText: data.current.condition.text,
					icon: data.current.condition.icon
				});
			});
	};

  return (
		<div className="test">
			<Title />
			<Form setCity={setCity} getWeather={getWeather} />
			<Result results={results} />
		</div>
  );
}

export default App;
