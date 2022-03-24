import dayjs from 'dayjs'
import React, { useState, useEffect, useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { getMonth } from '../util'

const SmallCalendar = () => {
    //
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } = useContext(GlobalContext)

    // хуки изменения времени
    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx])

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])

    //следущий месяц
    const nextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }
    //предыдущий месяц
    const prevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1)
    }

    function getDay(day: any) {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        if (nowDay === currDay) {
            return 'bg-blue-500 rounded-full text-white'
        } else if (currDay === slcDay) {
            return 'bg-blue-100 rounded-full text-blue-600 font-bold'
        }
        else {
            return ''
        }
    }

    return (
        <div className='mt-9'>
            <header className="flex justify-between">
                <p className="text-gray-500 font-bold">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
                </p>
                <button onClick={prevMonth}>
                    <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                        chevron_left
                    </span>
                </button>
                <button onClick={nextMonth}>
                    <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                        chevron_right
                    </span>
                </button>
            </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, i) => (
                    <span key={i} className="text-sm py-1 text-center">
                        {day.format("dd").charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, id) => (
                            <button onClick={() => { setSmallCalendarMonth(currentMonthIdx); setDaySelected(day); }} key={id} className={`py-1 w-full ${getDay(day)}`}>
                                <span className="text-sm">{day.format("D")}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SmallCalendar