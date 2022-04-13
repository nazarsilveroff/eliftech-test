import React, {useEffect} from 'react';
import {BanksCalculatePageStyled} from "./BanksCalculatePageStyled";
import FormForBanksCalculatePage from "../../components/Forms/FormForBanksCalculatePage/FormForBanksCalculatePage";
import ResultCalculationsTable from "../../components/Tables/ResultCalculationsTable/ResultCalculationsTable";
import {useSelector} from "react-redux";
import {resultsCalculationSelector} from "../../redux/calculation/calculationSlice";

function BanksCalculatePage(props) {
    const reduxCalcRes = useSelector(resultsCalculationSelector)
    const localCalcRes = JSON.parse(localStorage.getItem('results'));

    return (
        <BanksCalculatePageStyled>
            <ResultCalculationsTable resArr={localCalcRes} name={'localStorage'}/>
            <FormForBanksCalculatePage/>
            <ResultCalculationsTable resArr={reduxCalcRes} name={'redux'}/>
        </BanksCalculatePageStyled>
    );
}

export default BanksCalculatePage;