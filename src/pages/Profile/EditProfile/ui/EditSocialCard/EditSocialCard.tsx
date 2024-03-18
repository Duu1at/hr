import cls from './EditSocialCard.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../../../ui/BaseContainer/BaseContainer.tsx";
import {Text} from "../../../../../shared/ui/Text";
import {VStack} from "../../../../../shared/ui/Stack/VStack/VStack.tsx";
import ProfileCard from "../../../ui/ProfileCard/ProfileCard.tsx";
import Facebook from "../../../../../shared/assets/icon/facebook.svg?react"
import Telegram from "../../../../../shared/assets/icon/telegram.svg?react"
import WhatsApp from "../../../../../shared/assets/icon/whathApp.svg?react"
import {Input} from "../../../../../shared/ui/Input";


interface EditSocialCardProps {
    className?: string;


}

const EditSocialCard = ({className}: EditSocialCardProps) => {
    return (
        <div className={classNames(cls.EditSocialCard, {}, [className])}>
            <BaseContainer>
                <Text className={cls.social_card}
                      title={"Социальные сети"}
                      size={"l"}/>
                <VStack
                    gap={"24"}
                    align={"center"}
                    justify={"start"}
                >
                    <ProfileCard
                        leading={Facebook}
                        title={"facebook"}
                    >
                        <Input
                            size={"s"}
                            placeholder={"Вставьте ссылку"}
                        />
                    </ProfileCard>

                    <ProfileCard
                        leading={WhatsApp}
                        title={"whats’app"}
                    >
                        <Input
                            size={"s"}
                            placeholder={"Введите номер"}
                        />
                    </ProfileCard>

                    <ProfileCard
                        leading={Telegram}
                        title={"telegram"}
                    >

                        <Input
                            size={"s"}
                            placeholder={"Введите номер / username"}
                        />

                    </ProfileCard>
                </VStack>
            </BaseContainer>
        </div>
    );
};

export default EditSocialCard;
