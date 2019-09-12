var generate = function(n) {
  var cur = [1,1]
  var result = [1,1,1]
  var temp = []
  temp.push([1],[1,1]);
  if(n==1){return [1]}
  if(n==2){return result}

  for(var i = 2 ; i < n ; i ++){
    var next = [1]      
    for(var j = 0 ; j < cur.length-1  ; j ++){
        next.push(cur[j]+cur[j+1])
    }
    next.push(1)
    temp.push(next)
    cur = next;
  }
  return temp
};

