import styled from "styled-components";


export const FormsStyled = styled.div`
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
      input,select{
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
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 5px;
      margin: 5px auto 0;
      border: 1px solid #ccc;
      background-color: transparent;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`