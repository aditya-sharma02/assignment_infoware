import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from './entity/employee.entity';
import { Repository } from 'typeorm';
import { CreateDto, UpdateDto } from './dto';
import { ContactEntitiy } from './entity/contact.entity';
import e from 'express';


@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(EmployeeEntity) private employeeRepo: Repository<EmployeeEntity>,
        @InjectRepository(ContactEntitiy) private contactRepo: Repository<ContactEntitiy>
    ) { }

    async create(dto: CreateDto) {

        try {

            const newobj = this.employeeRepo.create({
                employee_full_name: dto.name,
                job_title: dto.title,
                phone_number: dto.number,
                email: dto.email,
                address: dto.address,
                city: dto.city,
                state: dto.state
            })

            const data = await this.employeeRepo.save(newobj)

            const contactdata = this.contactRepo.create({
                pcontact: dto.pcontact,
                pcontactnum: dto.pcontactnum,
                prelationship: dto.prelationship,
                scontact: dto.scontact,
                scontactnum: dto.scontactnum,
                srelationship: dto.srelationship,
                foreignkey: data.id
            })

            await this.contactRepo.save(contactdata)

            return "Employee Registered";

        } catch (e) {
            return e;
        }
    }
    async list() {

        try {

            const data = await this.employeeRepo.find()
            return data;

        } catch (error) {
            return error;
        }
    }
    async findone(id: number) {

        try {

            const data = await this.employeeRepo.find({ where: { id } })
            if (data.length == 0) {
                return new NotFoundException;
            }

            return data[0];

        } catch (error) {
            return error;
        }
    }
    async update(id: number, dto: UpdateDto) {

        try {

            const data = await this.employeeRepo.findOne({ where: { id: id } });
            if (!data) { return new NotFoundException; }
            if (dto.name) { data.employee_full_name = dto.name }
            if (dto.title) { data.job_title = dto.title }
            if (dto.number) { data.phone_number = dto.number }
            if (dto.email) { data.email = dto.email }
            if (dto.address) { data.address = dto.address }
            if (dto.city) { data.city = dto.city }
            if (dto.state) { data.state = dto.state }
            await this.employeeRepo.save(data);
            const data1 = await this.contactRepo.findOne({ where: { foreignkey: data.id } })
            if (dto.pcontact) { data1.pcontact = dto.pcontact }
            if (dto.pcontactnum) { data1.pcontactnum = dto.pcontactnum }
            if (dto.prelationship) { data1.prelationship = dto.prelationship }
            if (dto.scontact) { data1.scontact = dto.scontact }
            if (dto.scontactnum) { data1.scontactnum = dto.scontactnum }
            if (dto.srelationship) { data1.srelationship = dto.srelationship }

            await this.contactRepo.save(data1)

            return "Employee Details Updated";

        } catch (e) {
            return e;
        }
    }
    async delete(id: number) {

        try {

            const data = await this.employeeRepo.findOne({ where: { id: id } });
            if (!data) {
                return new NotFoundException;
            }
            await this.employeeRepo.remove(data)
            const data1 = await this.contactRepo.findOne({ where: { foreignkey: data.id } });
            await this.contactRepo.remove(data1).then(() => {
            }).catch(()=>console.log(e))

            return "Employee Deleted !!! thank you"

        } catch (e) {
            return e;
        }
    }
}
