import { Expose } from "class-transformer";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class DataBaseEventDto {
    constructor(partial?: Partial<DataBaseEventDto>){
        Object.assign(this,partial);
    }

    @ObjectIdColumn()
    @Expose()
    id: ObjectID;
  
    @Column()
    @Expose()
    name: string;
}