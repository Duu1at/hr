import cls from './BaseContainer.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import {ReactNode} from "react";


interface BaseContainerProps {
    className?: string;
    children: ReactNode;
}

const BaseContainer = ({className, children}: BaseContainerProps) => {
    return (
        <div className={classNames(cls.BaseContainer, {}, [className])}>
            {
                children
            }
        </div>
    );
};

export default BaseContainer;
