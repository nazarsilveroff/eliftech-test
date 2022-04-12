import React from 'react';
import FormForBanksManagementPage from "../../components/Forms/FormForBanksManagementPage/FormForBanksManagementPage";
import {BanksManagementPageStyled} from "./BanksManagementPageStyled";

function BanksManagementPage(props) {
    return (
        <BanksManagementPageStyled>
            <FormForBanksManagementPage/>
        </BanksManagementPageStyled>
    );
}

export default BanksManagementPage;