import type {User} from "@/types";

export interface UserCartProps {
    item?: User;
}
export interface UserWrapperProps {
    items?: User[];
    loading?: boolean;
}
