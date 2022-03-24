import React, { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import GlobalContext from '../context/GlobalContext'

const Day = ({ day, rowIdx }: any) => {
    const { setDaySelected, setShowEventModal, dispatchCalEvent, savedEvents } = useContext(GlobalContext)
    const [dayEvents, setDayEvents] = useState([])

    useEffect(() => {
        const events = savedEvents.filter((ev: any) => dayjs(ev.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
        setDayEvents(events)
    }, [savedEvents, day])

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-blue-600 text-white rounded-full w-7"
            : "";
    }
    return (
        <div className="border border-gray-200 flex flex-col">
            <header className='flex flex-col items-center'>
                {rowIdx === 0 && <p className="text-sm mt-1">
                    {day.format('ddd').toUpperCase()}
                </p>}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </header>
            <div className='flex-1 cursor-pointer' onClick={() => { setDaySelected(day); setShowEventModal(true) }}>
                {dayEvents.map((e: any, i) => (
                    <div key={i} className={`bg-${e.lable}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1`}>
                        {e.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Day