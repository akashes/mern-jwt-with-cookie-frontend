import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { serverUrl } from "../services/serverUrl";
// import { useNavigate } from "react-router-dom";

// This should be UserContext instead of user to match its usage below
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // const navigate=useNavigate()
  const [auth, setAuth] = useState({
    name: null,
    email: null,
    isAuthenticated: false,
  });
  const[loading,setLoading]=useState(true)
  useEffect(() => {
    // const isAuthenticated = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:8080/api/user/verify-user`,
    //       {
    //         withCredentials: true,
    //       }
    //     );
    //     console.log(response);
    //     if(response.status===200){
    //         console.log(response.data)
    //         setAuth({
    //             name:response.data.userData.name,
    //             email:response.data.userData.email,
    //             isAuthenticated:true
    //         })
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // isAuthenticated();
    
    const isAuthenticated = async () => {
        try {
            // Start loading
            setLoading(true);

            // Make your API call to verify the user
            const response = await axios.get(`http://localhost:8080/api/user/verify-user`, { withCredentials: true });

            if (response.status==200) {
                setAuth({
                    name:response.data.userData.name,
                                 email:response.data.userData.email,
                               isAuthenticated:true
                });
            } else {
                setAuth({
                    name: null,
                    email: null,
                    isAuthenticated: false,
                });
            }
        } catch (error) {
            console.error('Error verifying user:', error);
            setAuth({
                name: null,
                email: null,
                isAuthenticated: false,
            });
        } finally {
            // End loading after the request is complete
            setLoading(false);
        }
    };

    isAuthenticated();
  }, []);
  console.log({ auth });

  return (
    <UserContext.Provider value={{ auth, setAuth ,loading}}>
      {children}
    </UserContext.Provider>
  );
};
