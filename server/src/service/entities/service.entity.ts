import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity("services")
export class serviceEntity {

    @PrimaryGeneratedColumn("uuid")
    id  :  string ;

    @Column()
    name : String ;

    @Column()
    location : String;

    @Column()
    contact : number ;

    @Column()
    description : String ;

    @Column({default: true})
    isAvalaible : boolean;

    @CreateDateColumn()
    createdAt : Timestamp;

    @UpdateDateColumn()
    updatedAt : Timestamp;
}
