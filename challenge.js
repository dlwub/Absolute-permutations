function absolutePermutation(n, k) {
  // Write your code here
  let arr = []
  if(k===0){
      arr = Array.from(Array(n), (_, i) => i + 1)
  }else{
      for(let i = 1; i <=n; i++){
      if(i - k > 0 && !arr.includes(i-k))
      {
          arr.push(i - k)
      }else if( i + k <= n){
          arr.push(i + k)
      }else{
          return [-1];            
      }
      }        
  }
  
return arr; 
      
}