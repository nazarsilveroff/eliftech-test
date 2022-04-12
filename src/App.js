import {AppStyled} from "./AppStyled";
import {Link, Route, Routes} from "react-router-dom";
import React, {Suspense, useEffect} from 'react';
import BanksManagementPage from "./pages/BanksManagementPage/BanksManagementPage";
import MortgageCalculatorPage from "./pages/MortgageCalculatorPage/MortgageCalculatorPage";
import {BanksSelector} from "./redux/banks/banksSelectors";
import {useDispatch, useSelector} from "react-redux";
import {addBanks} from "./redux/banks/banksSlice";


function App() {
    const dispatch = useDispatch()

    const redxBanks = useSelector(BanksSelector)
    const localStBanks = JSON.parse(localStorage.getItem('banks'))

    useEffect(() => {
        if (localStBanks && redxBanks.length !== localStBanks.length) {
            dispatch(addBanks(localStBanks))
        }
    }, [])

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
                        <Route path='/mortgage-calculator-page' exact element={<MortgageCalculatorPage/>}/>
                    </Routes>
                </Suspense>
            </div>
        </AppStyled>
    );
}

export default App;
