import {
  ChoroplethLayer,
  LarkMap,
  BubbleLayer,
  MapThemeControl,
  ZoomControl,
} from "@antv/larkmap";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import React, { useState } from "react" 


//search



//LarkMap
const config = {
  mapType: "Mapbox",
  mapOptions: {
    style: "mapbox://styles/mapbox/satellite-streets-v10",
    center: [103.69329, 1.2692],
    zoom: 3,        
    token:
      "pk.eyJ1IjoiYmFpaGVpbmV0IiwiYSI6ImNsYXhseTZodDBvZTgzd3FteHdlZXl5aHMifQ.O6u0tgmsvrTJuVAdzqSFjw",
  },
};

//ChoroplethLayer
const layerOptions = {
  autoFit: true,
  fillColor: { field: "color" },
  opacity: 0.3,
  strokeColor: "yellow",
  lineWidth: 3,
  state: {
    active: { strokeColor: "green", lineWidth: 1.5, lineOpacity: 0.8 },
    select: { strokeColor: "red", lineWidth: 1.5, lineOpacity: 0.8 },
  },
  label: {
    field: "name",
    visible: true,
    style: { fill: "red", fontSize: 12, stroke: "#fff", strokeWidth: 2 },
  },
};

//Bubblelayer options
const bubbleLayerOptions = {
  autoFit: true,
  radius: {
    field: "assetDescription",
    value: ({ battery }) => battery,
  },
  opacity: 0.8,
  strokeColor: "blue",
  lineWidth: 1,
  state: {
    active: { strokeColor: "red", lineWidth: 2, lineOpacity: 1 },
  },
  minZoom: 2,
  label: {
    field: "assetDescription",
    visible: true,
    style: {
      fill: "#fcf7f7",
      fontSize: 8,
      stroke: "#fcf7f7",
      strokeWidth: 0.5,
      textOffset: [0, -20],
    },
  },
};

