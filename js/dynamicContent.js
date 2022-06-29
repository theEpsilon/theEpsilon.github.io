$(document).ready(function () {
    const dob = dayjs("05/02/1999", "DD/MM/YYYY");
    const diff = Math.abs(dob.diff(dayjs(), "year"));

    $("#age").text(diff + " years old");
});