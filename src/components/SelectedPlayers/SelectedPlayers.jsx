import React from 'react';

const SelectedPlayers = ({ player }) => {
    const { avatar, name, playingStyle } = player;
    return (
        <div className='flex items-center p-2 rounded-lg gap-4 border-2 mb-2'>
            <figure><img className='rounded-xl p-2' src={avatar} alt="" /></figure>
            <div>
                <h3 className='text-[#131313] font-semibold text-2xl'>{name}</h3>
                <p className='text-[#13131399]'>{playingStyle}</p>
            </div>
        </div>
    );
};

export default SelectedPlayers;