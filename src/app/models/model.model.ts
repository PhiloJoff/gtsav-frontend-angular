import { SupplierModel } from './supplier.model'
export interface ModelModel {
    id: string;
    name: string;
    supplier: SupplierModel;
}