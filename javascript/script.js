function process() {
var Z=["","",""]
Z[0] = parseInt(document.getElementById("a").value);
Z[1]= parseInt(document.getElementById("b").value);
Z[2] = parseInt(document.getElementById("c").value);

if(Z[0]) === Z[1] && Z[1]=== Z[2] && Z[2] ===Z[0]{
document.getElementById("result").value = "Equilateral"
}
else if (Z[0] ===Z[1] || Z[1] === Z[2]||Z[2] ===Z[0]{
  document.getElementById("result").value ="Isosceles"
}
else if (Z[0]!= Z[1]!=Z[2]){
    if (((Z[0] +Z[1])<= Z[2]) ||((Z[1]+Z[2]<= Z[0]) ||((Z[0]+Z[2])<=Z[1])) {
document.getElementById("result").value ="Not a triangle"
}
else {
  document.getElementById("result").value="Scalene"
}
}
function resetForm(){

  document.getElementById("button2").value ="";
}
