class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
//Utilize o código 'Bodies.circle' para criar um corpo circular
    this.body = Bodies.circle(x, y, this.r, options);
//Carregue a imagem da bola
    this.image = ???
    World.add(world, this.body);
  }

  shoot() {
    /*Adicione o código 'p5.Vector.fromAngle', pois ele define a velocidade de acordo com o ângulo*/
    var velocity = ???(cannon.angle);
    /*multiplique a velocidade atual do objeto por 20.  */
    velocity.mult(???);
    //Abaixo você terá que definir que a bola não será estática, ou seja, ela terá uma movimentação
    //Para fazer isso, utilize o código 'setStatic' como false
    Matter.Body.???(this.body, ???);
    //Agora utilize o código 'setVelocity' para aplicar essa nova velocidade
    Matter.Body.???(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

    }
  }

