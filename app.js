const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const modifiedFood = fruits.slice(1, 3);
    console.log(modifiedFood);
    
    //Function #2: Array Splice
    
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruits);
    
    //Function #3: Filter
    
    const nums = [2, 43, 567, 99, 65, 33, 457, 789, 90];
    var even = nums.filter((value) => value % 2 === 0);
    console.log(even);
    
    //Function #4: Reject
    
    function nonPrime(arr) {
      var ans = [];
      for (i of arr) {
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            ans.push(i);
            console.log(ans);
           
          }
        }
      
      }
     
    }
    
    //Function #5: Map
    const myArray = [11, 34, 20, 5, 53, 16];
    var squaredArray = myArray.map((val) => val * val);
    console.log(squaredArray);
    
    //Function #6: Reduce
    var multiplyArray = myArray.reduce((a, value) => a * value);
    console.log(multiplyArray);
