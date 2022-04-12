import styled from "styled-components";

export const AppStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .links {
    padding: 50px 0;
    align-items: center;
    justify-content: center;
    display: flex;
    
    flex-direction: row;
    flex-wrap: wrap;

    a {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 700;
      padding: 15px 30px;
      border-radius: 20px;
      background-color: #9cb1b8;
      color: #313131;
      margin: 10px ;
    }
  }
  .pages{
    width: inherit;
  }
`