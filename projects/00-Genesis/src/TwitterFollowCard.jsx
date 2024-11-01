import {useState} from 'react';
import PropTypes from 'prop-types';


export function TwitterFollowCard({ children = 'Unknown', userName = 'unknown', initialIsFollowing}) {
    TwitterFollowCard.propTypes = {
        children: PropTypes.node,
        userName: PropTypes.string,
        initialIsFollowing: PropTypes.bool
    };

    const[isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    }
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const btnClassName = isFollowing ? 'tw-followCard-btn is-following' : 'tw-followCard-btn';
    const formattedUserName = `@${userName}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/x/${userName}`} alt={`"Profile picture of ${children}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span>{formattedUserName}</span>
                </div>
            </header>
            <aside>
                <button className={btnClassName} onClick={handleFollow}>
                    <span className="tw-followCard-btn--text">{text}</span>
                    <span className='tw-followCard-btn--stopFollowing-text'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}