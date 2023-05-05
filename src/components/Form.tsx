import { useState } from "react";

const Form = () => {

	const [city, setCity] = useState("");

	return (
		<form>
			<input onChange={e => setCity(e.target.value)} type="text" name="city" placeholder="都市名"/>
			{city}
			<button>Get Weather</button>
		</form>
	);

};

export default Form;
