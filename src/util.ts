import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month)
    // get current year
    const year: any = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day()

    //counter of mounth
    let currentMounth = 0 - firstDayOfMonth

    // array date
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMounth++
            return dayjs(new Date(year, month, currentMounth))
        })
    })

    return daysMatrix
}