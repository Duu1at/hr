import {RouteProps} from 'react-router-dom';
import {EmployeeListPage} from "../../../pages/EmployeeListPage";
import {PesonalPage} from "../../../pages/PesonalPage";
import {AuthPage} from "../../../pages/AuthPage";
import {LoginPage} from "../../../pages/LoginPage";
import {EditProfile, ProfileData} from "../../../pages/Profile";


export enum AppRoutes {
    EMPLOYEE_LIST_PAGE = 'employee_list',
    PERSONAL = 'personal',
    AUTH = 'auth',
    LOGIN = 'login',
    PROFILE = 'profile',
    EDIT_PROFILE='edit_profile'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.EMPLOYEE_LIST_PAGE]: '/',
    [AppRoutes.PERSONAL]: '/personal',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.EDIT_PROFILE]:'/edit_profile'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.EMPLOYEE_LIST_PAGE]: {
        path: RoutePath.employee_list,
        element: <EmployeeListPage/>
    },
    [AppRoutes.PERSONAL]: {
        path: RoutePath.personal,
        element: <PesonalPage/>
    },
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: < AuthPage/>
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfileData/>
    },
    [AppRoutes.EDIT_PROFILE]: {
        path: RoutePath.edit_profile,
        element: <EditProfile/>
    },
}
