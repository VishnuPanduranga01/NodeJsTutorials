namespace capm5_Annotations.db;

using {cuid} from '@sap/cds/common';

context master {
    entity Employee {
        key ID        : Integer;
            firstName : String;
            lastName  : String;
            project   : Association to  Projects;
    }

    entity Projects @(title:'Projects_Vis',description:'desc') {
        key ID          : Integer;
            projectCode : String;
            description : String;
            employees : Association to many Employee on employees.project = $self;
    }
}
