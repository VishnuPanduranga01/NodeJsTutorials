using {capm3.db} from '../db/employeeData';

service employee {

    entity Employees as select from db.Employees

}