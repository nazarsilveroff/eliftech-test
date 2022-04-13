import styled from "styled-components";


export const TablesStyled = styled.table`

  border-collapse: collapse;
  margin: 15px auto;

  caption {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  th, td {
    border: 1px solid #ccc;
  }

  thead {
    tr {
      th {
        padding: 5px;
        form {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          height: fit-content;
          input {
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
          button {
            height: 100%;
            width: 40px;
            background-color: transparent;
            border: none;
            color: #2C3E50;
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 5px;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`