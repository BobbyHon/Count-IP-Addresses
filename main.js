function ipsBetween(start, end){
    let answer = 0
    
    start = start.split('.')
    end = end.split('.')
    
    for (let i = start.length - 1; i > -1; i--)
      {
        answer += (end[i] - start[i]) * Math.pow(256, start.length - i - 1)
      }
    return answer
  }