import {AppStyled} from "./AppStyled";
import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense, useEffect} from 'react';
import BanksManagementPage from "./pages/BanksManagementPage/BanksManagementPage";
import BanksCalculatePage from "./pages/BanksCalculatePage/BanksCalculatePage";
import {useDispatch, useSelector} from "react-redux";
import {addBanks, BanksSelector} from "./redux/banks/banksSlice";


function App() {
    const dispatch = useDispatch();

    const reduxBanks = useSelector(BanksSelector);
    const localStBanks = JSON.parse(localStorage.getItem('banks'));

    useEffect(() => {
        if (localStBanks && reduxBanks.length !== localStBanks.length) {
            dispatch(addBanks(localStBanks))
        }
    }, []);

    return (
        <AppStyled>
            <div className='links'>
                <Link to="/banks-management-page">Banks management page</Link>
                <Link to="/banks-calculate-page">Banks calculate page</Link>
            </div>
            <div className='pages'>
                <Suspense fallback='loading...'>
                    <Routes>
                        <Route path='/banks-management-page' exact element={<BanksManagementPage/>}/>
                        <Route path='/banks-calculate-page' exact element={<BanksCalculatePage/>}/>
                    </Routes>
                </Suspense>
            </div>
        </AppStyled>
    );
}

export default App;
