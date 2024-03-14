import cls from './ListTile.module.scss'
import {classNames} from "../../lib/classNames/classNames.ts";
import React from "react";
import {Icon} from "../Icon";


interface ListTileProps {
    className?: string;
    title?: string;
    leading?: React.VFC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    width?: number;
    height?: number;
}

const ListTile = (props: ListTileProps) => {
    const {
        className,
        leading,
        title,
        width,
        height,
        onClick
    } = props
    return (
        <div onClick={onClick} className={classNames(cls.ListTile, {}, [className])}>
            {leading &&
                <Icon
                    width={width}
                    height={height}
                    Svg={leading}
                    className={cls.icon}/>}
            <p>{title}</p>
        </div>
    );
};

export default ListTile;
