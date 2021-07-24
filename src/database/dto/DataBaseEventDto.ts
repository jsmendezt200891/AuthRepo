import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class DataBaseEventDto {

    @ObjectIdColumn()
    id: ObjectID;
  
    @Column()
    name: string;
}