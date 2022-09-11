var helloworld = 'Hello World';
console.log(helloworld);
console.log(helloworld[5]);
let hwlength = helloworld.length;
console.log(hwlength);
let sentence = "A quick brown foxdog did a something";
let sentpart = sentence.slice(20);
console.log(sentence);
console.log(sentpart);
let reppart = sentence;
let newreppart = reppart.replace("foxdog", "cowchicken");
console.log(newreppart);
let hwupper = helloworld.toUpperCase();
console.log(hwupper);
let sentslice = sentence.slice(6, 15);
console.log(sentslice);




var stsclass = ["Ironclad", "Silent", "Defect", "Watcher"];
var stsclscard = [26,28, 30, 22];
console.log(stsclass);
console.log(stsclscard);


stsclass.push("Arbiter");
console.log(stsclass);

stsclscard.indexOf(30);
stsclscard.pop();
console.log(stsclscard);
stsclass.sort();
console.log(stsclass);
stsclass.unshift("Maurauder");
console.log(stsclass);
