# getListDay
 
##Cara pakai:
```const getListDay = require('./getListDay');
let startDate = new Date("2023-04-12"); // example
let endDate = new Date("2023-05-12"); // example
getListDay(startDate, endDate);
```

**ex** = list array berisi nomor hari yang akan di exlude
0 = Minggu, 1 = Senin, ..., 6 = Sabtu
nilai default pada ex adalah [0, 6], alias [Minggu, Sabtu]
nilai pada ex bisa angka 0 sampai 6, dengan jumlah list maksimal bisa berapa saja
**totalShowDay** = total hari yang ditampilkan
**totalExDay** = total haru yang tidak ditampilkan
