/**
 * Created by chenkang1 on 2017/6/29.
 */
export function sortJsonArr(jsonArr, sortName, sortType, addition, additionOrder) {
  if (sortName && sortType && jsonArr != null && jsonArr.length > 0) {
    sortType = sortType.toUpperCase();
    let direction = 1;
    if (sortType.toUpperCase() === 'DESC') {
      direction = -1;
    }
    jsonArr.sort(function (obj1, obj2) {
      if (obj1[sortName] > obj2[sortName]) {
        return 1 * direction;
      } else if (obj1[sortName] < obj2[sortName]) {
        return -1 * direction;
      }
      // obj1[sortName] == obj2[sortName]
      else {
        //if the two score equality, order by name , name order by sortType
        if (addition && additionOrder && obj1[addition] && obj2[addition] && obj1[addition].toUpperCase() > obj2[addition].toUpperCase()) {
          return -1 * direction;
        } else {
          //obj1 addition is null
          if (!obj1[addition]) {
            return 1;
          } else {
            return 1 * direction;
          }
        }
      }
    });
  }
};
