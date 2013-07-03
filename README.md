Transform
=========
Reference code for the transform protocol.    

A mapping object transforms values from one object array to another.    

````
var before = [
	{name: 'Chris', age: 42, home:'IL', height:5 },
	{name: 'Barack', age:50, home:'IL', height:6 },
	{name: 'George', age:65, home:'TX', height:5 },
	{name: 'Bill', age:70, home:'NY', height:6 }
]

var mapping = {
	name: function(s) { return s + '!'},
	age: function(i) { return i > 50 ? 'old' : 'not old' },
	home: ['place', function(s){ return s }],
	height: ['IQ']
}

var after = transformer.transform(before, mapping);

==>

[
    {
        "name": "Chris!",
        "age": "not old",
        "place": "IL",
        "IQ": 5
    },
    {
        "name": "Barack!",
        "age": "not old",
        "place": "IL",
        "IQ": 6
    },
    {
        "name": "George!",
        "age": "old",
        "place": "TX",
        "IQ": 5
    },
    {
        "name": "Bill!",
        "age": "old",
        "place": "NY",
        "IQ": 6
    }
]
````