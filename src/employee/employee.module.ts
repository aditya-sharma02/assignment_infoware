import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './entity/employee.entity';
import { ContactEntitiy } from './entity/contact.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EmployeeEntity,ContactEntitiy])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
