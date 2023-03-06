import { appState } from "../AppState.js";
import { playerService } from "../Services/PlayerService.js";

export class PlayerController {

    constructor() {
        console.log(appState.players)
        this.drawPlayers()
    }

    test() {
        playerService.test();
        console.log('test controller')
    }

    drawPlayers() {
        let players = appState.players
        let template = ''
        players.forEach(player => template += player.PlayerTemplate)
        document.getElementById('players').innerHTML = template
    }

}