// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  
  }

  attack() {
    return this.strength

  }
  receiveDamage(damage){
   // damage.health = damage.health - this.damage
   this.health -= damage

  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name

  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`
    if (this.health <= 0) return `${this.name} has died in act of combat`
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`
    if (this.health <= 0) return `A Saxon has died in combat`
  }
}

// War
class War {
    constructor(){
   this.vikingArmy = []
   this.saxonArmy = []
 }
  


  addViking(viking){
    this.vikingArmy.push(viking)

  }



  addSaxon(saxon){
    this.saxonArmy.push(saxon)

  }
  vikingAttack(){
    /* 
    wasn't quite sure how to add this attack and refer to "saxon.health", also, how I would implement the random factor, would that´
    be in the saxonArmy index? I'm not sure
    */
   
    


  }
  saxonAttack(){

  }
  showStatus(){
    if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!'
    if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...'


  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
