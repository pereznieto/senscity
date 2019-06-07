const rawCities = [
  {
    "name": "Tokyo",
    "latitude": 35.685,
    "longtitude": 139.7514
  },
  {
    "name": "New York",
    "latitude": 40.6943,
    "longtitude": -73.9249
  },
  {
    "name": "Mexico City",
    "latitude": 19.4424,
    "longtitude": -99.131
  },
  {
    "name": "Mumbai",
    "latitude": 19.017,
    "longtitude": 72.857
  },
  {
    "name": "São Paulo",
    "latitude": -23.5587,
    "longtitude": -46.625
  },
  {
    "name": "Delhi",
    "latitude": 28.67,
    "longtitude": 77.23
  },
  {
    "name": "Shanghai",
    "latitude": 31.2165,
    "longtitude": 121.4365
  },
  {
    "name": "Kolkata",
    "latitude": 22.495,
    "longtitude": 88.3247
  },
  {
    "name": "Los Angeles",
    "latitude": 34.1139,
    "longtitude": -118.4068
  },
  {
    "name": "Dhaka",
    "latitude": 23.7231,
    "longtitude": 90.4086
  },
  {
    "name": "Buenos Aires",
    "latitude": -34.6025,
    "longtitude": -58.3975
  },
  {
    "name": "Karachi",
    "latitude": 24.87,
    "longtitude": 66.99
  },
  {
    "name": "Cairo",
    "latitude": 30.05,
    "longtitude": 31.25
  },
  {
    "name": "Rio de Janeiro",
    "latitude": -22.925,
    "longtitude": -43.225
  },
  {
    "name": "Ōsaka",
    "latitude": 34.75,
    "longtitude": 135.4601
  },
  {
    "name": "Beijing",
    "latitude": 39.9289,
    "longtitude": 116.3883
  },
  {
    "name": "Manila",
    "latitude": 14.6042,
    "longtitude": 120.9822
  },
  {
    "name": "Moscow",
    "latitude": 55.7522,
    "longtitude": 37.6155
  },
  {
    "name": "Istanbul",
    "latitude": 41.105,
    "longtitude": 29.01
  },
  {
    "name": "Paris",
    "latitude": 48.8667,
    "longtitude": 2.3333
  },
  {
    "name": "Seoul",
    "latitude": 37.5663,
    "longtitude": 126.9997
  },
  {
    "name": "Lagos",
    "latitude": 6.4433,
    "longtitude": 3.3915
  },
  {
    "name": "Jakarta",
    "latitude": -6.1744,
    "longtitude": 106.8294
  },
  {
    "name": "Guangzhou",
    "latitude": 23.145,
    "longtitude": 113.325
  },
  {
    "name": "Chicago",
    "latitude": 41.8373,
    "longtitude": -87.6861
  },
  {
    "name": "London",
    "latitude": 51.5,
    "longtitude": -0.1167
  },
  {
    "name": "Lima",
    "latitude": -12.048,
    "longtitude": -77.0501
  },
  {
    "name": "Tehran",
    "latitude": 35.6719,
    "longtitude": 51.4243
  },
  {
    "name": "Kinshasa",
    "latitude": -4.3297,
    "longtitude": 15.315
  },
  {
    "name": "Bogota",
    "latitude": 4.5964,
    "longtitude": -74.0833
  },
  {
    "name": "Shenzhen",
    "latitude": 22.5524,
    "longtitude": 114.1221
  },
  {
    "name": "Wuhan",
    "latitude": 30.58,
    "longtitude": 114.27
  },
  {
    "name": "Hong Kong",
    "latitude": 22.305,
    "longtitude": 114.185
  },
  {
    "name": "Tianjin",
    "latitude": 39.13,
    "longtitude": 117.2
  },
  {
    "name": "Chennai",
    "latitude": 13.09,
    "longtitude": 80.28
  },
  {
    "name": "Taipei",
    "latitude": 25.0358,
    "longtitude": 121.5683
  },
  {
    "name": "Bangalore",
    "latitude": 12.97,
    "longtitude": 77.56
  },
  {
    "name": "Bangkok",
    "latitude": 13.75,
    "longtitude": 100.5166
  },
  {
    "name": "Lahore",
    "latitude": 31.56,
    "longtitude": 74.35
  },
  {
    "name": "Chongqing",
    "latitude": 29.565,
    "longtitude": 106.595
  },
  {
    "name": "Miami",
    "latitude": 25.784,
    "longtitude": -80.2102
  },
  {
    "name": "Hyderabad",
    "latitude": 17.4,
    "longtitude": 78.48
  },
  {
    "name": "Dallas",
    "latitude": 32.7937,
    "longtitude": -96.7662
  },
  {
    "name": "Santiago",
    "latitude": -33.45,
    "longtitude": -70.667
  },
  {
    "name": "Philadelphia",
    "latitude": 40.0076,
    "longtitude": -75.134
  },
  {
    "name": "Belo Horizonte",
    "latitude": -19.915,
    "longtitude": -43.915
  },
  {
    "name": "Madrid",
    "latitude": 40.4,
    "longtitude": -3.6834
  },
  {
    "name": "Houston",
    "latitude": 29.7868,
    "longtitude": -95.3905
  },
  {
    "name": "Ahmedabad",
    "latitude": 23.0301,
    "longtitude": 72.58
  },
  {
    "name": "Ho Chi Minh City",
    "latitude": 10.78,
    "longtitude": 106.695
  },
  {
    "name": "Washington",
    "latitude": 38.9047,
    "longtitude": -77.0163
  },
  {
    "name": "Atlanta",
    "latitude": 33.7626,
    "longtitude": -84.4228
  },
  {
    "name": "Toronto",
    "latitude": 43.7,
    "longtitude": -79.42
  },
  {
    "name": "Singapore",
    "latitude": 1.293,
    "longtitude": 103.8558
  },
  {
    "name": "Luanda",
    "latitude": -8.8383,
    "longtitude": 13.2344
  },
  {
    "name": "Baghdad",
    "latitude": 33.3386,
    "longtitude": 44.3939
  },
  {
    "name": "Barcelona",
    "latitude": 41.3833,
    "longtitude": 2.1834
  },
  {
    "name": "Haora",
    "latitude": 22.5804,
    "longtitude": 88.3299
  },
  {
    "name": "Shenyeng",
    "latitude": 41.805,
    "longtitude": 123.45
  },
  {
    "name": "Khartoum",
    "latitude": 15.5881,
    "longtitude": 32.5342
  },
  {
    "name": "Pune",
    "latitude": 18.53,
    "longtitude": 73.85
  },
  {
    "name": "Boston",
    "latitude": 42.3188,
    "longtitude": -71.0846
  },
  {
    "name": "Sydney",
    "latitude": -33.92,
    "longtitude": 151.1852
  },
  {
    "name": "St. Petersburg",
    "latitude": 59.939,
    "longtitude": 30.316
  },
  {
    "name": "Chittagong",
    "latitude": 22.33,
    "longtitude": 91.8
  },
  {
    "name": "Dongguan",
    "latitude": 23.0489,
    "longtitude": 113.7447
  },
  {
    "name": "Riyadh",
    "latitude": 24.6408,
    "longtitude": 46.7727
  },
  {
    "name": "Hanoi",
    "latitude": 21.0333,
    "longtitude": 105.85
  },
  {
    "name": "Guadalajara",
    "latitude": 20.67,
    "longtitude": -103.33
  },
  {
    "name": "Melbourne",
    "latitude": -37.82,
    "longtitude": 144.975
  },
  {
    "name": "Alexandria",
    "latitude": 31.2,
    "longtitude": 29.95
  },
  {
    "name": "Chengdu",
    "latitude": 30.67,
    "longtitude": 104.07
  },
  {
    "name": "Rangoon",
    "latitude": 16.7834,
    "longtitude": 96.1667
  },
  {
    "name": "Phoenix",
    "latitude": 33.5722,
    "longtitude": -112.0891
  },
  {
    "name": "Xian",
    "latitude": 34.275,
    "longtitude": 108.895
  },
  {
    "name": "Porto Alegre",
    "latitude": -30.05,
    "longtitude": -51.2
  },
  {
    "name": "Surat",
    "latitude": 21.2,
    "longtitude": 72.84
  },
  {
    "name": "Hechi",
    "latitude": 23.0965,
    "longtitude": 109.6091
  },
  {
    "name": "Abidjan",
    "latitude": 5.32,
    "longtitude": -4.04
  },
  {
    "name": "Brasília",
    "latitude": -15.7833,
    "longtitude": -47.9161
  },
  {
    "name": "Ankara",
    "latitude": 39.9272,
    "longtitude": 32.8644
  },
  {
    "name": "Monterrey",
    "latitude": 25.67,
    "longtitude": -100.33
  },
  {
    "name": "Yokohama",
    "latitude": 35.32,
    "longtitude": 139.58
  },
  {
    "name": "Nanjing",
    "latitude": 32.05,
    "longtitude": 118.78
  },
  {
    "name": "Montréal",
    "latitude": 45.5,
    "longtitude": -73.5833
  },
  {
    "name": "Guiyang",
    "latitude": 26.58,
    "longtitude": 106.72
  },
  {
    "name": "Recife",
    "latitude": -8.0756,
    "longtitude": -34.9156
  },
  {
    "name": "Seattle",
    "latitude": 47.6211,
    "longtitude": -122.3244
  },
  {
    "name": "Harbin",
    "latitude": 45.75,
    "longtitude": 126.65
  },
  {
    "name": "San Francisco",
    "latitude": 37.7562,
    "longtitude": -122.443
  },
  {
    "name": "Fortaleza",
    "latitude": -3.75,
    "longtitude": -38.58
  },
  {
    "name": "Zhangzhou",
    "latitude": 24.5204,
    "longtitude": 117.67
  },
  {
    "name": "Detroit",
    "latitude": 42.3834,
    "longtitude": -83.1024
  },
  {
    "name": "Salvador",
    "latitude": -12.97,
    "longtitude": -38.48
  },
  {
    "name": "Busan",
    "latitude": 35.0951,
    "longtitude": 129.01
  },
  {
    "name": "Johannesburg",
    "latitude": -26.17,
    "longtitude": 28.03
  },
  {
    "name": "Berlin",
    "latitude": 52.5218,
    "longtitude": 13.4015
  },
  {
    "name": "Algiers",
    "latitude": 36.7631,
    "longtitude": 3.0506
  },
  {
    "name": "Rome",
    "latitude": 41.896,
    "longtitude": 12.4833
  },
  {
    "name": "Pyongyang",
    "latitude": 39.0194,
    "longtitude": 125.7547
  },
  {
    "name": "Medellín",
    "latitude": 6.275,
    "longtitude": -75.575
  },
  {
    "name": "Kabul",
    "latitude": 34.5167,
    "longtitude": 69.1833
  },
  {
    "name": "Athens",
    "latitude": 37.9833,
    "longtitude": 23.7333
  },
  {
    "name": "Nagoya",
    "latitude": 35.155,
    "longtitude": 136.915
  },
  {
    "name": "Cape Town",
    "latitude": -33.92,
    "longtitude": 18.435
  },
  {
    "name": "San Diego",
    "latitude": 32.8312,
    "longtitude": -117.1226
  },
  {
    "name": "Changchun",
    "latitude": 43.865,
    "longtitude": 125.34
  },
  {
    "name": "Casablanca",
    "latitude": 33.6,
    "longtitude": -7.6164
  },
  {
    "name": "Dalian",
    "latitude": 38.9228,
    "longtitude": 121.6298
  },
  {
    "name": "Kanpur",
    "latitude": 26.46,
    "longtitude": 80.32
  },
  {
    "name": "Kano",
    "latitude": 12,
    "longtitude": 8.52
  },
  {
    "name": "Tel Aviv-Yafo",
    "latitude": 32.08,
    "longtitude": 34.77
  },
  {
    "name": "Addis Ababa",
    "latitude": 9.0333,
    "longtitude": 38.7
  },
  {
    "name": "Curitiba",
    "latitude": -25.42,
    "longtitude": -49.32
  },
  {
    "name": "Zibo",
    "latitude": 36.8,
    "longtitude": 118.05
  },
  {
    "name": "Jeddah",
    "latitude": 21.5169,
    "longtitude": 39.2192
  },
  {
    "name": "Nairobi",
    "latitude": -1.2833,
    "longtitude": 36.8167
  },
  {
    "name": "Hangzhou",
    "latitude": 30.25,
    "longtitude": 120.17
  },
  {
    "name": "Benoni",
    "latitude": -26.1496,
    "longtitude": 28.3299
  },
  {
    "name": "Caracas",
    "latitude": 10.501,
    "longtitude": -66.917
  },
  {
    "name": "Milan",
    "latitude": 45.47,
    "longtitude": 9.205
  },
  {
    "name": "Stuttgart",
    "latitude": 48.78,
    "longtitude": 9.2
  },
  {
    "name": "Kunming",
    "latitude": 25.07,
    "longtitude": 102.68
  },
  {
    "name": "Dar es Salaam",
    "latitude": -6.8,
    "longtitude": 39.2683
  },
  {
    "name": "Minneapolis",
    "latitude": 44.9635,
    "longtitude": -93.2678
  },
  {
    "name": "Jaipur",
    "latitude": 26.9211,
    "longtitude": 75.81
  },
  {
    "name": "Taiyuan",
    "latitude": 37.875,
    "longtitude": 112.5451
  },
  {
    "name": "Frankfurt",
    "latitude": 50.1,
    "longtitude": 8.675
  },
  {
    "name": "Qingdao",
    "latitude": 36.09,
    "longtitude": 120.33
  },
  {
    "name": "Surabaya",
    "latitude": -7.2492,
    "longtitude": 112.7508
  },
  {
    "name": "Lisbon",
    "latitude": 38.7227,
    "longtitude": -9.1449
  },
  {
    "name": "Tampa",
    "latitude": 27.9937,
    "longtitude": -82.4454
  },
  {
    "name": "Jinan",
    "latitude": 36.675,
    "longtitude": 116.995
  },
  {
    "name": "Fukuoka",
    "latitude": 33.595,
    "longtitude": 130.41
  },
  {
    "name": "Campinas",
    "latitude": -22.9,
    "longtitude": -47.1
  },
  {
    "name": "Denver",
    "latitude": 39.7621,
    "longtitude": -104.8759
  },
  {
    "name": "Kaohsiung",
    "latitude": 22.6333,
    "longtitude": 120.2666
  },
  {
    "name": "Quezon City",
    "latitude": 14.6504,
    "longtitude": 121.03
  },
  {
    "name": "Katowice",
    "latitude": 50.2604,
    "longtitude": 19.02
  },
  {
    "name": "Aleppo",
    "latitude": 36.23,
    "longtitude": 37.17
  },
  {
    "name": "Durban",
    "latitude": -29.865,
    "longtitude": 30.98
  },
  {
    "name": "Kiev",
    "latitude": 50.4334,
    "longtitude": 30.5166
  },
  {
    "name": "Lucknow",
    "latitude": 26.855,
    "longtitude": 80.915
  },
  {
    "name": "El Giza",
    "latitude": 30.01,
    "longtitude": 31.19
  },
  {
    "name": "Zhengzhou",
    "latitude": 34.755,
    "longtitude": 113.6651
  },
  {
    "name": "Taichung",
    "latitude": 24.1521,
    "longtitude": 120.6817
  },
  {
    "name": "Brooklyn",
    "latitude": 40.6501,
    "longtitude": -73.9496
  },
  {
    "name": "Ibadan",
    "latitude": 7.38,
    "longtitude": 3.93
  },
  {
    "name": "Faisalabad",
    "latitude": 31.41,
    "longtitude": 73.11
  },
  {
    "name": "Fuzhou",
    "latitude": 26.08,
    "longtitude": 119.3
  },
  {
    "name": "Dakar",
    "latitude": 14.7158,
    "longtitude": -17.4731
  },
  {
    "name": "Changsha",
    "latitude": 28.2,
    "longtitude": 112.97
  },
  {
    "name": "İzmir",
    "latitude": 38.4361,
    "longtitude": 27.1518
  },
  {
    "name": "Xiangtan",
    "latitude": 27.8504,
    "longtitude": 112.9
  },
  {
    "name": "Lanzhou",
    "latitude": 36.056,
    "longtitude": 103.792
  },
  {
    "name": "Incheon",
    "latitude": 37.4761,
    "longtitude": 126.6422
  },
  {
    "name": "Sapporo",
    "latitude": 43.075,
    "longtitude": 141.34
  },
  {
    "name": "Xiamen",
    "latitude": 24.45,
    "longtitude": 118.08
  },
  {
    "name": "Guayaquil",
    "latitude": -2.22,
    "longtitude": -79.92
  },
  {
    "name": "George Town",
    "latitude": 5.4136,
    "longtitude": 100.3294
  },
  {
    "name": "Mashhad",
    "latitude": 36.27,
    "longtitude": 59.57
  },
  {
    "name": "Damascus",
    "latitude": 33.5,
    "longtitude": 36.3
  },
  {
    "name": "Daegu",
    "latitude": 35.8668,
    "longtitude": 128.607
  },
  {
    "name": "Nagpur",
    "latitude": 21.17,
    "longtitude": 79.09
  },
  {
    "name": "Jinxi",
    "latitude": 40.7503,
    "longtitude": 120.83
  },
  {
    "name": "Shijianzhuang",
    "latitude": 38.05,
    "longtitude": 114.48
  },
  {
    "name": "Tunis",
    "latitude": 36.8028,
    "longtitude": 10.1797
  },
  {
    "name": "Vienna",
    "latitude": 48.2,
    "longtitude": 16.3666
  },
  {
    "name": "Jilin",
    "latitude": 43.85,
    "longtitude": 126.55
  },
  {
    "name": "Omdurman",
    "latitude": 15.6167,
    "longtitude": 32.48
  },
  {
    "name": "Bandung",
    "latitude": -6.95,
    "longtitude": 107.57
  },
  {
    "name": "Bekasi",
    "latitude": -6.2173,
    "longtitude": 106.9723
  },
  {
    "name": "Mannheim",
    "latitude": 49.5004,
    "longtitude": 8.47
  },
  {
    "name": "Nanchang",
    "latitude": 28.68,
    "longtitude": 115.88
  },
  {
    "name": "Wenzhou",
    "latitude": 28.02,
    "longtitude": 120.6501
  },
  {
    "name": "Queens",
    "latitude": 40.7498,
    "longtitude": -73.7976
  },
  {
    "name": "Vancouver",
    "latitude": 49.2734,
    "longtitude": -123.1216
  },
  {
    "name": "Birmingham",
    "latitude": 52.475,
    "longtitude": -1.92
  },
  {
    "name": "Cali",
    "latitude": 3.4,
    "longtitude": -76.5
  },
  {
    "name": "Naples",
    "latitude": 40.84,
    "longtitude": 14.245
  },
  {
    "name": "Sendai",
    "latitude": 38.2871,
    "longtitude": 141.0217
  },
  {
    "name": "Manchester",
    "latitude": 53.5004,
    "longtitude": -2.248
  },
  {
    "name": "Puebla",
    "latitude": 19.05,
    "longtitude": -98.2
  },
  {
    "name": "Tripoli",
    "latitude": 32.8925,
    "longtitude": 13.18
  },
  {
    "name": "Tashkent",
    "latitude": 41.3117,
    "longtitude": 69.2949
  },
  {
    "name": "Nanchong",
    "latitude": 30.7804,
    "longtitude": 106.13
  },
  {
    "name": "Havana",
    "latitude": 23.132,
    "longtitude": -82.3642
  },
  {
    "name": "Baltimore",
    "latitude": 39.3051,
    "longtitude": -76.6144
  },
  {
    "name": "Belém",
    "latitude": -1.45,
    "longtitude": -48.48
  },
  {
    "name": "Nanning",
    "latitude": 22.82,
    "longtitude": 108.32
  },
  {
    "name": "Patna",
    "latitude": 25.625,
    "longtitude": 85.13
  },
  {
    "name": "Santo Domingo",
    "latitude": 18.4701,
    "longtitude": -69.9001
  },
  {
    "name": "Ürümqi",
    "latitude": 43.805,
    "longtitude": 87.575
  },
  {
    "name": "Zaozhuang",
    "latitude": 34.88,
    "longtitude": 117.57
  },
  {
    "name": "Baku",
    "latitude": 40.3953,
    "longtitude": 49.8622
  },
  {
    "name": "Accra",
    "latitude": 5.55,
    "longtitude": -0.2167
  },
  {
    "name": "Yantai",
    "latitude": 37.5304,
    "longtitude": 121.4
  },
  {
    "name": "Medan",
    "latitude": 3.58,
    "longtitude": 98.65
  },
  {
    "name": "Santa Cruz",
    "latitude": -17.7539,
    "longtitude": -63.226
  },
  {
    "name": "Xuzhou",
    "latitude": 34.28,
    "longtitude": 117.18
  },
  {
    "name": "Riverside",
    "latitude": 33.9381,
    "longtitude": -117.3948
  },
  {
    "name": "Linyi",
    "latitude": 35.08,
    "longtitude": 118.33
  },
  {
    "name": "Saint Louis",
    "latitude": 38.6358,
    "longtitude": -90.2451
  },
  {
    "name": "Las Vegas",
    "latitude": 36.2291,
    "longtitude": -115.2607
  },
  {
    "name": "Maracaibo",
    "latitude": 10.73,
    "longtitude": -71.66
  },
  {
    "name": "Kuwait",
    "latitude": 29.3697,
    "longtitude": 47.9783
  },
  {
    "name": "Ad Damman",
    "latitude": 26.4282,
    "longtitude": 50.0997
  },
  {
    "name": "Portland",
    "latitude": 45.5372,
    "longtitude": -122.65
  },
  {
    "name": "Haikou",
    "latitude": 20.05,
    "longtitude": 110.32
  },
  {
    "name": "Hiroshima",
    "latitude": 34.3878,
    "longtitude": 132.4429
  },
  {
    "name": "Baotou",
    "latitude": 40.6522,
    "longtitude": 109.822
  },
  {
    "name": "Hefei",
    "latitude": 31.85,
    "longtitude": 117.28
  },
  {
    "name": "Indore",
    "latitude": 22.7151,
    "longtitude": 75.865
  },
  {
    "name": "Goiânia",
    "latitude": -16.72,
    "longtitude": -49.3
  },
  {
    "name": "Sanaa",
    "latitude": 15.3547,
    "longtitude": 44.2066
  },
  {
    "name": "San Antonio",
    "latitude": 29.4722,
    "longtitude": -98.5247
  },
  {
    "name": "Port-au-Prince",
    "latitude": 18.541,
    "longtitude": -72.336
  },
  {
    "name": "Haiphong",
    "latitude": 20.83,
    "longtitude": 106.6801
  },
  {
    "name": "Suzhou",
    "latitude": 33.6361,
    "longtitude": 116.9789
  },
  {
    "name": "Nanyang",
    "latitude": 33.0004,
    "longtitude": 112.53
  },
  {
    "name": "Bucharest",
    "latitude": 44.4334,
    "longtitude": 26.0999
  },
  {
    "name": "Ningbo",
    "latitude": 29.88,
    "longtitude": 121.55
  },
  {
    "name": "Douala",
    "latitude": 4.0604,
    "longtitude": 9.71
  },
  {
    "name": "Tangshan",
    "latitude": 39.6243,
    "longtitude": 118.1944
  },
  {
    "name": "Tainan",
    "latitude": 23,
    "longtitude": 120.2
  },
  {
    "name": "Datong",
    "latitude": 40.08,
    "longtitude": 113.3
  },
  {
    "name": "Asunción",
    "latitude": -25.2964,
    "longtitude": -57.6415
  },
  {
    "name": "Saidu",
    "latitude": 34.75,
    "longtitude": 72.35
  },
  {
    "name": "Brisbane",
    "latitude": -27.455,
    "longtitude": 153.0351
  },
  {
    "name": "Rawalpindi",
    "latitude": 33.6,
    "longtitude": 73.04
  },
  {
    "name": "Sacramento",
    "latitude": 38.5667,
    "longtitude": -121.4683
  },
  {
    "name": "Beirut",
    "latitude": 33.872,
    "longtitude": 35.5097
  },
  {
    "name": "San Jose",
    "latitude": 37.3018,
    "longtitude": -121.8485
  },
  {
    "name": "Minsk",
    "latitude": 53.9,
    "longtitude": 27.5666
  },
  {
    "name": "Kyoto",
    "latitude": 35.03,
    "longtitude": 135.75
  },
  {
    "name": "Barranquilla",
    "latitude": 10.96,
    "longtitude": -74.8
  },
  {
    "name": "Orlando",
    "latitude": 28.4788,
    "longtitude": -81.342
  },
  {
    "name": "Valencia",
    "latitude": 10.23,
    "longtitude": -67.98
  },
  {
    "name": "Shuyang",
    "latitude": 34.1299,
    "longtitude": 118.7734
  },
  {
    "name": "Hamburg",
    "latitude": 53.55,
    "longtitude": 10
  },
  {
    "name": "Vadodara",
    "latitude": 22.31,
    "longtitude": 73.18
  },
  {
    "name": "Manaus",
    "latitude": -3.1,
    "longtitude": -60
  },
  {
    "name": "Shangqiu",
    "latitude": 34.4504,
    "longtitude": 115.65
  },
  {
    "name": "Wuxi",
    "latitude": 31.58,
    "longtitude": 120.3
  },
  {
    "name": "Palembang",
    "latitude": -2.98,
    "longtitude": 104.75
  },
  {
    "name": "Brussels",
    "latitude": 50.8333,
    "longtitude": 4.3333
  },
  {
    "name": "Essen",
    "latitude": 51.45,
    "longtitude": 7.0166
  },
  {
    "name": "Cleveland",
    "latitude": 41.4767,
    "longtitude": -81.6805
  },
  {
    "name": "Bhopal",
    "latitude": 23.25,
    "longtitude": 77.41
  },
  {
    "name": "Hohhot",
    "latitude": 40.82,
    "longtitude": 111.66
  },
  {
    "name": "Pittsburgh",
    "latitude": 40.4396,
    "longtitude": -79.9763
  },
  {
    "name": "Luoyang",
    "latitude": 34.68,
    "longtitude": 112.4701
  },
  {
    "name": "Santos",
    "latitude": -23.9537,
    "longtitude": -46.3329
  },
  {
    "name": "Jianmen",
    "latitude": 30.6501,
    "longtitude": 113.16
  },
  {
    "name": "Warsaw",
    "latitude": 52.25,
    "longtitude": 21
  },
  {
    "name": "Rabat",
    "latitude": 34.0253,
    "longtitude": -6.8361
  },
  {
    "name": "Vitória",
    "latitude": -20.324,
    "longtitude": -40.366
  },
  {
    "name": "Quito",
    "latitude": -0.215,
    "longtitude": -78.5001
  },
  {
    "name": "Antananarivo",
    "latitude": -18.9166,
    "longtitude": 47.5166
  },
  {
    "name": "Coimbatore",
    "latitude": 11,
    "longtitude": 76.95
  },
  {
    "name": "Daqing",
    "latitude": 46.58,
    "longtitude": 125
  },
  {
    "name": "Luan",
    "latitude": 31.7503,
    "longtitude": 116.48
  },
  {
    "name": "Wanzhou",
    "latitude": 30.82,
    "longtitude": 108.4
  },
  {
    "name": "Budapest",
    "latitude": 47.5,
    "longtitude": 19.0833
  },
  {
    "name": "Turin",
    "latitude": 45.0704,
    "longtitude": 7.67
  },
  {
    "name": "Suzhou",
    "latitude": 31.3005,
    "longtitude": 120.62
  },
  {
    "name": "Ludhiana",
    "latitude": 30.9278,
    "longtitude": 75.8723
  },
  {
    "name": "Cincinnati",
    "latitude": 39.1412,
    "longtitude": -84.5059
  },
  {
    "name": "Kumasi",
    "latitude": 6.69,
    "longtitude": -1.63
  },
  {
    "name": "Manhattan",
    "latitude": 40.7834,
    "longtitude": -73.9662
  },
  {
    "name": "Qiqihar",
    "latitude": 47.345,
    "longtitude": 123.99
  },
  {
    "name": "Anshan",
    "latitude": 41.115,
    "longtitude": 122.94
  },
  {
    "name": "Austin",
    "latitude": 30.3006,
    "longtitude": -97.7517
  },
  {
    "name": "Zhongli",
    "latitude": 24.965,
    "longtitude": 121.2168
  },
  {
    "name": "Handan",
    "latitude": 36.58,
    "longtitude": 114.48
  },
  {
    "name": "Taian",
    "latitude": 36.2,
    "longtitude": 117.1201
  },
  {
    "name": "Isfahan",
    "latitude": 32.7,
    "longtitude": 51.7
  },
  {
    "name": "Kansas City",
    "latitude": 39.1239,
    "longtitude": -94.5541
  },
  {
    "name": "Yaounde",
    "latitude": 3.8667,
    "longtitude": 11.5167
  },
  {
    "name": "Shantou",
    "latitude": 23.37,
    "longtitude": 116.67
  },
  {
    "name": "Agra",
    "latitude": 27.1704,
    "longtitude": 78.015
  },
  {
    "name": "La Paz",
    "latitude": -16.498,
    "longtitude": -68.15
  },
  {
    "name": "Zhanjiang",
    "latitude": 21.2,
    "longtitude": 110.38
  },
  {
    "name": "Kalyan",
    "latitude": 19.2502,
    "longtitude": 73.1602
  },
  {
    "name": "Abuja",
    "latitude": 9.0833,
    "longtitude": 7.5333
  },
  {
    "name": "Harare",
    "latitude": -17.8178,
    "longtitude": 31.0447
  },
  {
    "name": "Indianapolis",
    "latitude": 39.7771,
    "longtitude": -86.1458
  },
  {
    "name": "Xiantao",
    "latitude": 30.3704,
    "longtitude": 113.44
  },
  {
    "name": "Tijuana",
    "latitude": 32.5,
    "longtitude": -117.08
  },
  {
    "name": "Khulna",
    "latitude": 22.84,
    "longtitude": 89.56
  },
  {
    "name": "Weifang",
    "latitude": 36.7204,
    "longtitude": 119.1001
  },
  {
    "name": "Santiago",
    "latitude": 19.5,
    "longtitude": -70.67
  },
  {
    "name": "Xinyang",
    "latitude": 32.1304,
    "longtitude": 114.07
  },
  {
    "name": "Luzhou",
    "latitude": 28.88,
    "longtitude": 105.38
  },
  {
    "name": "Perth",
    "latitude": -31.955,
    "longtitude": 115.84
  },
  {
    "name": "Toluca",
    "latitude": 19.3304,
    "longtitude": -99.67
  },
  {
    "name": "Leeds",
    "latitude": 53.83,
    "longtitude": -1.58
  },
  {
    "name": "Vishakhapatnam",
    "latitude": 17.73,
    "longtitude": 83.305
  },
  {
    "name": "Kōbe",
    "latitude": 34.68,
    "longtitude": 135.17
  },
  {
    "name": "Columbus",
    "latitude": 39.986,
    "longtitude": -82.9852
  },
  {
    "name": "Multan",
    "latitude": 30.2,
    "longtitude": 71.455
  },
  {
    "name": "Kochi",
    "latitude": 10.015,
    "longtitude": 76.2239
  },
  {
    "name": "Gujranwala",
    "latitude": 32.1604,
    "longtitude": 74.185
  },
  {
    "name": "Montevideo",
    "latitude": -34.858,
    "longtitude": -56.1711
  },
  {
    "name": "Niterói",
    "latitude": -22.9,
    "longtitude": -43.1
  },
  {
    "name": "Ganzhou",
    "latitude": 25.92,
    "longtitude": 114.95
  },
  {
    "name": "Florence",
    "latitude": 43.78,
    "longtitude": 11.25
  },
  {
    "name": "Liuzhou",
    "latitude": 24.28,
    "longtitude": 109.25
  },
  {
    "name": "Bamako",
    "latitude": 12.65,
    "longtitude": -8
  },
  {
    "name": "Conakry",
    "latitude": 9.5315,
    "longtitude": -13.6802
  },
  {
    "name": "Bursa",
    "latitude": 40.2,
    "longtitude": 29.07
  },
  {
    "name": "León",
    "latitude": 21.15,
    "longtitude": -101.7
  },
  {
    "name": "Virginia Beach",
    "latitude": 36.7335,
    "longtitude": -76.0435
  },
  {
    "name": "Nasik",
    "latitude": 20.0004,
    "longtitude": 73.78
  },
  {
    "name": "Fushun",
    "latitude": 41.8654,
    "longtitude": 123.87
  },
  {
    "name": "Changde",
    "latitude": 29.03,
    "longtitude": 111.68
  },
  {
    "name": "Daejeon",
    "latitude": 36.3355,
    "longtitude": 127.425
  },
  {
    "name": "Charlotte",
    "latitude": 35.2079,
    "longtitude": -80.8303
  },
  {
    "name": "Neijiang",
    "latitude": 29.5804,
    "longtitude": 105.05
  },
  {
    "name": "Phnom Penh",
    "latitude": 11.55,
    "longtitude": 104.9166
  },
  {
    "name": "Quanzhou",
    "latitude": 24.9,
    "longtitude": 118.58
  },
  {
    "name": "Kharkiv",
    "latitude": 50,
    "longtitude": 36.25
  },
  {
    "name": "Hyderabad",
    "latitude": 25.38,
    "longtitude": 68.375
  },
  {
    "name": "Bronx",
    "latitude": 40.8501,
    "longtitude": -73.8662
  },
  {
    "name": "Lomé",
    "latitude": 6.1319,
    "longtitude": 1.2228
  },
  {
    "name": "Córdoba",
    "latitude": -31.4,
    "longtitude": -64.1823
  },
  {
    "name": "Huainan",
    "latitude": 32.63,
    "longtitude": 116.98
  },
  {
    "name": "Doha",
    "latitude": 25.2866,
    "longtitude": 51.533
  },
  {
    "name": "Kuala Lumpur",
    "latitude": 3.1667,
    "longtitude": 101.7
  },
  {
    "name": "Maputo",
    "latitude": -25.9553,
    "longtitude": 32.5892
  },
  {
    "name": "Kaduna",
    "latitude": 10.52,
    "longtitude": 7.44
  },
  {
    "name": "Gwangju",
    "latitude": 35.171,
    "longtitude": 126.9104
  },
  {
    "name": "Kawasaki",
    "latitude": 35.53,
    "longtitude": 139.705
  },
  {
    "name": "San Salvador",
    "latitude": 13.71,
    "longtitude": -89.203
  },
  {
    "name": "Suining",
    "latitude": 30.5333,
    "longtitude": 105.5333
  },
  {
    "name": "Lyon",
    "latitude": 45.77,
    "longtitude": 4.83
  },
  {
    "name": "Karaj",
    "latitude": 35.8004,
    "longtitude": 50.97
  },
  {
    "name": "Kampala",
    "latitude": 0.3167,
    "longtitude": 32.5833
  },
  {
    "name": "Tabriz",
    "latitude": 38.0863,
    "longtitude": 46.3012
  },
  {
    "name": "The Hague",
    "latitude": 52.08,
    "longtitude": 4.27
  },
  {
    "name": "Davao",
    "latitude": 7.11,
    "longtitude": 125.63
  },
  {
    "name": "Marseille",
    "latitude": 43.29,
    "longtitude": 5.375
  },
  {
    "name": "Meerut",
    "latitude": 29.0004,
    "longtitude": 77.7
  },
  {
    "name": "Mianyang",
    "latitude": 31.47,
    "longtitude": 104.77
  },
  {
    "name": "Semarang",
    "latitude": -6.9666,
    "longtitude": 110.42
  },
  {
    "name": "Faridabad",
    "latitude": 28.4333,
    "longtitude": 77.3167
  },
  {
    "name": "Novosibirsk",
    "latitude": 55.03,
    "longtitude": 82.96
  },
  {
    "name": "Makkah",
    "latitude": 21.43,
    "longtitude": 39.82
  },
  {
    "name": "Dubai",
    "latitude": 25.23,
    "longtitude": 55.28
  },
  {
    "name": "Milwaukee",
    "latitude": 43.064,
    "longtitude": -87.9669
  },
  {
    "name": "Auckland",
    "latitude": -36.8481,
    "longtitude": 174.763
  },
  {
    "name": "Maanshan",
    "latitude": 31.7304,
    "longtitude": 118.48
  },
  {
    "name": "Brazzaville",
    "latitude": -4.2592,
    "longtitude": 15.2847
  },
  {
    "name": "Lubumbashi",
    "latitude": -11.68,
    "longtitude": 27.48
  },
  {
    "name": "Yiyang",
    "latitude": 28.6004,
    "longtitude": 112.33
  },
  {
    "name": "Varanasi",
    "latitude": 25.33,
    "longtitude": 83
  },
  {
    "name": "Ciudad Juárez",
    "latitude": 31.6904,
    "longtitude": -106.49
  },
  {
    "name": "Ghaziabad",
    "latitude": 28.6604,
    "longtitude": 77.4084
  },
  {
    "name": "Pretoria",
    "latitude": -25.7069,
    "longtitude": 28.2294
  },
  {
    "name": "Heze",
    "latitude": 35.23,
    "longtitude": 115.45
  },
  {
    "name": "Porto",
    "latitude": 41.15,
    "longtitude": -8.62
  },
  {
    "name": "Lusaka",
    "latitude": -15.4166,
    "longtitude": 28.2833
  },
  {
    "name": "Asansol",
    "latitude": 23.6833,
    "longtitude": 86.9833
  },
  {
    "name": "Changzhou",
    "latitude": 31.78,
    "longtitude": 119.97
  },
  {
    "name": "Mosul",
    "latitude": 36.345,
    "longtitude": 43.145
  },
  {
    "name": "Yekaterinburg",
    "latitude": 56.85,
    "longtitude": 60.6
  },
  {
    "name": "Peshawar",
    "latitude": 34.005,
    "longtitude": 71.535
  },
  {
    "name": "Mandalay",
    "latitude": 21.97,
    "longtitude": 96.085
  },
  {
    "name": "Jamshedpur",
    "latitude": 22.7875,
    "longtitude": 86.1975
  },
  {
    "name": "Mbuji-Mayi",
    "latitude": -6.15,
    "longtitude": 23.6
  },
  {
    "name": "Madurai",
    "latitude": 9.92,
    "longtitude": 78.12
  },
  {
    "name": "Adana",
    "latitude": 36.995,
    "longtitude": 35.32
  },
  {
    "name": "Sheffield",
    "latitude": 53.3667,
    "longtitude": -1.5
  },
  {
    "name": "Jabalpur",
    "latitude": 23.1751,
    "longtitude": 79.9551
  },
  {
    "name": "San José",
    "latitude": 9.935,
    "longtitude": -84.0841
  },
  {
    "name": "Panama City",
    "latitude": 8.968,
    "longtitude": -79.533
  },
  {
    "name": "Nizhny Novgorod",
    "latitude": 56.333,
    "longtitude": 44.0001
  },
  {
    "name": "Chifeng",
    "latitude": 42.27,
    "longtitude": 118.95
  },
  {
    "name": "Duisburg",
    "latitude": 51.43,
    "longtitude": 6.75
  },
  {
    "name": "Munich",
    "latitude": 48.1299,
    "longtitude": 11.575
  },
  {
    "name": "Stockholm",
    "latitude": 59.3508,
    "longtitude": 18.0973
  },
  {
    "name": "Huaiyin",
    "latitude": 33.58,
    "longtitude": 119.03
  },
  {
    "name": "Ujungpandang",
    "latitude": -5.14,
    "longtitude": 119.432
  },
  {
    "name": "Rajkot",
    "latitude": 22.31,
    "longtitude": 70.8
  },
  {
    "name": "Dhanbad",
    "latitude": 23.8004,
    "longtitude": 86.42
  },
  {
    "name": "Mudangiang",
    "latitude": 44.575,
    "longtitude": 129.59
  },
  {
    "name": "Geneva",
    "latitude": 46.21,
    "longtitude": 6.14
  },
  {
    "name": "Shiraz",
    "latitude": 29.63,
    "longtitude": 52.57
  },
  {
    "name": "Huzhou",
    "latitude": 30.8704,
    "longtitude": 120.1
  },
  {
    "name": "Tianshui",
    "latitude": 34.6,
    "longtitude": 105.92
  },
  {
    "name": "Lupanshui",
    "latitude": 26.5944,
    "longtitude": 104.8333
  },
  {
    "name": "Düsseldorf",
    "latitude": 51.2204,
    "longtitude": 6.78
  },
  {
    "name": "Maoming",
    "latitude": 21.9204,
    "longtitude": 110.87
  },
  {
    "name": "Seville",
    "latitude": 37.405,
    "longtitude": -5.98
  },
  {
    "name": "Amritsar",
    "latitude": 31.64,
    "longtitude": 74.87
  },
  {
    "name": "Vila Velha",
    "latitude": -20.3676,
    "longtitude": -40.318
  },
  {
    "name": "Vila Velha",
    "latitude": 3.2167,
    "longtitude": -51.2167
  },
  {
    "name": "Almaty",
    "latitude": 43.325,
    "longtitude": 76.915
  },
  {
    "name": "Providence",
    "latitude": 41.8229,
    "longtitude": -71.4186
  },
  {
    "name": "Warangal",
    "latitude": 18.01,
    "longtitude": 79.58
  },
  {
    "name": "Rosario",
    "latitude": -32.9511,
    "longtitude": -60.6663
  },
  {
    "name": "Allahabad",
    "latitude": 25.455,
    "longtitude": 81.84
  },
  {
    "name": "Benin City",
    "latitude": 6.3405,
    "longtitude": 5.62
  },
  {
    "name": "Maceió",
    "latitude": -9.62,
    "longtitude": -35.73
  },
  {
    "name": "Jining",
    "latitude": 35.4004,
    "longtitude": 116.55
  },
  {
    "name": "Sofia",
    "latitude": 42.6833,
    "longtitude": 23.3167
  },
  {
    "name": "Abbottabad",
    "latitude": 34.1495,
    "longtitude": 73.1995
  },
  {
    "name": "Banghazi",
    "latitude": 32.1167,
    "longtitude": 20.0667
  },
  {
    "name": "Cilacap",
    "latitude": -7.7188,
    "longtitude": 109.0154
  },
  {
    "name": "Prague",
    "latitude": 50.0833,
    "longtitude": 14.466
  },
  {
    "name": "Glasgow",
    "latitude": 55.8744,
    "longtitude": -4.2507
  },
  {
    "name": "Leshan",
    "latitude": 29.5671,
    "longtitude": 103.7333
  },
  {
    "name": "Jacksonville",
    "latitude": 30.3322,
    "longtitude": -81.6749
  },
  {
    "name": "Ouagadougou",
    "latitude": 12.3703,
    "longtitude": -1.5247
  },
  {
    "name": "Adelaide",
    "latitude": -34.935,
    "longtitude": 138.6
  },
  {
    "name": "Ottawa",
    "latitude": 45.4167,
    "longtitude": -75.7
  },
  {
    "name": "Shangrao",
    "latitude": 28.4704,
    "longtitude": 117.97
  },
  {
    "name": "Torreón",
    "latitude": 25.5701,
    "longtitude": -103.42
  },
  {
    "name": "Srinagar",
    "latitude": 34.1,
    "longtitude": 74.815
  },
  {
    "name": "Samara",
    "latitude": 53.195,
    "longtitude": 50.1513
  },
  {
    "name": "Vijayawada",
    "latitude": 16.52,
    "longtitude": 80.63
  },
  {
    "name": "Omsk",
    "latitude": 54.99,
    "longtitude": 73.4
  },
  {
    "name": "Newcastle",
    "latitude": -32.8453,
    "longtitude": 151.815
  },
  {
    "name": "Yulin",
    "latitude": 22.63,
    "longtitude": 110.15
  },
  {
    "name": "Nampo",
    "latitude": 38.7669,
    "longtitude": 125.4524
  },
  {
    "name": "Xianyang",
    "latitude": 34.3456,
    "longtitude": 108.7147
  },
  {
    "name": "Cagayan de Oro",
    "latitude": 8.4508,
    "longtitude": 124.6853
  },
  {
    "name": "Can Tho",
    "latitude": 10.05,
    "longtitude": 105.77
  },
  {
    "name": "Barquisimeto",
    "latitude": 10.05,
    "longtitude": -69.3
  },
  {
    "name": "Kazan",
    "latitude": 55.7499,
    "longtitude": 49.1263
  },
  {
    "name": "Helsinki",
    "latitude": 60.1756,
    "longtitude": 24.9341
  },
  {
    "name": "Aurangabad",
    "latitude": 19.8957,
    "longtitude": 75.3203
  },
  {
    "name": "Calgary",
    "latitude": 51.083,
    "longtitude": -114.08
  },
  {
    "name": "Nezahualcoyotl",
    "latitude": 19.41,
    "longtitude": -99.03
  },
  {
    "name": "Zürich",
    "latitude": 47.38,
    "longtitude": 8.55
  },
  {
    "name": "Baoding",
    "latitude": 38.8704,
    "longtitude": 115.48
  },
  {
    "name": "Zigong",
    "latitude": 29.4,
    "longtitude": 104.78
  },
  {
    "name": "Sharjah",
    "latitude": 25.3714,
    "longtitude": 55.4065
  },
  {
    "name": "Yerevan",
    "latitude": 40.1812,
    "longtitude": 44.5136
  },
  {
    "name": "Mogadishu",
    "latitude": 2.0667,
    "longtitude": 45.3667
  },
  {
    "name": "Huambo",
    "latitude": -12.75,
    "longtitude": 15.76
  },
  {
    "name": "Ankang",
    "latitude": 32.68,
    "longtitude": 109.02
  },
  {
    "name": "Tbilisi",
    "latitude": 41.725,
    "longtitude": 44.7908
  },
  {
    "name": "Ikare",
    "latitude": 7.5304,
    "longtitude": 5.76
  },
  {
    "name": "Belgrade",
    "latitude": 44.8186,
    "longtitude": 20.468
  },
  {
    "name": "Salt Lake City",
    "latitude": 40.7774,
    "longtitude": -111.9301
  },
  {
    "name": "Bhilai",
    "latitude": 21.2167,
    "longtitude": 81.4333
  },
  {
    "name": "Jinhua",
    "latitude": 29.12,
    "longtitude": 119.65
  },
  {
    "name": "Chelyabinsk",
    "latitude": 55.155,
    "longtitude": 61.4387
  },
  {
    "name": "Natal",
    "latitude": -5.78,
    "longtitude": -35.24
  },
  {
    "name": "Dushanbe",
    "latitude": 38.56,
    "longtitude": 68.7739
  },
  {
    "name": "København",
    "latitude": 55.6786,
    "longtitude": 12.5635
  },
  {
    "name": "Changwon",
    "latitude": 35.2191,
    "longtitude": 128.5836
  },
  {
    "name": "Zhuzhou",
    "latitude": 27.83,
    "longtitude": 113.15
  },
  {
    "name": "Suwon",
    "latitude": 37.2578,
    "longtitude": 127.0109
  },
  {
    "name": "Nashville",
    "latitude": 36.1714,
    "longtitude": -86.7844
  },
  {
    "name": "Vereeniging",
    "latitude": -26.6496,
    "longtitude": 27.96
  },
  {
    "name": "Xiangfan",
    "latitude": 32.02,
    "longtitude": 112.13
  },
  {
    "name": "Memphis",
    "latitude": 35.1047,
    "longtitude": -89.9773
  },
  {
    "name": "Ulsan",
    "latitude": 35.5467,
    "longtitude": 129.317
  },
  {
    "name": "Zhucheng",
    "latitude": 35.99,
    "longtitude": 119.3801
  },
  {
    "name": "Amman",
    "latitude": 31.95,
    "longtitude": 35.9333
  },
  {
    "name": "Richmond",
    "latitude": 37.5295,
    "longtitude": -77.4756
  },
  {
    "name": "Dublin",
    "latitude": 53.3331,
    "longtitude": -6.2489
  },
  {
    "name": "Edmonton",
    "latitude": 53.55,
    "longtitude": -113.5
  },
  {
    "name": "Sholapur",
    "latitude": 17.6704,
    "longtitude": 75.9
  },
  {
    "name": "Rostov",
    "latitude": 47.2346,
    "longtitude": 39.7127
  },
  {
    "name": "Dnipro",
    "latitude": 48.48,
    "longtitude": 35
  },
  {
    "name": "Xining",
    "latitude": 36.62,
    "longtitude": 101.77
  },
  {
    "name": "Zhangjiakou",
    "latitude": 40.83,
    "longtitude": 114.93
  },
  {
    "name": "Gaziantep",
    "latitude": 37.075,
    "longtitude": 37.385
  },
  {
    "name": "Lille",
    "latitude": 50.65,
    "longtitude": 3.08
  },
  {
    "name": "Ranchi",
    "latitude": 23.37,
    "longtitude": 85.33
  },
  {
    "name": "Monrovia",
    "latitude": 6.3106,
    "longtitude": -10.8048
  },
  {
    "name": "São Luís",
    "latitude": -2.516,
    "longtitude": -44.266
  },
  {
    "name": "Amsterdam",
    "latitude": 52.35,
    "longtitude": 4.9166
  },
  {
    "name": "Jerusalem",
    "latitude": 31.7784,
    "longtitude": 35.2066
  },
  {
    "name": "New Orleans",
    "latitude": 30.0687,
    "longtitude": -89.9288
  },
  {
    "name": "Guatemala",
    "latitude": 14.6211,
    "longtitude": -90.527
  },
  {
    "name": "Florianópolis",
    "latitude": -27.58,
    "longtitude": -48.52
  },
  {
    "name": "Zhuhai",
    "latitude": 22.2769,
    "longtitude": 113.5678
  },
  {
    "name": "Port Elizabeth",
    "latitude": -33.97,
    "longtitude": 25.6
  },
  {
    "name": "Port Harcourt",
    "latitude": 4.81,
    "longtitude": 7.01
  },
  {
    "name": "Jiamusi",
    "latitude": 46.83,
    "longtitude": 130.35
  },
  {
    "name": "Raleigh",
    "latitude": 35.8323,
    "longtitude": -78.6439
  },
  {
    "name": "Ufa",
    "latitude": 54.79,
    "longtitude": 56.04
  },
  {
    "name": "Hengyang",
    "latitude": 26.88,
    "longtitude": 112.59
  },
  {
    "name": "Benxi",
    "latitude": 41.3304,
    "longtitude": 123.75
  },
  {
    "name": "Louisville",
    "latitude": 38.1662,
    "longtitude": -85.6488
  },
  {
    "name": "Haifa",
    "latitude": 32.8204,
    "longtitude": 34.98
  },
  {
    "name": "Medina",
    "latitude": 24.5,
    "longtitude": 39.58
  },
  {
    "name": "Bucaramanga",
    "latitude": 7.1301,
    "longtitude": -73.1259
  },
  {
    "name": "Maracay",
    "latitude": 10.2469,
    "longtitude": -67.5958
  },
  {
    "name": "Rotterdam",
    "latitude": 51.92,
    "longtitude": 4.48
  },
  {
    "name": "Hims",
    "latitude": 34.73,
    "longtitude": 36.72
  },
  {
    "name": "Cologne",
    "latitude": 50.93,
    "longtitude": 6.95
  },
  {
    "name": "Qinhuangdao",
    "latitude": 39.9304,
    "longtitude": 119.62
  },
  {
    "name": "Fez",
    "latitude": 34.0546,
    "longtitude": -5.0004
  },
  {
    "name": "Aden",
    "latitude": 12.7797,
    "longtitude": 45.0095
  },
  {
    "name": "Da Nang",
    "latitude": 16.06,
    "longtitude": 108.25
  },
  {
    "name": "Cochabamba",
    "latitude": -17.41,
    "longtitude": -66.17
  },
  {
    "name": "Yongzhou",
    "latitude": 26.2304,
    "longtitude": 111.62
  },
  {
    "name": "Baoshan",
    "latitude": 25.12,
    "longtitude": 99.15
  }
];

export const cities = rawCities.map((city, id) => ({...city, id}));
