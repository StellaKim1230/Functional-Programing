function _pipe() {
  var fns = arguments; //arguments로 여러개의 함수를 다 받아 놓는다.
  // pipe 함수는 즉시 함수를 리턴하는 함수이다.
  // pipe 의 함수 결과는 함수이다.
  return function(arg) {
    return _reduce(fns, function(arg, fn) {
      return fn(arg);
    }, arg)
  }
}

function _go(arg) {
  var fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
}

var slice = Array.prototype.slice;

function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
  // return iter(iter(iter(iter(0, 1), 2), 3), 4);
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, function(val) {
    memo = iter(memo, val);
  });
  return memo;
}

// get함수에 커링을 이용해서
var _get = _curryr(function _get(obj, key) {
  return obj == null ? undefined : obj[key];
});

function _curry(fn) {
  return function(a, b) {
    return arguments.length === 2 ? fn(a, b) : function(b) { return fn(a, b);};
  }
}

function _curryr(fn) {
  return function(a, b) {
    return arguments.length === 2 ? fn(a, b) : function(b) { return fn(b, a);};
  }
}

function _filter(list, predi) {
  // filter과 같은 함수를 응용형함수라 하는데 이는 함수가 함수를 받아서 원하는 시점에 해당하는 함수가 알고있는 인자를
  // 적용하는 식으로 프로그래밍 하는 함수
  var new_list = [];
  _each(list, function(val) {
    if (predi(val)) new_list.push(val);
  })
  // for (var i = 0; i <list.length; i++) {
  //   if (predi(list[i])) { // 어떤 조건일때 if문 안에 들어올 것인가를 predi함수에 완전히 위임한다.
  //     new_list.push(list[i])
  //   }
  // }
  return new_list; // console.log는 부수효과를 주는 코드여서 리턴하는 형태로 함수를 고친다.
}

function _map(list, mapper) {
  var new_list = [];
  _each(list, function(val) {
    new_list.push(mapper(val));
  })
  // for(var i = 0; i<list.length; i++) {
  //   new_list.push(mapper(list[i]));
  // }
  return new_list;
}

function _is_object(obj) {
  return typeof obj == 'object' && !!obj;
}

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}

var _length = _get('length');

function _each(list, iter) {
  var keys = _keys(list);
  for(var i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]])
  }
  return list;
}

var _map = _curryr(_map), 
  _filter = _curryr(_filter); //curryr이 적용된 map, filter를 만든다.


var _values = _map(_identity);
function _identity(val) {
  return val;
}

function _pluck(data, key) {
  return _map(data, _get(key));
}