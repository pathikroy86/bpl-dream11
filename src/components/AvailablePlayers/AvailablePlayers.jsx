import React, { useEffect, useState } from 'react';
import './availablePlayers.css';
import Player from './Player/Player';

const AvailablePlayers = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('player-data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }
        , [])
    const [clicked, setClicked] = useState(true);
    console.log(clicked);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between'>
                <h3 className='text-[#131313] font-bold text-3xl'>Available Players</h3>
                <div className='mb-8'>
                    <button onClick={() => { setClicked(true) }} className={`btn ${clicked ? 'bg-[#E7FE29]' : ''}`}>Available</button>
                    <button
                        onClick={() => { setClicked(false) }} className={`btn ${clicked ? '' : 'bg-[#E7FE29]'}`}>Selected (<span>0</span>)</button>
                </div>
            </div>
            {
                clicked ? (
                    <div className='grid grid-cols-3 gap-12 mb-8'>
                        {
                            players.map(player => <Player
                                key={player.id}
                                player={player}
                            ></Player>)
                        }
                    </div>
                ) : (
                    <div><p>Selected players are here</p></div>
                )
            }

        </div>
    );
};

export default AvailablePlayers;