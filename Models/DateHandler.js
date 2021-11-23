class DateHandler {
    // Convert the date object into Customized standard
    // Year + Month + Date + Seconds in day
    static getNumbericYMDSecondInDay(inputDate) {
        let thisDate = new Date(inputDate);
        let seconds =
            thisDate.getHours() * 3600 +
            thisDate.getMinutes() * 60 +
            thisDate.getSeconds();

        let retDict = {
            Year: thisDate.getFullYear(),
            Month: thisDate.getMonth() + 1,
            Day: thisDate.getDate(),
            Seconds: seconds,
        };
        return retDict;
    }

    static getDateObjectFromYMDSecondInDay(YMDS) {
        let secondsInDay = YMDS.Seconds;
        let hour = Math.floor(secondsInDay / 3600);
        let minutes = Math.floor((secondsInDay % 3600) / 60);
        let seconds = Math.floor(secondsInDay % 60);
        return new Date(
            "" +
                YMDS.Year +
                "-" +
                YMDS.Month +
                "-" +
                YMDS.Day +
                "/" +
                hour +
                ":" +
                minutes +
                ":" +
                seconds
        );
    }
}

export default DateHandler;
