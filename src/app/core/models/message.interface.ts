export interface Message {
    id: string | number;
    type_message: string | number,
    user_name: string;
    email: string;
    message: string;
    date: Date | string;
    hour: string;
}