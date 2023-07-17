import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateDto, UpdateDto } from './dto';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {

    }
    @Post("create")
    create(@Body() dto: CreateDto) {
        return this.employeeService.create(dto)
    }
    @Get("find")
    findmany() {
        return this.employeeService.list()
    }
    @Get("find/:id")
    findone(@Param('id') id:number) {
        return this.employeeService.findone(id)
    }
    @Patch('update/:id')
    update(@Param('id') id: number, @Body() dto: UpdateDto) {
        return this.employeeService.update(id, dto)
    }
    @Delete('delete/:id')
    delete(@Param('id') id: number) {
        return this.employeeService.delete(id)
    }
}
