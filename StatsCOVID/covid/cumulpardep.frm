TYPE=VIEW
query=select `covid`.`donnees_par_sexe`.`dep` AS `dep`,`covid`.`donnees_par_sexe`.`jour` AS `jour`,`covid`.`donnees_par_sexe`.`hosp` AS `hosp`,`covid`.`donnees_par_sexe`.`rad` AS `rad`,`covid`.`donnees_par_sexe`.`rea` AS `rea`,`covid`.`donnees_par_sexe`.`dc` AS `dc` from `covid`.`donnees_par_sexe` where (`covid`.`donnees_par_sexe`.`sexe` = 0)
md5=caa95e5c0a149919f37c00db899e0fad
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=1
with_check_option=0
timestamp=2020-04-23 10:05:22
create-version=1
source=select `covid`.`donnees_par_sexe`.`dep` AS `dep`,`covid`.`donnees_par_sexe`.`jour` AS `jour`,`covid`.`donnees_par_sexe`.`hosp` AS `hosp`,`covid`.`donnees_par_sexe`.`rad` AS `rad`,`covid`.`donnees_par_sexe`.`rea` AS `rea`,`covid`.`donnees_par_sexe`.`dc` AS `dc` from `covid`.`donnees_par_sexe` where (`covid`.`donnees_par_sexe`.`sexe` = 0)
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `covid`.`donnees_par_sexe`.`dep` AS `dep`,`covid`.`donnees_par_sexe`.`jour` AS `jour`,`covid`.`donnees_par_sexe`.`hosp` AS `hosp`,`covid`.`donnees_par_sexe`.`rad` AS `rad`,`covid`.`donnees_par_sexe`.`rea` AS `rea`,`covid`.`donnees_par_sexe`.`dc` AS `dc` from `covid`.`donnees_par_sexe` where (`covid`.`donnees_par_sexe`.`sexe` = 0)
