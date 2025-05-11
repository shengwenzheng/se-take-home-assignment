import { createSelectors,sleep } from "@/utils/createSelector";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TOrder = {
    nonce: number;
    orderList: any[],
    add: (obj: any) => void;
    change: () => void;
    delRobot: () => void;
}
export const useOrder = createSelectors(create<TOrder>()(
    immer((set,get) => ({
        nonce: 0,
        orderList: [],
        add: (obj) => set(state => {
            state.orderList.push({ ...obj, orderNum: state.nonce++, time: Date.now(),status: 0 })
        }),
        change: () => set(state => {
            sleep(10);
            state.orderList = state.orderList.map(item => {
                if (item.status == 0) {
                    item.status = 1;
                }
                return item;
            })
        }),
        delRobot: () => set(state => {
            // 找到最新的机器人（假设机器人是订单中某种特殊状态的标识）
            const latestRobotIndex = state.orderList
                .slice()
                .reverse()
                .findIndex(item => item.isRobot === true);

            if (latestRobotIndex !== -1) {
                // 计算原始索引
                const originalIndex = state.orderList.length - 1 - latestRobotIndex;

                // 恢复订单状态（status = 0）
                if (state.orderList[originalIndex].status === 1) {
                    state.orderList[originalIndex].status = 0;
                }

                // 删除机器人
                state.orderList.splice(originalIndex, 1);
            }
        }),
    }))
))