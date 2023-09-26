import './App.css';
import { FriendList } from './components/friends/friendsList/FriendList';
import Profile from './components/friends/profile/Profile';
import { TransactionList } from './components/friends/transactionList/TransactionList';

function App() {
  return (
   <>
   <FriendList /> <TransactionList/> <Profile/>
   </>
  );
}

export default App;
