
export function formatNumber(obj){
  if (obj){
    const regx = new RegExp(/(-?\d+)(\d{3})/);
    let bExists = obj.toString().indexOf('.', 0)
    let strArr = obj.toString().split('.')
    while (regx.test(strArr[0])) {
      strArr[0] = strArr[0].replace(regx, "$1,$2")
    }
    if (bExists > -1) {
      obj = strArr[0] + '.' + strArr[1]
    } else {
      obj = strArr[0]
    }
    return obj
  }else{
    return '0'
  }
}
