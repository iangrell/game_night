


export class Player{

    constructor(name, score) {
        this.name = name
        this.score = score
    }

    get PlayerTemplate() {
        return`
            <div class="col-12 text-start p-1"><h6>${this.name}</h6><h6>${this.score}</h6><button class="btn btn-info" onclick="app.playerController.test()">Test</button></div>
        `
    }
}