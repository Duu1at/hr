import React, {memo} from 'react';
import cls from './AppLogo.module.scss';
import {classNames} from "../../lib/classNames/classNames.ts";
import {HStack} from "../Stack/HStack/HStack.tsx";


interface AppLogoProps {
    className?: string;
    width?: number;
    height?: number;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const AppLogo = memo(({className, width, height, Svg}: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >

            <Svg width={width}
                 height={height}
                 className={cls.appLogo}
            />


        </HStack>
    );
});
