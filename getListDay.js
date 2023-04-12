/**
 * @param {Date} startDate
 * @param {Date} endDate
 */

const getListDay = (startDate, endDate, ex = [0, 6]) => {
    const nameDay = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
    let selisih = endDate.getTime() - startDate.getTime();
    let totalDay = Math.ceil(selisih / (1000*3600*24)) + 1;

    data = {
		startDate: startDate, endDate: endDate, totalDay: totalDay,
		listExDay: ex, listDay: [], listDate: []
    }

    for (i=0; i<totalDay; i++) {
        const temp = new Date(startDate);
        temp.setDate(temp.getDate() + i);
        if(!ex.includes(temp.getDay())) {
			data.listDay.push(nameDay[temp.getDay()]);
			data.listDate.push(temp);
        };
    };

    data.totalShowDay = data.listDay.length;
    data.totalExDay = totalDay-data.totalShowDay;
    
    return data;
};

module.exports = getListDay;