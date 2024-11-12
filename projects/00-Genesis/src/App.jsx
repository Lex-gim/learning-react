import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
// import { SearchBar } from './SearchBar';
const users = [
    {
        userName: 'hbkjodye',
        nickName: 'migue',
        isFollowing: false
    },
    {
        userName: 'malia',
        nickName: 'Mi novia preciosa hermosa bellisima',
        isFollowing: true
    }
]


export function App () {
    return (
        <section className='app'>
            {
                users.map(({userName, nickName, isFollowing}) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                        {nickName}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}
