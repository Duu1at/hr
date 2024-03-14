import cls from './FilterDropDownBtn.module.scss'
import RadioBtn from "../../../../shared/ui/RadioBtn/RadioBtn.tsx";
import {Button, ButtonTheme} from "../../../../shared/ui/Button";
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";


interface FillterDropDownBtnProps{
    className?:string;
}
const FilterDropDownBtn = ({className}:FillterDropDownBtnProps ) => {
    return (
        <div className={classNames(cls.FilterDropDownBtn,{},[className])}>
            <div className={cls.filterDropDownBtn}>
                <div className={cls.filterDropDownBtn_item}>
                    <RadioBtn label={"По фамилии"}/>
                    <RadioBtn label={"По имени"}/>
                </div>
                <div>
                    <RadioBtn label={"От А до Я"}/>
                    <RadioBtn label={"От Я до А"}/>
                </div>
            </div>

            <Button className={cls.btn} theme={ButtonTheme.TEXT_BTN}>Применить</Button>
        </div>
    );
};

export default FilterDropDownBtn;
