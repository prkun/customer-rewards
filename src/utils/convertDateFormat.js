
const convertDateFormat = (dateStr) => {
    try {
        const date = new Date(dateStr);
        let day = date.getDate();
        day = day < 10 ? "0" + day : day;
        let month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        let year = date.getFullYear();
        return day + "-" + month + "-" + year;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export {
    convertDateFormat
}