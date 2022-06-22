var min = function (list) {

    for (var i = 0; i < list.length; i++) {
        if (list[i] < list[0]) {
            list[0] = list[i];
        }
    }

    return list[0];
}

var max = function (list) {

    for (var i = 0; i < list.length; i++) {
        if (list[i] > list[0]) {

            list[0] = list[i];
        }
    }

    return list[0];
}