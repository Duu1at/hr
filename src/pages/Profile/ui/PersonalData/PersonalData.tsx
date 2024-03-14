import cls from './PersonalData.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../BaseContainer/BaseContainer.tsx";


interface PersonalDataProps {
    className?: string;
}

const PersonalData = ({className}: PersonalDataProps) => {
    return (
        <div className={classNames(cls.PersonalData, {}, [className])}>
            <BaseContainer>
                <div> duulat</div>
            </BaseContainer>
        </div>
    );
};

export default PersonalData;
