


export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img
        this.backImg = data.backImg
        this.creatorId = data.creatorId
    }

    get pokeListTemplate() {
        return `
        <div onclick="app.PokedexController.fetchActivePokedex('${this.name}')" class="selectable text-danger p-2 rounded text-center" role="button" >

          <div class="text-light">${this.name}</div>
        </div>
        `
    }
}


export class DetailedPokedex extends Pokemon {
    constructor(data) {
        super(data)
        this.weight = data.weight
        this.height = data.height
        this.health = data.health
        this.defense = data.defense
        this.attack = data.attack
        this.speed = data.speed
        this.type = data.types
        this.id = data.id
    }

    get ActivePokedexCard() {
        return `   <div class="card">
            <div class="card-body">
              <h2 class="text-center">Bulbasaur <span>No.1</span></h2>
              <img class="card-img p-2" src="${this.img}" alt="">
              <div class="d-flex justify-content-between">
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sint quam iste beatae, aut animi
                  necessitatibus vitae dicta facilis, amet nesciunt, labore neque! Omnis dicta deleniti veniam, natus
                  nulla
                  placeat.</p>
                <hr>
              </div>
            </div>
          </div>`

    }

}