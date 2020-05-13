SET today=%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2%
powershell -Command "Invoke-WebRequest https://www.data.gouv.fr/fr/datasets/r/63352e38-d353-4b54-bfd1-f1b3ee1cabd7 -OutFile C:\Users\Kevin\Music\StatsCOVID\csv\donnees_par_sexe-%today%.csv"
C:\wamp\bin\mysql\mysql5.6.17\bin\mysql -u root -e "USE covid; DELETE FROM donnees_par_sexe; LOAD DATA INFILE 'C:\\Users\\Kevin\\Music\\StatsCOVID\\csv\\donnees_par_sexe-%today%.csv' REPLACE INTO TABLE donnees_par_sexe FIELDS TERMINATED BY ';' ENCLOSED BY '\"' IGNORE 1 LINES ;"

powershell -Command "Invoke-WebRequest https://www.data.gouv.fr/fr/datasets/r/08c18e08-6780-452d-9b8c-ae244ad529b3 -OutFile C:\Users\Kevin\Music\StatsCOVID\csv\age_par_region-%today%.csv"
C:\wamp\bin\mysql\mysql5.6.17\bin\mysql -u root -e "USE covid; DELETE FROM age_par_region; LOAD DATA INFILE 'C:\\Users\\Kevin\\Music\\StatsCOVID\\csv\\age_par_region-%today%.csv' REPLACE INTO TABLE age_par_region FIELDS TERMINATED BY ';' ENCLOSED BY '\"' IGNORE 1 LINES;"

