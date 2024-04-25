function checkPalindrom(S) {
  let revString = S.split("").reverse().join("");
  return revString == S;
}

function countPalindrom(S) {
  let countPal = 0;
  let str = S.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length - 1; j++) {
      if (str[i] == str[j]) {
        let data = str.slice(i, j + 1).join("");

        if (checkPalindrom(data)) {
          countPal++;
        }
      }
    }
  }
  countPal = countPal + str.length;
  return countPal;
}

let string = "bobseesanna";
console.log(countPalindrom(string));
