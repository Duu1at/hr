import {RouteProps} from 'react-router-dom';
import {EmployeeListPage} from "../../../pages/EmployeeListPage";
import {PesonalPage} from "../../../pages/PesonalPage";
import {AuthPage} from "../../../pages/AuthPage";
import {LoginPage} from "../../../pages/LoginPage";
import {Profile} from "../../../pages/Profile";


export enum AppRoutes {
    EMPLOYEE_LIST_PAGE = 'employee_list',
    PERSONAL = 'personal',
    AUTH = 'auth',
    LOGIN = 'login',
    PROFILE = 'profile',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.EMPLOYEE_LIST_PAGE]: '/profile',
    [AppRoutes.PERSONAL]: '/personal',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.PROFILE]: '/',
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
        element: <Profile/>
    },
}
