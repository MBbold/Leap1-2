//Өгөгдсөн код дээрх даалгаврыг map, filter, reduce ашиглан гүйцэтгэж үр дүн console руу хэвлэ.
// Доорх users нэртэй array object - ын "admin", "editor" group - тэй хүмүүс тус бүр хичнээн байгааг тоол
// const users = [
//     { id: 11, name: 'Bat', age: 23, group: 'editor' },
//     { id: 47, name: 'Bold', age: 28, group: 'admin' },
//     { id: 85, name: 'Tulga', age: 34, group: 'editor' },
//     { id: 97, name: 'Suren', age: 28, group: 'admin' }
//   ];
//   const count = ()=>{
//       const adminNum = users.reduce((acc,el)=> {
//           if(el.group == "admin"){
//             acc.admin ++;
//           } else{
//             acc.group++;
//           }
//           return acc
//       },{admin: 0, group:0})
//       return adminNum;
//   }
//   console.log(count());


  //Mine

  let inp = [
      [0, 1, 0, 0], 
      [0, 0, 1, 0], 
      [0, 1, 0, 1], 
      [1, 1, 0, 0]];
  // INPUT:
  //[[0, 1, 0, 0],
  // [0, 0, 1, 0],
  // [0, 1, 0, 1],
  // [1, 1, 0, 0]]
  
  // OUTPUT:
  // [ [1, 9, 2, 1],
  // [2, 3, 9, 2],
  // [3, 9, 4, 9],
  // [9, 9, 3, 1]]
  const rec = (row, col, i) => {
    //   console.log(row);
    //   console.log(col);
      console.log(i);

    if (i == 0) {
      return 0 + rec(row - 1, col, 1) + rec(row + 1, col, 1) + rec(row - 1, col - 1, 1) + rec(row - 1, col + 1, 1) + rec(row + 1, col - 1, 1) + rec(row + 1, col + 1, 1) + rec(row, col + 1, 1) + rec(row, col - 1, 1)
    }
    if (inp[row] == undefined || inp[row][col] == undefined || inp[row][col] != 9) {
      return 0;
    }
    return 1;
  }
  const b = (a) => {
    if (a == 1) {
      return 9;
    }
    return 0
  }
  inp = inp.map(a => a.map(c => b(c)))
  
  inp.forEach((item, rowi) => {
    item.forEach((item1, coli) => {
      if (item1 != 9) {
  
        return inp[rowi][coli] = rec(rowi, coli, 0)
      }
    })
  })
  console.log(inp)