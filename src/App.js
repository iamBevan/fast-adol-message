import React, { useState } from "react";
import Home from "./pages/home";
import Layout from "./pages/layout";
import "./main.scss";
import { AdolContext } from "./context";
import { areas } from "./misc/data";

const App = () => {
	const [data, setData] = useState(areas);

	return (
		<>
			<AdolContext.Provider value={{ data, setData }}>
				<Layout>
					<Home />
				</Layout>
			</AdolContext.Provider>
		</>
	);
};

export default App;
