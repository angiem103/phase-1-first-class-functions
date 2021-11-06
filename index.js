function receivesAFunction (drinkSpill) {
    console.log(drinkSpill());
}

receivesAFunction(function () {return 'I spilled my water'});

function returnsANamedFunction() {
    return howAreYouFeeling ;
}

function howAreYouFeeling() {
    console.log('I am sleepy')
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Let\'s take a nap');
    };
}