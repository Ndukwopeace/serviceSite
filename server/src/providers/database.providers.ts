import { LocationEntity } from "src/location/entities/location.entity";
import { serviceEntity } from "src/service/entities/service.entity";
import { DataSource, DataSourceOptions} from "typeorm";

export const dataSourceOptions : DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port : 5432,
    username : "postgres",
    database : "findme",
    password : "root",
    entities: [
     serviceEntity,
     LocationEntity
    ],
    synchronize : true,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;

