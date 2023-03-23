import {
  TransactionBody,
  TransactionTable,
  TransactionHead,
  TransactionTr,
  TransactionTh,
} from './TransactionsHistory.style';

import TransactionItems from 'components/TransactionItems/TransactionItems';


const TransactionsHistory = ({ items }) => {
  let lightColor = true;
  return (
    <TransactionTable class="transaction-history">
      <TransactionHead>
        <TransactionTr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionHead>
      <TransactionBody>
        {items && items.map(({ type, amount, currency, id }) => {          
         lightColor =  !lightColor          
          return (          
          <TransactionItems 
            type={type}
            amount={amount}
            currency={currency}
            key={id}
            lightColor = {lightColor}
          />)}
        )}
      </TransactionBody>
    </TransactionTable>
  );
};

export default TransactionsHistory;
