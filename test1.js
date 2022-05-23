  //first funciton
  function feetToMile(feet) {

      //used Math.abs(feet) for avoiding (-) numbers
      //otherwise return "impossible! negative number"
      var result = Math.abs(feet) / 5280;
      return result;
  }


  //second function
  function woodCalculator(chair, table, bed) {

      result = (Math.abs(chair) * 1) + (Math.abs(table) * 3) + (Math.abs(bed) * 5);
      return result;
      //used Math.abs(feet) for avoiding (-) numbers
      //otherwise
      /**  if (chair < 0 || table < 0 || bed < 0) {
          return "impossible! negative number"
      }*/
  }



  //third function
  function brickCalculator(numberOfFloors) {
      if (numberOfFfloors < 0) {
          return "impossible"
      } else if (numberOfFloors <= 10) {
          result = (numberOfFloors * 15 * 1000);
      } else if (numberOfFloors <= 20) {
          result = (10 * 15 * 1000) + ((numberOfFloors - 10) * 12 * 1000);

      } else {
          result = (10 * 15 * 1000) + (10 * 12 * 1000) + ((numberOfFloors - 20) * 10 * 1000);

      }
      return result;

  }



  //4th function
  function tinyFriend(array) {

      //array for storing the number of characters in each index
      var numberOfCharacters = [];

      //loop for counting the number of characters in each index
      for (var i = 0; i < array.length; i++) {
          var counter = 0;
          for (var j = 0; j < array[i].length; j++) {
              if (array[i][j] != " ") {
                  counter++;
              }
          }
          numberOfCharacters.push(counter);
      }

      //Finding the index number has maximum characters
      var max = numberOfCharacters[0];
      var indexOfMax = 0;
      for (var i = 0; i < numberOfCharacters.length; i++) {
          if (numberOfCharacters[i] > max) {
              max = numberOfCharacters[i];
              indexOfMax = i;
          }
      }
      return array[indexOfMax];

  }
