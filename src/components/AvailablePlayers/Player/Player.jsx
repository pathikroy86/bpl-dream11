import React from 'react';
import './player.css';
import { CgProfile } from "react-icons/cg";
import { GrFlag } from "react-icons/gr";

const Player = ({ player, handleSelected, handleSelectedPlayers, handleFreeCoins }) => {
    const { id, name, country, playingStyle, value, avatar } = player;
    return (
        <div>
            <figure className='mb-5'><img className='w-full rounded-lg' src={avatar} alt="" /></figure>
            <p className='flex items-center gap-2 text-xl text-[#131313] font-semibold mb-4'><CgProfile /> {name}</p>
            <div className='flex justify-between pb-3 border-b-2 border-slate-400'>
                <p className='flex items-center gap-2 text-[#131313]'><GrFlag /> {country}</p>
                <p><button className='btn text-[#131313] text-xs'>{playingStyle}</button></p>
            </div>

            <p className='text-[#131313] font-bold mt-2 mb-2'>Rating</p>
            <p className='mb-2'>{playingStyle}</p>
            <div className='flex justify-between items-center'>
                <p>Price: <span>{value}</span></p>
                <button onClick={() => { handleSelected(); handleSelectedPlayers(player); handleFreeCoins(0, value) }} className='btn text-[#131313] text-xs'>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;