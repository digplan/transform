Validating data with a schema using Transform
=========
Transform can be used to validate JSON data, for instance for checking before inserting into a database.
    
Example..
````
var transformer = require('./transform.js');

var before = [
    {name: 'badrecord', age: 'Not a num' },
    {name: 'goodrecord', age: 50 }
]

var mapping = {
	name: function(s) { return s },
    age: function(i) { return Number(i) }
}

var after = transformer.transform(before, mapping)

console.log(JSON.stringify(before, null, 4));
console.log(JSON.stringify(after, null, 4));

after.forEach(function(rec){
  if(!rec.age) console.log('record ' + rec.name + ' failed');
})
````
