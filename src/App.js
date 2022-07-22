import Profile from './components/Profile/Profile.jsx'
import Statistics from 'components/Statistics/Statistics.jsx'
import FriendList from 'components/Friends/FriendList.jsx'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory.jsx'
import user from './user.json'
import data from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'


const App = () => {
    return (
        <>
            <Profile
                name={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics
                title="Upload stats"
                stats={data}
            />
            <FriendList
                friends={friends}
            />
            <TransactionHistory
                items={transactions}
            />
            
        </>
    )
}

export default App