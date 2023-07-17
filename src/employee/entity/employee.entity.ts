import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"employee"})
export class EmployeeEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    employee_full_name: string;
    
    @Column()
    job_title: string;
    
    @Column()
    phone_number: number;
    
    @Column()
    email: string
    
    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    state: string;
}