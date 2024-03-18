import cls from './ProfileHeader.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import {HStack} from "../../../../../shared/ui/Stack/HStack/HStack.tsx";
import {Icon} from "../../../../../shared/ui/Icon";
import ArrowBack from "../../../../../shared/assets/icon/arrow-left.svg?react"
import Menu from "../../../../../shared/assets/icon/menu.svg?react"
import Edit from "../../../../../shared/assets/icon/edit.svg?react"
import Delete from "../../../../../shared/assets/icon/delete.svg?react"

import {Text} from "../../../../../shared/ui/Text";
import {useState} from "react";
import {Button, ButtonTheme} from "../../../../../shared/ui/Button";
import ListTile from "../../../../../shared/ui/ListTile/ListTile.tsx";
import {VStack} from "../../../../../shared/ui/Stack/VStack/VStack.tsx";
import {useNavigate} from "react-router-dom";
import {AppLink} from "../../../../../shared/ui/AppLink";


interface ProfileHeaderProps {
    className?: string;
}

const ProfileHeader = ({className}: ProfileHeaderProps) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <div className={classNames(cls.ProfileHeader, {}, [className])}>
            <AppLink to={"/"}>
                <Icon
                    Svg={ArrowBack}
                    width={24}
                    height={24}

                />
            </AppLink>

            <HStack
                justify={"between"}
                align={"center"}
            >
                <Text
                    align={"right"}
                    bold={true}
                    size={"xl"}
                    title={"Информация о сотруднике"}
                />
                <Icon
                    Svg={Menu}
                    width={16}
                    height={16}
                    clickable={true}
                    onClick={() => {
                        setShow(() => !show)
                    }}
                />
            </HStack>

            {show ? <div className={cls.profile_header__dropdown}>
                <VStack>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={cls.header_btn}
                        onClick={() => {
                            setShow(false)
                            navigate('/edit_profile')
                        }}
                    >
                        <ListTile
                            title={"Редактировать"}
                            leading={Edit}
                            width={14}
                            height={14}
                        />
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={cls.header_btn}
                    >
                        <ListTile
                            title={"Удалить аккаунт"}
                            leading={Delete}
                            width={14}
                            height={14}
                        />
                    </Button>
                </VStack>

            </div> : null}
        </div>
    );
};

export default ProfileHeader;
