import * as moment from 'moment';

export class utils {
    static _convertDate(data) {
        return data.year + '-' + data.month + '-' + data.day;
    }

    static _convertDatetime(data) {
        return data.year + '-' + data.month + '-' + data.day;
    }

    static _currentDate() {
        return {
            day: parseInt(moment(new Date()).format('DD')),
            month: parseInt(moment(new Date()).format('MM')),
            year: parseInt(moment(new Date()).format('YYYY')),
        }
    }

    static calculateYearMonth(start, end) {
        let now = moment(end);
        let duration = moment.duration(now.diff(start));
        let year = Math.floor(duration.asYears());
        let month = Math.round(duration.asMonths());

        // let month = duration.asMonths().toFixed(0);
        // let yearRaw = Math.round(duration.asYears());
        
        let response = {
            month: month,
            yearMonth: {
                year: year ? year : null,
                month: month
            }
        }
        if (month > 12) response.yearMonth.month = month - (year * 12);
        return response;
    }
}