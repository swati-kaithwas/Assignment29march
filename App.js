// creating a member of list
function Member(name, expense) {
  (this.name = name), (this.expense = expense);
}
function Group(member1, member2, member3, member4) {
  (this.member1 = member1),
    (this.member2 = member2),
    (this.member3 = member3),
    (this.member4 = member4);
}
function AddMember(swati, newMember) {
  swati[`member${Object.keys(swati).length + 1}`] = newMember;
  console.log(swati);
}
// function expense always add no;
// add expenses
// output clear visible

function expenses(swati) {
  let totalexpense = 0;
  let averageexpense = 0;
  for (let k in swati) {
    totalexpense += swati[k].expense;
  }
  averageexpense = totalexpense / Object.keys(swati).length;
  console.log("totalexpense->", totalexpense);
  console.log("averageexpense->", averageexpense);
  for (let k in swati) {
    console.log(
      swati[k].name +
        "->" +
        (averageexpense - swati[k].expense > 0
          ? "Due Amount " + averageexpense - swati[k].expense
          : "Have to take Amount " +
            Math.abs(averageexpense - swati[k].expense))
    );
  }
}
// adding 30 rs;
function toAdd30(swati) {
  console.log(swati);
  for (let k in swati) {
    let x = swati[k].expense;
    swati[k].expense = x + 30;
  }
  console.log(swati);
}
//  main function call
function main() {
  const member1 = new Member("swati", 2500);
  const member2 = new Member("swatik", 2500);
  const member3 = new Member("swatikaith", 2500);
  const member4 = new Member("swatikaithwas", 2500);
  let swati = new Group(member1, member2, member3, member4);
  console.log(JSON.stringify(swati));
  AddMember(swati, member1);
  AddMember(swati, member2);
  expenses(swati);
  toAdd30(swati);
}
main();

// function Group(member1, member2, member3, member4) {
//   (this.member1 = member1),
//     (this.member2 = member2),
//     (this.member3 = member3),
//     (this.member4 = member4);
// }
