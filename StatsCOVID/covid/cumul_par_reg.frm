TYPE=VIEW
query=select `covid`.`regions`.`reg_id` AS `reg_id`,`covid`.`regions`.`reg_nom` AS `reg_nom`,`covid`.`age_par_region`.`jour` AS `jour`,`covid`.`age_par_region`.`hosp` AS `hosp`,`covid`.`age_par_region`.`rea` AS `rea`,`covid`.`age_par_region`.`rad` AS `rad`,`covid`.`age_par_region`.`dc` AS `dc` from (`covid`.`regions` join `covid`.`age_par_region` on((`covid`.`regions`.`reg` = `covid`.`age_par_region`.`reg`))) where (`covid`.`age_par_region`.`cl_age90` = 0)
md5=f1975dc19801b6fe9cd5ed2a81ad85d6
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2020-04-29 10:04:31
create-version=1
source=SELECT `reg_id`,`reg_nom`,jour,hosp,rea,rad,dc FROM `regions` join age_par_region on regions.reg = age_par_region.reg where cl_age90 = 0
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `covid`.`regions`.`reg_id` AS `reg_id`,`covid`.`regions`.`reg_nom` AS `reg_nom`,`covid`.`age_par_region`.`jour` AS `jour`,`covid`.`age_par_region`.`hosp` AS `hosp`,`covid`.`age_par_region`.`rea` AS `rea`,`covid`.`age_par_region`.`rad` AS `rad`,`covid`.`age_par_region`.`dc` AS `dc` from (`covid`.`regions` join `covid`.`age_par_region` on((`covid`.`regions`.`reg` = `covid`.`age_par_region`.`reg`))) where (`covid`.`age_par_region`.`cl_age90` = 0)
