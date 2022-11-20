var weight = [35,38,42,45,43,34,36,41,48,32];

var sum,average = 0

function calculation(){

for(var c = 0 ; c<weight.length ; c++){
  sum = sum + weight[c]
}
console.log(sum)
average = sum/weight.length
console.log(average)
}


function setup() {
  createCanvas(400,400);
calculation()


}

function draw() 
{
  background(30);
}

 

