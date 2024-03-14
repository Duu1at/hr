import {Input} from "../../../shared/ui/Input";
import Search from '../../../shared/assets/icon/search-icon.svg?react'
import FilterIcon from '../../../shared/assets/icon/fill.svg?react'
import ArrowIcon from '../../../shared/assets/icon/arrow-down.svg?react'

import cls from "./EmployeeListPage.module.scss"
import {Button, ButtonSize,} from "../../../shared/ui/Button";
import {Icon} from "../../../shared/ui/Icon";
import EmployeeTable from "./EmployeeTable/EmployeeTable.tsx";
import {Text} from "../../../shared/ui/Text";
import {useState} from "react";
import FilterDropDownBtn from "./FillterDropDownBtn/FilterDropDownBtn.tsx";
import PositionsDropDown from "./PositionsDropDown/PositionsDropDown.tsx";

function EmployeeListPage() {

    const employees = [
        {
            id: 1,
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1982479970/display_1500/stock-photo-cheerful-arab-guy-in-casual-sitting-at-workdesk-and-smiling-at-camera-office-interior-copy-space-1982479970.jpg',
            name: 'John Doe',
            position: 'Software Engineer',
            phone: '123-456-7890',
            address: '123 Main St, City, Country',
            email: 'john.doe@example.com',
            dob: '1990.01.01',
        },
        {
            id: 2,
            avatar: 'https://nameorigin.ru/assets/i/ai/4/1/7/i/2789453.jpg',
            name: 'John Doe',
            position: 'Software Engineer',
            phone: '123-456-7890',
            address: '123 Main St, City, Country',
            email: 'john.doe@example.com',
            dob: '1990.01.01',
        },
        {
            id: 3,
            avatar: 'https://www.shutterstock.com/shutterstock/photos/1982479970/display_1500/stock-photo-cheerful-arab-guy-in-casual-sitting-at-workdesk-and-smiling-at-camera-office-interior-copy-space-1982479970.jpg',
            name: 'John Doe',
            position: 'Software Engineer',
            phone: '123-456-7890',
            address: '123 Main St, City, Country',
            email: 'john.doe@example.com',
            dob: '1990.01.01',
        },
        {
            id: 4,
            avatar: 'https://nameorigin.ru/assets/i/ai/4/1/7/i/2789453.jpg',
            name: 'John Doe',
            position: 'Software Engineer',
            phone: '123-456-7890',
            address: '123 Main St, City, Country',
            email: 'john.doe@example.com',
            dob: '1990.01.01',
        },
        // Другие сотрудники...
    ];

    const [show, setShow] = useState(false);
    const [showPosition, setShowPosition] = useState(false);


    return (
        <div className={cls.EmployeeListPage}>
            <div className={'container'}>
                <div className={cls.employee_filter}>
                    <div className={cls.employee_filter__item}>
                        <Input placeholder={"Поиск.."} icon={Search} className={cls.input}/>
                        <div className={cls.btn_positions}>
                            <Button className={cls.btn_positions__items} onClick={() => setShowPosition(!showPosition)}>
                                <Text text={"Все должности"} variant={"primary"}/>
                                <Icon Svg={ArrowIcon} width={12} height={12}/>
                            </Button>
                            {
                                showPosition ? <PositionsDropDown/> : null
                            }
                        </div>

                    </div>
                    <div className={cls.btn_filter}>
                        <Button size={ButtonSize.M}
                                onClick={() => setShow(!show)}
                        >
                            <div className={cls.btn_filter__block}>
                                <Icon Svg={FilterIcon} width={12} height={12}/>
                                <Text text={"Сортировать"} variant={"primary"}/>
                            </div>
                        </Button>
                        {
                            show ? <FilterDropDownBtn/> : null
                        }

                    </div>

                </div>
                <EmployeeTable employees={employees}/>



            </div>
        </div>

    );
}

export default EmployeeListPage;
