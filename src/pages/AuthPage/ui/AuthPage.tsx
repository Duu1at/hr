
import cls from './AuthPage.module.scss'
import {classNames} from "../../../shared/lib/classNames/classNames.ts";


interface AuthPageProps{
    className?:string;
}
const AuthPage = ({className}:AuthPageProps ) => {
    return (
        <div className={classNames(cls.AuthPage,{},[className])}>
            this os auth
        </div>
    );
};

export default AuthPage;
