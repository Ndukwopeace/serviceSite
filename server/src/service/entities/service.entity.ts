import { LocationEntity } from "src/location/entities/location.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity("services")
export class serviceEntity {

    @PrimaryGeneratedColumn("uuid")
    id  :  string ;

    @Column()
    name : String ;

    @Column()
    contact : string ;
    
    @Column()
    description : String ;
    
    @Column({default: true})
    isAvalaible : boolean;
    
    @Column({name: "location_id"})
    locationId : String;

    @ManyToOne(() => LocationEntity , (location) => location.servicies )
    @JoinColumn({name: "location_id"})
    location : LocationEntity

    @CreateDateColumn()
    createdAt : Timestamp;

    @UpdateDateColumn()
    updatedAt : Timestamp;
}
