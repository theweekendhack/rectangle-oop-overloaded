class Rectangle
{

    //properties

    length;
    width;

    //constructor
    constructor(l,w)
    {
        this.length=l;
        this.width=w
    }

    //methods

    calArea()
    {
       return this.length * this.width;
    }


    calPerimeter()
    {
        return 2*(this.width+this.length);
    }


}

export default Rectangle;