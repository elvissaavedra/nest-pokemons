import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { Pokemon, PokemonShema } from './entities/pokemon.entity';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ 
    PokemonModule,
    CommonModule
 ]
})
export class SeedModule {}