const App = () => {
  //ChoroplethData
  const [options, setOptions] = useState(layerOptions);
  const [source, setSource] = useState({
    data:{
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            
            color: "#BD939D",
          },
          geometry: {
            coordinates: [
              [
                [
                  103.70320368931863,
                  1.2898602188581947
                ],
                [
                  103.7000275235215,
                  1.2859437871772883
                ],
                [
                  103.70094983532124,
                  1.2844965398479786
                ],
                [
                  103.7018206272839,
                  1.2834177984674824
                ],
                [
                  103.70201991303315,
                  1.2828428862499237
                ],
                [
                  103.7024590780747,
                  1.2825274844820456
                ],
                [
                  103.70333097927141,
                  1.2814631698115306
                ],
                [
                  103.70351838209461,
                  1.2811351404841247
                ],
                [
                  103.70346358264976,
                  1.2803842160586072
                ],
                [
                  103.70412936853722,
                  1.2796139505746282
                ],
                [
                  103.70415067738509,
                  1.2788692769152306
                ],
                [
                  103.7042249778554,
                  1.2785160240939177
                ],
                [
                  103.70518972981932,
                  1.2772896127753626
                ],
                [
                  103.70622874639747,
                  1.277439089061403
                ],
                [
                  103.70662468602228,
                  1.277273016233167
                ],
                [
                  103.70684262958099,
                  1.2769002236137652
                ],
                [
                  103.70681795516583,
                  1.2763967998212564
                ],
                [
                  103.70635729707743,
                  1.2759531354608384
                ],
                [
                  103.7060501485368,
                  1.2749746538499949
                ],
                [
                  103.70589872864764,
                  1.2747479279287433
                ],
                [
                  103.70695113077022,
                  1.2748990293658409
                ],
                [
                  103.70784599372132,
                  1.2750335069331697
                ],
                [
                  103.70856839027363,
                  1.2747814890407767
                ],
                [
                  103.70880314682825,
                  1.2748486403760353
                ],
                [
                  103.71009885695577,
                  1.2760385888751387
                ],
                [
                  103.71194011064136,
                  1.2769408456490936
                ],
                [
                  103.71182834761134,
                  1.2779261036699268
                ],
                [
                  103.71154483659711,
                  1.2793149209536665
                ],
                [
                  103.7113172238461,
                  1.2794357240484402
                ],
                [
                  103.70958159555232,
                  1.2787537723765041
                ],
                [
                  103.70827688306605,
                  1.2791672852108178
                ],
                [
                  103.70699291198264,
                  1.2816103183907614
                ],
                [
                  103.70687789513022,
                  1.282198912442155
                ],
                [
                  103.70742280391329,
                  1.2824689790650012
                ],
                [
                  103.7071319781079,
                  1.283002508246156
                ],
                [
                  103.70638826032342,
                  1.2844965285846826
                ],
                [
                  103.70648952145586,
                  1.2846969953867102
                ],
                [
                  103.70742769837261,
                  1.2851996838976447
                ],
                [
                  103.70630267018845,
                  1.2875323656157605
                ],
                [
                  103.70573598995378,
                  1.2876162316125743
                ],
                [
                  103.70545278046654,
                  1.287767343213929
                ],
                [
                  103.70420524537514,
                  1.2891110507483319
                ],
                [
                  103.70328513155744,
                  1.289945254432908
                ],
                [
                  103.70320368931863,
                  1.2898602188581947
                ],
              ],
            ],
            type: "LineString",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "TKN",
            color: "black",
            opacity: 0.9,
          },
          geometry: {
            coordinates: [
              [
                [
                  103.70474990118129,
                  1.2805617889957972
                ],
                [
                  103.70576928866677,
                  1.279223737489474
                ],
                [
                  103.70728669085884,
                  1.2801895210732965
                ],
                [
                  103.70641138663706,
                  1.2816141194165311
                ],
                [
                  103.70474990118129,
                  1.2805617889957972
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "TKS",
            color: "blue",
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [
                  103.70673883370671,
                  1.276188229547742
                ],
                [
                  103.70621241810767,
                  1.274900647937116
                ],
                [
                  103.70706987213111,
                  1.2750500152202022
                ],
                [
                  103.70768197597806,
                  1.2753296812413168
                ],
                [
                  103.70840891921364,
                  1.275024794164679
                ],
                [
                  103.70973728433967,
                  1.2762152555725805
                ],
                [
                  103.7097161412799,
                  1.2766410486827482
                ],
                [
                  103.70898771581392,
                  1.2778745128478306
                ],
                [
                  103.70673883370671,
                  1.276188229547742
                ],
              ],
            ],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "CCFU",
            color: "pink",
          },
          geometry: {
            coordinates: [
              [
                [
                  103.70687480883925,
                  1.276509337396405
                ],
                [
                  103.70714227385855,
                  1.2765013672900238
                ],
                [
                  103.70881998316742,
                  1.2777863399459193
                ],
                [
                  103.70868271028577,
                  1.2779903162102642
                ],
                [
                  103.70854424861474,
                  1.2778668578346526
                ],
                [
                  103.70822190680235,
                  1.278350103903108
                ],
                [
                  103.70766718401245,
                  1.277923770262987
                ],
                [
                  103.70747091371584,
                  1.2781826999682977
                ],
                [
                  103.70723525581644,
                  1.2779755692927068
                ],
                [
                  103.70741699291654,
                  1.277760963160162
                ],
                [
                  103.7067881440459,
                  1.2772190499078704
                ],
                [
                  103.70687480883925,
                  1.276509337396405
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "DHU",
            color: "#db1a1a",
          },
          geometry: {
            coordinates:  [
              [
                [
                  103.70766528783713,
                  1.2792895786462566
                ],
                [
                  103.70736018906524,
                  1.2789369405788023
                ],
                [
                  103.70725158232483,
                  1.2790759438690742
                ],
                [
                  103.70707096938702,
                  1.2789006873955344
                ],
                [
                  103.70697177853577,
                  1.2790148070590703
                ],
                [
                  103.70682703817141,
                  1.2788777218568157
                ],
                [
                  103.7070345895911,
                  1.2786577651039863
                ],
                [
                  103.70647404828952,
                  1.2782186475577362
                ],
                [
                  103.7067132812117,
                  1.277956415426658
                ],
                [
                  103.70688934368326,
                  1.278116508030223
                ],
                [
                  103.70709945955383,
                  1.2778677212299812
                ],
                [
                  103.70747224911423,
                  1.2782124894092988
                ],
                [
                  103.70766167460533,
                  1.277956227959649
                ],
                [
                  103.70831692133612,
                  1.2784455364941039
                ],
                [
                  103.70766528783713,
                  1.2792895786462566
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "HOS",
            color: "#d0d408",
          },
          geometry: {
            coordinates:  [
              [
                [
                  103.70722275494165,
                  1.279867323719401
                ],
                [
                  103.70686733056823,
                  1.279553839655975
                ],
                [
                  103.70713670064578,
                  1.2792007374248158
                ],
                [
                  103.70698604730433,
                  1.2790499568995273
                ],
                [
                  103.70707284440982,
                  1.2789332258633976
                ],
                [
                  103.70725573856203,
                  1.2791054333260092
                ],
                [
                  103.70736547645026,
                  1.2789684782937059
                ],
                [
                  103.70765377240474,
                  1.2793005337825178
                ],
                [
                  103.70722275494165,
                  1.279867323719401
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "PFB",
            color: "#5516ca",
          },
          geometry: {
            coordinates:   [
              [
                [
                  103.70685971339844,
                  1.279538875487006
                ],
                [
                  103.70650560195958,
                  1.279202264662132
                ],
                [
                  103.70681601312168,
                  1.278893068243434
                ],
                [
                  103.70712177663535,
                  1.2792012266531714
                ],
                [
                  103.70685971339844,
                  1.279538875487006
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "DAU",
            color: "#dfce11",
          },
          geometry: {
            coordinates:    [
              [
                [
                  103.70654033203556,
                  1.279137479523726
                ],
                [
                  103.70606262483011,
                  1.278788792352998
                ],
                [
                  103.70630704856126,
                  1.2784978159589997
                ],
                [
                  103.70637984699266,
                  1.278555651590736
                ],
                [
                  103.70643806988198,
                  1.278484981100064
                ],
                [
                  103.70637947675368,
                  1.2784339521569024
                ],
                [
                  103.7065000486487,
                  1.2782860086778953
                ],
                [
                  103.70699174336244,
                  1.278663050716716
                ],
                [
                  103.70654033203556,
                  1.279137479523726
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "SWS",
            color:"#17c5e8",
          },
          geometry: {
            coordinates:    [
              [
                [
                  103.7063656068762,
                  1.2784235730906772
                ],
                [
                  103.7061838860518,
                  1.2782744495116134
                ],
                [
                  103.70630380637448,
                  1.2781397328216713
                ],
                [
                  103.70648294985835,
                  1.2782879666746112
                ],
                [
                  103.7063656068762,
                  1.2784235730906772
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "ARU",
            color:"#1fd13d",
          },
          geometry: {
            coordinates:   [
              [
                [
                  103.70603826860969,
                  1.278799901340193
                ],
                [
                  103.70558012293617,
                  1.2784112922362851
                ],
                [
                  103.70584093293593,
                  1.278143912034139
                ],
                [
                  103.70572792018987,
                  1.2780576963858152
                ],
                [
                  103.70592623062691,
                  1.2778537087492623
                ],
                [
                  103.70618483649685,
                  1.278066389049613
                ],
                [
                  103.70606251418053,
                  1.2781888016893532
                ],
                [
                  103.70642311898177,
                  1.2784829414026717
                ],
                [
                  103.70637814980279,
                  1.278542838908649
                ],
                [
                  103.70630544721456,
                  1.2784817955383403
                ],
                [
                  103.70603826860969,
                  1.278799901340193
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "SRU",
            color:"#d7bf1d",
          },
          geometry: {
            coordinates:  [
              [
                [
                  103.70558287405748,
                  1.2783718726908972
                ],
                [
                  103.7049715437119,
                  1.2778916797504252
                ],
                [
                  103.70511885489549,
                  1.2776124295583173
                ],
                [
                  103.70527689619632,
                  1.2774821962496503
                ],
                [
                  103.70533197131061,
                  1.2774521262171987
                ],
                [
                  103.70544311589862,
                  1.2774833731337765
                ],
                [
                  103.70591753149358,
                  1.2778426278829045
                ],
                [
                  103.70570769589517,
                  1.2780537178755935
                ],
                [
                  103.70581434611563,
                  1.278137077630177
                ],
                [
                  103.70558287405748,
                  1.2783718726908972
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "HSFU",
            color:"#2d20d9",
          },
          geometry: {
            coordinates: [
              [
                [
                  103.70540861843426,
                  1.278728328659696
                ],
                [
                  103.70482012535524,
                  1.278277038839974
                ],
                [
                  103.70497700716982,
                  1.27810398984181
                ],
                [
                  103.70557454309392,
                  1.278551679545572
                ],
                [
                  103.70540861843426,
                  1.278728328659696
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "O&U",
            color:"#d21919",
          },
          geometry: {
            coordinates:[
              [
                [
                  103.70489050863273,
                  1.2793960065791339
                ],
                [
                  103.70527138208615,
                  1.2789672819060485
                ],
                [
                  103.70464330176105,
                  1.2784874080368667
                ],
                [
                  103.70480258862847,
                  1.2782800466878825
                ],
                [
                  103.7054143916663,
                  1.2787443191590313
                ],
                [
                  103.7055846628092,
                  1.2785539174647198
                ],
                [
                  103.70584410354871,
                  1.2787609073748882
                ],
                [
                  103.70565916218891,
                  1.2789851149442768
                ],
                [
                  103.70584599077006,
                  1.2791183414754954
                ],
                [
                  103.70563375123066,
                  1.2793971956336065
                ],
                [
                  103.7052821195515,
                  1.2791163347389585
                ],
                [
                  103.705129994554,
                  1.2792921305590994
                ],
                [
                  103.70527695455911,
                  1.279416564409189
                ],
                [
                  103.70511142973942,
                  1.2796065345525278
                ],
                [
                  103.70489050863273,
                  1.2793960065791339
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        
        {
          type: "Feature",
          properties: {
            name: "O&U",
            color:"#d21919",
          },
          geometry: {
            coordinates: [
              [
                [
                  103.70613526209945,
                  1.2778815833238184
                ],
                [
                  103.70564370374666,
                  1.277511404992083
                ],
                [
                  103.70574660057292,
                  1.2774525294175447
                ],
                [
                  103.70586618148013,
                  1.2775424559273176
                ],
                [
                  103.70593342618042,
                  1.2774826619972828
                ],
                [
                  103.7059561054516,
                  1.2773987784709675
                ],
                [
                  103.70606051006672,
                  1.2774302689823287
                ],
                [
                  103.70605722053119,
                  1.2775054449528511
                ],
                [
                  103.7061705836233,
                  1.2775879510897141
                ],
                [
                  103.70613889323477,
                  1.2776045832567888
                ],
                [
                  103.70635074187174,
                  1.2777475492650012
                ],
                [
                  103.70613526209945,
                  1.2778815833238184
                ],
              ],
            ],
            type: "Polygon",
          },
        },
        

      ],
    },
    parser: { type: "geojson" },
  });


  // BubblelayerData
  const bubbleData =[
    {
        "idAsset": 237571,
        "assetDescription": "IAN REGIDOR JR VIDAMO BORNAS",
        "lastEventDate": 1668851059,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E8B3978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278848,
        "longitude": 103.70823999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237570,
        "assetDescription": "KASI MANIKANDAN",
        "lastEventDate": 1668850049,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F933962",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28711,
        "longitude": 103.703733,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237568,
        "assetDescription": "DE GUZMAN ROMMEL NUCUM",
        "lastEventDate": 1668851629,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 164,
                "Name": "204",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320B86394F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277523,
        "longitude": 103.708022,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237574,
        "assetDescription": "PERIYAKARUPPAN VIJAY",
        "lastEventDate": 1668850497,
        "battery": 15,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E603960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281748,
        "longitude": 103.705107,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237573,
        "assetDescription": "CHANDRAN RAMANATHAN",
        "lastEventDate": 1668851665,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534167A3975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27916,
        "longitude": 103.707707,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237572,
        "assetDescription": "PACKIRISAMY PARAMASIVAM",
        "lastEventDate": 1668848206,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534167D3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278817,
        "longitude": 103.707617,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236563,
        "assetDescription": "Gary Ng Zhen Jie",
        "lastEventDate": 1668849340,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7C397F",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.281842,
        "longitude": 103.70416,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237585,
        "assetDescription": "PRING BERNABE DELA CRUZ",
        "lastEventDate": 1668851472,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 164,
                "Name": "204",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E68397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277542,
        "longitude": 103.708013,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236561,
        "assetDescription": "Domingo Sallan Naz",
        "lastEventDate": 1668851482,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D7B394C",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.278575,
        "longitude": 103.70912,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236560,
        "assetDescription": "David Garcia Bodego",
        "lastEventDate": 1668850866,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F723951",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.281767,
        "longitude": 103.7042,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237591,
        "assetDescription": "KHAN MD IMRAN",
        "lastEventDate": 1668850001,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F8D395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279068,
        "longitude": 103.707492,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236566,
        "assetDescription": "Javier Del Val Latorre",
        "lastEventDate": 1668849354,
        "battery": 100,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E71397D",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.28233,
        "longitude": 103.70418699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237589,
        "assetDescription": "NUMAN",
        "lastEventDate": 1668851116,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB532108F3964",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278753,
        "longitude": 103.70730499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236565,
        "assetDescription": "Hugo Soares Vilhena",
        "lastEventDate": 1668851350,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F77395D",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.282048,
        "longitude": 103.704195,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236570,
        "assetDescription": "Mohan S/O Chockkan Alaguraju",
        "lastEventDate": 1668851496,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8C3975",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279623,
        "longitude": 103.70729299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236569,
        "assetDescription": "Juan Juan Juan",
        "lastEventDate": 1668851518,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F81396E",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.281352,
        "longitude": 103.70452,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236568,
        "assetDescription": "Juan Jose Perdigon",
        "lastEventDate": 1668850848,
        "battery": 100,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F6E396F",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.282327,
        "longitude": 103.704072,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236575,
        "assetDescription": "Shanib Basheer Kochiparambil Mohammed",
        "lastEventDate": 1668851213,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E90395B",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279477,
        "longitude": 103.707178,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236574,
        "assetDescription": "Roberto Lope Penaroyo",
        "lastEventDate": 1668851671,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341469395D",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.278153,
        "longitude": 103.709153,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237596,
        "assetDescription": "ALI MD ASIK",
        "lastEventDate": 1668851317,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E8C3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277463,
        "longitude": 103.71003999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236582,
        "assetDescription": "Subramanian Balaji",
        "lastEventDate": 1668851462,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53417653957",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.2826,
        "longitude": 103.70508,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236587,
        "assetDescription": "Vairakkannu Pillai Anbazhagan",
        "lastEventDate": 1668851180,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F853951",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.284883,
        "longitude": 103.703965,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236586,
        "assetDescription": "Muhammad Faizal Bin Sa ari",
        "lastEventDate": 1668850335,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F64396C",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279467,
        "longitude": 103.70761499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236585,
        "assetDescription": "Mohammad Jailani Bin Alil",
        "lastEventDate": 1668851205,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7C3983",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279567,
        "longitude": 103.707067,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236584,
        "assetDescription": "Soffian Hisham Bin Sa ari",
        "lastEventDate": 1668848659,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F733970",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.27927,
        "longitude": 103.70817799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236588,
        "assetDescription": "Idris Bin Hussein ",
        "lastEventDate": 1668850792,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7A3976",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.282815,
        "longitude": 103.70445799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236595,
        "assetDescription": "Nagamos Cleovel Masangya",
        "lastEventDate": 1668851182,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C75397F",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.278143,
        "longitude": 103.70889299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236592,
        "assetDescription": "Mohamad Faizal Bin Mohamad Haroon",
        "lastEventDate": 1668851652,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E873977",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279392,
        "longitude": 103.707385,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237616,
        "assetDescription": "JAGESFERAN S/O JAGANATHAN",
        "lastEventDate": 1668851512,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E87397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27794,
        "longitude": 103.70935999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236598,
        "assetDescription": "Muhamad Gadaffi s/o Abdul Bazir",
        "lastEventDate": 1668851424,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6E396E",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.27964,
        "longitude": 103.707318,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236597,
        "assetDescription": "Kayambu Solairajan",
        "lastEventDate": 1668851699,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C903972",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.27758,
        "longitude": 103.70956699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236602,
        "assetDescription": "Emil Akbarov",
        "lastEventDate": 1668851489,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A843978",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.278627,
        "longitude": 103.709165,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236604,
        "assetDescription": "Nga Eng Hui",
        "lastEventDate": 1668849239,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7D3979",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.281958,
        "longitude": 103.704573,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237634,
        "assetDescription": "ISLAM MD SIFUL",
        "lastEventDate": 1668850786,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E7F397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282203,
        "longitude": 103.704618,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236610,
        "assetDescription": "Corcini Velasco Castillones",
        "lastEventDate": 1668851547,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F76394E",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.278442,
        "longitude": 103.708907,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237632,
        "assetDescription": "MD KASHEM",
        "lastEventDate": 1668850688,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E7E397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28241,
        "longitude": 103.705283,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236615,
        "assetDescription": "Noorazman Bin Sani",
        "lastEventDate": 1668851391,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415873972",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.28202,
        "longitude": 103.70492,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238663,
        "assetDescription": "Andrew Hefft",
        "lastEventDate": 1668848242,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341486395C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281117,
        "longitude": 103.704008,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238662,
        "assetDescription": "Faizal Hussin ",
        "lastEventDate": 1668850844,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416803973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281075,
        "longitude": 103.704,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238661,
        "assetDescription": "Neil Hair",
        "lastEventDate": 1668851486,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415653975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281198,
        "longitude": 103.7042,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237641,
        "assetDescription": "HOSSAIN ALAMGIR",
        "lastEventDate": 1668851316,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6A3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282133,
        "longitude": 103.704893,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237640,
        "assetDescription": "CHAN ALEK",
        "lastEventDate": 1668851666,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C723976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282153,
        "longitude": 103.704853,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238671,
        "assetDescription": "Velan G Mariappan",
        "lastEventDate": 1668850839,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E733970",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28195,
        "longitude": 103.70495,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236623,
        "assetDescription": "Tsatsarelis Charalampos",
        "lastEventDate": 1668849483,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C73397A",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.28187,
        "longitude": 103.704107,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236622,
        "assetDescription": "Muralitharan S/O Aragasamy",
        "lastEventDate": 1668848984,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F763950",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279582,
        "longitude": 103.70751,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238670,
        "assetDescription": "Gobi Subramaniam",
        "lastEventDate": 1668851352,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F713961",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282143,
        "longitude": 103.704995,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238668,
        "assetDescription": "Mohamed Shariff Bin Ariffin",
        "lastEventDate": 1668851490,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7B3982",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279503,
        "longitude": 103.70734999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236620,
        "assetDescription": "Arunachalam Vijayakumar Nadarajan",
        "lastEventDate": 1668851245,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415693976",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.281983,
        "longitude": 103.70403999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238675,
        "assetDescription": "Bambang Hermanto",
        "lastEventDate": 1668849194,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534147C395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282863,
        "longitude": 103.705197,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238672,
        "assetDescription": "Gamala Kannan Ganesan",
        "lastEventDate": 1668850752,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E603975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28184,
        "longitude": 103.70478,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237654,
        "assetDescription": "KRISHNAMOORTHY PRABHAKAR",
        "lastEventDate": 1668850754,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 167,
                "Name": "214N",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E763978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281043,
        "longitude": 103.70645499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238678,
        "assetDescription": "Gobala Krishnan Ganesan ",
        "lastEventDate": 1668851386,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416803979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28243,
        "longitude": 103.70481699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237653,
        "assetDescription": "SUKKHAN SAMAK",
        "lastEventDate": 1668849853,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E8B3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278145,
        "longitude": 103.70920199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238677,
        "assetDescription": "Muhammad Kamarul Izwan Bin Maarof",
        "lastEventDate": 1668850812,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A80397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282073,
        "longitude": 103.704867,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237658,
        "assetDescription": "MADASU SURESH BABU",
        "lastEventDate": 1668851235,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6E3974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277907,
        "longitude": 103.709907,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236634,
        "assetDescription": "FERMIN CORPUZ DUMALE",
        "lastEventDate": 1668849154,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415613971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277462,
        "longitude": 103.70958499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237661,
        "assetDescription": "YAGAPPAN ALEXSOWRI",
        "lastEventDate": 1668851444,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6C397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282215,
        "longitude": 103.70548699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237667,
        "assetDescription": "VORAHASANG SURIYON",
        "lastEventDate": 1668851573,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6D3980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27839,
        "longitude": 103.70975999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238691,
        "assetDescription": "HIROHAMACHIAKI",
        "lastEventDate": 1668849256,
        "battery": 100,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D7C394B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277775,
        "longitude": 103.70960799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236642,
        "assetDescription": "SAITO KOICHI",
        "lastEventDate": 1668851638,
        "battery": 45,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E653978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277567,
        "longitude": 103.709547,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238690,
        "assetDescription": "MADULA RYAN SALARES",
        "lastEventDate": 1668849907,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8B397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279085,
        "longitude": 103.707662,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237664,
        "assetDescription": "PHIMPHRAI CHART",
        "lastEventDate": 1668851444,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6A3978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282253,
        "longitude": 103.705333,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236640,
        "assetDescription": "MAGPANTAY CRESENCIANO VILLANUEVA",
        "lastEventDate": 1668850620,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E683978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277555,
        "longitude": 103.709627,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237671,
        "assetDescription": "SUBRAMANI SENTHILKUMAR",
        "lastEventDate": 1668851577,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E843977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27793,
        "longitude": 103.709775,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238695,
        "assetDescription": "ASAITHAMBI BAKKIYARAJ (AGENT)",
        "lastEventDate": 1668851646,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E8D3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287247,
        "longitude": 103.703638,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238694,
        "assetDescription": "KHAN MD AHAD",
        "lastEventDate": 1668850904,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C68397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279342,
        "longitude": 103.707765,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237669,
        "assetDescription": "PHOOTOYOD SUTHEP",
        "lastEventDate": 1668851392,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F6F395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28212,
        "longitude": 103.705247,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238693,
        "assetDescription": "MOHAMED YASLI BIN RAJA SULTAN",
        "lastEventDate": 1668849620,
        "battery": 40,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8F3975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279075,
        "longitude": 103.70774499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236645,
        "assetDescription": "KARUNUGARAN NADARAJAH",
        "lastEventDate": 1668849154,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C793983",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27917,
        "longitude": 103.707495,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237668,
        "assetDescription": "PHONRAT THANA",
        "lastEventDate": 1668850480,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6C397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281928,
        "longitude": 103.705558,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236644,
        "assetDescription": "NAMAKODI NARAYANAN PRABAHARAN",
        "lastEventDate": 1668851355,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E753979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28216,
        "longitude": 103.70483999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237675,
        "assetDescription": "MUTHUSAMY KUMAR",
        "lastEventDate": 1668851648,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D7D394C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278045,
        "longitude": 103.70969199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238699,
        "assetDescription": "KHOLIL MD",
        "lastEventDate": 1668851560,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6A3975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277848,
        "longitude": 103.709507,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236650,
        "assetDescription": "UNBALLAGAN NADHSON",
        "lastEventDate": 1668851571,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415833972",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277532,
        "longitude": 103.70956,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238697,
        "assetDescription": "SUMON MD UBAIJOR AL MOMTAZI",
        "lastEventDate": 1668850209,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C85397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279117,
        "longitude": 103.707787,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236649,
        "assetDescription": "SIVA VEJAYAN",
        "lastEventDate": 1668851710,
        "battery": 40,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534147C395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278932,
        "longitude": 103.707478,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237672,
        "assetDescription": "NAYAK SUDIPTA",
        "lastEventDate": 1668851663,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F70394D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282118,
        "longitude": 103.705095,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237679,
        "assetDescription": "SUBRAMANIAN SHANMUGASUNDARAM",
        "lastEventDate": 1668850124,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F7A3962",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282368,
        "longitude": 103.705,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236655,
        "assetDescription": "MOHAMED JOHAN BIN PONGOT",
        "lastEventDate": 1668849462,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB532108E3966",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282335,
        "longitude": 103.705838,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238701,
        "assetDescription": "HOSSEN MD ALAMGIR",
        "lastEventDate": 1668851619,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E803979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277893,
        "longitude": 103.70996,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237676,
        "assetDescription": "DURAISAMY SELVAKUMAR",
        "lastEventDate": 1668850146,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F7A396F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277678,
        "longitude": 103.709762,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237683,
        "assetDescription": "SHANMUGAVADIVEL PURUSHOTHAMAN",
        "lastEventDate": 1668849470,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 165,
                "Name": "214S",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7F3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.275258,
        "longitude": 103.708867,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238707,
        "assetDescription": "AZHAGAR VIJAYKUMAR",
        "lastEventDate": 1668850072,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8D3973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27903,
        "longitude": 103.70764199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238706,
        "assetDescription": "SUNDARAMOORTHY UTHAYABHARATHI",
        "lastEventDate": 1668851429,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C753980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27802,
        "longitude": 103.709345,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237681,
        "assetDescription": "AMALRAL ANTONY ABRAHAM LINCOLN",
        "lastEventDate": 1668851570,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8A3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282903,
        "longitude": 103.70546999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238711,
        "assetDescription": "PUNNIYAMOORTHI GOVINDARAJ",
        "lastEventDate": 1668851581,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C793978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27753,
        "longitude": 103.709685,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238710,
        "assetDescription": "NARAYANASAMY PALANISAMY",
        "lastEventDate": 1668850134,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A733975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279087,
        "longitude": 103.707308,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238709,
        "assetDescription": "MANIAMUTHU SOWRIRAJAN",
        "lastEventDate": 1668851552,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C66397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27913,
        "longitude": 103.70743499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238708,
        "assetDescription": "KUMAR PERIYASAMY",
        "lastEventDate": 1668850636,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7F3971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278023,
        "longitude": 103.709468,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237691,
        "assetDescription": "Pechetti Srikanth",
        "lastEventDate": 1668850113,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534147B3954",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278262,
        "longitude": 103.70975999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236666,
        "assetDescription": "UDDIN MD KALIM",
        "lastEventDate": 1668851398,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E753980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27803,
        "longitude": 103.709308,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238714,
        "assetDescription": "SEENIVASAN SIVA",
        "lastEventDate": 1668851140,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7E397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279027,
        "longitude": 103.707517,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238713,
        "assetDescription": "SUKUMARAN DAISY SUBIN",
        "lastEventDate": 1668850076,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C79397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27904,
        "longitude": 103.707433,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238712,
        "assetDescription": "RAMASUBRAMANIYAN PONNUSAMY",
        "lastEventDate": 1668851634,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6D3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278212,
        "longitude": 103.709747,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237688,
        "assetDescription": "Pandurangan Manikandan",
        "lastEventDate": 1668851666,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53414743960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277865,
        "longitude": 103.709893,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238718,
        "assetDescription": "SALAHUDDIN",
        "lastEventDate": 1668851306,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7D3981",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27779,
        "longitude": 103.70853,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238716,
        "assetDescription": "VELLAISAMY JOHNCHANDRAKUMAR",
        "lastEventDate": 1668851698,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E5F3960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277748,
        "longitude": 103.70924,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237692,
        "assetDescription": "Padala Gireesh Kumar",
        "lastEventDate": 1668851421,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53210923960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282358,
        "longitude": 103.704743,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237699,
        "assetDescription": "Vijayan Vijesh",
        "lastEventDate": 1668850678,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416613976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282128,
        "longitude": 103.70526199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238723,
        "assetDescription": "KARUPPANNAN MUTHUKUMAR",
        "lastEventDate": 1668851664,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F6F3960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279133,
        "longitude": 103.707522,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237698,
        "assetDescription": "Muthusamy Ayyappan",
        "lastEventDate": 1668850199,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E8B3960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277882,
        "longitude": 103.709475,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237696,
        "assetDescription": "Pulithevan Arjunan",
        "lastEventDate": 1668850294,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534177F3953",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278038,
        "longitude": 103.709542,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238727,
        "assetDescription": "WONG KOK POOI",
        "lastEventDate": 1668851693,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7A3974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277848,
        "longitude": 103.709747,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237702,
        "assetDescription": "Kaliyamoorthy Senthilkumar",
        "lastEventDate": 1668851474,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F77396E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281632,
        "longitude": 103.705472,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237701,
        "assetDescription": "Manoharan Parthiban",
        "lastEventDate": 1668850311,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415713978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28235,
        "longitude": 103.70512699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236676,
        "assetDescription": "SOLAI PANDIMURUGAN",
        "lastEventDate": 1668851513,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F7C396F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277882,
        "longitude": 103.709938,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237706,
        "assetDescription": "Bejawada Satish",
        "lastEventDate": 1668851502,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F7E394D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278202,
        "longitude": 103.70973,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238728,
        "assetDescription": "SAHA JUWEL CHANDRA",
        "lastEventDate": 1668851602,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6F3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278962,
        "longitude": 103.707605,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237711,
        "assetDescription": "Silva Cruze Simson",
        "lastEventDate": 1668850751,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E72397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277783,
        "longitude": 103.709598,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238734,
        "assetDescription": "HOSSAIN MOHAMMAD MOKTER ",
        "lastEventDate": 1668851491,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E85397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279355,
        "longitude": 103.70748999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237708,
        "assetDescription": "Mamidala Ravi Kumar",
        "lastEventDate": 1668851660,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E76397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282325,
        "longitude": 103.705027,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238739,
        "assetDescription": "PATTANI PRAKASH",
        "lastEventDate": 1668849900,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 168,
                "Name": "211",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C883975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277763,
        "longitude": 103.705422,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237715,
        "assetDescription": "GUANG ANAK ETAT",
        "lastEventDate": 1668851647,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7E397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282037,
        "longitude": 103.705227,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236690,
        "assetDescription": "THANGABHARATHI KARTHICK",
        "lastEventDate": 1668850795,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D80394D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279233,
        "longitude": 103.70756499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238738,
        "assetDescription": "PANJAVARNAM THILLAI RAMESH",
        "lastEventDate": 1668851052,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E663979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27965,
        "longitude": 103.707312,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237714,
        "assetDescription": "ODIBOINA SANKARRAO",
        "lastEventDate": 1668850570,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7A397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27788,
        "longitude": 103.710082,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236694,
        "assetDescription": "HARINARAYANAN SIVASUBRAMANIAN",
        "lastEventDate": 1668851622,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F783960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27789,
        "longitude": 103.70843699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238741,
        "assetDescription": "ALAGESAN SUDHAKAR",
        "lastEventDate": 1668851527,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6B3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279415,
        "longitude": 103.707737,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237716,
        "assetDescription": "SETHURAJAN VIJAYAKUMAR",
        "lastEventDate": 1668850048,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E79397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277825,
        "longitude": 103.70974299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237723,
        "assetDescription": "JOSEPH TIJO",
        "lastEventDate": 1668851215,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C68397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281898,
        "longitude": 103.70547499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238746,
        "assetDescription": "VELU BALAMURUGAN",
        "lastEventDate": 1668851384,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F6C396D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279102,
        "longitude": 103.70750699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236698,
        "assetDescription": "ANBALAGAN TAMILVANNAN",
        "lastEventDate": 1668851564,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534147A395A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282273,
        "longitude": 103.704813,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236697,
        "assetDescription": "KUPPUSAMY MAHARAJAN",
        "lastEventDate": 1668851581,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7A3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28307,
        "longitude": 103.70432,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237720,
        "assetDescription": "CHUA EU SENG",
        "lastEventDate": 1668851586,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E80397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28214,
        "longitude": 103.705483,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238750,
        "assetDescription": "RAMAIAH SILAMBARASAN",
        "lastEventDate": 1668851433,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 164,
                "Name": "204",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F66396C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277437,
        "longitude": 103.707905,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237726,
        "assetDescription": "KANTHI NAGA SRINIVASU",
        "lastEventDate": 1668851659,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416863979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282167,
        "longitude": 103.70531799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236701,
        "assetDescription": "MUTHALAGU MUTHUKKARUPPAIAH",
        "lastEventDate": 1668850476,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F91395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281958,
        "longitude": 103.706295,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237730,
        "assetDescription": "SEKAR ARUL",
        "lastEventDate": 1668851635,
        "battery": 40,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E77397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282657,
        "longitude": 103.705505,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238754,
        "assetDescription": "HOSSAIN MD RUBEL ",
        "lastEventDate": 1668851569,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F68395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277363,
        "longitude": 103.710177,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236711,
        "assetDescription": "ROY ALONGKAR",
        "lastEventDate": 1668851368,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8C3974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277525,
        "longitude": 103.709502,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236710,
        "assetDescription": "MANNAN ABDUL ",
        "lastEventDate": 1668849798,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E75395C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27871,
        "longitude": 103.70776,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236709,
        "assetDescription": "CHINNAIAH PANDIAN",
        "lastEventDate": 1668851617,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341491395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287207,
        "longitude": 103.70362,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237732,
        "assetDescription": "SEKAR CHANDRAMOHAN",
        "lastEventDate": 1668850492,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E723976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282068,
        "longitude": 103.704995,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236715,
        "assetDescription": "NASHIR",
        "lastEventDate": 1668851008,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534166D3974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27913,
        "longitude": 103.707633,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236712,
        "assetDescription": "HOSSAIN ANOWAR",
        "lastEventDate": 1668851409,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E67397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279112,
        "longitude": 103.70760299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238760,
        "assetDescription": "ARUNACHALAM SOLAIYAN",
        "lastEventDate": 1668850843,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C72397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277668,
        "longitude": 103.71002,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236719,
        "assetDescription": "RAHMAN MAZIBUR",
        "lastEventDate": 1668850065,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416873978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277968,
        "longitude": 103.709507,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236718,
        "assetDescription": "MASUD",
        "lastEventDate": 1668851584,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416633976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279117,
        "longitude": 103.70779999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237742,
        "assetDescription": "DURAIRAJ STALIN",
        "lastEventDate": 1668850658,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E643976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282432,
        "longitude": 103.704493,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237741,
        "assetDescription": "KONDI SRINIVAS",
        "lastEventDate": 1668850471,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341487395D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278117,
        "longitude": 103.70965699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236716,
        "assetDescription": "ALI ANNAS",
        "lastEventDate": 1668848491,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E713982",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27784,
        "longitude": 103.70973199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237745,
        "assetDescription": "SAWRAJ SINGH",
        "lastEventDate": 1668850815,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320B7B394E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277837,
        "longitude": 103.70971999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237744,
        "assetDescription": "RADHAKRISHNAN MANIKANDAN",
        "lastEventDate": 1668849668,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534168B3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282277,
        "longitude": 103.70495199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236720,
        "assetDescription": "AHAD MD",
        "lastEventDate": 1668851430,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB532108F3963",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279092,
        "longitude": 103.707583,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236726,
        "assetDescription": "DURAISAMY SATHISHKUMAR",
        "lastEventDate": 1668850567,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416883976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277717,
        "longitude": 103.70957,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236731,
        "assetDescription": "MOHAMAD MOHI UDDIN",
        "lastEventDate": 1668851161,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341486395B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277823,
        "longitude": 103.70956699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236730,
        "assetDescription": "ADAIKALAM PALANIVEL",
        "lastEventDate": 1668850719,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 169,
                "Name": "214H",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F6E394F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278568,
        "longitude": 103.704757,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236728,
        "assetDescription": "KALIMUTHU MUNISAMY",
        "lastEventDate": 1668851437,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534168B3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279117,
        "longitude": 103.707675,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236732,
        "assetDescription": "HOSSAIN SELIM",
        "lastEventDate": 1668850311,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E60396E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277595,
        "longitude": 103.70975299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237763,
        "assetDescription": "Zhang Hai Jun",
        "lastEventDate": 1668851179,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8A3974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28224,
        "longitude": 103.704107,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238787,
        "assetDescription": "Sarveshvaran Nadarajoo",
        "lastEventDate": 1668851155,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415803975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279822,
        "longitude": 103.707635,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238791,
        "assetDescription": "Saidi Bin Mat Arifin",
        "lastEventDate": 1668851456,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7D397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279338,
        "longitude": 103.707438,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238789,
        "assetDescription": "Ranjit Singh S/O Dalip Singh",
        "lastEventDate": 1668851442,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E693977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282915,
        "longitude": 103.705427,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237765,
        "assetDescription": "DONTHARAVENI NARSAIAH",
        "lastEventDate": 1668850552,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C853976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282365,
        "longitude": 103.70409699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237770,
        "assetDescription": "HE WEIBIN",
        "lastEventDate": 1668850165,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F7D3961",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282415,
        "longitude": 103.70429299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238796,
        "assetDescription": "RAMADHAS ANIL KUMAR",
        "lastEventDate": 1668851607,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F85395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284002,
        "longitude": 103.704093,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237778,
        "assetDescription": "CHINNAKKANNU PERIASAMY",
        "lastEventDate": 1668851444,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E763970",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278847,
        "longitude": 103.70737199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237783,
        "assetDescription": "PALANISAMY ELAYARAJA",
        "lastEventDate": 1668851216,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7F397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287015,
        "longitude": 103.70339299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237782,
        "assetDescription": "KAMALANATHAN VIJAYAKUMAR",
        "lastEventDate": 1668850460,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E67397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287,
        "longitude": 103.703322,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237781,
        "assetDescription": "IRULAN MALAIRASU",
        "lastEventDate": 1668851242,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F83395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.2841,
        "longitude": 103.70463699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237786,
        "assetDescription": "GURUSAMY ASHOK",
        "lastEventDate": 1668848459,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E733976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27913,
        "longitude": 103.707415,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237785,
        "assetDescription": "SELVARASU SUCITHERAN",
        "lastEventDate": 1668850243,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F643971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279098,
        "longitude": 103.70752499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237784,
        "assetDescription": "RAMASAMY ANBAZHAGAN",
        "lastEventDate": 1668851117,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6D397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279295,
        "longitude": 103.707613,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238815,
        "assetDescription": "MAHABUB ISLAM",
        "lastEventDate": 1668851566,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E873960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287138,
        "longitude": 103.702203,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238818,
        "assetDescription": "SRINIVASA RAO SAIRIGAPU VENKATA",
        "lastEventDate": 1668851391,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E883978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287147,
        "longitude": 103.702102,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236769,
        "assetDescription": "ANBALAGAN MADHAVAN",
        "lastEventDate": 1668851545,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C793974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277392,
        "longitude": 103.709688,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237798,
        "assetDescription": "Jin Jietai",
        "lastEventDate": 1668850582,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F67395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278513,
        "longitude": 103.708957,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237797,
        "assetDescription": "Zhang Jing",
        "lastEventDate": 1668851711,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F85395D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279047,
        "longitude": 103.70741799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237796,
        "assetDescription": "NORMAN BIN ISMAIL",
        "lastEventDate": 1668851637,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415693975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284,
        "longitude": 103.70405699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238826,
        "assetDescription": "PONNUSAMY MUTHUVEL",
        "lastEventDate": 1668851444,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C773983",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287218,
        "longitude": 103.702107,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237801,
        "assetDescription": "Fu Guozhen",
        "lastEventDate": 1668851553,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 164,
                "Name": "204",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C75397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277353,
        "longitude": 103.708483,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236776,
        "assetDescription": "KARIYAN SAKTHIVEL",
        "lastEventDate": 1668851482,
        "battery": 40,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 164,
                "Name": "204",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415783979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277302,
        "longitude": 103.70812199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237807,
        "assetDescription": "Tian Weijun",
        "lastEventDate": 1668851205,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E833982",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285577,
        "longitude": 103.704875,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238831,
        "assetDescription": "GHORAI GANESH",
        "lastEventDate": 1668851372,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7F397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.283363,
        "longitude": 103.702733,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237805,
        "assetDescription": "Jiang Jianlei",
        "lastEventDate": 1668851708,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53417753957",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278143,
        "longitude": 103.70827,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237804,
        "assetDescription": "Cheng Qinglin",
        "lastEventDate": 1668851412,
        "battery": 25,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 154,
                "Name": "213",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F92396B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.280213,
        "longitude": 103.70499699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237810,
        "assetDescription": "Wu Xiaoming",
        "lastEventDate": 1668851688,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C823976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284515,
        "longitude": 103.705322,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236785,
        "assetDescription": "SAKTHIVEL ARIVAZHAGAN",
        "lastEventDate": 1668851579,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 164,
                "Name": "204",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53417643958",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277373,
        "longitude": 103.708118,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236789,
        "assetDescription": "SESU ELISON",
        "lastEventDate": 1668851416,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 165,
                "Name": "214S",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341587397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.276883,
        "longitude": 103.70912299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236792,
        "assetDescription": "VARATHARAJ VIJAYAKUMAR",
        "lastEventDate": 1668850489,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F66396E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277652,
        "longitude": 103.709825,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237825,
        "assetDescription": "Yan Yafeng",
        "lastEventDate": 1668851511,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341466395C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279242,
        "longitude": 103.70731699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237824,
        "assetDescription": "Liu Youbin",
        "lastEventDate": 1668851701,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 167,
                "Name": "214N",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534176D394F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.280308,
        "longitude": 103.70518299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237831,
        "assetDescription": "VEMBAIYAN VELMURUGAN",
        "lastEventDate": 1668850199,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E65397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279088,
        "longitude": 103.7075,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238859,
        "assetDescription": "ANKATHI GANGADHAR",
        "lastEventDate": 1668851568,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7E3982",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279132,
        "longitude": 103.707573,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238857,
        "assetDescription": "BURRA SAI TEJA",
        "lastEventDate": 1668851433,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E643979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27921,
        "longitude": 103.707157,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237839,
        "assetDescription": "MUTHAIYAN ARAVIND",
        "lastEventDate": 1668851592,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7F3981",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284082,
        "longitude": 103.704633,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237838,
        "assetDescription": "MOORTHI PRABAKARAN",
        "lastEventDate": 1668851652,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7B397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28403,
        "longitude": 103.70465,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237837,
        "assetDescription": "MANICKAM SAMUDI",
        "lastEventDate": 1668849904,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C81397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.2792,
        "longitude": 103.707453,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236812,
        "assetDescription": "PALANIYAPPAN DEEPANRAJ",
        "lastEventDate": 1668851453,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C673973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277645,
        "longitude": 103.70990499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237842,
        "assetDescription": "TEKUMATLA SHANTAIAH",
        "lastEventDate": 1668850948,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C853974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279098,
        "longitude": 103.70750199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238865,
        "assetDescription": "MD TOFIQUL ISLAM",
        "lastEventDate": 1668851709,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E693979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286975,
        "longitude": 103.70343799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237840,
        "assetDescription": "NATARAJAN SENTHILKUMAR",
        "lastEventDate": 1668851286,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415783981",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284085,
        "longitude": 103.70457999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238870,
        "assetDescription": "SUN DAWEI",
        "lastEventDate": 1668851468,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6E3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279322,
        "longitude": 103.707185,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237845,
        "assetDescription": "SUNDARAMURTHY THARANIDHARAN",
        "lastEventDate": 1668851450,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534176B3951",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281933,
        "longitude": 103.70528,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238868,
        "assetDescription": "MD TUHIN RANA",
        "lastEventDate": 1668848865,
        "battery": 100,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8E3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284332,
        "longitude": 103.702677,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237851,
        "assetDescription": "SAH SUBAN",
        "lastEventDate": 1668849082,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E5F3972",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287287,
        "longitude": 103.70197999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238874,
        "assetDescription": "RAPELLY SWAMY",
        "lastEventDate": 1668849868,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C883971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279258,
        "longitude": 103.70720999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238872,
        "assetDescription": "LIU GUANGYE",
        "lastEventDate": 1668851476,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 164,
                "Name": "204",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E66397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277427,
        "longitude": 103.708432,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237855,
        "assetDescription": "TANUKU SUBRAMANYAM",
        "lastEventDate": 1668851462,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534147E395B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287137,
        "longitude": 103.70342,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237854,
        "assetDescription": "SEETHARAMAN LAKSHMANAN",
        "lastEventDate": 1668851561,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E73395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27919,
        "longitude": 103.707822,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236830,
        "assetDescription": "SATHIAMOORTHY SARANRAJ",
        "lastEventDate": 1668851103,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53414793954",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278143,
        "longitude": 103.70822799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237853,
        "assetDescription": "NUKANABOYINA KRISHNAIAH",
        "lastEventDate": 1668851660,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB532106C3965",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284018,
        "longitude": 103.70467,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236828,
        "assetDescription": "SAMUDRAPANDI MUTHUKRISHNAN",
        "lastEventDate": 1668851432,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534147E395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27809,
        "longitude": 103.70819999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237852,
        "assetDescription": "CHINNAPPA DHANAKODI",
        "lastEventDate": 1668850367,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F8F395D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279115,
        "longitude": 103.70768199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236835,
        "assetDescription": "DAS SATTA CHANDRA",
        "lastEventDate": 1668851073,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F863962",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279118,
        "longitude": 103.70768199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237859,
        "assetDescription": "CHINTHAPANDU PRAVEEN",
        "lastEventDate": 1668851580,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6F397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285018,
        "longitude": 103.703913,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236834,
        "assetDescription": "SARDER MAMUN",
        "lastEventDate": 1668851068,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415893970",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279145,
        "longitude": 103.707672,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237858,
        "assetDescription": "CHETTE MAHESH KUMAR",
        "lastEventDate": 1668851443,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E703978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28593,
        "longitude": 103.70508,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237856,
        "assetDescription": "NIROLA PRAKASH",
        "lastEventDate": 1668851471,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6E397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27901,
        "longitude": 103.70751,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237863,
        "assetDescription": "MOHAMMAD SORAF HOSAIN",
        "lastEventDate": 1668851674,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E7B397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284832,
        "longitude": 103.705387,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238885,
        "assetDescription": "KANG YUANBO",
        "lastEventDate": 1668851498,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C813980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28482,
        "longitude": 103.703778,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237860,
        "assetDescription": "KANNAN ANANDHARAJ",
        "lastEventDate": 1668851061,
        "battery": 40,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D80394C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.283997,
        "longitude": 103.703762,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238891,
        "assetDescription": "ZHANG ZHIPAN",
        "lastEventDate": 1668851433,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E84397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279213,
        "longitude": 103.707133,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237865,
        "assetDescription": "MD RONJU HOSSAIN",
        "lastEventDate": 1668851709,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E83397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28406,
        "longitude": 103.70468199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238888,
        "assetDescription": "KANG WEITAI",
        "lastEventDate": 1668851112,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A80397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286735,
        "longitude": 103.70356,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237864,
        "assetDescription": "AYNAL SIKDER",
        "lastEventDate": 1668851687,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E88397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279105,
        "longitude": 103.707618,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237871,
        "assetDescription": "SUN ENQUAN",
        "lastEventDate": 1668851501,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E7C397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.283332,
        "longitude": 103.702433,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236846,
        "assetDescription": "KARUPPAIYA RAJESHVARAN",
        "lastEventDate": 1668851621,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E67395D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277662,
        "longitude": 103.70964,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236844,
        "assetDescription": "IYYAPPAN SANTHOSH",
        "lastEventDate": 1668851066,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 165,
                "Name": "214S",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6E396D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.276227,
        "longitude": 103.70849299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237875,
        "assetDescription": "SINGARAM MAYAKRISHNAN",
        "lastEventDate": 1668851673,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E833980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287142,
        "longitude": 103.703347,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238899,
        "assetDescription": "LI MING",
        "lastEventDate": 1668851684,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6A397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287025,
        "longitude": 103.702232,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237874,
        "assetDescription": "KANAKARAJ VISWAKETHU",
        "lastEventDate": 1668851236,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E6C3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279233,
        "longitude": 103.707518,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236854,
        "assetDescription": "VAIRAKKANNU PONNUTTURAI",
        "lastEventDate": 1668851644,
        "battery": 50,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E803972",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277793,
        "longitude": 103.70961299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238901,
        "assetDescription": "KANG ZHIFENG",
        "lastEventDate": 1668851627,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7F397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287002,
        "longitude": 103.7034,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236853,
        "assetDescription": "DHARMALINGAM SENTHILKUMAR",
        "lastEventDate": 1668850908,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 165,
                "Name": "214S",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534158A397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277867,
        "longitude": 103.709582,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238900,
        "assetDescription": "XIE FULONG",
        "lastEventDate": 1668850447,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C853978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27911,
        "longitude": 103.707737,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236852,
        "assetDescription": "MANI SELVAKUMAR",
        "lastEventDate": 1668851431,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E79396E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27909,
        "longitude": 103.70768,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237882,
        "assetDescription": "MD SABUZ MIAH",
        "lastEventDate": 1668851495,
        "battery": 25,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E82397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284783,
        "longitude": 103.70529499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237881,
        "assetDescription": "MD ZAHIRUL MIAH",
        "lastEventDate": 1668850398,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D71397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287125,
        "longitude": 103.70508,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236862,
        "assetDescription": "SUBRAMANIYAN PRAKASH",
        "lastEventDate": 1668851634,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E65395D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277865,
        "longitude": 103.709442,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237886,
        "assetDescription": "PAN SHENGSHUANG",
        "lastEventDate": 1668850964,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E78397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284257,
        "longitude": 103.70503199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237885,
        "assetDescription": "LI YUANXIN",
        "lastEventDate": 1668850641,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E813980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28336,
        "longitude": 103.702432,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238909,
        "assetDescription": "Gonzales Montoya Aldo ",
        "lastEventDate": 1668850756,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E89397B",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.282267,
        "longitude": 103.70392,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236861,
        "assetDescription": "ALAGAPPAN ANBUKUMAR",
        "lastEventDate": 1668851616,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53414923961",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277585,
        "longitude": 103.709617,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237891,
        "assetDescription": "PAPPALA MUKUNDA",
        "lastEventDate": 1668851457,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D86397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285418,
        "longitude": 103.704978,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236867,
        "assetDescription": "MUTHUSAMY KOLANCHINATHAN",
        "lastEventDate": 1668851551,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 165,
                "Name": "214S",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7B3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.276972,
        "longitude": 103.70922999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236866,
        "assetDescription": "MANICKAM NITHISHKUMAR",
        "lastEventDate": 1668851267,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416783978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.2778,
        "longitude": 103.709497,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237889,
        "assetDescription": "SEN BISWAJIT",
        "lastEventDate": 1668850759,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C763983",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28224,
        "longitude": 103.70487299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236864,
        "assetDescription": "SELVARASU NANDHAKUMAR",
        "lastEventDate": 1668851550,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E60395A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277857,
        "longitude": 103.709347,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237888,
        "assetDescription": "CAO JIANGUO",
        "lastEventDate": 1668850679,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E83397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285465,
        "longitude": 103.701438,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237894,
        "assetDescription": "YU BO",
        "lastEventDate": 1668851522,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6B397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286642,
        "longitude": 103.703578,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236870,
        "assetDescription": "NEDUNCHEZHIYAN BALAJI",
        "lastEventDate": 1668850275,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53210883962",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279212,
        "longitude": 103.707653,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237899,
        "assetDescription": "REN SHUGUO",
        "lastEventDate": 1668851427,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D833980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277545,
        "longitude": 103.709575,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236875,
        "assetDescription": "RAVI SASIKUMAR",
        "lastEventDate": 1668850640,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E7F397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278935,
        "longitude": 103.707707,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236874,
        "assetDescription": "NARAYANASWAMY RAJESH",
        "lastEventDate": 1668851461,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341476395C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277945,
        "longitude": 103.70947299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236873,
        "assetDescription": "NAGANATHAN KALAIARASAN",
        "lastEventDate": 1668851596,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E86397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277783,
        "longitude": 103.709597,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237897,
        "assetDescription": "Liang Bin",
        "lastEventDate": 1668851547,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E65397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286812,
        "longitude": 103.704595,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237896,
        "assetDescription": "ZHAO MINGHAO",
        "lastEventDate": 1668851360,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E84397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278902,
        "longitude": 103.70758699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237900,
        "assetDescription": "LIU JINGANG",
        "lastEventDate": 1668851397,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E78397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287157,
        "longitude": 103.702198,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237911,
        "assetDescription": "Chen Jun",
        "lastEventDate": 1668851476,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E82397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278182,
        "longitude": 103.70815499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236887,
        "assetDescription": "BASKAR LAKSHMINARAYANAN",
        "lastEventDate": 1668851616,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E6C3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27922,
        "longitude": 103.70743999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236891,
        "assetDescription": "MURUGESAN RAMAMOORTHY",
        "lastEventDate": 1668850949,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534148D3960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279158,
        "longitude": 103.707442,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237915,
        "assetDescription": "DOU YIFAN",
        "lastEventDate": 1668849008,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E79397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285597,
        "longitude": 103.70509299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236890,
        "assetDescription": "SUBAS CHANDRABOSE SIVAKUMAR",
        "lastEventDate": 1668849938,
        "battery": 100,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E753981",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277447,
        "longitude": 103.710118,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237912,
        "assetDescription": "Liu Bin",
        "lastEventDate": 1668850921,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E733977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278805,
        "longitude": 103.70720999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236895,
        "assetDescription": "KANDHASAMY MOHAN",
        "lastEventDate": 1668851524,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E853974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27936,
        "longitude": 103.707568,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236892,
        "assetDescription": "PERIYASAMY PALANIVELU",
        "lastEventDate": 1668851512,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 156,
                "Name": "206",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F6E394D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278495,
        "longitude": 103.70571,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237927,
        "assetDescription": "MD MIJANUR RAHMAN",
        "lastEventDate": 1668851567,
        "battery": 40,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6C3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284877,
        "longitude": 103.703717,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237925,
        "assetDescription": "RENTHINA THEVAR MURUGANANTHAM",
        "lastEventDate": 1668851536,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C893973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287133,
        "longitude": 103.702238,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236900,
        "assetDescription": "SRINIVASAN JEGAN",
        "lastEventDate": 1668851440,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341566397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27921,
        "longitude": 103.707667,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236907,
        "assetDescription": "NAGALINGAM SAKTHIVELU",
        "lastEventDate": 1668851491,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415763977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277717,
        "longitude": 103.70971499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237931,
        "assetDescription": "MIA LIMON",
        "lastEventDate": 1668851645,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C833981",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284037,
        "longitude": 103.70461499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237930,
        "assetDescription": "HAQUE MD ASMAUL",
        "lastEventDate": 1668851557,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C843976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28416,
        "longitude": 103.70465999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237929,
        "assetDescription": "RAHMAN TARAKUR",
        "lastEventDate": 1668851603,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C623973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278772,
        "longitude": 103.70719199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236904,
        "assetDescription": "PALSAMY ANPARASAN",
        "lastEventDate": 1668851688,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53210783966",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27939,
        "longitude": 103.70738,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237928,
        "assetDescription": "DAS NIL KANTA",
        "lastEventDate": 1668851698,
        "battery": 45,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F7C395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278853,
        "longitude": 103.70729299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237935,
        "assetDescription": "WU DA",
        "lastEventDate": 1668849596,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F65395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286558,
        "longitude": 103.704568,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236910,
        "assetDescription": "PAKTHAVACHALAM EZHILAN",
        "lastEventDate": 1668851425,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341489395B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279288,
        "longitude": 103.707398,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237934,
        "assetDescription": "Kong Hanchen",
        "lastEventDate": 1668849339,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F78396C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282417,
        "longitude": 103.70454699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237937,
        "assetDescription": "KAMRUL HOSSAIN",
        "lastEventDate": 1668851277,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6A3973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278992,
        "longitude": 103.70764,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237936,
        "assetDescription": "NIE BAOLEI",
        "lastEventDate": 1668851586,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E84395B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287025,
        "longitude": 103.703463,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237942,
        "assetDescription": "SHIKDER UTTAM KUMAR",
        "lastEventDate": 1668850132,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E69397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278878,
        "longitude": 103.707573,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236918,
        "assetDescription": "KARUPPAIAH ARUN PANDI",
        "lastEventDate": 1668851428,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E713981",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279112,
        "longitude": 103.707225,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236917,
        "assetDescription": "RAMASAMY SIVA",
        "lastEventDate": 1668851021,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534166F3974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279495,
        "longitude": 103.707448,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237941,
        "assetDescription": "HOSSAIN MD SHAMIM",
        "lastEventDate": 1668851693,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7A3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279043,
        "longitude": 103.707383,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237940,
        "assetDescription": "MAHID MIAH",
        "lastEventDate": 1668851557,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6E3972",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278987,
        "longitude": 103.707387,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236923,
        "assetDescription": "RAMACHANDIRAN MUKUNTHAN",
        "lastEventDate": 1668850343,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 168,
                "Name": "211",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341578397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27796,
        "longitude": 103.7054,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236921,
        "assetDescription": "RAJAPPA MUGESH",
        "lastEventDate": 1668851008,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E693971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279423,
        "longitude": 103.707608,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237944,
        "assetDescription": "SAZIM MD ABU",
        "lastEventDate": 1668851118,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D6F397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284072,
        "longitude": 103.704623,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236926,
        "assetDescription": "KANNUSAMY SIVANANDAM",
        "lastEventDate": 1668851533,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416883975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279148,
        "longitude": 103.70742,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237949,
        "assetDescription": "SAMIKKANNU ARUNRAJ",
        "lastEventDate": 1668850737,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7E397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285422,
        "longitude": 103.703752,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236924,
        "assetDescription": "KAMATCHI BALAKRISHNAN",
        "lastEventDate": 1668851464,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 158,
                "Name": "216W",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415723974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278112,
        "longitude": 103.70606,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236929,
        "assetDescription": "RAMASAMI GANESH",
        "lastEventDate": 1668851681,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 158,
                "Name": "216W",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534178A3956",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277993,
        "longitude": 103.70631,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236928,
        "assetDescription": "PALANISAMY BALAMURUGAN",
        "lastEventDate": 1668851054,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534157D3974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279337,
        "longitude": 103.707572,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237963,
        "assetDescription": "LOMTHONG SRIMEK",
        "lastEventDate": 1668851651,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E733979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287133,
        "longitude": 103.702202,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236937,
        "assetDescription": "RAJAMONI SAHAYA RUBAN",
        "lastEventDate": 1668851661,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53210943960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27792,
        "longitude": 103.708383,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237967,
        "assetDescription": "WANG WEI",
        "lastEventDate": 1668851668,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E84397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278837,
        "longitude": 103.70703999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237966,
        "assetDescription": "DEVARAJ MANOGAR",
        "lastEventDate": 1668851474,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E86397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285902,
        "longitude": 103.704775,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236941,
        "assetDescription": "SURESH VISHNU",
        "lastEventDate": 1668850828,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341583397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27789,
        "longitude": 103.70982699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237964,
        "assetDescription": "NAMRAT KHOMSAN",
        "lastEventDate": 1668849726,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E7C397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284047,
        "longitude": 103.703852,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236940,
        "assetDescription": "CHINNAIYA KATHIRESAN",
        "lastEventDate": 1668851712,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6E395D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279222,
        "longitude": 103.70754799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237971,
        "assetDescription": "MIA MD SUMON",
        "lastEventDate": 1668851619,
        "battery": 45,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E6E397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.2791,
        "longitude": 103.707522,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236946,
        "assetDescription": "CHEW KAM CHIN",
        "lastEventDate": 1668851413,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C633970",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27788,
        "longitude": 103.708412,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236945,
        "assetDescription": "TAN MINGKIAT ",
        "lastEventDate": 1668849875,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A673976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277658,
        "longitude": 103.709667,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236944,
        "assetDescription": "MATHIVANAN KRISHNAMOORTHY",
        "lastEventDate": 1668851387,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F7C394C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279005,
        "longitude": 103.70748999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236949,
        "assetDescription": "MIAH MD HANNAN",
        "lastEventDate": 1668848280,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534168D3978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277795,
        "longitude": 103.708415,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236953,
        "assetDescription": "MD KAMAL",
        "lastEventDate": 1668851600,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341480395B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277355,
        "longitude": 103.710145,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236958,
        "assetDescription": "FARUK MD",
        "lastEventDate": 1668851692,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A72397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277738,
        "longitude": 103.710478,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236961,
        "assetDescription": "SALIM MD",
        "lastEventDate": 1668851016,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8C3971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27763,
        "longitude": 103.7098,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236971,
        "assetDescription": "GANESAN KANAGARAJ",
        "lastEventDate": 1668851509,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E673971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279347,
        "longitude": 103.707657,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236970,
        "assetDescription": "MANI GUNALAN",
        "lastEventDate": 1668850887,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534156F3980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28233,
        "longitude": 103.704877,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236974,
        "assetDescription": "PREMKUMAR KARUNANITHI",
        "lastEventDate": 1668851323,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341478395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27997,
        "longitude": 103.707152,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236981,
        "assetDescription": "PANNERSELVAM MAHESWARAN ",
        "lastEventDate": 1668851545,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E71397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277932,
        "longitude": 103.709293,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 236980,
        "assetDescription": "DURAIRAJ ANANDARAJU",
        "lastEventDate": 1668851598,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E613971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27773,
        "longitude": 103.70965299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237010,
        "assetDescription": "XUE DIANFU ",
        "lastEventDate": 1668851575,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534167C3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.2779,
        "longitude": 103.708452,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238045,
        "assetDescription": "Rickieno Bin Mohamed",
        "lastEventDate": 1668848772,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C823980",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.278263,
        "longitude": 103.70921299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238051,
        "assetDescription": "Rizo Yuste Diego Jesus",
        "lastEventDate": 1668851358,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A773983",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.282182,
        "longitude": 103.7042,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237091,
        "assetDescription": "CHINNAPPAN MOVISON",
        "lastEventDate": 1668851546,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534158E3971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279233,
        "longitude": 103.707518,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237089,
        "assetDescription": "RATHINAM SANKAR",
        "lastEventDate": 1668851313,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E7D397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27942,
        "longitude": 103.707573,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237088,
        "assetDescription": "MANICKAM RAMU",
        "lastEventDate": 1668850430,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534166B3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277983,
        "longitude": 103.709493,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237099,
        "assetDescription": "MAUNG MAUNG MANN MYINT ",
        "lastEventDate": 1668850714,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C72396C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282735,
        "longitude": 103.704653,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237103,
        "assetDescription": "SHUNMUGARAJ MANOJ",
        "lastEventDate": 1668851506,
        "battery": 0,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7B397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277485,
        "longitude": 103.70988799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237104,
        "assetDescription": "RAMAN SENTHILMURUGAN",
        "lastEventDate": 1668851494,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E74397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282848,
        "longitude": 103.70553299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237111,
        "assetDescription": "LALONG SITTHIKON",
        "lastEventDate": 1668851539,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416703974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282233,
        "longitude": 103.705137,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237109,
        "assetDescription": "PHIMPHA BUNLERT",
        "lastEventDate": 1668851630,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534166D3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277687,
        "longitude": 103.70957299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237108,
        "assetDescription": "AHMED SHAMIM",
        "lastEventDate": 1668851584,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341479395D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27752,
        "longitude": 103.709845,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237112,
        "assetDescription": "GUDALA RAJU",
        "lastEventDate": 1668851155,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F643963",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.281992,
        "longitude": 103.70530199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237130,
        "assetDescription": "MARLAPUDI RAMESH",
        "lastEventDate": 1668851424,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E76397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28209,
        "longitude": 103.705338,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237132,
        "assetDescription": "RADHAKRISHNAN DHANANJAYAN",
        "lastEventDate": 1668850915,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C773982",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277983,
        "longitude": 103.70992299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238182,
        "assetDescription": "RAJENDRAN MANIKANDAN",
        "lastEventDate": 1668851469,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E8A395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279205,
        "longitude": 103.707532,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237223,
        "assetDescription": "PHANNAWONG ADIREK ",
        "lastEventDate": 1668850380,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416843977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277932,
        "longitude": 103.70956,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237220,
        "assetDescription": "SHEIK MD MILON",
        "lastEventDate": 1668850403,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F83396C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279177,
        "longitude": 103.707562,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237228,
        "assetDescription": "RAMASAMY SAKTHIVEL",
        "lastEventDate": 1668851245,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C673979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278195,
        "longitude": 103.70848799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237239,
        "assetDescription": "SUBRAMANIAN KARTHI",
        "lastEventDate": 1668851303,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C713981",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279222,
        "longitude": 103.707588,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237237,
        "assetDescription": "MUTHURAMAN ADAIKKALAM",
        "lastEventDate": 1668849836,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8F3973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27941,
        "longitude": 103.70755299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237236,
        "assetDescription": "KHANDAKER MOHAMMAD RUBEL",
        "lastEventDate": 1668850750,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C80397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282073,
        "longitude": 103.70509299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237241,
        "assetDescription": "KALIDOSS MUTHU",
        "lastEventDate": 1668851374,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C643978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277698,
        "longitude": 103.70998999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237247,
        "assetDescription": "SEKAR MANIKANDAN",
        "lastEventDate": 1668850885,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E77397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279228,
        "longitude": 103.70746799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237245,
        "assetDescription": "RAJENDRAN EZHILARASAN",
        "lastEventDate": 1668851556,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F5F3971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279312,
        "longitude": 103.707515,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238275,
        "assetDescription": "SUBBAIYAH AYYASAMY",
        "lastEventDate": 1668850179,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F80396D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279183,
        "longitude": 103.70747,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237251,
        "assetDescription": "BUTTHOT JATUPHON",
        "lastEventDate": 1668851439,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C703980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279225,
        "longitude": 103.70742,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237249,
        "assetDescription": "ALAGAPPAN KUMARESAN",
        "lastEventDate": 1668851704,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C713977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279332,
        "longitude": 103.707532,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237248,
        "assetDescription": "NAGAMUTHU CHOLARAJAN ",
        "lastEventDate": 1668851599,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6F3978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279482,
        "longitude": 103.70758699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238272,
        "assetDescription": "ARUMUGAM NAGARAJ",
        "lastEventDate": 1668848394,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C643973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27929,
        "longitude": 103.707663,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237255,
        "assetDescription": "CHINNASAMY GANESAN",
        "lastEventDate": 1668850824,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7B3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279462,
        "longitude": 103.707658,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237252,
        "assetDescription": "NAY MIN SOE",
        "lastEventDate": 1668848232,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8D3971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279252,
        "longitude": 103.707365,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237261,
        "assetDescription": "WILSON VIBIN",
        "lastEventDate": 1668851444,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 158,
                "Name": "216W",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E88397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27802,
        "longitude": 103.70624,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238285,
        "assetDescription": "RAJAGOPAL RAMESH",
        "lastEventDate": 1668849725,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E633979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27771,
        "longitude": 103.70944,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237267,
        "assetDescription": "RENGASAMY SENTHILKUMAR",
        "lastEventDate": 1668851518,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6B397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279375,
        "longitude": 103.707267,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237264,
        "assetDescription": "CHINNARAJI PREMKUMAR",
        "lastEventDate": 1668851438,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7D397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279375,
        "longitude": 103.707473,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238297,
        "assetDescription": "SENTHIL CHANDIRAN",
        "lastEventDate": 1668851333,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C793979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279295,
        "longitude": 103.70761999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238296,
        "assetDescription": "PAZHANIANDI SARANRAJ",
        "lastEventDate": 1668850789,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415713975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279318,
        "longitude": 103.707815,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237279,
        "assetDescription": "NALLUSAMY SATHESH",
        "lastEventDate": 1668851646,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E8B397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279137,
        "longitude": 103.707657,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237278,
        "assetDescription": "BALIHAR SINGH",
        "lastEventDate": 1668851539,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 164,
                "Name": "204",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534148F3960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27773,
        "longitude": 103.708242,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237276,
        "assetDescription": "KAMATCHI THIRUKKUMARAN",
        "lastEventDate": 1668851006,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534147B395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279347,
        "longitude": 103.707527,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238309,
        "assetDescription": "PAGAN SAMYNATHAN",
        "lastEventDate": 1668851670,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C75397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279057,
        "longitude": 103.70721499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237290,
        "assetDescription": "Vallez Sanchez Pedro",
        "lastEventDate": 1668851352,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F7E396D",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.28176,
        "longitude": 103.70396,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237296,
        "assetDescription": "Ngieng Peng Keong, Faisal",
        "lastEventDate": 1668850206,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341567397D",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279593,
        "longitude": 103.70758,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238326,
        "assetDescription": "MANIYAN JOHNSON",
        "lastEventDate": 1668851437,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415653973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279332,
        "longitude": 103.707613,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237301,
        "assetDescription": "Onate Jose Jr Sibbaluca",
        "lastEventDate": 1668851107,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F89396E",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.27836,
        "longitude": 103.708773,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238325,
        "assetDescription": "CHITHIRAI SENAN RAJAPANDI",
        "lastEventDate": 1668851707,
        "battery": 25,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F77394C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279262,
        "longitude": 103.70743999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237300,
        "assetDescription": "Mohammad Reza Bin Abdul Rahim",
        "lastEventDate": 1668851551,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7B3978",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279495,
        "longitude": 103.707437,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237306,
        "assetDescription": "Mohamed Hyder Bin Mohd Ali",
        "lastEventDate": 1668850765,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416863972",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.284478,
        "longitude": 103.70317299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237311,
        "assetDescription": "Macatula Zaldy Flores",
        "lastEventDate": 1668848494,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A7F3976",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.278053,
        "longitude": 103.709013,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237310,
        "assetDescription": "Parijatham Veeramahendran",
        "lastEventDate": 1668851677,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F7D396B",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.285127,
        "longitude": 103.703863,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237309,
        "assetDescription": "P Gunasager",
        "lastEventDate": 1668849885,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A8A3975",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279542,
        "longitude": 103.707527,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237308,
        "assetDescription": "Ahmad Habiibur Rahman Bin Abdul Talib ",
        "lastEventDate": 1668850883,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F7D3950",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.2795,
        "longitude": 103.707275,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238339,
        "assetDescription": "MIA MD RRIDOY",
        "lastEventDate": 1668850779,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E723979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282198,
        "longitude": 103.70496,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238343,
        "assetDescription": "MANI BAKKIYANATH",
        "lastEventDate": 1668851433,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D7B3980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279352,
        "longitude": 103.707605,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237318,
        "assetDescription": "Ravi Shanker S/O A Manivasagam",
        "lastEventDate": 1668848148,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F7A394F",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279493,
        "longitude": 103.70750799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237316,
        "assetDescription": "Periyasamy Saravanan",
        "lastEventDate": 1668849906,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D7C394D",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279175,
        "longitude": 103.707625,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238340,
        "assetDescription": "HAQUE AJIJUL",
        "lastEventDate": 1668851093,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A70397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279233,
        "longitude": 103.70783,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238347,
        "assetDescription": "MARI ELUMALAI",
        "lastEventDate": 1668851462,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 469,
                "Name": "Outdoor Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E77395C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279462,
        "longitude": 103.70773299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237321,
        "assetDescription": "Arumugam Kandhan",
        "lastEventDate": 1668850880,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C74397E",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.283543,
        "longitude": 103.705535,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238351,
        "assetDescription": "NAYEM KAZI",
        "lastEventDate": 1668851500,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB532105E3960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279082,
        "longitude": 103.7076,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238350,
        "assetDescription": "VADAPALLI RAMU",
        "lastEventDate": 1668851558,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534146D395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279162,
        "longitude": 103.707653,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237326,
        "assetDescription": "Lim Hon",
        "lastEventDate": 1668850101,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320B893952",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.281923,
        "longitude": 103.70433299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238349,
        "assetDescription": "GOVINDASAMY VINOTH",
        "lastEventDate": 1668851030,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415833973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279303,
        "longitude": 103.707718,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238348,
        "assetDescription": "RAGUPATHI RAJESH",
        "lastEventDate": 1668851412,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E76397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279258,
        "longitude": 103.70757499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238355,
        "assetDescription": "KALIYAMOORTHY CHOLARAJAN",
        "lastEventDate": 1668851506,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D723983",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282085,
        "longitude": 103.704867,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237330,
        "assetDescription": "Gonzalez Formadela Miguel",
        "lastEventDate": 1668848694,
        "battery": 100,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F8B396C",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.282193,
        "longitude": 103.70459799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238357,
        "assetDescription": "KANNAIAH MUTHAMILSELVAN",
        "lastEventDate": 1668848974,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E77395D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279243,
        "longitude": 103.70764799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238356,
        "assetDescription": "SELVARASU KUMAR",
        "lastEventDate": 1668851256,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380893396C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279367,
        "longitude": 103.707582,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238363,
        "assetDescription": "NAY AUNG",
        "lastEventDate": 1668851202,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A643979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279197,
        "longitude": 103.707493,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237337,
        "assetDescription": "Comert Bugra Ahmet",
        "lastEventDate": 1668851595,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F7E3962",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.282012,
        "longitude": 103.7046,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238361,
        "assetDescription": "AUNG KO ZAW",
        "lastEventDate": 1668851421,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C84396E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278847,
        "longitude": 103.707185,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238360,
        "assetDescription": "VEERASAMY MATHIYAZHAGAN",
        "lastEventDate": 1668851577,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F873960",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27911,
        "longitude": 103.70764,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237343,
        "assetDescription": "Subramanian Velmurugan",
        "lastEventDate": 1668851416,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F8E395D",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.2785,
        "longitude": 103.70891999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237342,
        "assetDescription": "Alibuyog Gerardo Pitpit ",
        "lastEventDate": 1668851288,
        "battery": 50,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7A3973",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.282112,
        "longitude": 103.70452,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238370,
        "assetDescription": "NAGARAJAN UDAYAMARAN",
        "lastEventDate": 1668851707,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C893978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277743,
        "longitude": 103.70951,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238369,
        "assetDescription": "SUPERIANO ROSELO GONZALES",
        "lastEventDate": 1668850289,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C82397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277643,
        "longitude": 103.709482,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237345,
        "assetDescription": "Krishnamaraj Ramalingam Ramesh",
        "lastEventDate": 1668850079,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341574397D",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.278153,
        "longitude": 103.709093,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237344,
        "assetDescription": "Soundararajan Saminathan",
        "lastEventDate": 1668851693,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C8E3973",
        "idMAssetType": 2,
        "assetType": "Worker",
        "latitude": 1.279277,
        "longitude": 103.70764199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238379,
        "assetDescription": "GOVINDASAMY RAGUNATHAN",
        "lastEventDate": 1668851188,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E783978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279257,
        "longitude": 103.70758699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238377,
        "assetDescription": "RANI NARAYANAN NEELAKANDAN",
        "lastEventDate": 1668851522,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E86396E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278075,
        "longitude": 103.708433,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238383,
        "assetDescription": "MAHALINGAM MATHIYALAGAN",
        "lastEventDate": 1668849919,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A7D3982",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279272,
        "longitude": 103.707622,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238387,
        "assetDescription": "KRISHNAMOORTHY MARIMUTHU",
        "lastEventDate": 1668851570,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F8E396D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27768,
        "longitude": 103.709683,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238386,
        "assetDescription": "KARUPPAIAH CHELLAIAH",
        "lastEventDate": 1668850943,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F79395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279203,
        "longitude": 103.707625,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238389,
        "assetDescription": "RAMAKRISHNAN BALAJI",
        "lastEventDate": 1668851706,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB538086E396B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279203,
        "longitude": 103.70758699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238393,
        "assetDescription": "PREMKUMAR SATHISHKUMAR",
        "lastEventDate": 1668848767,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D66397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279187,
        "longitude": 103.70724299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238409,
        "assetDescription": "CHINNATHAMBI MURALI",
        "lastEventDate": 1668851433,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6D3979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279152,
        "longitude": 103.707732,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238408,
        "assetDescription": "SHAH ROHITKUMAR JAGARNATH",
        "lastEventDate": 1668851166,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534157E397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278887,
        "longitude": 103.707313,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238413,
        "assetDescription": "SEBASTIAN JERALD",
        "lastEventDate": 1668851675,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416773977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27792,
        "longitude": 103.70956,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238412,
        "assetDescription": "GOVINDARASU RAJESH",
        "lastEventDate": 1668851485,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E84397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277835,
        "longitude": 103.709445,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238418,
        "assetDescription": "ANNADURAI KARTHIKEYAN",
        "lastEventDate": 1668851701,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6F3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279273,
        "longitude": 103.707675,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238416,
        "assetDescription": "RANA JEWEL",
        "lastEventDate": 1668848140,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F8A395E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277947,
        "longitude": 103.709502,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238422,
        "assetDescription": "ZAW YE AUNG",
        "lastEventDate": 1668851659,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534156A3974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279048,
        "longitude": 103.70727,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238420,
        "assetDescription": "KONDOKAR MAMUN",
        "lastEventDate": 1668849597,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E793979",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277942,
        "longitude": 103.7096,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238427,
        "assetDescription": "BOIDYO CHANCHAL KUMAR",
        "lastEventDate": 1668849267,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E78397A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279187,
        "longitude": 103.707658,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238430,
        "assetDescription": "MOLLA AKIJ",
        "lastEventDate": 1668851595,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7B397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279395,
        "longitude": 103.70768,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238429,
        "assetDescription": "KHAN NABINUR",
        "lastEventDate": 1668851700,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E62395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279425,
        "longitude": 103.707612,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238434,
        "assetDescription": "KHIN THEINT THEINT AYE",
        "lastEventDate": 1668851663,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415773977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277897,
        "longitude": 103.708332,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237415,
        "assetDescription": "Karuppaiah Konar Mudaliyappan",
        "lastEventDate": 1668851519,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5341465395A",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279157,
        "longitude": 103.707725,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237414,
        "assetDescription": "Wang Zhilin",
        "lastEventDate": 1668851683,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6B3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27922,
        "longitude": 103.707718,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238475,
        "assetDescription": "DURAI SINGAVANDAIYAR SINGARAVEL",
        "lastEventDate": 1668851517,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E77397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282393,
        "longitude": 103.704612,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238473,
        "assetDescription": "HEIN ZAR LIN",
        "lastEventDate": 1668850835,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E71397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282072,
        "longitude": 103.70528,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238481,
        "assetDescription": "XU ZHONG KUI",
        "lastEventDate": 1668851292,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320B78394E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282337,
        "longitude": 103.703373,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238502,
        "assetDescription": "RAMES",
        "lastEventDate": 1668851513,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E79397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284062,
        "longitude": 103.70403499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238500,
        "assetDescription": "MAITI ASHUTOSH",
        "lastEventDate": 1668851443,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E84396D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.283425,
        "longitude": 103.70276799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238506,
        "assetDescription": "He Xu",
        "lastEventDate": 1668849263,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380F693951",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28241,
        "longitude": 103.704225,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238505,
        "assetDescription": "Zhao Junlong ",
        "lastEventDate": 1668849354,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C77396B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282522,
        "longitude": 103.703987,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238504,
        "assetDescription": "SHA SAIBUL ALI",
        "lastEventDate": 1668849892,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416623978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28427,
        "longitude": 103.703942,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238510,
        "assetDescription": "Hu Zhisen",
        "lastEventDate": 1668851223,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53210693964",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282685,
        "longitude": 103.703893,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238509,
        "assetDescription": "Xiao Guoqiang",
        "lastEventDate": 1668851702,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E8C3971",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278115,
        "longitude": 103.708322,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238508,
        "assetDescription": "Song Junze",
        "lastEventDate": 1668850852,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F90396D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286968,
        "longitude": 103.70341499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238514,
        "assetDescription": "Yang Xiong",
        "lastEventDate": 1668850323,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534156D3978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278062,
        "longitude": 103.70889299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238513,
        "assetDescription": "Gao Deming",
        "lastEventDate": 1668850790,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5300E8F3973",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282405,
        "longitude": 103.70433299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238512,
        "assetDescription": "Tan Zhiyou",
        "lastEventDate": 1668851459,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 167,
                "Name": "214N",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F743961",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.280273,
        "longitude": 103.705117,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238517,
        "assetDescription": "Xu Pan",
        "lastEventDate": 1668850938,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F73395F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282305,
        "longitude": 103.70436,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238522,
        "assetDescription": "KOTI MADHU",
        "lastEventDate": 1668851686,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C743983",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278988,
        "longitude": 103.707672,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238520,
        "assetDescription": "THOTA RAJASHEKHAR",
        "lastEventDate": 1668850101,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6F397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286447,
        "longitude": 103.703632,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238527,
        "assetDescription": "YIN CHENGBO",
        "lastEventDate": 1668851494,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 166,
                "Name": "216V",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D79394D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277718,
        "longitude": 103.708463,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237502,
        "assetDescription": "SHARIF MOHAMMAD MASUD",
        "lastEventDate": 1668848359,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E823977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277552,
        "longitude": 103.710033,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237511,
        "assetDescription": "ASHOK KUMAR DINAKARAN",
        "lastEventDate": 1668851633,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6F397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27913,
        "longitude": 103.70769299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237510,
        "assetDescription": "JAGADEESAN KARTHIKRAJ",
        "lastEventDate": 1668851383,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB532105F3964",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279315,
        "longitude": 103.70763799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237509,
        "assetDescription": "PILLATHIYAN BASKARAN",
        "lastEventDate": 1668851387,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7B3981",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.27766,
        "longitude": 103.709687,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238539,
        "assetDescription": "ALEXANDER DERICK",
        "lastEventDate": 1668851484,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D7E394C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286697,
        "longitude": 103.703577,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237512,
        "assetDescription": "SUNDARAM SURESH",
        "lastEventDate": 1668851666,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D88397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277868,
        "longitude": 103.709637,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238541,
        "assetDescription": "ZHANG YUJI",
        "lastEventDate": 1668851229,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D7F394C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284523,
        "longitude": 103.70294,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238540,
        "assetDescription": "JIS CHACKAPPAN ",
        "lastEventDate": 1668849207,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7F397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279398,
        "longitude": 103.707573,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238547,
        "assetDescription": "ADPA MAHESH",
        "lastEventDate": 1668851456,
        "battery": 75,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D7E394B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279178,
        "longitude": 103.70728,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238546,
        "assetDescription": "DONTHARAVENI RAMESH",
        "lastEventDate": 1668851561,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6A3978",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285512,
        "longitude": 103.704807,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238545,
        "assetDescription": "Liu Yingchao",
        "lastEventDate": 1668851606,
        "battery": 5,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D73397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279268,
        "longitude": 103.70732799999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238544,
        "assetDescription": "LI HAIBIN",
        "lastEventDate": 1668851446,
        "battery": 10,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 162,
                "Name": "202",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 462,
                "Name": "Area 1",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320D76394D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.278918,
        "longitude": 103.707205,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237527,
        "assetDescription": "MURUGAN KUMAR",
        "lastEventDate": 1668851172,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6C3976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279232,
        "longitude": 103.707562,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238550,
        "assetDescription": "NIJAM MIAH",
        "lastEventDate": 1668851531,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D78397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279022,
        "longitude": 103.7071,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238549,
        "assetDescription": "JANTAWONG SAYAN",
        "lastEventDate": 1668850040,
        "battery": 95,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E83397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.283967,
        "longitude": 103.70411999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238548,
        "assetDescription": "DING GANG",
        "lastEventDate": 1668851312,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E6C397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284537,
        "longitude": 103.703243,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238554,
        "assetDescription": "MD MOJAHIDUL ISLAM",
        "lastEventDate": 1668851536,
        "battery": 70,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E783980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286477,
        "longitude": 103.703552,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238553,
        "assetDescription": "MD MONIR HOSSAIN",
        "lastEventDate": 1668851611,
        "battery": 80,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7C397E",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284912,
        "longitude": 103.703493,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238552,
        "assetDescription": "MOHAMMED YEAMIN",
        "lastEventDate": 1668850246,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D6E397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.283293,
        "longitude": 103.70233499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237535,
        "assetDescription": "SELVAM KABIL",
        "lastEventDate": 1668851626,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 161,
                "Name": "208",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 463,
                "Name": "Area 2",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320F6C396F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279095,
        "longitude": 103.707298,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238558,
        "assetDescription": "NURE ALAM TUHIN",
        "lastEventDate": 1668850725,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E803980",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284492,
        "longitude": 103.702877,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238556,
        "assetDescription": "TORIQUL ISLAM",
        "lastEventDate": 1668851413,
        "battery": 30,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E7F397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284942,
        "longitude": 103.70362999999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238560,
        "assetDescription": "DODAYEF ASHRAF",
        "lastEventDate": 1668851465,
        "battery": 50,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380D7B397F",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.285138,
        "longitude": 103.705153,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238567,
        "assetDescription": "MD JONI AHMED",
        "lastEventDate": 1668851118,
        "battery": 55,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C7C397C",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.283577,
        "longitude": 103.705462,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238566,
        "assetDescription": "CHAKRAPU JAGAN",
        "lastEventDate": 1668851554,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C87397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.277998,
        "longitude": 103.70986699999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238565,
        "assetDescription": "RANGAN VENKATESAN",
        "lastEventDate": 1668851141,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E7A3977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286958,
        "longitude": 103.70343,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238571,
        "assetDescription": "MD NIROB ISLAM",
        "lastEventDate": 1668851608,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53415763975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284615,
        "longitude": 103.70286,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238570,
        "assetDescription": "MD HASEM ALI",
        "lastEventDate": 1668850812,
        "battery": 90,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E6A397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284543,
        "longitude": 103.705238,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238569,
        "assetDescription": "BIPLOB MIAH",
        "lastEventDate": 1668850439,
        "battery": 20,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB53416693974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.286505,
        "longitude": 103.70353,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": true,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238574,
        "assetDescription": "YACHIN",
        "lastEventDate": 1668851141,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C643975",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.284188,
        "longitude": 103.704618,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238573,
        "assetDescription": "LITON MD",
        "lastEventDate": 1668851688,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB534158D397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28425,
        "longitude": 103.70455299999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238572,
        "assetDescription": "SAMBUL MUHIT KASAM",
        "lastEventDate": 1668851524,
        "battery": 65,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320E673976",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279062,
        "longitude": 103.70757499999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238578,
        "assetDescription": "MOHAMMAD TOFAZZAL HAQUE",
        "lastEventDate": 1668850005,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E873974",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.287025,
        "longitude": 103.703445,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238577,
        "assetDescription": "WANG YONGQIANG",
        "lastEventDate": 1668850774,
        "battery": 85,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 465,
                "Name": "Laydown Area",
                "Level": 2,
                "Tessellation": true
            },
            {
                "Id": 470,
                "Name": "Laydown Unit",
                "Level": 3,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5380E6A397D",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.28539,
        "longitude": 103.704917,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 238576,
        "assetDescription": "MONER HOSEN",
        "lastEventDate": 1668851275,
        "battery": 35,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 474,
                "Name": "Offices Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 466,
                "Name": "Facilities Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320A723977",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.282475,
        "longitude": 103.704763,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
    {
        "idAsset": 237566,
        "assetDescription": "THANGARASU ELUMALAI",
        "lastEventDate": 1668851630,
        "battery": 60,
        "positionObtaingMechanism": null,
        "areas": [
            {
                "Id": 153,
                "Name": "Crisp",
                "Level": 1,
                "Tessellation": true
            },
            {
                "Id": 468,
                "Name": "Shelter Unit",
                "Level": 3,
                "Tessellation": true
            },
            {
                "Id": 467,
                "Name": "Shelter Area",
                "Level": 2,
                "Tessellation": true
            }
        ],
        "companyId": 1,
        "serialNum": "000DB5320C6B397B",
        "idMAssetType": 6,
        "assetType": "Subcontracted",
        "latitude": 1.279313,
        "longitude": 103.70776199999999,
        "assetRoot": 0,
        "fatherDescription": null,
        "lowBattery": false,
        "representation": null,
        "login": null
    },
 ]

  let bubbleCopy = [...bubbleData];

  const [search, setSearch] = useState();

  //changeHandler
  const changeHandler = (e) => {
    setSearch(e.target.value);
    
  };

  //submitHandler
  const submitHandler = (e) => {
    e.preventDefault();

    bubbleCopy = bubbleData.filter((bd) => bd.assetDescription === search);
    setChildDatas({
      data: bubbleCopy,
      parser: { type: "json", x: "longitude", y: "latitude" },
    });
  };
console.log(bubbleCopy)
  const [childOptions, setChildOptions] = useState(bubbleLayerOptions);
  const [childDatas, setChildDatas] = useState({
    data: bubbleData,
    parser: { type: "json", x: "longitude", y: "latitude" },
  });

  //search

  const App = () => (
    <Space direction="vertical">
      <Space wrap>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
      </Space>
      <Space wrap>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>






            
        <Button icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="search">
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button icon={<SearchOutlined />} href="https://www.google.com" />
      </Space>
    </Space>
  );
  return (
    <div>
      {/* Search */}
      <div
        style={{ backgroundColor: "orange", width: "100%", height: "100px" }}
      >
        <center>
          <h1>SINOPEC EMPLOYESS GPS DATA TRACKER</h1>
          <form onSubmit={submitHandler} >
            <label>Enter Full Name</label>
            
            <input type="text" value={search} onChange={changeHandler}>
              
            </input>
            <input type="submit" value="Search" />
          </form>
        </center>
      </div>
      {/* LarkMap */}
      <div>
        <LarkMap {...config} style={{ height: 450 }}>
          <ZoomControl />
          <MapThemeControl />
          <ChoroplethLayer {...options} source={source} />
          <BubbleLayer {...childOptions} source={childDatas} />
        </LarkMap>
      </div>
    </div>
  );
};

export default App;
