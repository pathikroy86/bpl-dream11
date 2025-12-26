import React, { useEffect, useState } from 'react';
import './availablePlayers.css';
import Player from './Player/Player';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AvailablePlayers = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('player-data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }
        , [])
    const [clicked, setClicked] = useState(true);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [selected, setSelected] = useState([]);

    const handleSelected = () => {
        const newSelectedNumber = selectedNumber + 1;
        if (newSelectedNumber <= 6) {
            setSelectedNumber(newSelectedNumber);
        }
    }

    const handleSelectedPlayers = (player, id) => {
        const newArr = [...selected, player];
        if (newArr.length <= 6) {
            setSelected(newArr);
        }
        else {
            toast.warn('You can not add more than 6 players');
        }

    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between'>
                <ToastContainer position="top-right" autoClose={3000} />
                {
                    clicked ? (
                        <h3 className='text-[#131313] font-bold text-3xl'>Available Players</h3>
                    ) : (
                        <h3 className='text-[#131313] font-bold text-3xl'>Selected Players (<span>{selectedNumber}</span> / 6)</h3>
                    )
                }

                <div className='mb-8'>
                    <button onClick={() => { setClicked(true) }} className={`btn ${clicked ? 'bg-[#E7FE29]' : ''}`}>Available</button>
                    <button
                        onClick={() => { setClicked(false) }} className={`btn ${clicked ? '' : 'bg-[#E7FE29]'}`}>Selected (<span>{selectedNumber}</span>)</button>
                </div>
            </div>
            {
                clicked ? (
                    <div className='grid grid-cols-3 gap-12 mb-8'>
                        {
                            players.map(player => <Player
                                key={player.id}
                                player={player}
                                handleSelected={handleSelected}
                                handleSelectedPlayers={handleSelectedPlayers}
                            ></Player>)
                        }
                    </div>
                ) : (
                    selected.map(player => <SelectedPlayers player={player}
                        handleSelectedPlayers={handleSelectedPlayers}></SelectedPlayers>)
                )
            }
        </div>
    );
};

export default AvailablePlayers;