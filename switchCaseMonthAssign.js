function monthOfYear   (monthNum){
    switch (monthNum) { // 13
      case 1:
          console.log(`${monthNum} - January`);
          break;
      case 2:
          console.log(`${monthNum} -  February`);
          break;
      case 3:
          console.log(`${monthNum} - March`);
          break;
      case 4:
          console.log(`${monthNum} - April`);
          break;
      case 5:
          console.log(`${monthNum} - May`);
          break;
      case 6:
          console.log(`${monthNum} - June`);
          break;
      case 7:
          console.log(`${monthNum} - Jully`);
    
          break;
          case 8:
          console.log(`${monthNum} - August`);
          break;
          case 9:
          console.log(`${monthNum} - Septeaber`);
          break;
          case 10:
          console.log(`${monthNum} - October`);
          break;
          case 11:
          console.log(`${monthNum} - November`);
          break;
          case 12:
          console.log(`${monthNum} - December`);
          break;
      default:
          console.log(`Invalid Data: ${monthNum}`);
          break;
    }
  } monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);

  //1--January
  //2--February
  //3--March
  //12--December

  