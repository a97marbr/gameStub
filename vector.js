// Vector is inspired by https://www.youtube.com/user/codingmath
var vector = {
    _x:1,
    _y:0,

    create: function(x,y)
    {
        var obj=Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },

    setX: function(x)
    {
        this._x=x;
    },

    setY: function(y)
    {
        this._y=y;
    },

    getX: function()
    {
        return this._x;
    },

    getY: function()
    {
        return this._y;
    },

    setAngle: function(angle)
    {
        let length=this.getLength();
        this._x=Math.cos(angle)*length;
        this._y=Math.sin(angle)*length;
    },

    getAngle: function()
    {
        return Math.atan2(this._x,this._y);
    },

    setLength: function(length)
    {
        let angle=this.getAngle();
        this._x=Math.cos(angle)*length;
        this._y=Math.sin(angle)*length;
    },

    getLength: function()
    {
        return Math.sqrt(this._x*this._x,this._y*this._y);
    },

    add: function(v2)
    {
        return vector.create(this.getX()+v2.getX(),this.getY()+v2.getY());
    },

    subtract: function(v2)
    {
      return vector.create(this.getX()-v2.getX(),this.getY()-v2.getY());
    },

    multiply: function(s)
    {
      return vector.create(this.getX()*s,this.getY()+s);
    },

    divide: function(s)
    {
      return vector.create(this.getX()/s,this.getY()/s);
    },

    addTo: function(v2)
    {
        this.setX(this.getX()+v2.getX());
        this.setY(this.getY()+v2.getY());
    },

}