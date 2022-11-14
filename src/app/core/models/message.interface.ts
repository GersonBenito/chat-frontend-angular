export interface Message {
    id: string | number;
    user_name: string;
    email: string;
    message: string;
    date: Date | string;
    hour: string;
}