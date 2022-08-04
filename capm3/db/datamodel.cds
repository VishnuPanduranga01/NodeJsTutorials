namespace capm3.db;

entity Users @(title: 'New Users',
description: 'description'){
    @title:'{i18n>id}'
    key id : Integer;
    @title:'{i18n>name}'
    name : String;
    @title:'{i18n>email}'
    emial: String;
    @title:'Phone Number'
    phone: String;
    @title:'Project ID'
    project: Association to Projects;
}

entity Projects {
    key id: Integer;
    code: String;
    desc:String;
    user: Association to many Users on user.project = $self;
}



