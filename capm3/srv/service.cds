using { capm3.db } from '../db/datamodel';

service myOrg {

    entity Users as select from db.Users;
    entity Projects as select from db.Projects;

    function getDate() returns String;
    function getUserByProject(id:Integer) returns array of Users ;

    type customData {
        code: Integer;
        updated:Boolean;
        message:String;
    }

    action updateUserProject (userId:Integer, projectId:Integer) returns  customData;

}