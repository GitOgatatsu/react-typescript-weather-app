// https://api.weatherapi.com/v1/current.json?key=3313f751bedb4a2996e105911230505&q=London&aqi=no

//import { useState } from "react";

type FormPropsType = {
	setCity: React.Dispatch<React.SetStateAction<string | undefined>>;
	getWeather: (e: any) => Promise<void>;
};

const Form = (props: FormPropsType) => {

//	const [city, setCity] = useState<string>();
//
//	const getWeather = async (e: any) => {
//		await e.preventDefault();
//		await fetch("https://api.weatherapi.com/v1/current.json?key=3313f751bedb4a2996e105911230505&q=London&aqi=no")
//			.then(res => res.json())
//			.then(data => console.log(data))
//	};

	return (
		<form>
			<input onChange={e => props.setCity(e.target.value)} type="text" name="city" placeholder="都市名"/>
			<button onClick={props.getWeather}>Get Weather</button>
		</form>
	);

};

export default Form;
