var Big = require('big.js');
var data = { a: '1244087811865667753', b: '65656764656688879' };
//with library
function calcBignumber() {

    var x = new Big(data.a),
        y = new Big(data.b);
console.log("With library: "x.plus(y));
    return x.plus(y);
}

calcBignumber();

//without library

function add(a, b) {
    if ((a | 0) == 0 && (b | 0) == 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];

    for (var i = 0; (a[i] >= 0) || (b[i] >= 0); i++) {
        var sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        var next = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }
    console.log("Without library: "result.reverse().join(''))
    return result.reverse().join('');
}
add(data.a, data.b);