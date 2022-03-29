function Member(name, expense) {
  this.name = name;
  this.expense = expense;
}
const member1 = new Member("swati", 2400);
const member2 = new Member("Babu", 240);
const member3 = new Member("Dormon", 2660);
const member4 = new Member("Rahul", 2400);
const member5 = new Member("Arti", 400);
function Group(member1, member2, member3, member4, member5) {
  this.member1 = member1;
  this.member2 = member2;
  this.member3 = member3;
  this.member4 = member4;
  this.member5 = member5;
}
const swati = new Group(member1, member2, member3, member4, member5);
console.log(JSON.stringify(swati));
function AddMember(swati, newMember) {
  swati[`member${Object.keys(swati).length + 1}`] = newMember;
}
AddMember(swati, member1);
AddMember(swati, member2);

console.log(swati);
function AddExpense(swati) {
  let totalexpense = 0;
  let avgexpense = 0;
  for (let k in swati) {
    totalexpense = swati[k].expense;
  }
  avgexpense = totalexpense / Object.keys(swati).length;
  console.log("totalexpense->", totalexpense);
  console.log("avgexpense->", avgexpense);
  for (let k in swati) {
    console.log(
      swati[k].name +
        "->" +
        (avgexpense - swati[k].expense > 0
          ? " Due Amount" + avgexpense - swati[k].expense
          : "Have to take Amount " + Math.abs(avgexpense))
    );
  }
}
AddExpense(swati);

function toAdd30(swati) {
  console.log(swati);
  for (let k in swati) {
    let x = swati[k].expense;
    swati[k].AddExpense = x + 30;
  }
  console.log(swati);
}
function Main() {
  const menber1 = new Member("swatikaithwas", 2500);
  const member2 = new Member("Babu", 240);
  const member3 = new Member("Dormon", 2660);
  const member4 = new Member("Rahul", 2400);
  const member5 = new Member("Arti", 400);
  let swati = new Group(member1, member2, member3, member4);
  console.log(JSON.stringify(swati));

  AddMember(swati, member2);
  AddMember(swati, member3);
  expense(swati);
  toAdd30(swati);
}
Main();
