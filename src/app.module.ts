import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PlayersModule, UsersModule, MongooseModule.forRoot('mongodb+srv://Kaioow:Kaio1995@pszone.qgviuau.mongodb.net/'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
