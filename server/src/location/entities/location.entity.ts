import { serviceEntity } from "src/service/entities/service.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name: "location"})
export class LocationEntity {
    @PrimaryGeneratedColumn("uuid")
    id : String;
    
    @Column()
    name : String;

    @OneToMany(()=> serviceEntity , (service)=> service.location)
    servicies : serviceEntity[];
    
    @CreateDateColumn()
    createdAt : Timestamp;

    @UpdateDateColumn()
    updatedAt : Timestamp;
    
}
