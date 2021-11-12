class Paper
{
	constructor(x,y, width, height)
	{

        var options = {
            restitution: 0.3, 
            friction: 0, 
            density: 1.2, 
            isStatic: false 

        }
		
		this.image=loadImage("paper.png")
		this.body = Bodies.rectangle(x, y, width, height, options); 

        this.x=x;
		this.y=y;
        this.width = width; 
        this.height = height; 

		World.add(world, this.body)



	}
	display()
	{
			var pos=this.body.position;
            var angle = this.body.angle; 

			

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			rotate(this.angle)
            imageMode(CENTER)
            image (this.image, 0, 0, this.width, this.height)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
			
	}

}