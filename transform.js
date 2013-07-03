var u = require('util');

module.exports = {
		transform: function(i, t){
			o = [];
			i.forEach(function(item){
				var orec = {};
				for(key in item){
					if(typeof(t[key]) === 'function'){
						orec[key] = t[key](item[key]);
					} else if(u.isArray(t[key])) {
						var v = item[key];
						if(t[key].length === 2) v = t[key][1](v);
						orec[t[key][0]] = v;
					}
				}
				o.push(orec);
			})
			return o;
		}
	}

