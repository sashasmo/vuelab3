import type {Product} from "@/types";

export interface ProductCartProps {
    item?: Product;
}
export interface ProductWrapperProps {
    items?: Product[];
    loading?: boolean;
}
