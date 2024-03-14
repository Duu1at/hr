import cls from './SocialCard.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames.ts";
import BaseContainer from "../BaseContainer/BaseContainer.tsx";
import {Text} from "../../../../shared/ui/Text";


interface SocialCardProps {
    className?: string;
}

const SocialCard = ({className}: SocialCardProps) => {
    return (
        <div className={classNames(cls.SocialCard, {}, [className])}>
            <BaseContainer>
                <Text title={"Социальные сети"}/>
            </BaseContainer>
        </div>
    );
};

export default SocialCard;
