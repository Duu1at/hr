import React from 'react';
import cls from "./EmployeeTable.module.scss"
import {Text} from "../../../../shared/ui/Text";
import {Avatar} from "../../../../shared/ui/Avatar";
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";

interface Employee {
    id: number;
    avatar: string;
    name: string;
    position: string;
    phone: string;
    address: string;
    email: string;
    dob: string;
}

interface Props {
    employees: Employee[];
}

const EmployeeTable: React.FC<Props> = ({employees}) => {
    return (
        <table className={cls.employeeTable}>
            <thead className={cls.employee_table__header}>
            <tr >
                <th><Text align={"left"} text={"№"} variant={"accent"} /></th>
                <th><Text align={"left"} text={"Сотрудник" } variant={"accent"} /></th>
                <th><Text align={"left"} text={"Должность"} variant={"accent"} /></th>
                <th><Text align={"left"} text={"Телефон"} variant={"accent"} /></th>
                <th><Text align={"left"} text={"Эл. адрес"} variant={"accent"} /></th>
                <th><Text align={"left"} text={"Дата рождения"} variant={"accent"} /></th>
            </tr>
            </thead>
            <tbody>
            {employees.map((employee) => (
                <tr className={cls.employee_cells} key={employee.id}>
                    <td className={classNames(cls.cell_id,{},[])}><Text align={"left"} text={employee.id.toString()}/></td>
                    <td className={cls.cell_avatar_name}>
                        <div className={cls.cell_avatar_name__block}>
                            <Avatar  src={employee.avatar} size={28}/>
                            <Text align={"left"} text={employee.name}/>
                        </div>
                    </td>
                    <td className={cls.cell_position}><Text align={"left"} text={employee.position}/></td>
                    <td className={cls.cell_phone}><Text align={"left"} text={employee.phone}/></td>
                    <td className={cls.cell_email}><Text align={"left"} text={employee.email}/></td>
                    <td className={cls.cell_dob}><Text align={"left"} text={employee.dob}/></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
