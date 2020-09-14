export const myLocation = [
    {
      "Version": 1,
      "Key": "16890",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Yerevan",
      "EnglishName": "Yerevan",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
      },
      "Country": {
        "ID": "AM",
        "LocalizedName": "Armenia",
        "EnglishName": "Armenia"
      },
      "AdministrativeArea": {
        "ID": "ER",
        "LocalizedName": "Yerevan",
        "EnglishName": "Yerevan",
        "Level": 1,
        "LocalizedType": "Province",
        "EnglishType": "Province",
        "CountryID": "AM"
      },
      "TimeZone": {
        "Code": "AMT",
        "Name": "Asia/Yerevan",
        "GmtOffset": 4,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
      },
      "GeoPosition": {
        "Latitude": 40.208,
        "Longitude": 44.533,
        "Elevation": {
          "Metric": {
            "Value": 1211,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 3972,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence"
      ],
      "Details": {
        "Key": "16890",
        "StationCode": "UYER",
        "StationGmtOffset": 4,
        "BandMap": "ASIA",
        "Climo": "UDYZ",
        "LocalRadar": "",
        "MediaRegion": null,
        "Metar": "UDYZ",
        "NXMetro": "",
        "NXState": "",
        "Population": 1107800,
        "PrimaryWarningCountyCode": "",
        "PrimaryWarningZoneCode": "",
        "Satellite": "MIDE",
        "Synoptic": "37788",
        "MarineStation": "",
        "MarineStationGMTOffset": null,
        "VideoCode": "",
        "LocationStem": "am/yerevan/16890",
        "PartnerID": null,
        "Sources": [
          {
            "DataType": "CurrentConditions",
            "Source": "AccuWeather",
            "SourceId": 1
          },
          {
            "DataType": "DailyForecast",
            "Source": "AccuWeather",
            "SourceId": 1
          },
          {
            "DataType": "ForecastConfidence",
            "Source": "AccuWeather",
            "SourceId": 1
          },
          {
            "DataType": "HourlyForecast",
            "Source": "AccuWeather",
            "SourceId": 1
          },
          {
            "DataType": "AirQualityCurrentConditions",
            "Source": "Plume Labs",
            "SourceId": 63,
            "PartnerSourceUrl": "https://air.plumelabs.com/air-quality-in-yerevan-2Agk"
          },
          {
            "DataType": "AirQualityForecasts",
            "Source": "Plume Labs",
            "SourceId": 63,
            "PartnerSourceUrl": "https://air.plumelabs.com/air-quality-in-yerevan-2Agk"
          },
          {
            "DataType": "Alerts",
            "Source": "United States Geological Survey",
            "SourceId": 70
          }
        ],
        "CanonicalPostalCode": "",
        "CanonicalLocationKey": "16890"
      }
    }
  ]

  export const currentConditions = [
    {
      "LocalObservationDateTime": "2020-09-07T14:36:00+04:00",
      "EpochTime": 1599474960,
      "WeatherText": "Mostly sunny",
      "WeatherIcon": 2,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 33.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 92,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperature": {
        "Metric": {
          "Value": 35.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 96,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperatureShade": {
        "Metric": {
          "Value": 32,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 90,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RelativeHumidity": 14,
      "IndoorRelativeHumidity": 14,
      "DewPoint": {
        "Metric": {
          "Value": 2.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 36,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Wind": {
        "Direction": {
          "Degrees": 203,
          "Localized": "SSW",
          "English": "SSW"
        },
        "Speed": {
          "Metric": {
            "Value": 7.3,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 4.5,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "WindGust": {
        "Speed": {
          "Metric": {
            "Value": 10.2,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 6.4,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "UVIndex": 5,
      "UVIndexText": "Moderate",
      "Visibility": {
        "Metric": {
          "Value": 16.1,
          "Unit": "km",
          "UnitType": 6
        },
        "Imperial": {
          "Value": 10,
          "Unit": "mi",
          "UnitType": 2
        }
      },
      "ObstructionsToVisibility": "",
      "CloudCover": 17,
      "Ceiling": {
        "Metric": {
          "Value": 9144,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 30000,
          "Unit": "ft",
          "UnitType": 0
        }
      },
      "Pressure": {
        "Metric": {
          "Value": 1011.6,
          "Unit": "mb",
          "UnitType": 14
        },
        "Imperial": {
          "Value": 29.87,
          "Unit": "inHg",
          "UnitType": 12
        }
      },
      "PressureTendency": {
        "LocalizedText": "Steady",
        "Code": "S"
      },
      "Past24HourTemperatureDeparture": {
        "Metric": {
          "Value": 0.7,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 1,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "ApparentTemperature": {
        "Metric": {
          "Value": 30.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 87,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WindChillTemperature": {
        "Metric": {
          "Value": 33.3,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 92,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WetBulbTemperature": {
        "Metric": {
          "Value": 15.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 60,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Precip1hr": {
        "Metric": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PrecipitationSummary": {
        "Precipitation": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PastHour": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past3Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past6Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past9Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past12Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past18Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past24Hours": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        }
      },
      "TemperatureSummary": {
        "Past6HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 22,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 72,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 33.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 92,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past12HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 18,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 64,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 33.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 92,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past24HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 18,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 64,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 35.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 95,
              "Unit": "F",
              "UnitType": 18
            }
          }
        }
      },
      "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/current-weather/16890?lang=en-us",
      "Link": "http://www.accuweather.com/en/am/yerevan/16890/current-weather/16890?lang=en-us"
    }
  ]

  export const foreCast5DayF = {
    "Headline": {
      "EffectiveDate": "2020-09-15T19:00:00+04:00",
      "EffectiveEpochDate": 1600182000,
      "Severity": 5,
      "Text": "A thunderstorm Tuesday night",
      "Category": "thunderstorm",
      "EndDate": "2020-09-16T07:00:00+04:00",
      "EndEpochDate": 1600225200,
      "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/extended-weather-forecast/16890?lang=en-us",
      "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2020-09-14T07:00:00+04:00",
        "EpochDate": 1600052400,
        "Temperature": {
          "Minimum": {
            "Value": 63,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 88,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=1&lang=en-us"
      },
      {
        "Date": "2020-09-15T07:00:00+04:00",
        "EpochDate": 1600138800,
        "Temperature": {
          "Minimum": {
            "Value": 60,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 88,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 41,
          "IconPhrase": "Partly cloudy w/ t-storms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=2&lang=en-us"
      },
      {
        "Date": "2020-09-16T07:00:00+04:00",
        "EpochDate": 1600225200,
        "Temperature": {
          "Minimum": {
            "Value": 60,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 86,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=3&lang=en-us"
      },
      {
        "Date": "2020-09-17T07:00:00+04:00",
        "EpochDate": 1600311600,
        "Temperature": {
          "Minimum": {
            "Value": 60,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 86,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=4&lang=en-us"
      },
      {
        "Date": "2020-09-18T07:00:00+04:00",
        "EpochDate": 1600398000,
        "Temperature": {
          "Minimum": {
            "Value": 62,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 88,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=5&lang=en-us"
      }
    ]
  }

  export const foreCast5DayC = {
    "Headline": {
      "EffectiveDate": "2020-09-15T19:00:00+04:00",
      "EffectiveEpochDate": 1600182000,
      "Severity": 5,
      "Text": "A thunderstorm Tuesday night",
      "Category": "thunderstorm",
      "EndDate": "2020-09-16T07:00:00+04:00",
      "EndEpochDate": 1600225200,
      "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/extended-weather-forecast/16890?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2020-09-14T07:00:00+04:00",
        "EpochDate": 1600052400,
        "Temperature": {
          "Minimum": {
            "Value": 17.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 31,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2020-09-15T07:00:00+04:00",
        "EpochDate": 1600138800,
        "Temperature": {
          "Minimum": {
            "Value": 15.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 31.4,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 41,
          "IconPhrase": "Partly cloudy w/ t-storms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2020-09-16T07:00:00+04:00",
        "EpochDate": 1600225200,
        "Temperature": {
          "Minimum": {
            "Value": 15.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2020-09-17T07:00:00+04:00",
        "EpochDate": 1600311600,
        "Temperature": {
          "Minimum": {
            "Value": 15.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2020-09-18T07:00:00+04:00",
        "EpochDate": 1600398000,
        "Temperature": {
          "Minimum": {
            "Value": 16.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.9,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/am/yerevan/16890/daily-weather-forecast/16890?day=5&unit=c&lang=en-us"
      }
    ]
  }