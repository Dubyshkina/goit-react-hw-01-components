import PropTypes from 'prop-types';

import { TransactionItem, TransactionTd } from './TransactionItem.style';

const TransactionItems = ({ type, amount, currency, lightColor }) => {
  console.log(lightColor);
  return (
    <TransactionItem style={{ backgroundColor: lightColor ? 'inherit' : 'lightgrey' }}>
      <TransactionTd>{type}</TransactionTd>
      <TransactionTd>{amount}</TransactionTd>
      <TransactionTd>{currency}</TransactionTd>
    </TransactionItem>
  );
};

TransactionItems.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItems;
