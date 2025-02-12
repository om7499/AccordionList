import { useEffect } from "react";
export const fetchData = ()=>{
    const baseURL = "http://localhost:3000/user"
    useEffect(() => {
        fetch(baseURL) // Fetching data from db.json
          .then((response) => response.json())
          .then((data) => setFaqs(data))
          .catch((error) => console.error("Error fetching FAQs:", error));
      }, []);
}