class DateHandler {
    static getNumbericYMDSecondInDay(inputDate) {
        let thisDate = new Date(inputDate);
        let seconds =
            thisDate.getHours() * 3600 +
            thisDate.getMinutes() * 60 +
            thisDate.getSeconds();

        let retDict = {
            Year: thisDate.getFullYear(),
            Month: thisDate.getMonth() + 1,
            Date: thisDate.getDate(),
            Seconds: seconds,
        };
        return retDict;
    }
}

export default DateHandler