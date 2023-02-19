// 자리수의 합 문제
const n1 = 7;
const arr1 = [128, 460, 603, 40, 521, 137, 123];
const s1 = (n, arr) => {
  let answer = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;
  for(let i of arr) {
    // let temp = String(i).split('');
    // let tempSum = temp.reduce((total, v) => {
    //   return total + Number(v);
    // }, 0);
    // 더 나은 코드
    let tempSum = i.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
    if (maxNum <= tempSum) {
      maxNum = tempSum;
      answer = i;
    }
  }
  return answer;
}
//console.log(s1(n, arr1));

// 뒤집은 소수 문제
const n2 = 9;
const arr2 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
const s2 = (n, arr) => {
  let answer = [];
  for(let i of arr) {
    let reNum = i.toString().split('').reverse().join('');
    while(reNum.charAt(0) === '0') {
      reNum = reNum.slice(1, reNum.length);
    }
    reNum = Number(reNum);
    console.log(reNum);
    if(reNum > 3) {
      let mid = Math.floor(reNum/2);
      let cnt = 0;
      for(let j = 2; j <= mid; j++) {
        if(reNum % j === 0) {
          cnt++;
          break;
        }
      }
      if(cnt === 0) answer.push(reNum);
    } else if(reNum > 1) {
      answer.push(reNum);
    }
  }
  return answer;
}
console.log(s2(n2, arr2));