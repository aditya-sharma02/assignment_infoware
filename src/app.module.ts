import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeEntity } from './employee/entity/employee.entity';
import { ContactEntitiy } from './employee/entity/contact.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'adisha',
      database: 'assignment_infoware',
      entities: [ContactEntitiy, EmployeeEntity],
      synchronize: true,
    }),
    EmployeeModule,
  ]
})
export class AppModule { }
