import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataBaseEventDto } from 'src/database/dto/DataBaseEventDto';

export default registerAs(
    'org.config',(): TypeOrmModuleOptions => ({
    type: "mongodb",
    url: process.env.URL_MONGO,
    entities: [DataBaseEventDto],
    synchronize: true,

})
);