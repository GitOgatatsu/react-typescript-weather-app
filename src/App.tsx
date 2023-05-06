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

	const getWeather = async (e: React.FormEvent<HTMLFormElement>) => {
		await e.preventDefault();
		await fetch(`https://api.weatherapi.com/v1/current.json?key=3313f751bedb4a2996e105911230505&q=${city}&aqi=no`)
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
//		console.log(results);
	};

  return (
		<div className="wrapper">
			<div className="container">
				<Title />
				<Form setCity={setCity} getWeather={getWeather} />
				<Result results={results} />
			</div>
		</div>
  );
}

export default App;
