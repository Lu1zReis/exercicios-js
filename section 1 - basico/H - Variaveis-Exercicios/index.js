let VarA = 'A';
let VarB = 'B';
let VarC = 'C';

let aux = VarA;

VarA = VarB;
VarB = VarC;
VarC = aux;

console.log(VarA, VarB, VarC)
 