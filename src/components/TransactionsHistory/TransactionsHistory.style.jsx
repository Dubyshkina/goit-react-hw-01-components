import styled from 'styled-components';

export const TransactionTable = styled.table`
width:430px;
margin-right:auto;
margin-left: auto;
border:1px solid grey;

`
export const TransactionHead = styled.thead`
width:100%;
background-color: blue;
color: white;
font-size: 26px;
font-weight: 500;
`
export const TransactionTr = styled.tr`
`

export const TransactionTh = styled.th`
padding: 10px;
width:calc(100%/ 3);
`

export const TransactionBody = styled.tbody`
background-color: #f1f1f1;
width: 100%;
font-size: 22px;
font-weight: 400;
color:grey;
`