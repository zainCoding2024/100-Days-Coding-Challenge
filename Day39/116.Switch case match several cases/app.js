var season;
function monthSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = 'Winter';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Spring';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Summer';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Autom';
        default:
            'The momth is not found.';
            break;
    }
    return ("Season: ".concat(season));
}
console.log(monthSeason(4));
