namespace capm3.db;

entity Users {
    key id : Integer;
    name : String;
    emial: String;
    phone: String;
    project: Association to Projects;
}

entity Projects {
    key id: Integer;
    code: String;
    desc:String;
    user: Association to many Users on user.project = $self;
}

