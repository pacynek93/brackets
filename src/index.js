module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < 50; i++) { 
      for (let i = 0; i < bracketsConfig.length; i++) {
        const addIt =  bracketsConfig[i][0] + bracketsConfig[i][1];
        str = str.split(addIt).join('');
      }
  }
  if (str == false) {
    return true;
  } else {
    return false;
  }
}