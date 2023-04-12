# getListDay
 
##Cara pakai:
```const getListDay = require('./getListDay');
let startDate = new Date("2023-04-12"); // example
let endDate = new Date("2023-05-12"); // example
getListDay(startDate, endDate);
```

**ex** = list array berisi nomor hari yang akan di exlude<br />
0 = Minggu, 1 = Senin, ..., 6 = Sabtu<br />
nilai default pada ex adalah [0, 6], alias [Minggu, Sabtu]<br />
nilai pada ex bisa angka 0 sampai 6, dengan jumlah list maksimal bisa berapa saja<br />
**totalShowDay** = total hari yang ditampilkan<br />
**totalExDay** = total haru yang tidak ditampilkan<br />
