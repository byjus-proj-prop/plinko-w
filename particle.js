class Particle {
    constructor() {
        var options = {
            "restituition":0,
            "friction":0.5
        }
        this.body = Bodies.circle(random(300,350),20,10,options);
        World.add(world, this.body);
    }
    display() {
        fill(color(random(10,255),random(10,255),random(10,255)));
        circle(this.body.position.x,this.body.position.y,20);
    }
}