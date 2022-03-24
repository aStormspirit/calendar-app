import React from "react";

interface Context {
    monthIndex: number;
    setMonthIndex: any;
    smallCalendarMonth: number;
    setSmallCalendarMonth: any;
    daySelected: any;
    setDaySelected: any;
    showEventModal: boolean;
    setShowEventModal: any;
    dispatchCalEvent: any;
    savedEvents: [] | any;
}

const GlobalContext = React.createContext<Context>({
    monthIndex: 0,
    setMonthIndex: (id: any) => { },
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (id: any) => { },
    daySelected: null,
    setDaySelected: (id: any) => { },
    showEventModal: false,
    setShowEventModal: (id: any) => { },
    dispatchCalEvent: ({ type, payload }: any) => { },
    savedEvents: [],
})

export default GlobalContext