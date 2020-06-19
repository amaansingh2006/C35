class Form{
constructor(){};
display(){
    var title = createElement('h1')
    title.html("Car Racing Game!");
    title.position(150, 10);
    
    var input = createInput("Name:");
    var button = createButton("Play!")
    var greeting = createElement('h3')
    input.position(150,160);
    button.position(150, 200);
    //greeting.html("Hello " + Name );
    
}
}