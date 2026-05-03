import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getDatabaseConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST || configService.get('DB_HOST', 'localhost'),
    port: Number(process.env.DB_PORT) || configService.get<number>('DB_PORT', 5432),
    username: process.env.DB_USERNAME || configService.get('DB_USERNAME', 'postgres'),
    password: process.env.DB_PASSWORD || configService.get('DB_PASSWORD', 'postgres'),
    database: process.env.DB_NAME || configService.get('DB_NAME', 'oncocare_db'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
});