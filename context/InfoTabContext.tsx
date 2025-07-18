import React, { createContext, useContext, useState } from "react";

const InfoTabContext = createContext<any>(null);

export const InfoTabProvider = ({ children }) => {
	const [content, setContent] = useState("tesko");
	const [location, setLocation] = useState("karta");

	return (
		<InfoTabContext.Provider
			value={{ content, setContent, location, setLocation }}
		>
			{children}
		</InfoTabContext.Provider>
	);
};

export const useInfoTab = () => useContext(InfoTabContext);
