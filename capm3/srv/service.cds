using { capm3.db } from '../db/datamodel';

service myOrg {

    entity Users as select from db.Users;
    entity Projects as select from db.Projects;

}