import cls from './PositionsDropDown.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import {Input} from "../../../../shared/ui/Input";
import Search from "../../../../shared/assets/icon/search-icon.svg?react"
import Task from "../../../../shared/assets/icon/task.svg?react"

import {Icon} from "../../../../shared/ui/Icon";
import RadioBtn from "../../../../shared/ui/RadioBtn/RadioBtn.tsx";
import {Button, ButtonTheme} from "../../../../shared/ui/Button";


interface PositionsDropDownProps {
    className?: string;
}

const PositionsDropDown = ({className}: PositionsDropDownProps) => {
    const positions = ["HR мененджер", "Инженер программист", "Проект менеджер", "Тестировщик", "Финансист аналитик", "Кредитный эксперт", "Операционист"]
    return (
        <div className={classNames(cls.PositionsDropDown, {}, [className])}>
            <div className={cls.positionsDropDown_content}>
                <div className={cls.positionsDropDown_content__filter}>
                    <Input size={"s"} className={cls.input} placeholder={"Поиск"} icon={Search}/>
                    <Icon Svg={Task} width={24} height={24}/>
                </div>

                {positions.map((item) => {
                    return <RadioBtn key={item} className={cls.positionsDropDown_content__result} label={item}/>
                })}

            </div>
            <div className={cls.positionsDropDown_btns}>
                <Button className={cls.positionsDropDown_btns__btn} theme={ButtonTheme.TEXT_BTN}>Отмена</Button>
                <Button className={cls.positionsDropDown_btns__btn} theme={ButtonTheme.TEXT_BTN}>Применить</Button>
            </div>
        </div>
    );
};

export default PositionsDropDown;
