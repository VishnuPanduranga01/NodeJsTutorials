namespace capm3.db;


type Gender : String(10) enum {
    male;
    female;
}

entity Employees {
    key id       : UUID;
        name     : String(200);
        email    : String(100);
        gender   : Gender;
        password : String;

}
