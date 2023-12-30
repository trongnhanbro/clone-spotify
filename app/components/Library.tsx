'use client';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';

const Library = () => {
    const onClick = () => {
        //handle later
    };
    return (
        <div className="flex flex-col ">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 text-md font-medium">Your Library</p>
                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={28}
                    className="text-neutral-400 hover:text-white transition cursor-pointer"
                />
            </div>

            <div className="flex flex-col gap-y-2 mt-4 px-3">List song</div>
        </div>
    );
};

export default Library;
