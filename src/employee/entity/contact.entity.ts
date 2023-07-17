import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"contact"})
export class ContactEntitiy {
    @PrimaryGeneratedColumn()
    id1: number;
    
    @Column()
    pcontact: string;

    @Column()
    pcontactnum: number;

    @Column()
    prelationship: string;

    @Column()
    scontact: string;

    @Column()
    scontactnum: number;

    @Column()
    srelationship: string;

    @Column()
    foreignkey: number;
    
}