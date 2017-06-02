/**
 * Created by nkondova on 2.6.2017 г..
 */
function dna(n) {

  let arr = 'ATCGTTAGGG';
  let result = '';
  let counter = 0;
  let rowCount = 1;

  for(let row = 1; row <= n; row++){

      if(counter >= arr.length){
          counter = 0;
      }

      if(rowCount >4){
          rowCount = 1;
      }

      for(let col = 0; col <6; col++){
          if(rowCount == 1){
              if(col == '0' || col == '1' ||col == '4' ||col == '5'){
                  result +='*';
              }else{
                  result += arr[counter];
                  counter++;
              }
          }else if(rowCount == 2 || rowCount == 4){
              if(col == 0 || col == 5){
                  result +='*';
              }else if(col == 2 || col == 3){
                  result +='-';
              }else{
                  result += arr[counter];
                  counter++;
              }
          }else{
              if(col == 0 || col == 5){
                  result += arr[counter];
                  counter++;
              }else {
                  result +='-';
              }
          }
      }
      result += '\n';
      rowCount++;
  }

  console.log(result);
}

dna(10);