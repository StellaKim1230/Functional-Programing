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

function _each(list, iter) {
  for(var i = 0; i<list.length; i++) {
    iter(list[i])
  }
  return list;
}