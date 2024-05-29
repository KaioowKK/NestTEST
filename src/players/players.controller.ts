import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {

    constructor(private readonly playersService: PlayersService) {}

    @Post()
    addPlayer(
        @Body('name') playName: string,
        @Body('level') playLevel: number,
        @Body('cash') playCash: number,
    ) {
        const generatedId = this.playersService.insertPlayer(
            playName, 
            playLevel, 
            playCash
            );
        return {id : generatedId };
    }

    @Get()
    gatherAllPlayers() {
        return this.playersService.gatherAllPlayers();
    }

    @Get(':id')
    gatherSpecificPlayer(@Param ('id') playID : string) {
        return this.playersService.gatherUniquePlayer(playID);
    }

    @Patch(':id')
    updatePlayer(
        @Param ('id') playID : string,
        @Body('name') playName : string,
        @Body('level') playLevel : number,
        @Body('cash') playCash : number
        ) {
        this.playersService.updatePlayerInfo(playID, playName, playLevel, playCash);
        return null;
    }

    @Delete(':id')
    deleteSpecificPlayer(@Param ('id') playID : string) {
        this.playersService.removeUniquePlayer(playID);
        return null;
    }

}