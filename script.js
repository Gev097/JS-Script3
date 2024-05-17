// Խնդիր 2. Տրված են a, b և c ամբողջ թվերը: Արտածել YES
function checkAmboxj(a, b, c) {
    // a) երեքն էլ դրական են,
    if (a > 0 && b > 0 && c > 0) {
        console.log("YES"); 
    } else { console.log("NO");}
}
console.log("Խնդիր 1 :");
checkAmboxj(2, 3, 5)

function checkAmboxj1(a, b, c) {
    // b) դրանցից գոնե մեկը դրական է,
    if (a > 0 || b > 0 || c > 0) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj1(5, -3, -5)

function checkAmboxj2(a, b, c) {
    // c) դրանցից ճիշտ մեկը դրական է,
    let drakan = (a > 0) + (b > 0) + (c > 0);
    if (drakan === 1) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj2(5, -3, -5)

function checkAmboxj3(a, b, c) {
    // d) դրանցից ճիշտ երկուսը դրական են,
    let drakan = (a > 0) + (b > 0) + (c > 0);
    if (drakan === 2) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj3(4, 7, -5)

function checkAmboxj4(a, b, c) {
    // e) դրանցից գոնե երկուսն իրար հավասար են,
    if (a === b || a === c || b === c) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj4(8, -3, 8)

function checkAmboxj5(a, b, c) {
    // f) դրանցից գոնե երկուսն իրարից միայն նշանով են տարբերվում:
    if ((a === -b || a === -c || b === -c) && a !== 0 && b !== 0 && c !== 0) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkAmboxj5(5, -3, -5)



// Խնդիր 2. Տրված է a դրական ամբողջ թիվը: Արտածել YES, եթե այն

function checkNumber(a) {
    // a) երկնիշ և զույգ թիվ է,
    if (a >= 10 && a < 100 && a % 2 === 0) {
        console.log("YES"); 
    } else { console.log("NO");}
}
console.log("Խնդիր 2 :");
checkNumber(54)

function checkNumber1(a) {
    // b) եռանիշ և կենտ թիվ է:
    if (a >= 100 && a < 1000 && a % 2 !== 0) {
        console.log("YES"); 
    } else { console.log("NO");}
}
checkNumber1(369)
