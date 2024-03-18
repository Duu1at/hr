import cls from './Address.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../../../ui/BaseContainer/BaseContainer.tsx";
import ProfileCard from "../../../ui/ProfileCard/ProfileCard.tsx";
import {Text} from "../../../../../shared/ui/Text";
import Direct from "../../../../../shared/assets/icon/direct-up.svg?react"
import Buildings from "../../../../../shared/assets/icon/buildings.svg?react"
import {HStack} from "../../../../../shared/ui/Stack/HStack/HStack.tsx";
import {Input} from "../../../../../shared/ui/Input";
import {Select} from "../../../../../shared/ui/Select";
import {city} from "../../../../../app/data/data.ts";


interface AddressProps {
    className?: string;

}

const Address = ({className}: AddressProps) => {
    return (
        <BaseContainer className={classNames('', {}, [className])}>
            <Text title={"Адрес"} size={"l"} className={cls.address}/>
            <HStack align={"center"} justify={"between"}>
                <ProfileCard
                    className={cls.address_size}
                    leading={Direct}
                    title={"Улица и дом"}
                >

                    <Input
                        size={"s"}
                        placeholder={"Введите адрес"}
                    />
                </ProfileCard>

                <ProfileCard
                    className={cls.sity_size}
                    leading={Buildings}
                    title={"Город"}
                >
                    <Select
                        options={city}
                        label={city[0].value}
                    />
                </ProfileCard>
            </HStack>
        </BaseContainer>

    );
};

export default Address;
