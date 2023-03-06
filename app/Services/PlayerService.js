import { appState } from "../AppState.js";

class PlayerService {

    addScore(name) {
        let foundPlayer = appState.players.find(p => p.name == name)
        foundPlayer.score += 1
    }

    test() {
        console.log('test service')
    }

}

export const playerService = new PlayerService()