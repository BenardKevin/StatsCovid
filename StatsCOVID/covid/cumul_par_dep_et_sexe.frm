TYPE=VIEW
query=select `covid`.`donnees_par_sexe`.`dep` AS `dep`,`covid`.`departements`.`nom` AS `departement`,`covid`.`donnees_par_sexe`.`jour` AS `jour`,`covid`.`genre`.`genre` AS `genre`,`covid`.`donnees_par_sexe`.`hosp` AS `hosp`,`covid`.`donnees_par_sexe`.`rad` AS `rad`,`covid`.`donnees_par_sexe`.`rea` AS `rea`,`covid`.`donnees_par_sexe`.`dc` AS `dc` from ((`covid`.`donnees_par_sexe` join `covid`.`genre` on((`covid`.`genre`.`sexe` = `covid`.`donnees_par_sexe`.`sexe`))) join `covid`.`departements` on((`covid`.`departements`.`dep` = `covid`.`donnees_par_sexe`.`dep`))) where (`covid`.`donnees_par_sexe`.`sexe` in (2,1))
md5=9940d9cab1265f64bcff89706a0ff36c
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=1
with_check_option=0
timestamp=2020-04-23 10:04:54
create-version=1
source=select `covid`.`donnees_par_sexe`.`dep` AS `dep`,`covid`.`departements`.`nom` AS `departement`,`covid`.`donnees_par_sexe`.`jour` AS `jour`,`covid`.`genre`.`genre` AS `genre`,`covid`.`donnees_par_sexe`.`hosp` AS `hosp`,`covid`.`donnees_par_sexe`.`rad` AS `rad`,`covid`.`donnees_par_sexe`.`rea` AS `rea`,`covid`.`donnees_par_sexe`.`dc` AS `dc` from ((`covid`.`donnees_par_sexe` join `covid`.`genre` on((`covid`.`genre`.`sexe` = `covid`.`donnees_par_sexe`.`sexe`))) join `covid`.`departements` on((`covid`.`departements`.`dep` = `covid`.`donnees_par_sexe`.`dep`))) where (`covid`.`donnees_par_sexe`.`sexe` in (2,1))
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `covid`.`donnees_par_sexe`.`dep` AS `dep`,`covid`.`departements`.`nom` AS `departement`,`covid`.`donnees_par_sexe`.`jour` AS `jour`,`covid`.`genre`.`genre` AS `genre`,`covid`.`donnees_par_sexe`.`hosp` AS `hosp`,`covid`.`donnees_par_sexe`.`rad` AS `rad`,`covid`.`donnees_par_sexe`.`rea` AS `rea`,`covid`.`donnees_par_sexe`.`dc` AS `dc` from ((`covid`.`donnees_par_sexe` join `covid`.`genre` on((`covid`.`genre`.`sexe` = `covid`.`donnees_par_sexe`.`sexe`))) join `covid`.`departements` on((`covid`.`departements`.`dep` = `covid`.`donnees_par_sexe`.`dep`))) where (`covid`.`donnees_par_sexe`.`sexe` in (2,1))
