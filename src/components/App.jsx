import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from "path/to/friends.json";
import transactions  from "path/to/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};