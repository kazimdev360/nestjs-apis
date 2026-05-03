import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module';
import { getDatabaseConfig } from './config/db';

@Module({
  imports: [
    // Load env globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // TypeORM async config
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getDatabaseConfig,
    }),

    UsersModule,
  ],
})
export class AppModule { }