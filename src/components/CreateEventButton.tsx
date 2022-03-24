import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const CreateEventButton = () => {
    const { setShowEventModal } = useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
            <img src="" alt="" className="w-7 h-7" />
            <span className="pl-3 pr-3">Создать</span>
        </button>
    )
}

export default CreateEventButton