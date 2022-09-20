import { SupplierModel } from './supplier.model'
export interface ModelModel {
    id: string | undefined;
    name: string;
    supplier: SupplierModel;
}