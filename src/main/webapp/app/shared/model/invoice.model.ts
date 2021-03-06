import { Moment } from 'moment';
import { IProductOrder } from 'app/shared/model/product-order.model';
import { IShipment } from 'app/shared/model/shipment.model';
import { InvoiceStatus } from 'app/shared/model/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/shared/model/enumerations/payment-method.model';

export interface IInvoice {
  id?: number;
  code?: string;
  date?: Moment;
  details?: string;
  status?: InvoiceStatus;
  paymentMethod?: PaymentMethod;
  paymentDate?: Moment;
  paymentAmount?: number;
  invoiceId?: IProductOrder;
  shipments?: IShipment[];
}

export class Invoice implements IInvoice {
  constructor(
    public id?: number,
    public code?: string,
    public date?: Moment,
    public details?: string,
    public status?: InvoiceStatus,
    public paymentMethod?: PaymentMethod,
    public paymentDate?: Moment,
    public paymentAmount?: number,
    public invoiceId?: IProductOrder,
    public shipments?: IShipment[]
  ) {}
}
