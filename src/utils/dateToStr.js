export const dateToStr = (date) => {
    let year = date.getFullYear().toString();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    
    return [month + '/' + day + '/' + year];
  }




export const dateToStrm = (date) => {
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
  
    return [
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd,
      date.getFullYear(),
    ].join('/');
  };