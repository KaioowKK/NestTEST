import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { Player } from './player.info';

@Injectable()
export class PlayersService {
    private players: Player[] = [];

    insertPlayer(name: string, level: number, cash: number) {
        const playID = Math.random().toString();
        const newPlayer = new Player(playID , name, level, cash);
        this.players.push(newPlayer);
        return playID;
    }

    gatherAllPlayers() {
        return [...this.players];
    }

    private PlayerFinder(playerID : string) : [Player, number] {
        const uplayerIndex = this.players.findIndex((play) => play.id === playerID);
        const uplayer = this.players[uplayerIndex]
        if (!uplayer) {
            throw new NotFoundException('Could not find Specific Player.');
        }
        return [uplayer, uplayerIndex];

    }

    gatherUniquePlayer( playerID : string) {
        const foundPlayer = this.PlayerFinder(playerID)[0];
        return { ...foundPlayer };
    }

    updatePlayerInfo( playerID : string, name : string, level : number, cash : number) {
        const foundPlayer = this.PlayerFinder(playerID) [0];
        const foundIndex = this.PlayerFinder(playerID) [1];
        const updatedPlayer = { ...foundPlayer };
        if (name) {
            updatedPlayer.name = name;
        }
        if (level) {
            updatedPlayer.level = level;
        }
        if (cash) {
            updatedPlayer.cash = cash;
        }
        this.players[foundIndex] = updatedPlayer;
    }

    removeUniquePlayer( playerID : string) {
        const foundIndex = this.PlayerFinder(playerID) [1];
        this.players.splice(foundIndex, 1);
        return null;

    }

}
