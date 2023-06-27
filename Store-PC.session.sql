INSERT INTO products VALUES 
(1,'ONE','start2.png',3400,'2023-06-18 15:30:45','2023-06-18 15:30:45','pc-table'),
(2,'PLUS','high1.png',4600,'2023-06-17 15:30:45','2023-06-17 15:30:45','pc-table'),
(3,'MAX','stol_voda.png',9000,'2023-06-19 15:30:45','2023-06-19 15:30:45','pc-table'),
(4,'TOWER','TOWER_BANANA.png',1400,'2023-06-18 15:30:45','2023-06-14 15:30:45','pc-gaming'),
(5,'DYNAMIC MINI','DYNAMIC-MINI.png',1500,'2023-06-18 15:30:45','2023-06-20 15:30:45','pc-gaming'),
(6,'PRISM COMFORT','PRISM_L.png',1700,'2023-06-18 15:30:45','2023-06-21 15:30:45','pc-gaming');

INSERT INTO components_products VALUES 
(1,'Intel Core i5-13400F','ASUS TUF Gaming B660','ARCTIC Liquid Freezer',
'G.SKILL Trident Z RGB 16gb 3200MHz','GeForce RTX 3070','Phanteks AMP 850W',
'Netac NV5000 1TB','Desck','Windows 11','2023-06-18 15:30:45',
'2023-06-18 15:30:45'),
(2,'Intel Core i7-13700KF','ASUS TUF Gaming Z690','ARCTIC Liquid Freezer',
'G.SKILL Trident Z5 RGB 32gb 6000MHz','GeForce RTX 4070 TI','Phanteks AMP 850W',
'Netac NV5000 1TB','Desck','Windows 11','2023-06-18 15:30:45',
'2023-06-18 15:30:45'),
(3,'Intel Core i9-13900KF','ASUS TUF Gaming Z690','Сustom WCS',
'G.SKILL Trident Z5 RGB 32gb 6600MHz','GeForce RTX 4090','Phanteks AMP 1000W',
'Samsung 990 PRO 1TB','Desck','Windows 11','2023-06-18 15:30:45',
'2023-06-18 15:30:45'),
(4,'Intel Core i5-12400F','GIGABYTE B760I AORUS PRO DDR4','Jonsbo HX6200D Black',
'16GB ADATA XPG D60 RGB [DDR4, 3200mhz, 2x8GB]','RTX 3060 (PALIT)','Cooler Master V750 SFX Gold 750W',
'ADATA XPG SX8200 Pro 1TB','TOWER','Windows 11','2023-06-18 15:30:45',
'2023-06-18 15:30:45'),
(5,'Intel Core i5-12400F','MSI MAG B760M MORTAR WIFI DDR4','DEEPCOOL LS520',
'16GB ADATA XPG D60 RGB [DDR4, 3200mhz, 2x8GB]','RTX 3060 (PALIT)','Cooler Master V750 SFX Gold 750W',
'ADATA XPG SX8200 Pro 1TB','LIAN LI Dynamic Mini','Windows 11','2023-06-18 15:30:45',
'2023-06-18 15:30:45'),
(6,'Intel Core i5-13400F','GIGABYTE B760I AORUS PRO DDR4','DEEPCOOL LS520',
'32GB ADATA XPG D60 RGB [DDR4, 3200mhz, 2x16GB]','MSI GeForce RTX 3060 Ti VENTUS 3X OC','Cooler Master V750 SFX Gold 750W',
'ADATA XPG SX8200 Pro 1TB','PHANTEKS Evolv Shift XT','Windows 11','2023-06-18 15:30:45',
'2023-06-18 15:30:45');

DELETE FROM user_favorite_products




TRUNCATE TABLE components_products
DELETE FROM products

ALTER TABLE products
ADD category VARCHAR(50)

UPDATE products
SET photo = 'PRISM_L.png'
where id = 5

UPDATE products
SET "createdAt" = '2023-06-22 15:30:45'
where id = 5
