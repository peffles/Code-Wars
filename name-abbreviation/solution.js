function abbrevName(name) {
  var seperate = name.split(' ').map(function(name){return name[0]}).join('.');
  var caps = seperate.toUpperCase();
  return caps;
}