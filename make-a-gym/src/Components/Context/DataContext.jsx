import { createContext, useState, useEffect } from "react";

export const dataContext = createContext ();
const DataProvider = ({ children }) => {
    const [data, setData] = useState ([]);

    useEffect (()=>{


    },[])

    return<dataContext.Provider>{children}</dataContext.Provider>
};
export default DataProvider;