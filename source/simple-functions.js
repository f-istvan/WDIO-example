'use strict';

function Utils() {
    return {
        sign: function (number) {
            number = +number; // convert to a number
            if (number === 0 || isNaN(number)) {
                return number;
            }
            return number > 0 ? 1 : -1;
        }
    };
}