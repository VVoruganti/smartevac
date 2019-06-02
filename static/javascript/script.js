
const http = new XMLHttpRequest(); 

function test() {

http.open("GET", "/test");

http.send();;
console.log(http.response);
alert(http.response);

}
