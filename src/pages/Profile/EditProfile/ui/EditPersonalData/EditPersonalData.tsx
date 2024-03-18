import cls from './EditPersonalData.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../../../ui/BaseContainer/BaseContainer.tsx";
import {Text} from "../../../../../shared/ui/Text";
import {HStack} from "../../../../../shared/ui/Stack/HStack/HStack.tsx";
import ProfileCard from "../../../ui/ProfileCard/ProfileCard.tsx";
import EmailAddress from "../../../../../shared/assets/icon/sms-edit.svg?react"
import Phone from "../../../../../shared/assets/icon/call.svg?react"
import People from "../../../../../shared/assets/icon/people.svg?react"
import Women from "../../../../../shared/assets/icon/woman.svg?react"
import Birthday from "../../../../../shared/assets/icon/calendar.svg?react"

import {VStack} from "../../../../../shared/ui/Stack/VStack/VStack.tsx";
import {Input} from "../../../../../shared/ui/Input";
import {Select} from "../../../../../shared/ui/Select";

interface EditPersonalDataProps {
    className?: string;
    email?: string,
    phoneNumber?: string,
    status?: string,
    sex?: string,
    date?: string,

}

const EditPersonalData = ({className}: EditPersonalDataProps) => {

    const dataStatus = [
        {
            value: "Замужем",
            content: "Замужем"
        },
        {
            value: "Не замужем",
            content: "Не замужем"
        }
    ]

    return (
        <div className={classNames(cls.EditPersonalData, {}, [className])}>
            <BaseContainer>
                <Text
                    className={cls.personal_data}
                    title={"Личная информация"}
                    size={"l"}
                />
                <HStack
                    gap={"32"}
                    align={"start"}
                    justify={"between"}
                >
                    <VStack
                        gap={"24"}
                        align={"center"}
                        max={true}
                    >
                        <ProfileCard
                            leading={EmailAddress}
                            title={"Эл. адрес"}
                        >
                            <Input
                                size={"s"}
                                placeholder={"Введите эл. адрес"}
                            />
                        </ProfileCard>

                        <ProfileCard
                            leading={Phone}
                            title={"Телефонный номер"}
                        >
                            <Input
                                size={"s"}
                                placeholder={"Введите номер"}
                            />
                        </ProfileCard>
                    </VStack>

                    <VStack gap={"24"} align={"center"} max={true}>
                        <ProfileCard
                            leading={People}
                            title={"Семейное положение"}
                        >
                            <Select
                                label={dataStatus[0].value}
                                options={dataStatus}
                            />
                        </ProfileCard>

                        <ProfileCard
                            leading={Women}
                            title={"Пол"}
                        >
                            <Select
                                label={dataStatus[0].value}
                                options={dataStatus}
                            />
                        </ProfileCard>
                    </VStack>
                    <VStack gap={"24"} align={"center"} max={true}>
                        <ProfileCard
                            leading={Birthday}
                            title={"Дата рождение"}
                        >
                            <Select/>
                        </ProfileCard>

                    </VStack>

                </HStack>
            </BaseContainer>
        </div>
    );
};

export default EditPersonalData;
