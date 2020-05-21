TYPE=VIEW
query=select `cumul_par_dep_et_sexe`.`dep` AS `dep`,`cumul_par_dep_et_sexe`.`departement` AS `departement`,`cumul_par_dep_et_sexe`.`jour` AS `jour`,`cumul_par_dep_et_sexe`.`genre` AS `genre`,`cumul_par_dep_et_sexe`.`hosp` AS `hosp`,`cumul_par_dep_et_sexe`.`rad` AS `rad`,`cumul_par_dep_et_sexe`.`rea` AS `rea`,`cumul_par_dep_et_sexe`.`dc` AS `dc` from `covid`.`cumul_par_dep_et_sexe` where (`cumul_par_dep_et_sexe`.`jour` = (select max(`cumul_par_dep_et_sexe`.`jour`) from `covid`.`cumul_par_dep_et_sexe`))
md5=b51a3bda6b35d3bf80c62626009159e0
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2020-04-21 12:00:44
create-version=1
source=SELECT* FROM `cumul_par_dep_et_sexe` WHERE `jour` = (select max(jour) from `cumul_par_dep_et_sexe` )
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `cumul_par_dep_et_sexe`.`dep` AS `dep`,`cumul_par_dep_et_sexe`.`departement` AS `departement`,`cumul_par_dep_et_sexe`.`jour` AS `jour`,`cumul_par_dep_et_sexe`.`genre` AS `genre`,`cumul_par_dep_et_sexe`.`hosp` AS `hosp`,`cumul_par_dep_et_sexe`.`rad` AS `rad`,`cumul_par_dep_et_sexe`.`rea` AS `rea`,`cumul_par_dep_et_sexe`.`dc` AS `dc` from `covid`.`cumul_par_dep_et_sexe` where (`cumul_par_dep_et_sexe`.`jour` = (select max(`cumul_par_dep_et_sexe`.`jour`) from `covid`.`cumul_par_dep_et_sexe`))
