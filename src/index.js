module.exports = function check(str, bracketsConfig) {
  let separ=[];
  bracketsConfig.forEach(element => {
    separ.push(element.join(""));
  });
  //console.log(array);
    
    let result =str;
  let CutBracketStr =(string, reg)=>{
    let index =string.indexOf(reg, 0);
    console.log(index);
    if(index>0){
      string = string.slice(0, index) + string.slice(index+2);
    }
    if(index===0){
      string = string.slice(0, index) + string.slice(index+2);
    }
    return string;
  }
  for(let i=0; i<str.length; i++){
    //console.log("res" + result);
    
    separ.forEach((el)=>{result =CutBracketStr(result, el)});
  }
   
    // //replaceBracketsToString(bracketsConfig);
   return !(result.length>0);
  }