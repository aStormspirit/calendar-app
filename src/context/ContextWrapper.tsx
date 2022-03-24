import dayjs from 'dayjs'
import React, { useState, useEffect, useReducer } from 'react'
import GlobalContext from './GlobalContext'

function savedEventReducer(state: any, { type, payload }: any) {
    switch (type) {
        case 'push':
            return [...state, payload];
        case "update":
            return state.map((e: any) => {
                e.id === payload.id ? payload : e
            })
        case "delete":
            return state.filter((e: any) => e.id !== payload.id)
        default:
            throw new Error();
    }
}

function initEvents() {
    const storageEvents = localStorage.getItem("SavedEvents")
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents
}

const ContextWrapper = (props: any) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(0)
    const [daySelected, setDaySelected] = useState(dayjs())
    const [showEventModal, setShowEventModal] = useState(false)
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventReducer, [], initEvents)

    useEffect(() => {
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents))
    }, [savedEvents])

    useEffect(() => {
        if (smallCalendarMonth !== 0) {
            setMonthIndex(smallCalendarMonth)
        }
    }, [smallCalendarMonth])
    return (
        <GlobalContext.Provider value={{ monthIndex, setMonthIndex, smallCalendarMonth, setSmallCalendarMonth, daySelected, setDaySelected, showEventModal, setShowEventModal, dispatchCalEvent, savedEvents }}>{props.children} </GlobalContext.Provider>
    )
}

export default ContextWrapper