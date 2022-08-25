using { northwind  } from './external/northwind.csn';

service MyService {
    @readonly
    entity Products as projection on northwind.Products{
        ProductID,
        ProductName,
        UnitPrice
    };

}