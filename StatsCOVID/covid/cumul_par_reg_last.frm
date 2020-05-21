TYPE=VIEW
query=select `cumul_par_reg`.`reg_id` AS `reg_id`,`cumul_par_reg`.`reg_nom` AS `reg_nom`,`cumul_par_reg`.`jour` AS `jour`,`cumul_par_reg`.`hosp` AS `hosp`,`cumul_par_reg`.`rea` AS `rea`,`cumul_par_reg`.`rad` AS `rad`,`cumul_par_reg`.`dc` AS `dc` from `covid`.`cumul_par_reg` where (`cumul_par_reg`.`jour` = (select max(`cumul_par_reg`.`jour`) from `covid`.`cumul_par_reg`))
md5=56daec28f4ecbb58ef377aa89c7165eb
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2020-04-29 10:13:18
create-version=1
source=select * from `covid`.`cumul_par_reg` where (`cumul_par_reg`.`jour` = (select max(`cumul_par_reg`.`jour`) from `covid`.`cumul_par_reg`))
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `cumul_par_reg`.`reg_id` AS `reg_id`,`cumul_par_reg`.`reg_nom` AS `reg_nom`,`cumul_par_reg`.`jour` AS `jour`,`cumul_par_reg`.`hosp` AS `hosp`,`cumul_par_reg`.`rea` AS `rea`,`cumul_par_reg`.`rad` AS `rad`,`cumul_par_reg`.`dc` AS `dc` from `covid`.`cumul_par_reg` where (`cumul_par_reg`.`jour` = (select max(`cumul_par_reg`.`jour`) from `covid`.`cumul_par_reg`))
