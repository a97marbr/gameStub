// Particle is inspired by https://www.youtube.com/user/codingmath
var particle = {
    position:null,
    velocity:null,
    gravity:null,
    radius:10,
    color:"rgba(0,0,0,0.5)",

    create: function(x,y,speed,direction,gravity,color,radius)
    {
        let obj=Object.create(this)
        obj.position=vector.create(x,y);
        obj.velocity=vector.create(0,0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.gravity=vector.create(0,gravity||0);
        obj.radius=radius||10;
        obj.color=color||"rgba(0,0,0,1)";
        return obj;
    },

    accelerate: function(accel)
    {
        this.velocity.addTo(accel);
    },

    update: function()
    {
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    }
}