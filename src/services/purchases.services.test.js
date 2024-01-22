import { getCustomers, getPurchases } from "./purchases.services";

test('the data is list of customers', async () => {
  const data = await getCustomers();
  expect(data).toStrictEqual([
    {
      "id": 1,
      "name": "Chris Taylor"
    },
    {
      "id": 2,
      "name": "Callie Ruth"
    },
    {
      "id": 3,
      "name": "Mellan Rokus"
    },
    {
      "id": 4,
      "name": "Iria Sabina"
    },
    {
      "id": 5,
      "name": "Ave David"
    },
    {
      "id": 6,
      "name": "Carol Allen"
    },
    {
      "id": 7,
      "name": "Albert Cooper"
    },
    {
      "id": 8,
      "name": "Darnell Edwards"
    },
    {
      "id": 9,
      "name": "Denise Weber"
    },
    {
      "id": 10,
      "name": "Lana Banks"
    },
    {
      "id": 11,
      "name": "Woodrow Carlson"
    },
    {
      "id": 12,
      "name": "Howard Scott"
    },
    {
      "id": 13,
      "name": "Bobby Wilson"
    },
    {
      "id": 14,
      "name": "Michelle Nelson"
    },
    {
      "id": 15,
      "name": "Julia Martin"
    },
    {
      "id": 16,
      "name": "Richard Robinson"
    },
    {
      "id": 17,
      "name": "Diana James"
    },
    {
      "id": 18,
      "name": "Adam Anderson"
    },
    {
      "id": 19,
      "name": "Janice Brown"
    },
    {
      "id": 20,
      "name": "Irene Walker"
    }
  ]);
});

