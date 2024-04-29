import { createContext, useContext, useEffect, useState } from "react";
import AdminService from "./services/AdminService";
import UserService from "./services/UserService";
import { adminApi } from "./apis/axios";
const Context = createContext();
export const States = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [gifts, setGifts] = useState([]);

    const [signUp, setSignUp] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const [user, setUser] = useState({});
    const [buyProduct, setBuyProduct] = useState({});
    const [order, setOrder] = useState({});
    const GetUserDetails = async () => {
        if (localStorage.getItem('role') == 'ADMIN') {
            await AdminService.GetUser().then((response) => {
                setUser(response.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        else if (localStorage.getItem("role") == 'USER') {
            await UserService.GetUser().then((response) => {
                setUser(response.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }


    useEffect(() => {
        if (localStorage.getItem("role") == 'ADMIN') {
            AdminService.getGift().then((response) => {
                setGifts(response.data);
            }).catch((error) => {
                console.log(error);
            });
            AdminService.GetAllCustomers().then((response) => {
                setUsers(response.data);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [])

    return (
        <Context.Provider
            value={{
                signUp, setSignUp,
                login, setLogin,
                user, setUser,
                GetUserDetails,
                buyProduct, setBuyProduct,
                order, setOrder,
                users, setUsers,
                gifts, setGifts,
            }}>
            {children}
        </Context.Provider>
    );
};
export const useStates = () => useContext(Context);