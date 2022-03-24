import dayjs from 'dayjs'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Calendar = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext)

  const nextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }

  const prevMonth = () => {
    setMonthIndex(monthIndex - 1)
  }

  const resetMonth = () => {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month())
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src='' alt="" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">
        Календарь
      </h1>
      <button onClick={resetMonth} className="border rounded py-2 px-4 mr-5">
        Сегодня
      </button>
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
      <h2 className="ml-10 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  )
}

export default Calendar