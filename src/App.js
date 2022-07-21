import Profile from './components/Profile/Profile.jsx'
import Statistics from 'components/Statistics/Statistics.jsx'
import FriendList from 'components/Friends/FriendList.jsx'
import user from './user.json'
import data from './data.json'
import friends from './friends.json'


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


            
        </>
    )
}

export default App