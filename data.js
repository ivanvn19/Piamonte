var APP_DATA = {
  "scenes": [
    {
      "id": "0-acceso-por-ascensor-",
      "name": "Acceso por ascensor ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.03305135718529151,
        "pitch": 0.33093296391513505,
        "fov": 1.2978488763571745
      },
      "linkHotspots": [
        {
          "yaw": 0.8776283260638635,
          "pitch": 0.12495361322120857,
          "rotation": 0,
          "target": "1-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15487018893142412,
          "pitch": 0.05814256892248437,
          "rotation": 0,
          "target": "2-ingreso-al-dpto"
        },
        {
          "yaw": -2.8007636698393057,
          "pitch": 0.05497660466558685,
          "rotation": 1.5707963267948966,
          "target": "0-acceso-por-ascensor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingreso-al-dpto",
      "name": "Ingreso al dpto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3935907692049163,
        "pitch": 0.010076466192593614,
        "fov": 1.2978488763571745
      },
      "linkHotspots": [
        {
          "yaw": 0.10655243295085448,
          "pitch": 0.1437904001351491,
          "rotation": 0,
          "target": "3-living--comedor"
        },
        {
          "yaw": 1.7059765440767265,
          "pitch": 0.2243083616021888,
          "rotation": 0,
          "target": "1-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living--comedor",
      "name": "Living / comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2567419646709155,
          "pitch": 0.06653620245852565,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": -0.5057622343534316,
          "pitch": 0.10212559759001927,
          "rotation": 0,
          "target": "5-ingreso-a-bao--habitacin"
        },
        {
          "yaw": 0.2214113054075888,
          "pitch": 0.07931151597129471,
          "rotation": 0,
          "target": "8-living--comedor"
        },
        {
          "yaw": 2.7936958471484257,
          "pitch": 0.13398971860346087,
          "rotation": 0,
          "target": "2-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6460648477774331,
        "pitch": 0.3408216506318862,
        "fov": 1.2978488763571745
      },
      "linkHotspots": [
        {
          "yaw": -2.6971820349098827,
          "pitch": 0.20081375568791593,
          "rotation": 0,
          "target": "3-living--comedor"
        },
        {
          "yaw": 2.7267849447249795,
          "pitch": 0.1316977017155132,
          "rotation": 4.71238898038469,
          "target": "8-living--comedor"
        },
        {
          "yaw": 2.2373331243072796,
          "pitch": 0.1590231103748465,
          "rotation": 4.71238898038469,
          "target": "5-ingreso-a-bao--habitacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ingreso-a-bao--habitacin",
      "name": "Ingreso a baño / habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.16740308241741175,
        "pitch": 0.20909523098567462,
        "fov": 1.2978488763571745
      },
      "linkHotspots": [
        {
          "yaw": -2.733491778483007,
          "pitch": 0.2040569978893778,
          "rotation": 0,
          "target": "3-living--comedor"
        },
        {
          "yaw": 1.7210459257005128,
          "pitch": 0.2610873897084325,
          "rotation": 4.71238898038469,
          "target": "8-living--comedor"
        },
        {
          "yaw": 0.7408853564511872,
          "pitch": 0.07212783926097543,
          "rotation": 0,
          "target": "6-habitacin"
        },
        {
          "yaw": -0.5755190453742074,
          "pitch": 0.0024523874391100264,
          "rotation": 0,
          "target": "7-bao"
        },
        {
          "yaw": -1.6638231729946327,
          "pitch": 0.04389297813003523,
          "rotation": 0,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-habitacin",
      "name": "Habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.19116461675481844,
        "pitch": 0.16786626902438329,
        "fov": 1.2978488763571745
      },
      "linkHotspots": [
        {
          "yaw": 2.7946303663960776,
          "pitch": 0.14681364116359674,
          "rotation": 0,
          "target": "5-ingreso-a-bao--habitacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1905614591463145,
        "pitch": 0.20656755694818862,
        "fov": 1.2978488763571745
      },
      "linkHotspots": [
        {
          "yaw": -2.933764787478111,
          "pitch": 0.2567066925492867,
          "rotation": 0,
          "target": "5-ingreso-a-bao--habitacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-living--comedor",
      "name": "Living / comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.18343766628103175,
        "pitch": 0.10076466192595213,
        "fov": 1.2978488763571745
      },
      "linkHotspots": [
        {
          "yaw": -3.1207250803734627,
          "pitch": 0.11494104719490039,
          "rotation": 0,
          "target": "3-living--comedor"
        },
        {
          "yaw": -2.374220047775891,
          "pitch": 0.07547280950090496,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": 0.3108922182847138,
          "pitch": 0.16416070883342115,
          "rotation": 0,
          "target": "9-balcn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-balcn",
      "name": "Balcón",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.05699034292226912,
        "pitch": 0.18389550801486187,
        "fov": 1.2978488763571745
      },
      "linkHotspots": [
        {
          "yaw": 3.065750439479338,
          "pitch": 0.08285614267088093,
          "rotation": 0,
          "target": "8-living--comedor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Piamonte",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
