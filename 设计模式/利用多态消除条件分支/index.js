// bad
var makeSound = function( animal ) {
  if ( animal instanceof Duck ) {
    console.log( '嘎嘎嘎' );
  } else if ( animal instanceof Cat ) {
    console.log( '喵喵喵' );
  }
}

var Duck = function() {}
var Cat = function() {}

makeSound(new Duck());
makeSound(new Cat());

// good

var makeSound = function( animal ) {
  animal.sound();
}

Duck.prototype.sound = function() {
    console.log( '嘎嘎嘎' );
}
Cat.prototype.sound = function() {
  console.log( '喵喵喵' );
}

makeSound(new Duck());
makeSound(new Cat());