import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LoanInterface {
  id?: string;
  amount: number;
  interest_rate: number;
  duration: number;
  start_date: any;
  end_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  vehicle?: VehicleInterface[];
  user?: UserInterface;
  _count?: {
    vehicle?: number;
  };
}

export interface LoanGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
