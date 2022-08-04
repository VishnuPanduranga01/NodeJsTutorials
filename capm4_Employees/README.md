cds build/all = building all
cds add hana = adding HANA 
cf create-service hana hdi-shared vis-db-hdi-container  = creating hana service
cf push -f gen/db = deploying
cf push -f gen/srv
cf api https://api.cf.us10.hana.ondemand.com = changing BTP end point
cf login = loging in
