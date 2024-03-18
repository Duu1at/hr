import cls from './Address.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../../../ui/BaseContainer/BaseContainer.tsx";
import ProfileCard from "../../../ui/ProfileCard/ProfileCard.tsx";
import {Text} from "../../../../../shared/ui/Text";
import Direct from "../../../../../shared/assets/icon/direct-up.svg?react"
import Buildings from "../../../../../shared/assets/icon/buildings.svg?react"
import {HStack} from "../../../../../shared/ui/Stack/HStack/HStack.tsx";


interface AddressProps {
    className?: string;
    address?: string;
    city?: string
}

const Address = ({className, address, city}: AddressProps) => {
    return (
        <BaseContainer className={classNames('', {}, [className])}>
            <Text title={"Адрес"} size={"l"} className={cls.address}/>
            <HStack align={"center"} justify={"between"}>
                <ProfileCard
                    className={cls.address_size}
                    leading={Direct}
                    title={"Улица и дом"}
                >

                    <Text
                        text={address}
                        color={"blue"}
                    />
                </ProfileCard>

                <ProfileCard
                    className={cls.address_size}
                    leading={Buildings}
                    title={"Город"}
                >
                    <Text
                        text={city}
                        color={"blue"}
                    />
                </ProfileCard>
            </HStack>
        </BaseContainer>

    );
};

export default Address;
