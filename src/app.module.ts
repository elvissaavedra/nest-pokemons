import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ServeStaticModule} from '@nestjs/serve-static'
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
@Module({
  imports: [

    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),

    MongooseModule.forRoot( process.env.MONGODB, {
      dbName: 'pokemonsdb'
    }),

    PokemonModule,
    SeedModule
  ]
})
export class AppModule {}
