import styled from "styled-components";


export const FormForBanksManagementPageStyled = styled.div`
  h1{
    padding-top: 20px;
  }
  form{
    margin: 15px auto 20px;
    text-align: left;
    width: 50%;
    display: flex;
    flex-direction: column;
    label{
      color: #2C3E50;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      .error{
        margin-top: 3px;
        color: red;
        font-size: 14px;
      }
      input{
        width: 100%;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
        color: #2C3E50;
        font-size: 18px;

        ::placeholder {
          color: #ccc;
          font-size: 16px;
        }
      }
    }
    button{
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 10px;
      margin: 15px auto;
      border: 1px solid #ccc;
      border-radius: 10px;
      -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
  }
`