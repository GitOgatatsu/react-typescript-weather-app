// https://api.weatherapi.com/v1/current.json?key=3313f751bedb4a2996e105911230505&q=London&aqi=no

import { useState } from "react";

const Form = () => {

	const [city, setCity] = useState<String>();

	const getWeather = async (e: any) => {
		await e.preventDefault();
		await fetch("https://api.weatherapi.com/v1/current.json?key=3313f751bedb4a2996e105911230505&q=London&aqi=no")
			.then(res => res.json())
			.then(data => console.log(data))
	};

	return (
		<form>
			<input onChange={e => setCity(e.target.value)} type="text" name="city" placeholder="都市名"/>
			<button onClick={getWeather}>Get Weather</button>
		</form>
	);

};

export default Form;
