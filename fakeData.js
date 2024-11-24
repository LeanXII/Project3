export const nearbySuggestions = {
    "data": [
        {
            "id": 116980,
            "wikiDataId": "Q16565",
            "type": "CITY",
            "name": "Charlotte",
            "country": "United States of America",
            "countryCode": "US",
            "region": "North Carolina",
            "regionCode": "NC",
            "regionWdId": "Q1454",
            "latitude": 35.226944444,
            "longitude": -80.843333333,
            "population": 879709,
            "distance": 0.32
        },
        {
            "id": 116183,
            "wikiDataId": "Q49238",
            "type": "CITY",
            "name": "Greensboro",
            "country": "United States of America",
            "countryCode": "US",
            "region": "North Carolina",
            "regionCode": "NC",
            "regionWdId": "Q1454",
            "latitude": 36.08,
            "longitude": -79.819444444,
            "population": 299035,
            "distance": 82.08
        },
        {
            "id": 116132,
            "wikiDataId": "Q49227",
            "type": "CITY",
            "name": "Winston-Salem",
            "country": "United States of America",
            "countryCode": "US",
            "region": "North Carolina",
            "regionCode": "NC",
            "regionWdId": "Q1454",
            "latitude": 36.1025,
            "longitude": -80.260555555,
            "population": 249545,
            "distance": 68.48
        }
    ],
    "links": [
        {
            "rel": "first",
            "href": "/v1/geo/locations/35.2316-80.8428/nearbyPlaces?offset=0&limit=3&radius=100&types=CITY&sort=-population,name"
        },
        {
            "rel": "next",
            "href": "/v1/geo/locations/35.2316-80.8428/nearbyPlaces?offset=3&limit=3&radius=100&types=CITY&sort=-population,name"
        },
        {
            "rel": "last",
            "href": "/v1/geo/locations/35.2316-80.8428/nearbyPlaces?offset=2031&limit=3&radius=100&types=CITY&sort=-population,name"
        }
    ],
    "metadata": {
        "currentOffset": 0,
        "totalCount": 2032
    }
}

// {
//     "head": {
//         "vars": [
//             "attraction",
//             "attractionLabel",
//             "gps"
//         ]
//     },
//     "results": {
//         "bindings": [
//             {
//                 "attraction": {
//                     "type": "uri",
//                     "value": "http://www.wikidata.org/entity/Q373379"
//                 },
//                 "gps": {
//                     "datatype": "http://www.opengis.net/ont/geosparql#wktLiteral",
//                     "type": "literal",
//                     "value": "Point(-80.28991 36.11995)"
//                 },
//                 "attractionLabel": {
//                     "xml:lang": "en",
//                     "type": "literal",
//                     "value": "Southeastern Center for Contemporary Art"
//                 }
//             },
//             {
//                 "attraction": {
//                     "type": "uri",
//                     "value": "http://www.wikidata.org/entity/Q844445"
//                 },
//                 "gps": {
//                     "datatype": "http://www.opengis.net/ont/geosparql#wktLiteral",
//                     "type": "literal",
//                     "value": "Point(-80.242222 36.0875)"
//                 },
//                 "attractionLabel": {
//                     "xml:lang": "en",
//                     "type": "literal",
//                     "value": "Old Salem"
//                 }
//             }
//         ]
//     }
// }

// {
//     "head": {
//         "vars": [
//             "attraction",
//             "attractionLabel",
//             "gps"
//         ]
//     },
//     "results": {
//         "bindings": []
//     }
// }

export const attractions = {
    "head": {
        "vars": [
            "attraction",
            "attractionLabel",
            "gps"
        ]
    },
    "results": {
        "bindings": [
            {
                "attraction": {
                    "type": "uri",
                    "value": "http://www.wikidata.org/entity/Q2940113"
                },
                "gps": {
                    "datatype": "http://www.opengis.net/ont/geosparql#wktLiteral",
                    "type": "literal",
                    "value": "Point(-80.9397 35.1043)"
                },
                "attractionLabel": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Carowinds"
                }
            },
            {
                "attraction": {
                    "type": "uri",
                    "value": "http://www.wikidata.org/entity/Q4878575"
                },
                "gps": {
                    "datatype": "http://www.opengis.net/ont/geosparql#wktLiteral",
                    "type": "literal",
                    "value": "Point(-80.8473 35.2244)"
                },
                "attractionLabel": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Bechtler Museum of Modern Art"
                }
            },
            {
                "attraction": {
                    "type": "uri",
                    "value": "http://www.wikidata.org/entity/Q7332308"
                },
                "gps": {
                    "datatype": "http://www.opengis.net/ont/geosparql#wktLiteral",
                    "type": "literal",
                    "value": "Point(-80.9428 35.1042)"
                },
                "attractionLabel": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Ricochet"
                }
            },
            {
                "attraction": {
                    "type": "uri",
                    "value": "http://www.wikidata.org/entity/Q6869561"
                },
                "gps": {
                    "datatype": "http://www.opengis.net/ont/geosparql#wktLiteral",
                    "type": "literal",
                    "value": "Point(-80.84831 35.22442)"
                },
                "attractionLabel": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Mint Museum"
                }
            },
            {
                "attraction": {
                    "type": "uri",
                    "value": "http://www.wikidata.org/entity/Q16983412"
                },
                "gps": {
                    "datatype": "http://www.opengis.net/ont/geosparql#wktLiteral",
                    "type": "literal",
                    "value": "Point(-80.848713888 35.223427777)"
                },
                "attractionLabel": {
                    "xml:lang": "en",
                    "type": "literal",
                    "value": "Harvey B. Gantt Center"
                }
            }
        ]
    }
}

