import { UserInfos } from './userInfos.entity';

export const usersInfoProviders = [{
    provide: 'USERINFO_REPOSITORY',
    useValue: UserInfos,
}];