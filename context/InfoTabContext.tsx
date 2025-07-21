import React, { createContext, ReactNode, useContext, useState } from "react";

const InfoTabContext = createContext<any>(null);

export const InfoTabProvider = ({ children }: { children: ReactNode }) => {
	const [content, setContent] = useState("projekt");
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