test('the data is list of purchases', async () => {
  const data = await getPurchases();
  expect(data).toStrictEqual([
    {
      "poNumber": 1,
      "poDate": "2023-01-18",
      "custId": 1,
      "custName": "Chris Taylor",
      "poAmount": 230
    },
    {
      "poNumber": 2,
      "poDate": "2023-01-21",
      "custId": 20,
      "custName": "Irene Walker",
      "poAmount": 150
    },
    {
      "poNumber": 3,
      "poDate": "2023-02-15",
      "custId": 5,
      "custName": "Ave David",
      "poAmount": 226
    },
    {
      "poNumber": 4,
      "poDate": "2023-02-19",
      "custId": 16,
      "custName": "Richard Robinson",
      "poAmount": 177
    },
    {
      "poNumber": 5,
      "poDate": "2023-03-01",
      "custId": 9,
      "custName": "Denise Weber",
      "poAmount": 79
    },
    {
      "poNumber": 6,
      "poDate": "2023-03-14",
      "custId": 5,
      "custName": "Ave David",
      "poAmount": 45
    },
    {
      "poNumber": 7,
      "poDate": "2023-03-20",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 36
    },
    {
      "poNumber": 8,
      "poDate": "2023-04-02",
      "custId": 3,
      "custName": "Mellan Rokus",
      "poAmount": 235
    },
    {
      "poNumber": 9,
      "poDate": "2023-04-04",
      "custId": 18,
      "custName": "Adam Anderson",
      "poAmount": 650
    },
    {
      "poNumber": 10,
      "poDate": "2023-04-24",
      "custId": 17,
      "custName": "Diana James",
      "poAmount": 110
    },
    {
      "poNumber": 11,
      "poDate": "2023-05-06",
      "custId": 18,
      "custName": "Adam Anderson",
      "poAmount": 70
    },
    {
      "poNumber": 12,
      "poDate": "2023-05-07",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 450
    },
    {
      "poNumber": 13,
      "poDate": "2023-05-08",
      "custId": 17,
      "custName": "Diana James",
      "poAmount": 265
    },
    {
      "poNumber": 14,
      "poDate": "2023-05-11",
      "custId": 9,
      "custName": "Denise Weber",
      "poAmount": 240
    },
    {
      "poNumber": 15,
      "poDate": "2023-05-15",
      "custId": 17,
      "custName": "Diana James",
      "poAmount": 123
    },
    {
      "poNumber": 16,
      "poDate": "2023-05-17",
      "custId": 3,
      "custName": "Mellan Rokus",
      "poAmount": 67
    },
    {
      "poNumber": 17,
      "poDate": "2023-06-02",
      "custId": 5,
      "custName": "Ave David",
      "poAmount": 56
    },
    {
      "poNumber": 18,
      "poDate": "2023-06-07",
      "custId": 16,
      "custName": "Richard Robinson",
      "poAmount": 99
    },
    {
      "poNumber": 19,
      "poDate": "2023-06-08",
      "custId": 17,
      "custName": "Diana James",
      "poAmount": 347
    },
    {
      "poNumber": 20,
      "poDate": "2023-06-13",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 200
    },
    {
      "poNumber": 21,
      "poDate": "2023-06-15",
      "custId": 17,
      "custName": "Diana James",
      "poAmount": 198
    },
    {
      "poNumber": 22,
      "poDate": "2023-06-16",
      "custId": 6,
      "custName": "Carol Allen",
      "poAmount": 134
    },
    {
      "poNumber": 23,
      "poDate": "2023-06-18",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 83
    },
    {
      "poNumber": 24,
      "poDate": "2023-06-21",
      "custId": 6,
      "custName": "Carol Allen",
      "poAmount": 69
    },
    {
      "poNumber": 25,
      "poDate": "2023-06-27",
      "custId": 9,
      "custName": "Denise Weber",
      "poAmount": 199
    },
    {
      "poNumber": 26,
      "poDate": "2023-07-01",
      "custId": 15,
      "custName": "Julia Martin",
      "poAmount": 150
    },
    {
      "poNumber": 27,
      "poDate": "2023-07-02",
      "custId": 6,
      "custName": "Carol Allen",
      "poAmount": 230
    },
    {
      "poNumber": 28,
      "poDate": "2023-07-03",
      "custId": 19,
      "custName": "Janice Brown",
      "poAmount": 639
    },
    {
      "poNumber": 29,
      "poDate": "2023-07-07",
      "custId": 6,
      "custName": "Carol Allen",
      "poAmount": 234
    },
    {
      "poNumber": 30,
      "poDate": "2023-07-08",
      "custId": 11,
      "custName": "Woodrow Carlson",
      "poAmount": 120
    },
    {
      "poNumber": 31,
      "poDate": "2023-07-09",
      "custId": 6,
      "custName": "Carol Allen",
      "poAmount": 119
    },
    {
      "poNumber": 32,
      "poDate": "2023-07-12",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 78
    },
    {
      "poNumber": 33,
      "poDate": "2023-07-13",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 444
    },
    {
      "poNumber": 34,
      "poDate": "2023-07-16",
      "custId": 11,
      "custName": "Woodrow Carlson",
      "poAmount": 389
    },
    {
      "poNumber": 35,
      "poDate": "2023-07-18",
      "custId": 5,
      "custName": "Ave David",
      "poAmount": 245
    },
    {
      "poNumber": 36,
      "poDate": "2023-07-20",
      "custId": 2,
      "custName": "Callie Ruth",
      "poAmount": 550
    },
    {
      "poNumber": 37,
      "poDate": "2023-07-24",
      "custId": 12,
      "custName": "Howard Scott",
      "poAmount": 432
    },
    {
      "poNumber": 38,
      "poDate": "2023-08-03",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 234
    },
    {
      "poNumber": 39,
      "poDate": "2023-08-04",
      "custId": 12,
      "custName": "Howard Scott",
      "poAmount": 423
    },
    {
      "poNumber": 40,
      "poDate": "2023-08-05",
      "custId": 12,
      "custName": "Howard Scott",
      "poAmount": 321
    },
    {
      "poNumber": 41,
      "poDate": "2023-08-08",
      "custId": 6,
      "custName": "Carol Allen",
      "poAmount": 623
    },
    {
      "poNumber": 42,
      "poDate": "2023-08-09",
      "custId": 7,
      "custName": "Albert Cooper",
      "poAmount": 255
    },
    {
      "poNumber": 43,
      "poDate": "2023-08-11",
      "custId": 12,
      "custName": "Howard Scott",
      "poAmount": 288
    },
    {
      "poNumber": 44,
      "poDate": "2023-08-12",
      "custId": 10,
      "custName": "Lana Banks",
      "poAmount": 167
    },
    {
      "poNumber": 45,
      "poDate": "2023-08-14",
      "custId": 15,
      "custName": "Julia Martin",
      "poAmount": 128
    },
    {
      "poNumber": 46,
      "poDate": "2023-08-16",
      "custId": 11,
      "custName": "Woodrow Carlson",
      "poAmount": 230
    },
    {
      "poNumber": 47,
      "poDate": "2023-08-19",
      "custId": 13,
      "custName": "Bobby Wilson",
      "poAmount": 137
    },
    {
      "poNumber": 48,
      "poDate": "2023-08-20",
      "custId": 12,
      "custName": "Howard Scott",
      "poAmount": 299
    },
    {
      "poNumber": 49,
      "poDate": "2023-08-26",
      "custId": 5,
      "custName": "Ave David",
      "poAmount": 332
    },
    {
      "poNumber": 50,
      "poDate": "2023-09-10",
      "custId": 11,
      "custName": "Woodrow Carlson",
      "poAmount": 127
    },
    {
      "poNumber": 51,
      "poDate": "2023-09-11",
      "custId": 15,
      "custName": "Julia Martin",
      "poAmount": 100
    },
    {
      "poNumber": 52,
      "poDate": "2023-09-13",
      "custId": 10,
      "custName": "Lana Banks",
      "poAmount": 156
    },
    {
      "poNumber": 53,
      "poDate": "2023-09-14",
      "custId": 11,
      "custName": "Woodrow Carlson",
      "poAmount": 277
    },
    {
      "poNumber": 54,
      "poDate": "2023-09-15",
      "custId": 4,
      "custName": "Iria Sabina",
      "poAmount": 421
    },
    {
      "poNumber": 55,
      "poDate": "2023-09-18",
      "custId": 11,
      "custName": "Woodrow Carlson",
      "poAmount": 111
    },
    {
      "poNumber": 56,
      "poDate": "2023-09-19",
      "custId": 13,
      "custName": "Bobby Wilson",
      "poAmount": 104
    },
    {
      "poNumber": 57,
      "poDate": "2023-09-22",
      "custId": 12,
      "custName": "Howard Scott",
      "poAmount": 550
    },
    {
      "poNumber": 58,
      "poDate": "2023-09-24",
      "custId": 4,
      "custName": "Iria Sabina",
      "poAmount": 134
    },
    {
      "poNumber": 59,
      "poDate": "2023-09-28",
      "custId": 10,
      "custName": "Lana Banks",
      "poAmount": 321
    },
    {
      "poNumber": 60,
      "poDate": "2023-10-04",
      "custId": 19,
      "custName": "Janice Brown",
      "poAmount": 166
    },
    {
      "poNumber": 61,
      "poDate": "2023-10-05",
      "custId": 13,
      "custName": "Bobby Wilson",
      "poAmount": 110
    },
    {
      "poNumber": 62,
      "poDate": "2023-10-07",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 254
    },
    {
      "poNumber": 63,
      "poDate": "2023-10-11",
      "custId": 4,
      "custName": "Iria Sabina",
      "poAmount": 290
    },
    {
      "poNumber": 64,
      "poDate": "2023-10-13",
      "custId": 19,
      "custName": "Janice Brown",
      "poAmount": 230
    },
    {
      "poNumber": 65,
      "poDate": "2023-10-14",
      "custId": 10,
      "custName": "Lana Banks",
      "poAmount": 114
    },
    {
      "poNumber": 66,
      "poDate": "2023-10-19",
      "custId": 13,
      "custName": "Bobby Wilson",
      "poAmount": 229
    },
    {
      "poNumber": 67,
      "poDate": "2023-10-21",
      "custId": 2,
      "custName": "Callie Ruth",
      "poAmount": 291
    },
    {
      "poNumber": 68,
      "poDate": "2023-10-25",
      "custId": 4,
      "custName": "Iria Sabina",
      "poAmount": 330
    },
    {
      "poNumber": 69,
      "poDate": "2023-10-29",
      "custId": 19,
      "custName": "Janice Brown",
      "poAmount": 177
    },
    {
      "poNumber": 70,
      "poDate": "2023-11-05",
      "custId": 10,
      "custName": "Lana Banks",
      "poAmount": 150
    },
    {
      "poNumber": 71,
      "poDate": "2023-11-07",
      "custId": 19,
      "custName": "Janice Brown",
      "poAmount": 212
    },
    {
      "poNumber": 72,
      "poDate": "2023-11-09",
      "custId": 13,
      "custName": "Bobby Wilson",
      "poAmount": 52
    },
    {
      "poNumber": 73,
      "poDate": "2023-11-12",
      "custId": 4,
      "custName": "Iria Sabina",
      "poAmount": 18
    },
    {
      "poNumber": 74,
      "poDate": "2023-11-15",
      "custId": 18,
      "custName": "Adam Anderson",
      "poAmount": 9
    },
    {
      "poNumber": 75,
      "poDate": "2023-11-16",
      "custId": 18,
      "custName": "Adam Anderson",
      "poAmount": 267
    },
    {
      "poNumber": 76,
      "poDate": "2023-11-25",
      "custId": 7,
      "custName": "Albert Cooper",
      "poAmount": 139
    },
    {
      "poNumber": 77,
      "poDate": "2023-11-26",
      "custId": 16,
      "custName": "Richard Robinson",
      "poAmount": 168
    },
    {
      "poNumber": 78,
      "poDate": "2023-11-27",
      "custId": 9,
      "custName": "Denise Weber",
      "poAmount": 150
    },
    {
      "poNumber": 79,
      "poDate": "2023-11-30",
      "custId": 2,
      "custName": "Callie Ruth",
      "poAmount": 540
    },
    {
      "poNumber": 80,
      "poDate": "2023-12-03",
      "custId": 18,
      "custName": "Adam Anderson",
      "poAmount": 300
    },
    {
      "poNumber": 81,
      "poDate": "2023-12-09",
      "custId": 7,
      "custName": "Albert Cooper",
      "poAmount": 237
    },
    {
      "poNumber": 82,
      "poDate": "2023-12-10",
      "custId": 20,
      "custName": "Irene Walker",
      "poAmount": 179
    },
    {
      "poNumber": 83,
      "poDate": "2023-12-15",
      "custId": 3,
      "custName": "Mellan Rokus",
      "poAmount": 23
    },
    {
      "poNumber": 84,
      "poDate": "2023-12-17",
      "custId": 15,
      "custName": "Julia Martin",
      "poAmount": 653
    },
    {
      "poNumber": 85,
      "poDate": "2023-12-18",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 132
    },
    {
      "poNumber": 86,
      "poDate": "2023-12-19",
      "custId": 1,
      "custName": "Chris Taylor",
      "poAmount": 11
    },
    {
      "poNumber": 87,
      "poDate": "2023-12-20",
      "custId": 20,
      "custName": "Irene Walker",
      "poAmount": 78
    },
    {
      "poNumber": 88,
      "poDate": "2023-12-28",
      "custId": 16,
      "custName": "Richard Robinson",
      "poAmount": 96
    },
    {
      "poNumber": 89,
      "poDate": "2023-12-29",
      "custId": 3,
      "custName": "Mellan Rokus",
      "poAmount": 107
    },
    {
      "poNumber": 90,
      "poDate": "2024-01-02",
      "custId": 3,
      "custName": "Mellan Rokus",
      "poAmount": 450
    },
    {
      "poNumber": 91,
      "poDate": "2024-01-05",
      "custId": 8,
      "custName": "Darnell Edwards",
      "poAmount": 188
    },
    {
      "poNumber": 92,
      "poDate": "2024-01-08",
      "custId": 15,
      "custName": "Julia Martin",
      "poAmount": 555
    },
    {
      "poNumber": 93,
      "poDate": "2024-01-09",
      "custId": 20,
      "custName": "Irene Walker",
      "poAmount": 145
    },
    {
      "poNumber": 94,
      "poDate": "2024-01-10",
      "custId": 1,
      "custName": "Chris Taylor",
      "poAmount": 222
    },
    {
      "poNumber": 95,
      "poDate": "2024-01-11",
      "custId": 9,
      "custName": "Denise Weber",
      "poAmount": 163
    },
    {
      "poNumber": 96,
      "poDate": "2024-01-12",
      "custId": 2,
      "custName": "Callie Ruth",
      "poAmount": 236
    },
    {
      "poNumber": 97,
      "poDate": "2024-01-15",
      "custId": 2,
      "custName": "Callie Ruth",
      "poAmount": 333
    },
    {
      "poNumber": 98,
      "poDate": "2024-01-16",
      "custId": 16,
      "custName": "Richard Robinson",
      "poAmount": 523
    },
    {
      "poNumber": 99,
      "poDate": "2024-01-17",
      "custId": 20,
      "custName": "Irene Walker",
      "poAmount": 111
    },
    {
      "poNumber": 100,
      "poDate": "2024-01-18",
      "custId": 1,
      "custName": "Chris Taylor",
      "poAmount": 102
    }
  ]);
});

