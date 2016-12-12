import { Injectable } from '@angular/core';
import { Api } from '../providers/api'
import { Storage } from '../providers/storage'
import { Observable } from 'rxjs/Observable';
import { GlobalVariables } from '../providers/global-variables'
import { BasketService } from './basket-service'

/**
 * Storage is generic handler offline data.
 */
@Injectable()
export class OrderService {

    constructor(public api: Api, public storage: Storage, public globalService: GlobalVariables, public basketService: BasketService) {

    }

    getOrderList() {
        let currentUserId = this.globalService.getCurrentUserId();
        let apiCall = this.api.get("Order?UserId=" + currentUserId).map(res => res.json());
        return apiCall;
    };

    getOrderDetailById(orderId) {
        let apiCall = this.api.get("Order?orderId=" + orderId).map(res => res.json());
        return apiCall;
    };

    updateOrder(order) {
        let apiCall = this.api.post("Order", order).map(res => res.json());
        return apiCall;
    };
}