TYPE=VIEW
query=select `cumul_par_dep_et_sexe`.`jour` AS `jour`,sum(`cumul_par_dep_et_sexe`.`dc`) AS `dc` from `covid`.`cumul_par_dep_et_sexe` group by `cumul_par_dep_et_sexe`.`jour`
md5=b5e6058948e6bce035fabd9c310cc956
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=1
with_check_option=0
timestamp=2020-04-23 10:19:10
create-version=1
source=select `jour` AS `jour`,sum(`dc`) AS `dc` from `cumul_par_dep_et_sexe` group by `jour`
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `cumul_par_dep_et_sexe`.`jour` AS `jour`,sum(`cumul_par_dep_et_sexe`.`dc`) AS `dc` from `covid`.`cumul_par_dep_et_sexe` group by `cumul_par_dep_et_sexe`.`jour`
