function filterTodoList(array) {
  const isDoneArray = [];
  const isntDoneArray = [];

  array.forEach(todoObject => {
    if (todoObject.isDone) isDoneArray.push(todoObject);
    else isntDoneArray.push(todoObject);
  });

  return { isDoneArray, isntDoneArray };
}

export default filterTodoList;
