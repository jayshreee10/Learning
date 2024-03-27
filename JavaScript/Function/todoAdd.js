// add data to array

let task = [];
let addValue = function (newValue) {
  task.push(newValue);
}
let deleteValue = function (remove) {
  let index = -1; // value cant start with -1
  for (let i = 0; i < task.length; i++) {
    if (task[i] == remove) {
      index = i;
    }
  }
  if (index != -1) {
    task.splice(index, 1);
  }
};
let editValue = function (newValue, oldValue) {
  for (i = 0; i < task.length; i++) {
    if (task[i] == oldValue) {
      task[i] = newValue;
    }
  }
};
let displayValue = function () {
    console.log(task);

//   for (i = 0; i < task.length; i++) {
//     console.log(task[i]);
//   }
};

addValue(2)
addValue(3)
addValue(4)
addValue(5)
addValue(6)
addValue(7)
addValue(8)
addValue(9)
displayValue()
deleteValue(5)
displayValue();
editValue(10,8)
displayValue();

