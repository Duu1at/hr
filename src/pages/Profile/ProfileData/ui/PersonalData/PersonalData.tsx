import cls from './PersonalData.module.scss'
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

interface PersonalDataProps {
    className?: string;
    email?: string,
    phoneNumber?: string,
    status?: string,
    sex?: string,
    date?: string,

}

const PersonalData = ({className, email, phoneNumber, status, sex, date}: PersonalDataProps) => {
    return (
        <div className={classNames(cls.PersonalData, {}, [className])}>
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
                            <Text text={email} color={"blue"}/>
                        </ProfileCard>

                        <ProfileCard
                            leading={Phone}
                            title={"Телефонный номер"}
                        >
                            <Text color={"blue"} text={phoneNumber}/>
                        </ProfileCard>
                    </VStack>

                    <VStack gap={"24"} align={"center"} max={true}>
                        <ProfileCard
                            leading={People}
                            title={"Семейное положение"}
                        >
                            <Text color={"blue"} text={status}/>
                        </ProfileCard>

                        <ProfileCard
                            leading={Women}
                            title={"Пол"}
                        >
                            <Text color={"blue"} text={sex}/>
                        </ProfileCard>
                    </VStack>
                    <VStack gap={"24"} align={"center"} max={true}>
                        <ProfileCard
                            leading={Birthday}
                            title={"Дата рождение"}
                        >
                            <Text color={"blue"} text={date}/>
                        </ProfileCard>

                    </VStack>

                </HStack>
            </BaseContainer>
        </div>
    );
};

export default PersonalData;
