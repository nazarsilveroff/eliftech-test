import React, {useState} from 'react';
import FormForBanksManagementPage from "../../components/Forms/FormForBanksManagementPage/FormForBanksManagementPage";
import {BanksManagementPageStyled} from "./BanksManagementPageStyled";
import CreatedBanksTable from "../../components/Tables/CreatedBanksTable/CreatedBanksTable";
import {useSelector} from "react-redux";
import {BanksSelector} from "../../redux/banks/banksSlice";

function BanksManagementPage(props) {
    const [editing ,setEditing ]=useState(false)
    const [bank,setBank]=useState()

    const reduxBanks = useSelector(BanksSelector);
    const bankToChange=(bankId)=>{
        return setBank(reduxBanks.find(({id})=>id===bankId))
    }
    return (
        <BanksManagementPageStyled>
            <CreatedBanksTable resArr={reduxBanks} findBankFn={bankToChange} changeStatus={setEditing}/>
            <FormForBanksManagementPage editing={editing} changeStatus={setEditing} bank={bank}/>
        </BanksManagementPageStyled>
    );
}

export default BanksManagementPage;