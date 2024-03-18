import cls from './SocialCard.module.scss'
import {classNames} from "../../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../../../ui/BaseContainer/BaseContainer.tsx";
import {Text} from "../../../../../shared/ui/Text";
import {VStack} from "../../../../../shared/ui/Stack/VStack/VStack.tsx";
import ProfileCard from "../../../ui/ProfileCard/ProfileCard.tsx";
import Facebook from "../../../../../shared/assets/icon/facebook.svg?react"
import Telegram from "../../../../../shared/assets/icon/telegram.svg?react"
import WhatsApp from "../../../../../shared/assets/icon/whathApp.svg?react"


interface SocialCardProps {
    className?: string;
    facebook?: string;
    whatsApp?: string
    telegram?: string

}

const SocialCard = ({className, facebook, whatsApp, telegram}: SocialCardProps) => {
    return (
        <div className={classNames(cls.SocialCard, {}, [className])}>
            <BaseContainer>
                <Text className={cls.social_card}
                      title={"Социальные сети"}
                      size={"l"}/>
                <VStack gap={"24"} align={"center"} justify={"start"}>
                    <ProfileCard
                        leading={Facebook}
                        title={"facebook"}
                    >
                        <Text
                            color={"blue"}
                            text={facebook}
                        />
                    </ProfileCard>

                    <ProfileCard
                        leading={WhatsApp}
                        title={"whats’app"}
                    >
                        <Text
                            text={whatsApp}
                            color={"blue"}
                        />
                    </ProfileCard>

                    <ProfileCard
                        leading={Telegram}
                        title={"telegram"}
                    >
                        <Text
                            text={telegram}
                            color={"blue"}
                        />
                    </ProfileCard>
                </VStack>
            </BaseContainer>
        </div>
    );
};

export default SocialCard;
