class Star{
    constructor(x,y,r,img){
        this.body=Bodies.circle(x,y,r,{density:0.002})
        Matter.World.add(world,this.body)
        this.r=r
        this.img=loadImage(img)
    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        imageMode (CENTER)
        image(this.img,this.body.position.x,this.body.position.y,this.r,this.r)
        pop()
    }
    fall(){
        Matter.Body.setVelocity(this.body,{x:0,y:0.8})
    }
}