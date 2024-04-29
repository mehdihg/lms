import { Notification } from "@/types/notification.interface"
import { generateId } from "@/utils/string";
import { create } from "zustand";
import { devtools } from "zustand/middleware";


export type NotificationState = {
    notification:Notification[];
    showNotification:(notification:Omit<Notification,'id'>)=>void;
    dissmissNotification:(id:string)=> void
}

export const useNotificationStore = create<NotificationState>() (devtools(
    (set,get)=>({
        notification:[],
        showNotification:(notification)=>{
            const id =generateId()
            set(state=>({
                notification:[...state.notification,{id:id,...notification}]
            }))
            setTimeout(()=>{
                get().dissmissNotification(id)
            },5000)
        },
        dissmissNotification:(id)=>{
            set(state=>({
                notification:state.notification.filter(notif=>notif.id !== id)
            }))
        }
    })
))
export const showNotificationStore=(notification:Omit<Notification,'id'>[] )=>{
 notification.forEach((p)=>{
    useNotificationStore.getState().showNotification(p)
 })
}