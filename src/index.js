module.exports = function check(str, bracketsConfig) {
  // your solutio
  let stack = [];
  if (str.length % 2 == 1) return false;
    for (let i = 0; i < str.length; i++) {
        if (stack[stack.length - 1] == str[i] && similar(str[i])){
            stack.pop();
        } else if (opened(str[i])) {
            stack.push(str[i]);
        } else if (paired(str[i])) {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length == 0) {
        return true;
    }
    return false;

    function similar (char) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (char == bracketsConfig[i][0] && bracketsConfig[i][0] == bracketsConfig[i][1]) {
                return true;
            }
        }
    };

    function opened(char) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (char == bracketsConfig[i][0]) {
                return true;
            }
        }
        return false;
    };

    function paired(char) {
        let lastChar = stack[stack.length - 1];
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (lastChar == bracketsConfig[i][0] && char == bracketsConfig[i][1]) return true;
          }
          return false;
        }
}
