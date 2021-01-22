//Question#1

var months = ['January', 'February'];
months.indexOf('March');
//não é mordeno

//Question#2

var obj1 = { a: 0, b: { c: 0 } };
var obj2 = Object.assign({}, obj1);
//não é mordeno


var freshPromise =  new Promise(function (resolve, reject) {
  setTimeout(function () {
     const drink = 'juice';
     resolve('Fresh' + drink);
  }, 250); 
});

//What is Modern JavaScript

//1.Classes

class Profile extends Widget {
  constructor() {
    super();
  }
  static load() {
    return apiCall('/profile');
  }
}

//2.Arrow Functions

const add = (a,b) => a + b;

class Profile {
  update() {
    Profile.load().then(data => {
      this.render(data);
    });
  }
}


//3.Generators

function* search(node) {
  if (!node) return;
  yield node;
  yield* search(node.firstChild);
  yield* search(node.nextSibling);
 }
 
 for (let node of search(document)){
   if (node.localName === 'title') {
     console.log(node.textContext);
     break;
   }
 }

 //4.Block Scoping

const events = {
  click: log,
  mouseup: log
};

for (let type  in events) {
  let fn = events[type];
  addEventListener(type, function(e) {
   fn(e);
  });
}

//5.Destructuring

function add({ a, b=0}) {
  return a + b;
}

const { x,y, z=0 } = { x:1, y:2 };

const [a, rest] = 'abc' .split('');


//6.Rest&Spread

function h(a, b, ...c) { }

Math.max(...[1,2,3]);

let unique = [...new Set([1,2,3])];

[...'emoji'];


//7.Object Shorthand

let a = 1, b = 2;
const obj = { a, b };

const Myth = {
  random() { return 42; }
};


//8.Async/Await

class Profile {
  async update() {
    this.render(await Profile.load());
  }
}

for (const a of document.links) {
  const res = await fetch(a.href);
  if (!res.ok) a.classList.add('gone');
}

