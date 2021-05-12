let d = new Date();
d.setDate("10");
d.setMonth(3);
d.setFullYear(1989);

let bd = d.toISOString().substring(0,10);
console.log(bd.substring(0,4));
console.log(bd.substring(5,7));
console.log(bd.substring(8,10));


let newbd = new Date();
newbd.setDate(parseInt(bd.substring(8,10)));
newbd.setMonth(parseInt(bd.substring(5,7))-1);
newbd.setFullYear(parseInt(bd.substring(0,4)));

console.log(newbd.toISOString().substring(0,10));