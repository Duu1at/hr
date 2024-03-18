import cls from './EditProfileHeader.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import {HStack} from "../../../../../shared/ui/Stack/HStack/HStack.tsx";
import {Icon} from "../../../../../shared/ui/Icon";
import ArrowBack from "../../../../../shared/assets/icon/arrow-left.svg?react"
import Save from "../../../../../shared/assets/icon/save.svg?react"
import Cancel from "../../../../../shared/assets/icon/cancel.svg?react"
import {Text} from "../../../../../shared/ui/Text";
import {Button, ButtonTheme} from "../../../../../shared/ui/Button";
import {AppLink} from "../../../../../shared/ui/AppLink";


interface EditProfileHeaderProps {
    className?: string;
}

const EditProfileHeader = ({className}: EditProfileHeaderProps) => {


    return (
        <div className={classNames(cls.EditProfileHeader, {}, [className])}>
            <AppLink to={"/profile"}>
                <Icon
                    Svg={ArrowBack}
                    width={24}
                    height={24}
                />
            </AppLink>

            <HStack
                justify={"between"}
                align={"center"}
                max={true}
            >
                <Text
                    align={"right"}
                    bold={true}
                    size={"xl"}
                    title={"Информация о сотруднике"}
                />

                <HStack
                    className={cls.btns}
                    justify={"between"}
                    align={"center"}
                >
                    <Button
                        theme={ButtonTheme.FILLED}
                        className={cls.btn_save}
                    >
                        <HStack
                            gap={"4"}
                            align={"center"}
                        >
                            <Icon
                                Svg={Save}
                                width={16}
                                height={16}
                            />
                            Сохранить изменения
                        </HStack>

                    </Button>
                    <Button
                        theme={ButtonTheme.SECONDARY}
                        className={cls.btn_cancel}>
                        <HStack
                            gap={"4"}
                            align={"center"}
                        >
                            <Icon
                                Svg={Cancel}
                                width={16}
                                height={16}
                            />
                            Закрыть
                        </HStack>
                    </Button>
                </HStack>
            </HStack>

        </div>
    );
};

export default EditProfileHeader;
