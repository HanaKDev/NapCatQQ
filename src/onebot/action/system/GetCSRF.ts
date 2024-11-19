import { OneBotAction } from '@/onebot/action/OneBotAction';
import { ActionName } from '../types';

export class GetCSRF extends OneBotAction<any, any> {
    actionName = ActionName.GetCSRF;

    async _handle(payload: any) {
        const sKey = await this.core.apis.UserApi.getSKey();
        if (!sKey) {
            throw new Error('SKey is undefined');
        }
        return {
            token: +this.core.apis.WebApi.getBknFromSKey(sKey),
        };
    }
}
