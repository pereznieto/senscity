const rawCities = [
  {
    name: 'Tokyo',
    latitude: 35.685,
    longitude: 139.7514
  },
  {
    name: 'New York',
    latitude: 40.6943,
    longitude: -73.9249
  },
  {
    name: 'Mexico City',
    latitude: 19.4424,
    longitude: -99.131
  },
  {
    name: 'Mumbai',
    latitude: 19.017,
    longitude: 72.857
  },
  {
    name: 'São Paulo',
    latitude: -23.5587,
    longitude: -46.625
  },
  {
    name: 'Delhi',
    latitude: 28.67,
    longitude: 77.23
  },
  {
    name: 'Shanghai',
    latitude: 31.2165,
    longitude: 121.4365
  },
  {
    name: 'Kolkata',
    latitude: 22.495,
    longitude: 88.3247
  },
  {
    name: 'Los Angeles',
    latitude: 34.1139,
    longitude: -118.4068
  },
  {
    name: 'Dhaka',
    latitude: 23.7231,
    longitude: 90.4086
  },
  {
    name: 'Buenos Aires',
    latitude: -34.6025,
    longitude: -58.3975
  },
  {
    name: 'Karachi',
    latitude: 24.87,
    longitude: 66.99
  },
  {
    name: 'Cairo',
    latitude: 30.05,
    longitude: 31.25
  },
  {
    name: 'Rio de Janeiro',
    latitude: -22.925,
    longitude: -43.225
  },
  {
    name: 'Ōsaka',
    latitude: 34.75,
    longitude: 135.4601
  },
  {
    name: 'Beijing',
    latitude: 39.9289,
    longitude: 116.3883
  },
  {
    name: 'Manila',
    latitude: 14.6042,
    longitude: 120.9822
  },
  {
    name: 'Moscow',
    latitude: 55.7522,
    longitude: 37.6155
  },
  {
    name: 'Istanbul',
    latitude: 41.105,
    longitude: 29.01
  },
  {
    name: 'Paris',
    latitude: 48.8667,
    longitude: 2.3333
  },
  {
    name: 'Seoul',
    latitude: 37.5663,
    longitude: 126.9997
  },
  {
    name: 'Lagos',
    latitude: 6.4433,
    longitude: 3.3915
  },
  {
    name: 'Jakarta',
    latitude: -6.1744,
    longitude: 106.8294
  },
  {
    name: 'Guangzhou',
    latitude: 23.145,
    longitude: 113.325
  },
  {
    name: 'Chicago',
    latitude: 41.8373,
    longitude: -87.6861
  },
  {
    name: 'London',
    latitude: 51.5,
    longitude: -0.1167
  },
  {
    name: 'Lima',
    latitude: -12.048,
    longitude: -77.0501
  },
  {
    name: 'Tehran',
    latitude: 35.6719,
    longitude: 51.4243
  },
  {
    name: 'Kinshasa',
    latitude: -4.3297,
    longitude: 15.315
  },
  {
    name: 'Bogota',
    latitude: 4.5964,
    longitude: -74.0833
  },
  {
    name: 'Shenzhen',
    latitude: 22.5524,
    longitude: 114.1221
  },
  {
    name: 'Wuhan',
    latitude: 30.58,
    longitude: 114.27
  },
  {
    name: 'Hong Kong',
    latitude: 22.305,
    longitude: 114.185
  },
  {
    name: 'Tianjin',
    latitude: 39.13,
    longitude: 117.2
  },
  {
    name: 'Chennai',
    latitude: 13.09,
    longitude: 80.28
  },
  {
    name: 'Taipei',
    latitude: 25.0358,
    longitude: 121.5683
  },
  {
    name: 'Bangalore',
    latitude: 12.97,
    longitude: 77.56
  },
  {
    name: 'Bangkok',
    latitude: 13.75,
    longitude: 100.5166
  },
  {
    name: 'Lahore',
    latitude: 31.56,
    longitude: 74.35
  },
  {
    name: 'Chongqing',
    latitude: 29.565,
    longitude: 106.595
  },
  {
    name: 'Miami',
    latitude: 25.784,
    longitude: -80.2102
  },
  {
    name: 'Hyderabad',
    latitude: 17.4,
    longitude: 78.48
  },
  {
    name: 'Dallas',
    latitude: 32.7937,
    longitude: -96.7662
  },
  {
    name: 'Santiago',
    latitude: -33.45,
    longitude: -70.667
  },
  {
    name: 'Philadelphia',
    latitude: 40.0076,
    longitude: -75.134
  },
  {
    name: 'Belo Horizonte',
    latitude: -19.915,
    longitude: -43.915
  },
  {
    name: 'Madrid',
    latitude: 40.4,
    longitude: -3.6834
  },
  {
    name: 'Houston',
    latitude: 29.7868,
    longitude: -95.3905
  },
  {
    name: 'Ahmedabad',
    latitude: 23.0301,
    longitude: 72.58
  },
  {
    name: 'Ho Chi Minh City',
    latitude: 10.78,
    longitude: 106.695
  },
  {
    name: 'Washington',
    latitude: 38.9047,
    longitude: -77.0163
  },
  {
    name: 'Atlanta',
    latitude: 33.7626,
    longitude: -84.4228
  },
  {
    name: 'Toronto',
    latitude: 43.7,
    longitude: -79.42
  },
  {
    name: 'Singapore',
    latitude: 1.293,
    longitude: 103.8558
  },
  {
    name: 'Luanda',
    latitude: -8.8383,
    longitude: 13.2344
  },
  {
    name: 'Baghdad',
    latitude: 33.3386,
    longitude: 44.3939
  },
  {
    name: 'Barcelona',
    latitude: 41.3833,
    longitude: 2.1834
  },
  {
    name: 'Haora',
    latitude: 22.5804,
    longitude: 88.3299
  },
  {
    name: 'Shenyeng',
    latitude: 41.805,
    longitude: 123.45
  },
  {
    name: 'Khartoum',
    latitude: 15.5881,
    longitude: 32.5342
  },
  {
    name: 'Pune',
    latitude: 18.53,
    longitude: 73.85
  },
  {
    name: 'Boston',
    latitude: 42.3188,
    longitude: -71.0846
  },
  {
    name: 'Sydney',
    latitude: -33.92,
    longitude: 151.1852
  },
  {
    name: 'St. Petersburg',
    latitude: 59.939,
    longitude: 30.316
  },
  {
    name: 'Chittagong',
    latitude: 22.33,
    longitude: 91.8
  },
  {
    name: 'Dongguan',
    latitude: 23.0489,
    longitude: 113.7447
  },
  {
    name: 'Riyadh',
    latitude: 24.6408,
    longitude: 46.7727
  },
  {
    name: 'Hanoi',
    latitude: 21.0333,
    longitude: 105.85
  },
  {
    name: 'Guadalajara',
    latitude: 20.67,
    longitude: -103.33
  },
  {
    name: 'Melbourne',
    latitude: -37.82,
    longitude: 144.975
  },
  {
    name: 'Alexandria',
    latitude: 31.2,
    longitude: 29.95
  },
  {
    name: 'Chengdu',
    latitude: 30.67,
    longitude: 104.07
  },
  {
    name: 'Rangoon',
    latitude: 16.7834,
    longitude: 96.1667
  },
  {
    name: 'Phoenix',
    latitude: 33.5722,
    longitude: -112.0891
  },
  {
    name: 'Xian',
    latitude: 34.275,
    longitude: 108.895
  },
  {
    name: 'Porto Alegre',
    latitude: -30.05,
    longitude: -51.2
  },
  {
    name: 'Surat',
    latitude: 21.2,
    longitude: 72.84
  },
  {
    name: 'Hechi',
    latitude: 23.0965,
    longitude: 109.6091
  },
  {
    name: 'Abidjan',
    latitude: 5.32,
    longitude: -4.04
  },
  {
    name: 'Brasília',
    latitude: -15.7833,
    longitude: -47.9161
  },
  {
    name: 'Ankara',
    latitude: 39.9272,
    longitude: 32.8644
  },
  {
    name: 'Monterrey',
    latitude: 25.67,
    longitude: -100.33
  },
  {
    name: 'Yokohama',
    latitude: 35.32,
    longitude: 139.58
  },
  {
    name: 'Nanjing',
    latitude: 32.05,
    longitude: 118.78
  },
  {
    name: 'Montréal',
    latitude: 45.5,
    longitude: -73.5833
  },
  {
    name: 'Guiyang',
    latitude: 26.58,
    longitude: 106.72
  },
  {
    name: 'Recife',
    latitude: -8.0756,
    longitude: -34.9156
  },
  {
    name: 'Seattle',
    latitude: 47.6211,
    longitude: -122.3244
  },
  {
    name: 'Harbin',
    latitude: 45.75,
    longitude: 126.65
  },
  {
    name: 'San Francisco',
    latitude: 37.7562,
    longitude: -122.443
  },
  {
    name: 'Fortaleza',
    latitude: -3.75,
    longitude: -38.58
  },
  {
    name: 'Zhangzhou',
    latitude: 24.5204,
    longitude: 117.67
  },
  {
    name: 'Detroit',
    latitude: 42.3834,
    longitude: -83.1024
  },
  {
    name: 'Salvador',
    latitude: -12.97,
    longitude: -38.48
  },
  {
    name: 'Busan',
    latitude: 35.0951,
    longitude: 129.01
  },
  {
    name: 'Johannesburg',
    latitude: -26.17,
    longitude: 28.03
  },
  {
    name: 'Berlin',
    latitude: 52.5218,
    longitude: 13.4015
  },
  {
    name: 'Algiers',
    latitude: 36.7631,
    longitude: 3.0506
  },
  {
    name: 'Rome',
    latitude: 41.896,
    longitude: 12.4833
  },
  {
    name: 'Pyongyang',
    latitude: 39.0194,
    longitude: 125.7547
  },
  {
    name: 'Medellín',
    latitude: 6.275,
    longitude: -75.575
  },
  {
    name: 'Kabul',
    latitude: 34.5167,
    longitude: 69.1833
  },
  {
    name: 'Athens',
    latitude: 37.9833,
    longitude: 23.7333
  },
  {
    name: 'Nagoya',
    latitude: 35.155,
    longitude: 136.915
  },
  {
    name: 'Cape Town',
    latitude: -33.92,
    longitude: 18.435
  },
  {
    name: 'San Diego',
    latitude: 32.8312,
    longitude: -117.1226
  },
  {
    name: 'Changchun',
    latitude: 43.865,
    longitude: 125.34
  },
  {
    name: 'Casablanca',
    latitude: 33.6,
    longitude: -7.6164
  },
  {
    name: 'Dalian',
    latitude: 38.9228,
    longitude: 121.6298
  },
  {
    name: 'Kanpur',
    latitude: 26.46,
    longitude: 80.32
  },
  {
    name: 'Kano',
    latitude: 12,
    longitude: 8.52
  },
  {
    name: 'Tel Aviv-Yafo',
    latitude: 32.08,
    longitude: 34.77
  },
  {
    name: 'Addis Ababa',
    latitude: 9.0333,
    longitude: 38.7
  },
  {
    name: 'Curitiba',
    latitude: -25.42,
    longitude: -49.32
  },
  {
    name: 'Zibo',
    latitude: 36.8,
    longitude: 118.05
  },
  {
    name: 'Jeddah',
    latitude: 21.5169,
    longitude: 39.2192
  },
  {
    name: 'Nairobi',
    latitude: -1.2833,
    longitude: 36.8167
  },
  {
    name: 'Hangzhou',
    latitude: 30.25,
    longitude: 120.17
  },
  {
    name: 'Benoni',
    latitude: -26.1496,
    longitude: 28.3299
  },
  {
    name: 'Caracas',
    latitude: 10.501,
    longitude: -66.917
  },
  {
    name: 'Milan',
    latitude: 45.47,
    longitude: 9.205
  },
  {
    name: 'Stuttgart',
    latitude: 48.78,
    longitude: 9.2
  },
  {
    name: 'Kunming',
    latitude: 25.07,
    longitude: 102.68
  },
  {
    name: 'Dar es Salaam',
    latitude: -6.8,
    longitude: 39.2683
  },
  {
    name: 'Minneapolis',
    latitude: 44.9635,
    longitude: -93.2678
  },
  {
    name: 'Jaipur',
    latitude: 26.9211,
    longitude: 75.81
  },
  {
    name: 'Taiyuan',
    latitude: 37.875,
    longitude: 112.5451
  },
  {
    name: 'Frankfurt',
    latitude: 50.1,
    longitude: 8.675
  },
  {
    name: 'Qingdao',
    latitude: 36.09,
    longitude: 120.33
  },
  {
    name: 'Surabaya',
    latitude: -7.2492,
    longitude: 112.7508
  },
  {
    name: 'Lisbon',
    latitude: 38.7227,
    longitude: -9.1449
  },
  {
    name: 'Tampa',
    latitude: 27.9937,
    longitude: -82.4454
  },
  {
    name: 'Jinan',
    latitude: 36.675,
    longitude: 116.995
  },
  {
    name: 'Fukuoka',
    latitude: 33.595,
    longitude: 130.41
  },
  {
    name: 'Campinas',
    latitude: -22.9,
    longitude: -47.1
  },
  {
    name: 'Denver',
    latitude: 39.7621,
    longitude: -104.8759
  },
  {
    name: 'Kaohsiung',
    latitude: 22.6333,
    longitude: 120.2666
  },
  {
    name: 'Quezon City',
    latitude: 14.6504,
    longitude: 121.03
  },
  {
    name: 'Katowice',
    latitude: 50.2604,
    longitude: 19.02
  },
  {
    name: 'Aleppo',
    latitude: 36.23,
    longitude: 37.17
  },
  {
    name: 'Durban',
    latitude: -29.865,
    longitude: 30.98
  },
  {
    name: 'Kiev',
    latitude: 50.4334,
    longitude: 30.5166
  },
  {
    name: 'Lucknow',
    latitude: 26.855,
    longitude: 80.915
  },
  {
    name: 'El Giza',
    latitude: 30.01,
    longitude: 31.19
  },
  {
    name: 'Zhengzhou',
    latitude: 34.755,
    longitude: 113.6651
  },
  {
    name: 'Taichung',
    latitude: 24.1521,
    longitude: 120.6817
  },
  {
    name: 'Brooklyn',
    latitude: 40.6501,
    longitude: -73.9496
  },
  {
    name: 'Ibadan',
    latitude: 7.38,
    longitude: 3.93
  },
  {
    name: 'Faisalabad',
    latitude: 31.41,
    longitude: 73.11
  },
  {
    name: 'Fuzhou',
    latitude: 26.08,
    longitude: 119.3
  },
  {
    name: 'Dakar',
    latitude: 14.7158,
    longitude: -17.4731
  },
  {
    name: 'Changsha',
    latitude: 28.2,
    longitude: 112.97
  },
  {
    name: 'İzmir',
    latitude: 38.4361,
    longitude: 27.1518
  },
  {
    name: 'Xiangtan',
    latitude: 27.8504,
    longitude: 112.9
  },
  {
    name: 'Lanzhou',
    latitude: 36.056,
    longitude: 103.792
  },
  {
    name: 'Incheon',
    latitude: 37.4761,
    longitude: 126.6422
  },
  {
    name: 'Sapporo',
    latitude: 43.075,
    longitude: 141.34
  },
  {
    name: 'Xiamen',
    latitude: 24.45,
    longitude: 118.08
  },
  {
    name: 'Guayaquil',
    latitude: -2.22,
    longitude: -79.92
  },
  {
    name: 'George Town',
    latitude: 5.4136,
    longitude: 100.3294
  },
  {
    name: 'Mashhad',
    latitude: 36.27,
    longitude: 59.57
  },
  {
    name: 'Damascus',
    latitude: 33.5,
    longitude: 36.3
  },
  {
    name: 'Daegu',
    latitude: 35.8668,
    longitude: 128.607
  },
  {
    name: 'Nagpur',
    latitude: 21.17,
    longitude: 79.09
  },
  {
    name: 'Jinxi',
    latitude: 40.7503,
    longitude: 120.83
  },
  {
    name: 'Shijianzhuang',
    latitude: 38.05,
    longitude: 114.48
  },
  {
    name: 'Tunis',
    latitude: 36.8028,
    longitude: 10.1797
  },
  {
    name: 'Vienna',
    latitude: 48.2,
    longitude: 16.3666
  },
  {
    name: 'Jilin',
    latitude: 43.85,
    longitude: 126.55
  },
  {
    name: 'Omdurman',
    latitude: 15.6167,
    longitude: 32.48
  },
  {
    name: 'Bandung',
    latitude: -6.95,
    longitude: 107.57
  },
  {
    name: 'Bekasi',
    latitude: -6.2173,
    longitude: 106.9723
  },
  {
    name: 'Mannheim',
    latitude: 49.5004,
    longitude: 8.47
  },
  {
    name: 'Nanchang',
    latitude: 28.68,
    longitude: 115.88
  },
  {
    name: 'Wenzhou',
    latitude: 28.02,
    longitude: 120.6501
  },
  {
    name: 'Queens',
    latitude: 40.7498,
    longitude: -73.7976
  },
  {
    name: 'Vancouver',
    latitude: 49.2734,
    longitude: -123.1216
  },
  {
    name: 'Birmingham',
    latitude: 52.475,
    longitude: -1.92
  },
  {
    name: 'Cali',
    latitude: 3.4,
    longitude: -76.5
  },
  {
    name: 'Naples',
    latitude: 40.84,
    longitude: 14.245
  },
  {
    name: 'Sendai',
    latitude: 38.2871,
    longitude: 141.0217
  },
  {
    name: 'Manchester',
    latitude: 53.5004,
    longitude: -2.248
  },
  {
    name: 'Puebla',
    latitude: 19.05,
    longitude: -98.2
  },
  {
    name: 'Tripoli',
    latitude: 32.8925,
    longitude: 13.18
  },
  {
    name: 'Tashkent',
    latitude: 41.3117,
    longitude: 69.2949
  },
  {
    name: 'Nanchong',
    latitude: 30.7804,
    longitude: 106.13
  },
  {
    name: 'Havana',
    latitude: 23.132,
    longitude: -82.3642
  },
  {
    name: 'Baltimore',
    latitude: 39.3051,
    longitude: -76.6144
  },
  {
    name: 'Belém',
    latitude: -1.45,
    longitude: -48.48
  },
  {
    name: 'Nanning',
    latitude: 22.82,
    longitude: 108.32
  },
  {
    name: 'Patna',
    latitude: 25.625,
    longitude: 85.13
  },
  {
    name: 'Santo Domingo',
    latitude: 18.4701,
    longitude: -69.9001
  },
  {
    name: 'Ürümqi',
    latitude: 43.805,
    longitude: 87.575
  },
  {
    name: 'Zaozhuang',
    latitude: 34.88,
    longitude: 117.57
  },
  {
    name: 'Baku',
    latitude: 40.3953,
    longitude: 49.8622
  },
  {
    name: 'Accra',
    latitude: 5.55,
    longitude: -0.2167
  },
  {
    name: 'Yantai',
    latitude: 37.5304,
    longitude: 121.4
  },
  {
    name: 'Medan',
    latitude: 3.58,
    longitude: 98.65
  },
  {
    name: 'Santa Cruz',
    latitude: -17.7539,
    longitude: -63.226
  },
  {
    name: 'Xuzhou',
    latitude: 34.28,
    longitude: 117.18
  },
  {
    name: 'Riverside',
    latitude: 33.9381,
    longitude: -117.3948
  },
  {
    name: 'Linyi',
    latitude: 35.08,
    longitude: 118.33
  },
  {
    name: 'Saint Louis',
    latitude: 38.6358,
    longitude: -90.2451
  },
  {
    name: 'Las Vegas',
    latitude: 36.2291,
    longitude: -115.2607
  },
  {
    name: 'Maracaibo',
    latitude: 10.73,
    longitude: -71.66
  },
  {
    name: 'Kuwait',
    latitude: 29.3697,
    longitude: 47.9783
  },
  {
    name: 'Ad Damman',
    latitude: 26.4282,
    longitude: 50.0997
  },
  {
    name: 'Portland',
    latitude: 45.5372,
    longitude: -122.65
  },
  {
    name: 'Haikou',
    latitude: 20.05,
    longitude: 110.32
  },
  {
    name: 'Hiroshima',
    latitude: 34.3878,
    longitude: 132.4429
  },
  {
    name: 'Baotou',
    latitude: 40.6522,
    longitude: 109.822
  },
  {
    name: 'Hefei',
    latitude: 31.85,
    longitude: 117.28
  },
  {
    name: 'Indore',
    latitude: 22.7151,
    longitude: 75.865
  },
  {
    name: 'Goiânia',
    latitude: -16.72,
    longitude: -49.3
  },
  {
    name: 'Sanaa',
    latitude: 15.3547,
    longitude: 44.2066
  },
  {
    name: 'San Antonio',
    latitude: 29.4722,
    longitude: -98.5247
  },
  {
    name: 'Port-au-Prince',
    latitude: 18.541,
    longitude: -72.336
  },
  {
    name: 'Haiphong',
    latitude: 20.83,
    longitude: 106.6801
  },
  {
    name: 'Suzhou',
    latitude: 33.6361,
    longitude: 116.9789
  },
  {
    name: 'Nanyang',
    latitude: 33.0004,
    longitude: 112.53
  },
  {
    name: 'Bucharest',
    latitude: 44.4334,
    longitude: 26.0999
  },
  {
    name: 'Ningbo',
    latitude: 29.88,
    longitude: 121.55
  },
  {
    name: 'Douala',
    latitude: 4.0604,
    longitude: 9.71
  },
  {
    name: 'Tangshan',
    latitude: 39.6243,
    longitude: 118.1944
  },
  {
    name: 'Tainan',
    latitude: 23,
    longitude: 120.2
  },
  {
    name: 'Datong',
    latitude: 40.08,
    longitude: 113.3
  },
  {
    name: 'Asunción',
    latitude: -25.2964,
    longitude: -57.6415
  },
  {
    name: 'Saidu',
    latitude: 34.75,
    longitude: 72.35
  },
  {
    name: 'Brisbane',
    latitude: -27.455,
    longitude: 153.0351
  },
  {
    name: 'Rawalpindi',
    latitude: 33.6,
    longitude: 73.04
  },
  {
    name: 'Sacramento',
    latitude: 38.5667,
    longitude: -121.4683
  },
  {
    name: 'Beirut',
    latitude: 33.872,
    longitude: 35.5097
  },
  {
    name: 'San Jose',
    latitude: 37.3018,
    longitude: -121.8485
  },
  {
    name: 'Minsk',
    latitude: 53.9,
    longitude: 27.5666
  },
  {
    name: 'Kyoto',
    latitude: 35.03,
    longitude: 135.75
  },
  {
    name: 'Barranquilla',
    latitude: 10.96,
    longitude: -74.8
  },
  {
    name: 'Orlando',
    latitude: 28.4788,
    longitude: -81.342
  },
  {
    name: 'Valencia',
    latitude: 10.23,
    longitude: -67.98
  },
  {
    name: 'Shuyang',
    latitude: 34.1299,
    longitude: 118.7734
  },
  {
    name: 'Hamburg',
    latitude: 53.55,
    longitude: 10
  },
  {
    name: 'Vadodara',
    latitude: 22.31,
    longitude: 73.18
  },
  {
    name: 'Manaus',
    latitude: -3.1,
    longitude: -60
  },
  {
    name: 'Shangqiu',
    latitude: 34.4504,
    longitude: 115.65
  },
  {
    name: 'Wuxi',
    latitude: 31.58,
    longitude: 120.3
  },
  {
    name: 'Palembang',
    latitude: -2.98,
    longitude: 104.75
  },
  {
    name: 'Brussels',
    latitude: 50.8333,
    longitude: 4.3333
  },
  {
    name: 'Essen',
    latitude: 51.45,
    longitude: 7.0166
  },
  {
    name: 'Cleveland',
    latitude: 41.4767,
    longitude: -81.6805
  },
  {
    name: 'Bhopal',
    latitude: 23.25,
    longitude: 77.41
  },
  {
    name: 'Hohhot',
    latitude: 40.82,
    longitude: 111.66
  },
  {
    name: 'Pittsburgh',
    latitude: 40.4396,
    longitude: -79.9763
  },
  {
    name: 'Luoyang',
    latitude: 34.68,
    longitude: 112.4701
  },
  {
    name: 'Santos',
    latitude: -23.9537,
    longitude: -46.3329
  },
  {
    name: 'Jianmen',
    latitude: 30.6501,
    longitude: 113.16
  },
  {
    name: 'Warsaw',
    latitude: 52.25,
    longitude: 21
  },
  {
    name: 'Rabat',
    latitude: 34.0253,
    longitude: -6.8361
  },
  {
    name: 'Vitória',
    latitude: -20.324,
    longitude: -40.366
  },
  {
    name: 'Quito',
    latitude: -0.215,
    longitude: -78.5001
  },
  {
    name: 'Antananarivo',
    latitude: -18.9166,
    longitude: 47.5166
  },
  {
    name: 'Coimbatore',
    latitude: 11,
    longitude: 76.95
  },
  {
    name: 'Daqing',
    latitude: 46.58,
    longitude: 125
  },
  {
    name: 'Luan',
    latitude: 31.7503,
    longitude: 116.48
  },
  {
    name: 'Wanzhou',
    latitude: 30.82,
    longitude: 108.4
  },
  {
    name: 'Budapest',
    latitude: 47.5,
    longitude: 19.0833
  },
  {
    name: 'Turin',
    latitude: 45.0704,
    longitude: 7.67
  },
  {
    name: 'Suzhou',
    latitude: 31.3005,
    longitude: 120.62
  },
  {
    name: 'Ludhiana',
    latitude: 30.9278,
    longitude: 75.8723
  },
  {
    name: 'Cincinnati',
    latitude: 39.1412,
    longitude: -84.5059
  },
  {
    name: 'Kumasi',
    latitude: 6.69,
    longitude: -1.63
  },
  {
    name: 'Manhattan',
    latitude: 40.7834,
    longitude: -73.9662
  },
  {
    name: 'Qiqihar',
    latitude: 47.345,
    longitude: 123.99
  },
  {
    name: 'Anshan',
    latitude: 41.115,
    longitude: 122.94
  },
  {
    name: 'Austin',
    latitude: 30.3006,
    longitude: -97.7517
  },
  {
    name: 'Zhongli',
    latitude: 24.965,
    longitude: 121.2168
  },
  {
    name: 'Handan',
    latitude: 36.58,
    longitude: 114.48
  },
  {
    name: 'Taian',
    latitude: 36.2,
    longitude: 117.1201
  },
  {
    name: 'Isfahan',
    latitude: 32.7,
    longitude: 51.7
  },
  {
    name: 'Kansas City',
    latitude: 39.1239,
    longitude: -94.5541
  },
  {
    name: 'Yaounde',
    latitude: 3.8667,
    longitude: 11.5167
  },
  {
    name: 'Shantou',
    latitude: 23.37,
    longitude: 116.67
  },
  {
    name: 'Agra',
    latitude: 27.1704,
    longitude: 78.015
  },
  {
    name: 'La Paz',
    latitude: -16.498,
    longitude: -68.15
  },
  {
    name: 'Zhanjiang',
    latitude: 21.2,
    longitude: 110.38
  },
  {
    name: 'Kalyan',
    latitude: 19.2502,
    longitude: 73.1602
  },
  {
    name: 'Abuja',
    latitude: 9.0833,
    longitude: 7.5333
  },
  {
    name: 'Harare',
    latitude: -17.8178,
    longitude: 31.0447
  },
  {
    name: 'Indianapolis',
    latitude: 39.7771,
    longitude: -86.1458
  },
  {
    name: 'Xiantao',
    latitude: 30.3704,
    longitude: 113.44
  },
  {
    name: 'Tijuana',
    latitude: 32.5,
    longitude: -117.08
  },
  {
    name: 'Khulna',
    latitude: 22.84,
    longitude: 89.56
  },
  {
    name: 'Weifang',
    latitude: 36.7204,
    longitude: 119.1001
  },
  {
    name: 'Santiago',
    latitude: 19.5,
    longitude: -70.67
  },
  {
    name: 'Xinyang',
    latitude: 32.1304,
    longitude: 114.07
  },
  {
    name: 'Luzhou',
    latitude: 28.88,
    longitude: 105.38
  },
  {
    name: 'Perth',
    latitude: -31.955,
    longitude: 115.84
  },
  {
    name: 'Toluca',
    latitude: 19.3304,
    longitude: -99.67
  },
  {
    name: 'Leeds',
    latitude: 53.83,
    longitude: -1.58
  },
  {
    name: 'Vishakhapatnam',
    latitude: 17.73,
    longitude: 83.305
  },
  {
    name: 'Kōbe',
    latitude: 34.68,
    longitude: 135.17
  },
  {
    name: 'Columbus',
    latitude: 39.986,
    longitude: -82.9852
  },
  {
    name: 'Multan',
    latitude: 30.2,
    longitude: 71.455
  },
  {
    name: 'Kochi',
    latitude: 10.015,
    longitude: 76.2239
  },
  {
    name: 'Gujranwala',
    latitude: 32.1604,
    longitude: 74.185
  },
  {
    name: 'Montevideo',
    latitude: -34.858,
    longitude: -56.1711
  },
  {
    name: 'Niterói',
    latitude: -22.9,
    longitude: -43.1
  },
  {
    name: 'Ganzhou',
    latitude: 25.92,
    longitude: 114.95
  },
  {
    name: 'Florence',
    latitude: 43.78,
    longitude: 11.25
  },
  {
    name: 'Liuzhou',
    latitude: 24.28,
    longitude: 109.25
  },
  {
    name: 'Bamako',
    latitude: 12.65,
    longitude: -8
  },
  {
    name: 'Conakry',
    latitude: 9.5315,
    longitude: -13.6802
  },
  {
    name: 'Bursa',
    latitude: 40.2,
    longitude: 29.07
  },
  {
    name: 'León',
    latitude: 21.15,
    longitude: -101.7
  },
  {
    name: 'Virginia Beach',
    latitude: 36.7335,
    longitude: -76.0435
  },
  {
    name: 'Nasik',
    latitude: 20.0004,
    longitude: 73.78
  },
  {
    name: 'Fushun',
    latitude: 41.8654,
    longitude: 123.87
  },
  {
    name: 'Changde',
    latitude: 29.03,
    longitude: 111.68
  },
  {
    name: 'Daejeon',
    latitude: 36.3355,
    longitude: 127.425
  },
  {
    name: 'Charlotte',
    latitude: 35.2079,
    longitude: -80.8303
  },
  {
    name: 'Neijiang',
    latitude: 29.5804,
    longitude: 105.05
  },
  {
    name: 'Phnom Penh',
    latitude: 11.55,
    longitude: 104.9166
  },
  {
    name: 'Quanzhou',
    latitude: 24.9,
    longitude: 118.58
  },
  {
    name: 'Kharkiv',
    latitude: 50,
    longitude: 36.25
  },
  {
    name: 'Hyderabad',
    latitude: 25.38,
    longitude: 68.375
  },
  {
    name: 'Bronx',
    latitude: 40.8501,
    longitude: -73.8662
  },
  {
    name: 'Lomé',
    latitude: 6.1319,
    longitude: 1.2228
  },
  {
    name: 'Córdoba',
    latitude: -31.4,
    longitude: -64.1823
  },
  {
    name: 'Huainan',
    latitude: 32.63,
    longitude: 116.98
  },
  {
    name: 'Doha',
    latitude: 25.2866,
    longitude: 51.533
  },
  {
    name: 'Kuala Lumpur',
    latitude: 3.1667,
    longitude: 101.7
  },
  {
    name: 'Maputo',
    latitude: -25.9553,
    longitude: 32.5892
  },
  {
    name: 'Kaduna',
    latitude: 10.52,
    longitude: 7.44
  },
  {
    name: 'Gwangju',
    latitude: 35.171,
    longitude: 126.9104
  },
  {
    name: 'Kawasaki',
    latitude: 35.53,
    longitude: 139.705
  },
  {
    name: 'San Salvador',
    latitude: 13.71,
    longitude: -89.203
  },
  {
    name: 'Suining',
    latitude: 30.5333,
    longitude: 105.5333
  },
  {
    name: 'Lyon',
    latitude: 45.77,
    longitude: 4.83
  },
  {
    name: 'Karaj',
    latitude: 35.8004,
    longitude: 50.97
  },
  {
    name: 'Kampala',
    latitude: 0.3167,
    longitude: 32.5833
  },
  {
    name: 'Tabriz',
    latitude: 38.0863,
    longitude: 46.3012
  },
  {
    name: 'The Hague',
    latitude: 52.08,
    longitude: 4.27
  },
  {
    name: 'Davao',
    latitude: 7.11,
    longitude: 125.63
  },
  {
    name: 'Marseille',
    latitude: 43.29,
    longitude: 5.375
  },
  {
    name: 'Meerut',
    latitude: 29.0004,
    longitude: 77.7
  },
  {
    name: 'Mianyang',
    latitude: 31.47,
    longitude: 104.77
  },
  {
    name: 'Semarang',
    latitude: -6.9666,
    longitude: 110.42
  },
  {
    name: 'Faridabad',
    latitude: 28.4333,
    longitude: 77.3167
  },
  {
    name: 'Novosibirsk',
    latitude: 55.03,
    longitude: 82.96
  },
  {
    name: 'Makkah',
    latitude: 21.43,
    longitude: 39.82
  },
  {
    name: 'Dubai',
    latitude: 25.23,
    longitude: 55.28
  },
  {
    name: 'Milwaukee',
    latitude: 43.064,
    longitude: -87.9669
  },
  {
    name: 'Auckland',
    latitude: -36.8481,
    longitude: 174.763
  },
  {
    name: 'Maanshan',
    latitude: 31.7304,
    longitude: 118.48
  },
  {
    name: 'Brazzaville',
    latitude: -4.2592,
    longitude: 15.2847
  },
  {
    name: 'Lubumbashi',
    latitude: -11.68,
    longitude: 27.48
  },
  {
    name: 'Yiyang',
    latitude: 28.6004,
    longitude: 112.33
  },
  {
    name: 'Varanasi',
    latitude: 25.33,
    longitude: 83
  },
  {
    name: 'Ciudad Juárez',
    latitude: 31.6904,
    longitude: -106.49
  },
  {
    name: 'Ghaziabad',
    latitude: 28.6604,
    longitude: 77.4084
  },
  {
    name: 'Pretoria',
    latitude: -25.7069,
    longitude: 28.2294
  },
  {
    name: 'Heze',
    latitude: 35.23,
    longitude: 115.45
  },
  {
    name: 'Porto',
    latitude: 41.15,
    longitude: -8.62
  },
  {
    name: 'Lusaka',
    latitude: -15.4166,
    longitude: 28.2833
  },
  {
    name: 'Asansol',
    latitude: 23.6833,
    longitude: 86.9833
  },
  {
    name: 'Changzhou',
    latitude: 31.78,
    longitude: 119.97
  },
  {
    name: 'Mosul',
    latitude: 36.345,
    longitude: 43.145
  },
  {
    name: 'Yekaterinburg',
    latitude: 56.85,
    longitude: 60.6
  },
  {
    name: 'Peshawar',
    latitude: 34.005,
    longitude: 71.535
  },
  {
    name: 'Mandalay',
    latitude: 21.97,
    longitude: 96.085
  },
  {
    name: 'Jamshedpur',
    latitude: 22.7875,
    longitude: 86.1975
  },
  {
    name: 'Mbuji-Mayi',
    latitude: -6.15,
    longitude: 23.6
  },
  {
    name: 'Madurai',
    latitude: 9.92,
    longitude: 78.12
  },
  {
    name: 'Adana',
    latitude: 36.995,
    longitude: 35.32
  },
  {
    name: 'Sheffield',
    latitude: 53.3667,
    longitude: -1.5
  },
  {
    name: 'Jabalpur',
    latitude: 23.1751,
    longitude: 79.9551
  },
  {
    name: 'San José',
    latitude: 9.935,
    longitude: -84.0841
  },
  {
    name: 'Panama City',
    latitude: 8.968,
    longitude: -79.533
  },
  {
    name: 'Nizhny Novgorod',
    latitude: 56.333,
    longitude: 44.0001
  },
  {
    name: 'Chifeng',
    latitude: 42.27,
    longitude: 118.95
  },
  {
    name: 'Duisburg',
    latitude: 51.43,
    longitude: 6.75
  },
  {
    name: 'Munich',
    latitude: 48.1299,
    longitude: 11.575
  },
  {
    name: 'Stockholm',
    latitude: 59.3508,
    longitude: 18.0973
  },
  {
    name: 'Huaiyin',
    latitude: 33.58,
    longitude: 119.03
  },
  {
    name: 'Ujungpandang',
    latitude: -5.14,
    longitude: 119.432
  },
  {
    name: 'Rajkot',
    latitude: 22.31,
    longitude: 70.8
  },
  {
    name: 'Dhanbad',
    latitude: 23.8004,
    longitude: 86.42
  },
  {
    name: 'Mudangiang',
    latitude: 44.575,
    longitude: 129.59
  },
  {
    name: 'Geneva',
    latitude: 46.21,
    longitude: 6.14
  },
  {
    name: 'Shiraz',
    latitude: 29.63,
    longitude: 52.57
  },
  {
    name: 'Huzhou',
    latitude: 30.8704,
    longitude: 120.1
  },
  {
    name: 'Tianshui',
    latitude: 34.6,
    longitude: 105.92
  },
  {
    name: 'Lupanshui',
    latitude: 26.5944,
    longitude: 104.8333
  },
  {
    name: 'Düsseldorf',
    latitude: 51.2204,
    longitude: 6.78
  },
  {
    name: 'Maoming',
    latitude: 21.9204,
    longitude: 110.87
  },
  {
    name: 'Seville',
    latitude: 37.405,
    longitude: -5.98
  },
  {
    name: 'Amritsar',
    latitude: 31.64,
    longitude: 74.87
  },
  {
    name: 'Vila Velha',
    latitude: -20.3676,
    longitude: -40.318
  },
  {
    name: 'Vila Velha',
    latitude: 3.2167,
    longitude: -51.2167
  },
  {
    name: 'Almaty',
    latitude: 43.325,
    longitude: 76.915
  },
  {
    name: 'Providence',
    latitude: 41.8229,
    longitude: -71.4186
  },
  {
    name: 'Warangal',
    latitude: 18.01,
    longitude: 79.58
  },
  {
    name: 'Rosario',
    latitude: -32.9511,
    longitude: -60.6663
  },
  {
    name: 'Allahabad',
    latitude: 25.455,
    longitude: 81.84
  },
  {
    name: 'Benin City',
    latitude: 6.3405,
    longitude: 5.62
  },
  {
    name: 'Maceió',
    latitude: -9.62,
    longitude: -35.73
  },
  {
    name: 'Jining',
    latitude: 35.4004,
    longitude: 116.55
  },
  {
    name: 'Sofia',
    latitude: 42.6833,
    longitude: 23.3167
  },
  {
    name: 'Abbottabad',
    latitude: 34.1495,
    longitude: 73.1995
  },
  {
    name: 'Banghazi',
    latitude: 32.1167,
    longitude: 20.0667
  },
  {
    name: 'Cilacap',
    latitude: -7.7188,
    longitude: 109.0154
  },
  {
    name: 'Prague',
    latitude: 50.0833,
    longitude: 14.466
  },
  {
    name: 'Glasgow',
    latitude: 55.8744,
    longitude: -4.2507
  },
  {
    name: 'Leshan',
    latitude: 29.5671,
    longitude: 103.7333
  },
  {
    name: 'Jacksonville',
    latitude: 30.3322,
    longitude: -81.6749
  },
  {
    name: 'Ouagadougou',
    latitude: 12.3703,
    longitude: -1.5247
  },
  {
    name: 'Adelaide',
    latitude: -34.935,
    longitude: 138.6
  },
  {
    name: 'Ottawa',
    latitude: 45.4167,
    longitude: -75.7
  },
  {
    name: 'Shangrao',
    latitude: 28.4704,
    longitude: 117.97
  },
  {
    name: 'Torreón',
    latitude: 25.5701,
    longitude: -103.42
  },
  {
    name: 'Srinagar',
    latitude: 34.1,
    longitude: 74.815
  },
  {
    name: 'Samara',
    latitude: 53.195,
    longitude: 50.1513
  },
  {
    name: 'Vijayawada',
    latitude: 16.52,
    longitude: 80.63
  },
  {
    name: 'Omsk',
    latitude: 54.99,
    longitude: 73.4
  },
  {
    name: 'Newcastle',
    latitude: -32.8453,
    longitude: 151.815
  },
  {
    name: 'Yulin',
    latitude: 22.63,
    longitude: 110.15
  },
  {
    name: 'Nampo',
    latitude: 38.7669,
    longitude: 125.4524
  },
  {
    name: 'Xianyang',
    latitude: 34.3456,
    longitude: 108.7147
  },
  {
    name: 'Cagayan de Oro',
    latitude: 8.4508,
    longitude: 124.6853
  },
  {
    name: 'Can Tho',
    latitude: 10.05,
    longitude: 105.77
  },
  {
    name: 'Barquisimeto',
    latitude: 10.05,
    longitude: -69.3
  },
  {
    name: 'Kazan',
    latitude: 55.7499,
    longitude: 49.1263
  },
  {
    name: 'Helsinki',
    latitude: 60.1756,
    longitude: 24.9341
  },
  {
    name: 'Aurangabad',
    latitude: 19.8957,
    longitude: 75.3203
  },
  {
    name: 'Calgary',
    latitude: 51.083,
    longitude: -114.08
  },
  {
    name: 'Nezahualcoyotl',
    latitude: 19.41,
    longitude: -99.03
  },
  {
    name: 'Zürich',
    latitude: 47.38,
    longitude: 8.55
  },
  {
    name: 'Baoding',
    latitude: 38.8704,
    longitude: 115.48
  },
  {
    name: 'Zigong',
    latitude: 29.4,
    longitude: 104.78
  },
  {
    name: 'Sharjah',
    latitude: 25.3714,
    longitude: 55.4065
  },
  {
    name: 'Yerevan',
    latitude: 40.1812,
    longitude: 44.5136
  },
  {
    name: 'Mogadishu',
    latitude: 2.0667,
    longitude: 45.3667
  },
  {
    name: 'Huambo',
    latitude: -12.75,
    longitude: 15.76
  },
  {
    name: 'Ankang',
    latitude: 32.68,
    longitude: 109.02
  },
  {
    name: 'Tbilisi',
    latitude: 41.725,
    longitude: 44.7908
  },
  {
    name: 'Ikare',
    latitude: 7.5304,
    longitude: 5.76
  },
  {
    name: 'Belgrade',
    latitude: 44.8186,
    longitude: 20.468
  },
  {
    name: 'Salt Lake City',
    latitude: 40.7774,
    longitude: -111.9301
  },
  {
    name: 'Bhilai',
    latitude: 21.2167,
    longitude: 81.4333
  },
  {
    name: 'Jinhua',
    latitude: 29.12,
    longitude: 119.65
  },
  {
    name: 'Chelyabinsk',
    latitude: 55.155,
    longitude: 61.4387
  },
  {
    name: 'Natal',
    latitude: -5.78,
    longitude: -35.24
  },
  {
    name: 'Dushanbe',
    latitude: 38.56,
    longitude: 68.7739
  },
  {
    name: 'København',
    latitude: 55.6786,
    longitude: 12.5635
  },
  {
    name: 'Changwon',
    latitude: 35.2191,
    longitude: 128.5836
  },
  {
    name: 'Zhuzhou',
    latitude: 27.83,
    longitude: 113.15
  },
  {
    name: 'Suwon',
    latitude: 37.2578,
    longitude: 127.0109
  },
  {
    name: 'Nashville',
    latitude: 36.1714,
    longitude: -86.7844
  },
  {
    name: 'Vereeniging',
    latitude: -26.6496,
    longitude: 27.96
  },
  {
    name: 'Xiangfan',
    latitude: 32.02,
    longitude: 112.13
  },
  {
    name: 'Memphis',
    latitude: 35.1047,
    longitude: -89.9773
  },
  {
    name: 'Ulsan',
    latitude: 35.5467,
    longitude: 129.317
  },
  {
    name: 'Zhucheng',
    latitude: 35.99,
    longitude: 119.3801
  },
  {
    name: 'Amman',
    latitude: 31.95,
    longitude: 35.9333
  },
  {
    name: 'Richmond',
    latitude: 37.5295,
    longitude: -77.4756
  },
  {
    name: 'Dublin',
    latitude: 53.3331,
    longitude: -6.2489
  },
  {
    name: 'Edmonton',
    latitude: 53.55,
    longitude: -113.5
  },
  {
    name: 'Sholapur',
    latitude: 17.6704,
    longitude: 75.9
  },
  {
    name: 'Rostov',
    latitude: 47.2346,
    longitude: 39.7127
  },
  {
    name: 'Dnipro',
    latitude: 48.48,
    longitude: 35
  },
  {
    name: 'Xining',
    latitude: 36.62,
    longitude: 101.77
  },
  {
    name: 'Zhangjiakou',
    latitude: 40.83,
    longitude: 114.93
  },
  {
    name: 'Gaziantep',
    latitude: 37.075,
    longitude: 37.385
  },
  {
    name: 'Lille',
    latitude: 50.65,
    longitude: 3.08
  },
  {
    name: 'Ranchi',
    latitude: 23.37,
    longitude: 85.33
  },
  {
    name: 'Monrovia',
    latitude: 6.3106,
    longitude: -10.8048
  },
  {
    name: 'São Luís',
    latitude: -2.516,
    longitude: -44.266
  },
  {
    name: 'Amsterdam',
    latitude: 52.35,
    longitude: 4.9166
  },
  {
    name: 'Jerusalem',
    latitude: 31.7784,
    longitude: 35.2066
  },
  {
    name: 'New Orleans',
    latitude: 30.0687,
    longitude: -89.9288
  },
  {
    name: 'Guatemala',
    latitude: 14.6211,
    longitude: -90.527
  },
  {
    name: 'Florianópolis',
    latitude: -27.58,
    longitude: -48.52
  },
  {
    name: 'Zhuhai',
    latitude: 22.2769,
    longitude: 113.5678
  },
  {
    name: 'Port Elizabeth',
    latitude: -33.97,
    longitude: 25.6
  },
  {
    name: 'Port Harcourt',
    latitude: 4.81,
    longitude: 7.01
  },
  {
    name: 'Jiamusi',
    latitude: 46.83,
    longitude: 130.35
  },
  {
    name: 'Raleigh',
    latitude: 35.8323,
    longitude: -78.6439
  },
  {
    name: 'Ufa',
    latitude: 54.79,
    longitude: 56.04
  },
  {
    name: 'Hengyang',
    latitude: 26.88,
    longitude: 112.59
  },
  {
    name: 'Benxi',
    latitude: 41.3304,
    longitude: 123.75
  },
  {
    name: 'Louisville',
    latitude: 38.1662,
    longitude: -85.6488
  },
  {
    name: 'Haifa',
    latitude: 32.8204,
    longitude: 34.98
  },
  {
    name: 'Medina',
    latitude: 24.5,
    longitude: 39.58
  },
  {
    name: 'Bucaramanga',
    latitude: 7.1301,
    longitude: -73.1259
  },
  {
    name: 'Maracay',
    latitude: 10.2469,
    longitude: -67.5958
  },
  {
    name: 'Rotterdam',
    latitude: 51.92,
    longitude: 4.48
  },
  {
    name: 'Hims',
    latitude: 34.73,
    longitude: 36.72
  },
  {
    name: 'Cologne',
    latitude: 50.93,
    longitude: 6.95
  },
  {
    name: 'Qinhuangdao',
    latitude: 39.9304,
    longitude: 119.62
  },
  {
    name: 'Fez',
    latitude: 34.0546,
    longitude: -5.0004
  },
  {
    name: 'Aden',
    latitude: 12.7797,
    longitude: 45.0095
  },
  {
    name: 'Da Nang',
    latitude: 16.06,
    longitude: 108.25
  },
  {
    name: 'Cochabamba',
    latitude: -17.41,
    longitude: -66.17
  },
  {
    name: 'Yongzhou',
    latitude: 26.2304,
    longitude: 111.62
  },
  {
    name: 'Baoshan',
    latitude: 25.12,
    longitude: 99.15
  }
];

export const cities = rawCities.map((city, id) => ({ ...city, id }));
