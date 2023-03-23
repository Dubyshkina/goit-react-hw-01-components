import user from '../components/data/user.json';
import stats from '../components/data/data.json';
import friends from '../components/data/friends.json';
import transactions from './data/transactions.json'

import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/FriendList/FriendList';
import TransactionsHistory from '../components/TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <div className='container'>
      <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
       />
       <Statistics
       title="Upload stats"
       stats={stats}/>
       <FriendList 
       friends={friends}/>
       <TransactionsHistory 
       items={transactions}/>
    </div>
  );
};
