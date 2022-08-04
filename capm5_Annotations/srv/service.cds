using {  capm5_Annotations.db } from '../db/dataModel';

service Org {

   entity Employee as projection on db.master.Employee;
   entity Projects as projection on db.master.Projects;
}
