module.exports = function check(str, bracketsConfig) {
    var array = [];
    var i, j, n;
    if (str.length % 2 != 0) {
        return false;
    }
    for (n = 0; n < str.length; n++) {
        array [n] = str [n];
    }
    var flag = true;
    while (flag) {
        flag = false;
        for (i = 0; i < array.length - 1; i++) {
            for (j = 0; j < bracketsConfig.length; j++) {
                if (array [i] === bracketsConfig [j] [0] && array [i + 1] === bracketsConfig [j] [1]) {
                    array.splice(i, 2);
                    flag = true;
                    break;
                }
            }
        }

    }
    return (array.length === 0) ? true : false;
}
