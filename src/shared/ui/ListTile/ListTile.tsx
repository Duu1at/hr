import cls from './ListTile.module.scss'
import {classNames} from "../../lib/classNames/classNames.ts";
import React from "react";
import {Icon} from "../Icon";
import {HStack} from "../Stack/HStack/HStack.tsx";
import {FlexGap} from "../Stack/Flex";


interface ListTileProps {
    className?: string;
    title?: string;
    leading?: React.VFC<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    width?: number;
    height?: number;
    gap?: FlexGap;
}

const ListTile = (props: ListTileProps) => {
    const {
        className,
        leading,
        title,
        width,
        height,
        onClick,
        gap = "12"
    } = props

    return (
        <div onClick={onClick}>
            <HStack align={"center"}
                    justify={"start"}
                    gap={gap}
                    className={classNames(cls.ListTile, {}, [className])}
            >
                {leading &&
                    <Icon
                        width={width}
                        height={height}
                        Svg={leading}
                    />
                }
                <p>{title}</p>
            </HStack>
        </div>
    );
};

export default ListTile;
