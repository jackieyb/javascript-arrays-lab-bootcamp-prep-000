const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  return [...kittens,name]
}
function prependKitten(name){
  var newKitten = [name,...kittens]
  return newKitten
}
function removeLastKitten(){
  return kittens.slice(0,-1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
