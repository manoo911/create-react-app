

import React, { useEffect, useState } from 'react';
import { LarkMap, ChoroplethLayer, HeatmapLayer,BubbleLayer } from '@antv/larkmap';





import './App.css';
import './index.css';



//LarkMap
const config = {
  mapType: 'Mapbox',
  mapOptions: {
    style: 'mapbox://styles/mapbox/satellite-streets-v10',
    center: [103.69329, 1.26920],
    zoom: 9,
    token: 'pk.eyJ1IjoiYmFpaGVpbmV0IiwiYSI6ImNsYXhseTZodDBvZTgzd3FteHdlZXl5aHMifQ.O6u0tgmsvrTJuVAdzqSFjw',
  },
};
//ChoroplethLayer
const layerOptions = {
  autoFit: true,
  
  opacity: 0.3,
  strokeColor: 'red',
  lineWidth: 1,
  state: {
    active: { strokeColor: 'yellow', linewidth: 1.5, lineOpacity: 0.8 },
    
  },
  fillColor: { field: 'fill' },
  label: {
    field: 'name',
    visible: true,
    style: { fill: 'red', fontSize: 12, stroke: 'white', strokeWidth: 2,textOffset: [0, -20]},
  },
};

//Bubblelayer options
const bubbleLayerOptions = {
  autoFit: true,
  radius: {
    field: 'assetDescription',
    value: ({ battery }) => battery,
  },
  // fillColor: {
  //   field: 'battery',
  //  value: ['#0f9960', '#33a02c', '#377eb8'],
  // },
  opacity: 0.8,
  strokeColor: 'blue',
  lineWidth: 1,
  state: {
    active: { strokeColor: 'red', lineWidth: 2, lineOpacity: 1, },
  },
  label: {
    field: 'assetDescription',
    visible: true,
    style: { fill: '#fcf7f7', fontSize: 8, stroke: '#fcf7f7', strokeWidth: 0.5, textOffset: [0, -20] },
  },
};

function App() {

  //ChoroplethLayer
  const [options, setOptions] = useState(layerOptions);
  const [source, setSource] = useState({
    data: {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "TKN",
            
            "stroke": "#17b2b5",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#17b2b5",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "TKS",

            "stroke": "#25cbb7",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#25cbb7",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "CCFU",
            "stroke": "#2cce2e",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#2cce2e",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },

        {
          "type": "Feature",
          "properties": {
            "name": "DHU",

            "stroke": "#db1a1a",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#db1a1a",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "HOS",

            "stroke": "#d0d408",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#d0d408",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "PFB",

            "stroke": "#5516ca",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#5516ca",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            name: "DAU",

            "stroke": "#dfce11",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#dfce11",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            name: "SWS",

            "stroke": "#17c5e8",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#17c5e8",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "ARU",

            "stroke": "#1fd13d",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#1fd13d",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "SRU",

            "stroke": "#d7bf1d",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#d7bf1d",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            name: "HSFU",

            "stroke": "#2d20d9",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#2d20d9",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "O&U",

            "stroke": "#d21919",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#d21919",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "O&U",

            "stroke": "#df2020",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#df2020",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "name": "CWT",

            "stroke": "#31bcd8",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#31bcd8",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  103.70692573069783,
                  1.2778922829526778
                ],
                [
                  103.70677280957216,
                  1.2777635850771105
                ],
                [
                  103.70705987203058,
                  1.2774461424014447
                ],
                [
                  103.7072041147743,
                  1.2775747325202786
                ],
                [
                  103.70692573069783,
                  1.2778922829526778
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {

            "stroke": "#f4f812",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#f4f812",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
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
                ]
              ]
            ],
            "type": "Polygon"
          }
        }
      ]
    }
  }
  )

  //bubblelayer
  const [Heatoptions, setHeatOptions] = useState(bubbleLayerOptions);
  const [Heatsource, setHeatSource] = useState({
    data:[{"idAsset":237573,"assetDescription":"CHANDRAN RAMANATHAN","lastEventDate":1669191064,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB534167A3975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27743,"longitude":103.707233,"assetRoot":0,"lowBattery":false},{"idAsset":237572,"assetDescription":"PACKIRISAMY PARAMASIVAM","lastEventDate":1669190807,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB534167D3979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27944,"longitude":103.70572,"assetRoot":0,"lowBattery":false},{"idAsset":236563,"assetDescription":"Gary Ng Zhen Jie","lastEventDate":1669187960,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7C397F","idMAssetType":2,"assetType":"Worker","latitude":1.282915,"longitude":103.704707,"assetRoot":0,"lowBattery":false},{"idAsset":237585,"assetDescription":"PRING BERNABE DELA CRUZ","lastEventDate":1669191094,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320E68397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277388,"longitude":103.708172,"assetRoot":0,"lowBattery":false},{"idAsset":236561,"assetDescription":"Domingo Sallan Naz","lastEventDate":1669190909,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320D7B394C","idMAssetType":2,"assetType":"Worker","latitude":1.278287,"longitude":103.70675,"assetRoot":0,"lowBattery":false},{"idAsset":236567,"assetDescription":"Joel Brojas Macasinag","lastEventDate":1669190875,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6B395F","idMAssetType":2,"assetType":"Worker","latitude":1.279298,"longitude":103.707287,"assetRoot":0,"lowBattery":false},{"idAsset":236566,"assetDescription":"Javier Del Val Latorre","lastEventDate":1669187740,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320E71397D","idMAssetType":2,"assetType":"Worker","latitude":1.282547,"longitude":103.70252,"assetRoot":0,"lowBattery":false},{"idAsset":236565,"assetDescription":"Hugo Soares Vilhena","lastEventDate":1669188774,"battery":15,"areas":"[List]","companyId":1,"serialNum":"000DB5320F77395D","idMAssetType":2,"assetType":"Worker","latitude":1.282088,"longitude":103.704262,"assetRoot":0,"lowBattery":true},{"idAsset":236570,"assetDescription":"Mohan S/O Chockkan Alaguraju","lastEventDate":1669191013,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8C3975","idMAssetType":2,"assetType":"Worker","latitude":1.279405,"longitude":103.70732,"assetRoot":0,"lowBattery":true},{"idAsset":236568,"assetDescription":"Juan Jose Perdigon","lastEventDate":1669189234,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6E396F","idMAssetType":2,"assetType":"Worker","latitude":1.282048,"longitude":103.704147,"assetRoot":0,"lowBattery":false},{"idAsset":236575,"assetDescription":"Shanib Basheer Kochiparambil Mohammed","lastEventDate":1669190378,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320E90395B","idMAssetType":2,"assetType":"Worker","latitude":1.279573,"longitude":103.707307,"assetRoot":0,"lowBattery":false},{"idAsset":236574,"assetDescription":"Roberto Lope Penaroyo","lastEventDate":1669190968,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5341469395D","idMAssetType":2,"assetType":"Worker","latitude":1.27828,"longitude":103.709227,"assetRoot":0,"lowBattery":false},{"idAsset":236577,"assetDescription":"De Guzman Alberto Valdez","lastEventDate":1669188158,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C73397E","idMAssetType":2,"assetType":"Worker","latitude":1.282817,"longitude":103.703508,"assetRoot":0,"lowBattery":false},{"idAsset":236582,"assetDescription":"Subramanian Balaji","lastEventDate":1669188657,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB53417653957","idMAssetType":2,"assetType":"Worker","latitude":1.283018,"longitude":103.705227,"assetRoot":0,"lowBattery":false},{"idAsset":236581,"assetDescription":"Abdul Kader Nagoor Kani","lastEventDate":1669189287,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB534146F395C","idMAssetType":2,"assetType":"Worker","latitude":1.282945,"longitude":103.703307,"assetRoot":0,"lowBattery":false},{"idAsset":236580,"assetDescription":"Marlon Seit Nuera","lastEventDate":1669190714,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6E3961","idMAssetType":2,"assetType":"Worker","latitude":1.285198,"longitude":103.70392,"assetRoot":0,"lowBattery":false},{"idAsset":236590,"assetDescription":"Tamara Dominguez Lopez Isabel","lastEventDate":1669188101,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB53415673973","idMAssetType":2,"assetType":"Worker","latitude":1.282362,"longitude":103.703933,"assetRoot":0,"lowBattery":false},{"idAsset":236589,"assetDescription":"Teodoro Villanueva Plazo","lastEventDate":1669191057,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB534156E3974","idMAssetType":2,"assetType":"Worker","latitude":1.278337,"longitude":103.70928,"assetRoot":0,"lowBattery":false},{"idAsset":236595,"assetDescription":"Nagamos Cleovel Masangya","lastEventDate":1669190866,"battery":45,"areas":"[List]","companyId":1,"serialNum":"000DB5320C75397F","idMAssetType":2,"assetType":"Worker","latitude":1.279118,"longitude":103.707292,"assetRoot":0,"lowBattery":false},{"idAsset":236592,"assetDescription":"Mohamad Faizal Bin Mohamad Haroon","lastEventDate":1669190848,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320E873977","idMAssetType":2,"assetType":"Worker","latitude":1.279683,"longitude":103.707453,"assetRoot":0,"lowBattery":false},{"idAsset":237616,"assetDescription":"JAGESFERAN S/O JAGANATHAN","lastEventDate":1669190992,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5380E87397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277523,"longitude":103.70732,"assetRoot":0,"lowBattery":false},{"idAsset":236598,"assetDescription":"Muhamad Gadaffi s/o Abdul Bazir","lastEventDate":1669190517,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6E396E","idMAssetType":2,"assetType":"Worker","latitude":1.279313,"longitude":103.707287,"assetRoot":0,"lowBattery":false},{"idAsset":236597,"assetDescription":"Kayambu Solairajan","lastEventDate":1669191043,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C903972","idMAssetType":2,"assetType":"Worker","latitude":1.277697,"longitude":103.70964,"assetRoot":0,"lowBattery":false},{"idAsset":236596,"assetDescription":"Adnan Bin Mohd","lastEventDate":1669190861,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C763974","idMAssetType":2,"assetType":"Worker","latitude":1.279228,"longitude":103.707288,"assetRoot":0,"lowBattery":false},{"idAsset":236607,"assetDescription":"Krishnan Parthasarathy","lastEventDate":1669190827,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E74395B","idMAssetType":2,"assetType":"Worker","latitude":1.27755,"longitude":103.708315,"assetRoot":0,"lowBattery":false},{"idAsset":237629,"assetDescription":"SEETA SUPAN","lastEventDate":1669190887,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320E853979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282208,"longitude":103.705017,"assetRoot":0,"lowBattery":false},{"idAsset":236604,"assetDescription":"Nga Eng Hui","lastEventDate":1669191014,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7D3979","idMAssetType":2,"assetType":"Worker","latitude":1.282317,"longitude":103.70532,"assetRoot":0,"lowBattery":false},{"idAsset":236610,"assetDescription":"Corcini Velasco Castillones","lastEventDate":1669190815,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5380F76394E","idMAssetType":2,"assetType":"Worker","latitude":1.27793,"longitude":103.70691,"assetRoot":0,"lowBattery":false},{"idAsset":237633,"assetDescription":"HOSSAIN MOHAMMAD MANIK","lastEventDate":1669190949,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320D77394C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277865,"longitude":103.70988,"assetRoot":0,"lowBattery":false},{"idAsset":236609,"assetDescription":"Anguita Banegas Luis","lastEventDate":1669191007,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7A397F","idMAssetType":2,"assetType":"Worker","latitude":1.282038,"longitude":103.704168,"assetRoot":0,"lowBattery":false},{"idAsset":238663,"assetDescription":"Andrew Hefft","lastEventDate":1669191038,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5341486395C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279267,"longitude":103.70726,"assetRoot":0,"lowBattery":false},{"idAsset":238661,"assetDescription":"Neil Hair","lastEventDate":1669190715,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB53415653975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281187,"longitude":103.70402,"assetRoot":0,"lowBattery":false},{"idAsset":236612,"assetDescription":"Martinez Ortiz Antonio","lastEventDate":1669190822,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB534168D3979","idMAssetType":2,"assetType":"Worker","latitude":1.278358,"longitude":103.70916,"assetRoot":0,"lowBattery":false},{"idAsset":236618,"assetDescription":"Veerappan Balasubramanian ","lastEventDate":1669191051,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB53416663978","idMAssetType":2,"assetType":"Worker","latitude":1.2781,"longitude":103.709,"assetRoot":0,"lowBattery":false},{"idAsset":236617,"assetDescription":"Md Humayon Kabir","lastEventDate":1669190480,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F60396E","idMAssetType":2,"assetType":"Worker","latitude":1.283367,"longitude":103.705147,"assetRoot":0,"lowBattery":false},{"idAsset":237641,"assetDescription":"HOSSAIN ALAMGIR","lastEventDate":1669190835,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6A3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27801,"longitude":103.709413,"assetRoot":0,"lowBattery":false},{"idAsset":236616,"assetDescription":"Vazerla Venkata Narasimha Raju","lastEventDate":1669191068,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB534167C3979","idMAssetType":2,"assetType":"Worker","latitude":1.278937,"longitude":103.705532,"assetRoot":0,"lowBattery":true},{"idAsset":237640,"assetDescription":"CHAN ALEK","lastEventDate":1669190474,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C723976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278013,"longitude":103.709342,"assetRoot":0,"lowBattery":false},{"idAsset":238671,"assetDescription":"Velan G Mariappan","lastEventDate":1669190631,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5300E733970","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281282,"longitude":103.704187,"assetRoot":0,"lowBattery":false},{"idAsset":236623,"assetDescription":"Tsatsarelis Charalampos","lastEventDate":1669187583,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5320C73397A","idMAssetType":2,"assetType":"Worker","latitude":1.2821,"longitude":103.704233,"assetRoot":0,"lowBattery":false},{"idAsset":236622,"assetDescription":"Muralitharan S/O Aragasamy","lastEventDate":1669191074,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5380F763950","idMAssetType":2,"assetType":"Worker","latitude":1.27937,"longitude":103.707353,"assetRoot":0,"lowBattery":false},{"idAsset":238675,"assetDescription":"Bambang Hermanto","lastEventDate":1669188737,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB534147C395E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282928,"longitude":103.705225,"assetRoot":0,"lowBattery":false},{"idAsset":236625,"assetDescription":"ERNEST GAN CHEN YAO","lastEventDate":1669191000,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53414783960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279403,"longitude":103.707413,"assetRoot":0,"lowBattery":false},{"idAsset":238678,"assetDescription":"Gobala Krishnan Ganesan ","lastEventDate":1669190924,"battery":25,"areas":"[List]","companyId":1,"serialNum":"000DB53416803979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281265,"longitude":103.704242,"assetRoot":0,"lowBattery":false},{"idAsset":237653,"assetDescription":"SUKKHAN SAMAK","lastEventDate":1669190492,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E8B3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277543,"longitude":103.709882,"assetRoot":0,"lowBattery":false},{"idAsset":238677,"assetDescription":"Muhammad Kamarul Izwan Bin Maarof","lastEventDate":1669190903,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320A80397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281478,"longitude":103.704803,"assetRoot":0,"lowBattery":false},{"idAsset":238676,"assetDescription":"Johari Bin Ab Rahman","lastEventDate":1669191029,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB532105E3965","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27798,"longitude":103.706355,"assetRoot":0,"lowBattery":false},{"idAsset":237659,"assetDescription":"RAMASAMY PUSHPARAJ","lastEventDate":1669189456,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7B3971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282227,"longitude":103.704975,"assetRoot":0,"lowBattery":false},{"idAsset":236635,"assetDescription":"GOH LING","lastEventDate":1669190462,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB534167E3973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279087,"longitude":103.707743,"assetRoot":0,"lowBattery":false},{"idAsset":237658,"assetDescription":"MADASU SURESH BABU","lastEventDate":1669188539,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6E3974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27719,"longitude":103.709733,"assetRoot":0,"lowBattery":false},{"idAsset":236634,"assetDescription":"FERMIN CORPUZ DUMALE","lastEventDate":1669190793,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53415613971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278058,"longitude":103.707138,"assetRoot":0,"lowBattery":false},{"idAsset":237656,"assetDescription":"POKKUM BOONTAN","lastEventDate":1669190896,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7D3978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282265,"longitude":103.704952,"assetRoot":0,"lowBattery":false},{"idAsset":237662,"assetDescription":"PRISSADA PREEDA","lastEventDate":1669191053,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C653974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282043,"longitude":103.705947,"assetRoot":0,"lowBattery":false},{"idAsset":236641,"assetDescription":"MASNUN BIN KATMAN","lastEventDate":1669191088,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C823975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279157,"longitude":103.70739,"assetRoot":0,"lowBattery":false},{"idAsset":237664,"assetDescription":"PHIMPHRAI CHART","lastEventDate":1669191072,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6A3978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282123,"longitude":103.705013,"assetRoot":0,"lowBattery":false},{"idAsset":237669,"assetDescription":"PHOOTOYOD SUTHEP","lastEventDate":1669190915,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6F395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281893,"longitude":103.705372,"assetRoot":0,"lowBattery":false},{"idAsset":238693,"assetDescription":"MOHAMED YASLI BIN RAJA SULTAN","lastEventDate":1669190846,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8F3975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279082,"longitude":103.707812,"assetRoot":0,"lowBattery":false},{"idAsset":236645,"assetDescription":"KARUNUGARAN NADARAJAH","lastEventDate":1669190967,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C793983","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279082,"longitude":103.707898,"assetRoot":0,"lowBattery":false},{"idAsset":237668,"assetDescription":"PHONRAT THANA","lastEventDate":1669190942,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6C397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282303,"longitude":103.705348,"assetRoot":0,"lowBattery":false},{"idAsset":236644,"assetDescription":"NAMAKODI NARAYANAN PRABAHARAN","lastEventDate":1669190251,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320E753979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28339,"longitude":103.705478,"assetRoot":0,"lowBattery":false},{"idAsset":237675,"assetDescription":"MUTHUSAMY KUMAR","lastEventDate":1669190289,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320D7D394C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277977,"longitude":103.709743,"assetRoot":0,"lowBattery":false},{"idAsset":238699,"assetDescription":"KHOLIL MD","lastEventDate":1669190778,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6A3975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276953,"longitude":103.708433,"assetRoot":0,"lowBattery":false},{"idAsset":236651,"assetDescription":"BANGARU MOHANBABU","lastEventDate":1669190901,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6B397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277515,"longitude":103.708352,"assetRoot":0,"lowBattery":false},{"idAsset":236650,"assetDescription":"UNBALLAGAN NADHSON","lastEventDate":1669190654,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB53415833972","idMAssetType":6,"assetType":"Subcontracted","latitude":1.2777,"longitude":103.709947,"assetRoot":0,"lowBattery":false},{"idAsset":238698,"assetDescription":"ISLAM RAKIBULL","lastEventDate":1669190080,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320A7D3976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279228,"longitude":103.707732,"assetRoot":0,"lowBattery":false},{"idAsset":238697,"assetDescription":"SUMON MD UBAIJOR AL MOMTAZI","lastEventDate":1669191044,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320C85397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27817,"longitude":103.708173,"assetRoot":0,"lowBattery":false},{"idAsset":236649,"assetDescription":"SIVA VEJAYAN","lastEventDate":1669191070,"battery":15,"areas":"[List]","companyId":1,"serialNum":"000DB534147C395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27821,"longitude":103.707748,"assetRoot":0,"lowBattery":true},{"idAsset":237672,"assetDescription":"NAYAK SUDIPTA","lastEventDate":1669187559,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5380F70394D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28188,"longitude":103.70516,"assetRoot":0,"lowBattery":false},{"idAsset":236655,"assetDescription":"MOHAMED JOHAN BIN PONGOT","lastEventDate":1669188805,"battery":45,"areas":"[List]","companyId":1,"serialNum":"000DB532108E3966","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279427,"longitude":103.707742,"assetRoot":0,"lowBattery":false},{"idAsset":236653,"assetDescription":"IAN KIM TEE","lastEventDate":1669189678,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB534156A3971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282285,"longitude":103.704733,"assetRoot":0,"lowBattery":false},{"idAsset":238701,"assetDescription":"HOSSEN MD ALAMGIR","lastEventDate":1669190844,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E803979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277045,"longitude":103.70885,"assetRoot":0,"lowBattery":false},{"idAsset":237676,"assetDescription":"DURAISAMY SELVAKUMAR","lastEventDate":1669190886,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320F7A396F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277698,"longitude":103.709907,"assetRoot":0,"lowBattery":false},{"idAsset":236659,"assetDescription":"YANG YAT YAN","lastEventDate":1669190933,"battery":25,"areas":"[List]","companyId":1,"serialNum":"000DB5320A86397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279068,"longitude":103.707662,"assetRoot":0,"lowBattery":false},{"idAsset":237683,"assetDescription":"SHANMUGAVADIVEL PURUSHOTHAMAN","lastEventDate":1669190334,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7F3979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.275305,"longitude":103.708757,"assetRoot":0,"lowBattery":false},{"idAsset":238707,"assetDescription":"AZHAGAR VIJAYKUMAR","lastEventDate":1669190956,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8D3973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279258,"longitude":103.707248,"assetRoot":0,"lowBattery":false},{"idAsset":238706,"assetDescription":"SUNDARAMOORTHY UTHAYABHARATHI","lastEventDate":1669191005,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C753980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277472,"longitude":103.707283,"assetRoot":0,"lowBattery":false},{"idAsset":237681,"assetDescription":"AMALRAL ANTONY ABRAHAM LINCOLN","lastEventDate":1669190258,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8A3976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282422,"longitude":103.705093,"assetRoot":0,"lowBattery":false},{"idAsset":236663,"assetDescription":"SAMMY JR REBOLOS CATANIAG","lastEventDate":1669190064,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320F693961","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282575,"longitude":103.704773,"assetRoot":0,"lowBattery":false},{"idAsset":237686,"assetDescription":"Rajendran Subash","lastEventDate":1669190359,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C803971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282288,"longitude":103.704947,"assetRoot":0,"lowBattery":false},{"idAsset":238710,"assetDescription":"NARAYANASAMY PALANISAMY","lastEventDate":1669191083,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320A733975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279037,"longitude":103.707193,"assetRoot":0,"lowBattery":false},{"idAsset":236661,"assetDescription":"SOE HTET PYING","lastEventDate":1669190496,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C77397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279718,"longitude":103.706098,"assetRoot":0,"lowBattery":false},{"idAsset":238708,"assetDescription":"KUMAR PERIYASAMY","lastEventDate":1669191012,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7F3971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277473,"longitude":103.70725,"assetRoot":0,"lowBattery":false},{"idAsset":237691,"assetDescription":"Pechetti Srikanth","lastEventDate":1669189070,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB534147B3954","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277783,"longitude":103.710047,"assetRoot":0,"lowBattery":false},{"idAsset":236666,"assetDescription":"UDDIN MD KALIM","lastEventDate":1669190849,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380E753980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277777,"longitude":103.705473,"assetRoot":0,"lowBattery":false},{"idAsset":237690,"assetDescription":"Palraj Pandian","lastEventDate":1669191101,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E68397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282352,"longitude":103.70536,"assetRoot":0,"lowBattery":false},{"idAsset":238713,"assetDescription":"SUKUMARAN DAISY SUBIN","lastEventDate":1669190827,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C79397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279175,"longitude":103.707973,"assetRoot":0,"lowBattery":false},{"idAsset":237689,"assetDescription":"Pilli Hemanthkumar","lastEventDate":1669190725,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB534176C3957","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282133,"longitude":103.704927,"assetRoot":0,"lowBattery":false},{"idAsset":237688,"assetDescription":"Pandurangan Manikandan","lastEventDate":1669190973,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB53414743960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277855,"longitude":103.709232,"assetRoot":0,"lowBattery":false},{"idAsset":236670,"assetDescription":"JAYME SEGUNDO III ESPANOL","lastEventDate":1669188457,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB5320A873977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281718,"longitude":103.70484,"assetRoot":0,"lowBattery":true},{"idAsset":237693,"assetDescription":"Govindasamy Venkatesh","lastEventDate":1669191031,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB53416803950","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277488,"longitude":103.709583,"assetRoot":0,"lowBattery":false},{"idAsset":237699,"assetDescription":"Vijayan Vijesh","lastEventDate":1669190929,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB53416613976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28218,"longitude":103.705243,"assetRoot":0,"lowBattery":false},{"idAsset":238723,"assetDescription":"KARUPPANNAN MUTHUKUMAR","lastEventDate":1669190835,"battery":40,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6F3960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279907,"longitude":103.706363,"assetRoot":0,"lowBattery":false},{"idAsset":236674,"assetDescription":"THIRUNAVUKKARASU RAJAPRABAHARAN","lastEventDate":1669190876,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB534168C3973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279643,"longitude":103.7057,"assetRoot":0,"lowBattery":false},{"idAsset":237698,"assetDescription":"Muthusamy Ayyappan","lastEventDate":1669190053,"battery":20,"areas":"[List]","companyId":1,"serialNum":"000DB5320E8B3960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278007,"longitude":103.709615,"assetRoot":0,"lowBattery":true},{"idAsset":236673,"assetDescription":"SEBASTI ARUL SURCHIL SOLOMON","lastEventDate":1669187492,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB53417733950","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278307,"longitude":103.709498,"assetRoot":0,"lowBattery":false},{"idAsset":238720,"assetDescription":"VELUSWAMY PARAMASIVAM VIJAYAKANTH","lastEventDate":1669190853,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7B3973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.275587,"longitude":103.706903,"assetRoot":0,"lowBattery":false},{"idAsset":237696,"assetDescription":"Pulithevan Arjunan","lastEventDate":1669189363,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB534177F3953","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277898,"longitude":103.70996,"assetRoot":0,"lowBattery":false},{"idAsset":236679,"assetDescription":"HENNAYAKA MUDIYANSELAGE SHANIKA BUDDHI","lastEventDate":1669190873,"battery":40,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6C397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277452,"longitude":103.708172,"assetRoot":0,"lowBattery":false},{"idAsset":237702,"assetDescription":"Kaliyamoorthy Senthilkumar","lastEventDate":1669190917,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320F77396E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282032,"longitude":103.705405,"assetRoot":0,"lowBattery":false},{"idAsset":237701,"assetDescription":"Manoharan Parthiban","lastEventDate":1669190220,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB53415713978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282517,"longitude":103.70488,"assetRoot":0,"lowBattery":false},{"idAsset":236676,"assetDescription":"SOLAI PANDIMURUGAN","lastEventDate":1669188567,"battery":20,"areas":"[List]","companyId":1,"serialNum":"000DB5320F7C396F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277625,"longitude":103.710412,"assetRoot":0,"lowBattery":true},{"idAsset":237700,"assetDescription":"George Gladstin","lastEventDate":1669189683,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB53415793982","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277943,"longitude":103.709507,"assetRoot":0,"lowBattery":false},{"idAsset":237707,"assetDescription":"Arumugam Mohanraj","lastEventDate":1669191047,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5341490395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27761,"longitude":103.70962,"assetRoot":0,"lowBattery":false},{"idAsset":237704,"assetDescription":"Arulsamy Balraj","lastEventDate":1669190870,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB534167C3972","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282152,"longitude":103.704827,"assetRoot":0,"lowBattery":false},{"idAsset":237710,"assetDescription":"Kuzhandai Kandiyar Arunachalam","lastEventDate":1669189907,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320E84397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282342,"longitude":103.70492,"assetRoot":0,"lowBattery":false},{"idAsset":238732,"assetDescription":"PANOY MARK RYAN CASTILLO","lastEventDate":1669187744,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320F893960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282313,"longitude":103.70528,"assetRoot":0,"lowBattery":false},{"idAsset":238739,"assetDescription":"PATTANI PRAKASH","lastEventDate":1669190767,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C883975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277803,"longitude":103.70542,"assetRoot":0,"lowBattery":false},{"idAsset":237715,"assetDescription":"GUANG ANAK ETAT","lastEventDate":1669190954,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7E397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282032,"longitude":103.705373,"assetRoot":0,"lowBattery":false},{"idAsset":236688,"assetDescription":"MURUGANANDAM MANIKANDAN","lastEventDate":1669190734,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5320A6D397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27746,"longitude":103.70728,"assetRoot":0,"lowBattery":true},{"idAsset":237718,"assetDescription":"SUNDARAMOORTHY SHANMUGAM","lastEventDate":1669190734,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320E87397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281955,"longitude":103.705043,"assetRoot":0,"lowBattery":false},{"idAsset":236692,"assetDescription":"LAKSHMANAN TAMILARASAN","lastEventDate":1669191044,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6F3972","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278687,"longitude":103.705997,"assetRoot":0,"lowBattery":false},{"idAsset":237723,"assetDescription":"JOSEPH TIJO","lastEventDate":1669190914,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C68397A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282125,"longitude":103.705213,"assetRoot":0,"lowBattery":false},{"idAsset":238746,"assetDescription":"VELU BALAMURUGAN","lastEventDate":1669190871,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6C396D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279755,"longitude":103.707163,"assetRoot":0,"lowBattery":false},{"idAsset":236698,"assetDescription":"ANBALAGAN TAMILVANNAN","lastEventDate":1669190975,"battery":50,"areas":"[List]","companyId":1,"serialNum":"000DB534147A395A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279517,"longitude":103.70688,"assetRoot":0,"lowBattery":false},{"idAsset":236697,"assetDescription":"KUPPUSAMY MAHARAJAN","lastEventDate":1669190993,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7A3979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279438,"longitude":103.706273,"assetRoot":0,"lowBattery":false},{"idAsset":237720,"assetDescription":"CHUA EU SENG","lastEventDate":1669190893,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E80397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281597,"longitude":103.70696,"assetRoot":0,"lowBattery":false},{"idAsset":236702,"assetDescription":"TAN TEAM CHOY","lastEventDate":1669190634,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F67396D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279452,"longitude":103.707382,"assetRoot":0,"lowBattery":false},{"idAsset":238750,"assetDescription":"RAMAIAH SILAMBARASAN","lastEventDate":1669191011,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320F66396C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277462,"longitude":103.707422,"assetRoot":0,"lowBattery":false},{"idAsset":237726,"assetDescription":"KANTHI NAGA SRINIVASU","lastEventDate":1669190514,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB53416863979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282017,"longitude":103.704948,"assetRoot":0,"lowBattery":false},{"idAsset":236701,"assetDescription":"MUTHALAGU MUTHUKKARUPPAIAH","lastEventDate":1669190171,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320F91395E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283095,"longitude":103.70454,"assetRoot":0,"lowBattery":false},{"idAsset":237730,"assetDescription":"SEKAR ARUL","lastEventDate":1669190851,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5380E77397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282162,"longitude":103.705162,"assetRoot":0,"lowBattery":false},{"idAsset":238752,"assetDescription":"JEYARAM RAJESH","lastEventDate":1669190517,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C823981","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277622,"longitude":103.710633,"assetRoot":0,"lowBattery":false},{"idAsset":236711,"assetDescription":"ROY ALONGKAR","lastEventDate":1669190208,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8C3974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277612,"longitude":103.708337,"assetRoot":0,"lowBattery":false},{"idAsset":237735,"assetDescription":"PONNUSAMY SARAVANAKUMAR","lastEventDate":1669190889,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320F75395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282305,"longitude":103.704858,"assetRoot":0,"lowBattery":false},{"idAsset":237734,"assetDescription":"RADHAKRISHNAN ARUNKUMAR","lastEventDate":1669190794,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5380D7C3984","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281893,"longitude":103.704368,"assetRoot":0,"lowBattery":false},{"idAsset":236710,"assetDescription":"MANNAN ABDUL ","lastEventDate":1669191021,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320E75395C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278062,"longitude":103.708173,"assetRoot":0,"lowBattery":false},{"idAsset":236709,"assetDescription":"CHINNAIAH PANDIAN","lastEventDate":1669190126,"battery":20,"areas":"[List]","companyId":1,"serialNum":"000DB5341491395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282957,"longitude":103.70487,"assetRoot":0,"lowBattery":true},{"idAsset":237732,"assetDescription":"SEKAR CHANDRAMOHAN","lastEventDate":1669191002,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E723976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282047,"longitude":103.70508,"assetRoot":0,"lowBattery":false},{"idAsset":236715,"assetDescription":"NASHIR","lastEventDate":1669191036,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB534166D3974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278807,"longitude":103.707002,"assetRoot":0,"lowBattery":false},{"idAsset":237739,"assetDescription":"NADESAN CHOKALINGAM","lastEventDate":1669190271,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5380E833981","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284273,"longitude":103.70324,"assetRoot":0,"lowBattery":false},{"idAsset":236712,"assetDescription":"HOSSAIN ANOWAR","lastEventDate":1669190869,"battery":15,"areas":"[List]","companyId":1,"serialNum":"000DB5380E67397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279057,"longitude":103.70688,"assetRoot":0,"lowBattery":true},{"idAsset":236719,"assetDescription":"RAHMAN MAZIBUR","lastEventDate":1669190563,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53416873978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277747,"longitude":103.709653,"assetRoot":0,"lowBattery":false},{"idAsset":236718,"assetDescription":"MASUD","lastEventDate":1669191070,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB53416633976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279117,"longitude":103.706893,"assetRoot":0,"lowBattery":false},{"idAsset":237742,"assetDescription":"DURAIRAJ STALIN","lastEventDate":1669190817,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320E643976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28219,"longitude":103.705082,"assetRoot":0,"lowBattery":false},{"idAsset":237741,"assetDescription":"KONDI SRINIVAS","lastEventDate":1669189742,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5341487395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276293,"longitude":103.707947,"assetRoot":0,"lowBattery":false},{"idAsset":237740,"assetDescription":"MANOMANI SATHISH","lastEventDate":1669189203,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB534146D395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277527,"longitude":103.70981,"assetRoot":0,"lowBattery":false},{"idAsset":236716,"assetDescription":"ALI ANNAS","lastEventDate":1669191042,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5380E713982","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277443,"longitude":103.70836,"assetRoot":0,"lowBattery":false},{"idAsset":236723,"assetDescription":"VAITHILINGAM SENTHIL KUMAR","lastEventDate":1669188903,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5380E7D3983","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282622,"longitude":103.70539,"assetRoot":0,"lowBattery":false},{"idAsset":237745,"assetDescription":"SAWRAJ SINGH","lastEventDate":1669190926,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320B7B394E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277945,"longitude":103.710103,"assetRoot":0,"lowBattery":false},{"idAsset":237744,"assetDescription":"RADHAKRISHNAN MANIKANDAN","lastEventDate":1669190614,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB534168B3979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282022,"longitude":103.704902,"assetRoot":0,"lowBattery":false},{"idAsset":236720,"assetDescription":"AHAD MD","lastEventDate":1669190849,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB532108F3963","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278207,"longitude":103.708238,"assetRoot":0,"lowBattery":false},{"idAsset":236727,"assetDescription":"SUBBAIAH KUMARESAN","lastEventDate":1669190985,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5380E723974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278693,"longitude":103.704875,"assetRoot":0,"lowBattery":false},{"idAsset":236726,"assetDescription":"DURAISAMY SATHISHKUMAR","lastEventDate":1669189679,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB53416883976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278408,"longitude":103.708987,"assetRoot":0,"lowBattery":false},{"idAsset":236731,"assetDescription":"MOHAMAD MOHI UDDIN","lastEventDate":1669190851,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5341486395B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276568,"longitude":103.708065,"assetRoot":0,"lowBattery":false},{"idAsset":236728,"assetDescription":"KALIMUTHU MUNISAMY","lastEventDate":1669190585,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB534168B3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278033,"longitude":103.708357,"assetRoot":0,"lowBattery":false},{"idAsset":236732,"assetDescription":"HOSSAIN SELIM","lastEventDate":1669190974,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5300E60396E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277355,"longitude":103.70822,"assetRoot":0,"lowBattery":false},{"idAsset":237763,"assetDescription":"Zhang Hai Jun","lastEventDate":1669190144,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8A3974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282262,"longitude":103.70416,"assetRoot":0,"lowBattery":false},{"idAsset":238786,"assetDescription":"Yeong Kar Seang","lastEventDate":1669190859,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6C397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27793,"longitude":103.706268,"assetRoot":0,"lowBattery":false},{"idAsset":238791,"assetDescription":"Saidi Bin Mat Arifin","lastEventDate":1669190423,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7D397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278263,"longitude":103.706407,"assetRoot":0,"lowBattery":false},{"idAsset":238790,"assetDescription":"Muhammad Faiq Bin Muhammad Fakiruddin","lastEventDate":1669190904,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5380E6C3978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281388,"longitude":103.704533,"assetRoot":0,"lowBattery":false},{"idAsset":237765,"assetDescription":"DONTHARAVENI NARSAIAH","lastEventDate":1669188335,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C853976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282452,"longitude":103.703987,"assetRoot":0,"lowBattery":false},{"idAsset":237778,"assetDescription":"CHINNAKKANNU PERIASAMY","lastEventDate":1669190651,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5300E763970","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282292,"longitude":103.705018,"assetRoot":0,"lowBattery":false},{"idAsset":238800,"assetDescription":"RAYHAN HOSSAIN FAHIM","lastEventDate":1669191024,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320E633976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284905,"longitude":103.706275,"assetRoot":0,"lowBattery":false},{"idAsset":237783,"assetDescription":"PALANISAMY ELAYARAJA","lastEventDate":1669189497,"battery":40,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7F397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283245,"longitude":103.703273,"assetRoot":0,"lowBattery":false},{"idAsset":237782,"assetDescription":"KAMALANATHAN VIJAYAKUMAR","lastEventDate":1669190029,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E67397A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283142,"longitude":103.703097,"assetRoot":0,"lowBattery":false},{"idAsset":237781,"assetDescription":"IRULAN MALAIRASU","lastEventDate":1669188763,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320F83395E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282537,"longitude":103.705047,"assetRoot":0,"lowBattery":false},{"idAsset":236756,"assetDescription":"NORAZALAN BIN RAMLI","lastEventDate":1669191066,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380D6B3979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277968,"longitude":103.709935,"assetRoot":0,"lowBattery":false},{"idAsset":237785,"assetDescription":"SELVARASU SUCITHERAN","lastEventDate":1669190917,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F643971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278645,"longitude":103.706272,"assetRoot":0,"lowBattery":false},{"idAsset":238815,"assetDescription":"MAHABUB ISLAM","lastEventDate":1669190974,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320E873960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283393,"longitude":103.702725,"assetRoot":0,"lowBattery":false},{"idAsset":238818,"assetDescription":"SRINIVASA RAO SAIRIGAPU VENKATA","lastEventDate":1669190980,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E883978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283283,"longitude":103.702967,"assetRoot":0,"lowBattery":false},{"idAsset":238823,"assetDescription":"RATHNAM CHANDRAMOHAN","lastEventDate":1669190818,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB534156A397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28617,"longitude":103.704118,"assetRoot":0,"lowBattery":false},{"idAsset":236775,"assetDescription":"GOVINDARAJ KALAIVANAN","lastEventDate":1669191036,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5300E633972","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277348,"longitude":103.707405,"assetRoot":0,"lowBattery":false},{"idAsset":237798,"assetDescription":"Jin Jietai","lastEventDate":1669190900,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320F67395E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277943,"longitude":103.708497,"assetRoot":0,"lowBattery":false},{"idAsset":237797,"assetDescription":"Zhang Jing","lastEventDate":1669191067,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F85395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.287037,"longitude":103.702128,"assetRoot":0,"lowBattery":false},{"idAsset":238821,"assetDescription":"GANESAN PRAKASH","lastEventDate":1669187522,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7A3982","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27855,"longitude":103.708947,"assetRoot":0,"lowBattery":false},{"idAsset":237796,"assetDescription":"NORMAN BIN ISMAIL","lastEventDate":1669190908,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB53415693975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283918,"longitude":103.704113,"assetRoot":0,"lowBattery":false},{"idAsset":238827,"assetDescription":"SHEAK ELIAS","lastEventDate":1669190962,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7E3979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28402,"longitude":103.704333,"assetRoot":0,"lowBattery":false},{"idAsset":238824,"assetDescription":"KULANTHAISAMY MARIYA JOSEPH","lastEventDate":1669190146,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320E78397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279822,"longitude":103.707295,"assetRoot":0,"lowBattery":false},{"idAsset":237807,"assetDescription":"Tian Weijun","lastEventDate":1669190424,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380E833982","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28599,"longitude":103.703703,"assetRoot":0,"lowBattery":false},{"idAsset":238831,"assetDescription":"GHORAI GANESH","lastEventDate":1669190602,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7F397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283292,"longitude":103.702885,"assetRoot":0,"lowBattery":false},{"idAsset":237806,"assetDescription":"Wu Kai","lastEventDate":1669191010,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB534157F3983","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28476,"longitude":103.703865,"assetRoot":0,"lowBattery":false},{"idAsset":237805,"assetDescription":"Jiang Jianlei","lastEventDate":1669190909,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB53417753957","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278033,"longitude":103.708483,"assetRoot":0,"lowBattery":false},{"idAsset":238829,"assetDescription":"DAS BIPLOB","lastEventDate":1669190058,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320C83396D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284212,"longitude":103.703947,"assetRoot":0,"lowBattery":false},{"idAsset":237804,"assetDescription":"Cheng Qinglin","lastEventDate":1669190677,"battery":50,"areas":"[List]","companyId":1,"serialNum":"000DB5320F92396B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284512,"longitude":103.704188,"assetRoot":0,"lowBattery":false},{"idAsset":238828,"assetDescription":"BHUNIA NIRMAL","lastEventDate":1669190823,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320E893977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284022,"longitude":103.703955,"assetRoot":0,"lowBattery":false},{"idAsset":238834,"assetDescription":"ALI MD NASIR","lastEventDate":1669190990,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C76397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284773,"longitude":103.705197,"assetRoot":0,"lowBattery":false},{"idAsset":238833,"assetDescription":"SARKER MD AMZAD","lastEventDate":1669190448,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C863978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28323,"longitude":103.705028,"assetRoot":0,"lowBattery":false},{"idAsset":236785,"assetDescription":"SAKTHIVEL ARIVAZHAGAN","lastEventDate":1669188520,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53417643958","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277853,"longitude":103.709373,"assetRoot":0,"lowBattery":false},{"idAsset":238832,"assetDescription":"HASAN ZAHID","lastEventDate":1669191063,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5320E82397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283393,"longitude":103.702755,"assetRoot":0,"lowBattery":false},{"idAsset":238839,"assetDescription":"KABIR MIAH","lastEventDate":1669190677,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C723980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28438,"longitude":103.704253,"assetRoot":0,"lowBattery":false},{"idAsset":238838,"assetDescription":"AHAMED MD SHARIF","lastEventDate":1669190972,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8D3978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284602,"longitude":103.70518,"assetRoot":0,"lowBattery":false},{"idAsset":237813,"assetDescription":"Wang Peng","lastEventDate":1669189094,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E93395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283385,"longitude":103.70544,"assetRoot":0,"lowBattery":false},{"idAsset":236789,"assetDescription":"SESU ELISON","lastEventDate":1669191088,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5341587397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276847,"longitude":103.709033,"assetRoot":0,"lowBattery":false},{"idAsset":238837,"assetDescription":"MD SHOHEL MIA","lastEventDate":1669190818,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C753978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284742,"longitude":103.704983,"assetRoot":0,"lowBattery":false},{"idAsset":237812,"assetDescription":"Wang Gaoping","lastEventDate":1669191024,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320F8C396D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279263,"longitude":103.70711,"assetRoot":0,"lowBattery":false},{"idAsset":238836,"assetDescription":"SHOHEL SARDER","lastEventDate":1669191011,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6B3962","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284723,"longitude":103.705158,"assetRoot":0,"lowBattery":false},{"idAsset":238843,"assetDescription":"ALAMGIR HOSSAIN","lastEventDate":1669189727,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6A396F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281597,"longitude":103.706513,"assetRoot":0,"lowBattery":false},{"idAsset":238842,"assetDescription":"MIAH ARIF","lastEventDate":1669190920,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6B397A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286598,"longitude":103.70369,"assetRoot":0,"lowBattery":false},{"idAsset":238841,"assetDescription":"SAHIN MIA","lastEventDate":1669190816,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C873974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278045,"longitude":103.7085,"assetRoot":0,"lowBattery":false},{"idAsset":237816,"assetDescription":"Yang Qi","lastEventDate":1669188077,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320E823979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282632,"longitude":103.704295,"assetRoot":0,"lowBattery":false},{"idAsset":236792,"assetDescription":"VARATHARAJ VIJAYAKUMAR","lastEventDate":1669190900,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320F66396E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277463,"longitude":103.707262,"assetRoot":0,"lowBattery":false},{"idAsset":238840,"assetDescription":"AHMED HOSSAIN BAPARY","lastEventDate":1669190253,"battery":45,"areas":"[List]","companyId":1,"serialNum":"000DB5320C733979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28479,"longitude":103.70521,"assetRoot":0,"lowBattery":false},{"idAsset":238846,"assetDescription":"PERIYASAMY MURUGESAN","lastEventDate":1669187987,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7F3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27919,"longitude":103.707573,"assetRoot":0,"lowBattery":false},{"idAsset":238845,"assetDescription":"MD SABIR ALI HERA","lastEventDate":1669190810,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6C397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284957,"longitude":103.70414,"assetRoot":0,"lowBattery":false},{"idAsset":238844,"assetDescription":"KHAN MD AL AMIN","lastEventDate":1669189719,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C88397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284898,"longitude":103.703808,"assetRoot":0,"lowBattery":false},{"idAsset":237825,"assetDescription":"Yan Yafeng","lastEventDate":1669190954,"battery":20,"areas":"[List]","companyId":1,"serialNum":"000DB5341466395C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279077,"longitude":103.70694,"assetRoot":0,"lowBattery":true},{"idAsset":238849,"assetDescription":"PATHAN JAMEEL SAMAD KHAN","lastEventDate":1669190472,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5320C743981","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286055,"longitude":103.703743,"assetRoot":0,"lowBattery":true},{"idAsset":238854,"assetDescription":"MARRI NARESH","lastEventDate":1669190941,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320C823979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277265,"longitude":103.708573,"assetRoot":0,"lowBattery":false},{"idAsset":238852,"assetDescription":"WANG YONG","lastEventDate":1669190862,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320C713974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284353,"longitude":103.705632,"assetRoot":0,"lowBattery":false},{"idAsset":237828,"assetDescription":"SANKAR MUGILAN","lastEventDate":1669190943,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB53416763976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278753,"longitude":103.706562,"assetRoot":0,"lowBattery":false},{"idAsset":238859,"assetDescription":"ANKATHI GANGADHAR","lastEventDate":1669190903,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7E3982","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278288,"longitude":103.707038,"assetRoot":0,"lowBattery":false},{"idAsset":238858,"assetDescription":"MOHMAD RAFI","lastEventDate":1669190169,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C773976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285512,"longitude":103.704753,"assetRoot":0,"lowBattery":false},{"idAsset":238857,"assetDescription":"BURRA SAI TEJA","lastEventDate":1669190850,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E643979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28398,"longitude":103.702938,"assetRoot":0,"lowBattery":false},{"idAsset":238856,"assetDescription":"GUBBALA RAJESH KUMAR","lastEventDate":1669190652,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320E81397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286545,"longitude":103.703748,"assetRoot":0,"lowBattery":false},{"idAsset":237839,"assetDescription":"MUTHAIYAN ARAVIND","lastEventDate":1669191049,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7F3981","idMAssetType":6,"assetType":"Subcontracted","latitude":1.287168,"longitude":103.7022,"assetRoot":0,"lowBattery":false},{"idAsset":238863,"assetDescription":"MD MASUM BILLAH","lastEventDate":1669191078,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C753973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277327,"longitude":103.7088,"assetRoot":0,"lowBattery":false},{"idAsset":237838,"assetDescription":"MOORTHI PRABAKARAN","lastEventDate":1669189157,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7B397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282785,"longitude":103.704813,"assetRoot":0,"lowBattery":false},{"idAsset":238862,"assetDescription":"MD ABU HENA","lastEventDate":1669191078,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7C397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27733,"longitude":103.708853,"assetRoot":0,"lowBattery":false},{"idAsset":238861,"assetDescription":"PANG JINXING","lastEventDate":1669190975,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB5320C903973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27727,"longitude":103.708588,"assetRoot":0,"lowBattery":true},{"idAsset":236812,"assetDescription":"PALANIYAPPAN DEEPANRAJ","lastEventDate":1669190920,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C673973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.2768,"longitude":103.707548,"assetRoot":0,"lowBattery":false},{"idAsset":238860,"assetDescription":"MYLAE MANI BABU","lastEventDate":1669190396,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C85397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286532,"longitude":103.705092,"assetRoot":0,"lowBattery":false},{"idAsset":238867,"assetDescription":"MD MEHRAJ HOSSAIN AKASH","lastEventDate":1669191079,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C85397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277323,"longitude":103.70887,"assetRoot":0,"lowBattery":false},{"idAsset":237842,"assetDescription":"TEKUMATLA SHANTAIAH","lastEventDate":1669191073,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C853974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278508,"longitude":103.706343,"assetRoot":0,"lowBattery":false},{"idAsset":237841,"assetDescription":"SHAIK MOULALI","lastEventDate":1669190912,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB534167C3975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278527,"longitude":103.706098,"assetRoot":0,"lowBattery":false},{"idAsset":238865,"assetDescription":"MD TOFIQUL ISLAM","lastEventDate":1669190988,"battery":40,"areas":"[List]","companyId":1,"serialNum":"000DB5320E693979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286848,"longitude":103.703318,"assetRoot":0,"lowBattery":false},{"idAsset":238864,"assetDescription":"SHAFIUL HASAN","lastEventDate":1669190986,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320A743981","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278057,"longitude":103.70869,"assetRoot":0,"lowBattery":false},{"idAsset":237840,"assetDescription":"NATARAJAN SENTHILKUMAR","lastEventDate":1669191080,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB53415783981","idMAssetType":6,"assetType":"Subcontracted","latitude":1.287077,"longitude":103.702247,"assetRoot":0,"lowBattery":false},{"idAsset":237847,"assetDescription":"MURUGANANDHAM BALAMURGAN","lastEventDate":1669188945,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320F893961","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285257,"longitude":103.703835,"assetRoot":0,"lowBattery":false},{"idAsset":238870,"assetDescription":"SUN DAWEI","lastEventDate":1669190629,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6E3976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27953,"longitude":103.707298,"assetRoot":0,"lowBattery":false},{"idAsset":237845,"assetDescription":"SUNDARAMURTHY THARANIDHARAN","lastEventDate":1669187923,"battery":25,"areas":"[List]","companyId":1,"serialNum":"000DB534176B3951","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282315,"longitude":103.705422,"assetRoot":0,"lowBattery":false},{"idAsset":238869,"assetDescription":"HAN JINFU","lastEventDate":1669191070,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C70397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.287222,"longitude":103.70202,"assetRoot":0,"lowBattery":false},{"idAsset":238868,"assetDescription":"MD TUHIN RANA","lastEventDate":1669189236,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8E3976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286683,"longitude":103.704015,"assetRoot":0,"lowBattery":false},{"idAsset":237850,"assetDescription":"SA SAMSUL","lastEventDate":1669191056,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C74397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284075,"longitude":103.703042,"assetRoot":0,"lowBattery":false},{"idAsset":238874,"assetDescription":"RAPELLY SWAMY","lastEventDate":1669189537,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320C883971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28435,"longitude":103.702737,"assetRoot":0,"lowBattery":false},{"idAsset":238872,"assetDescription":"LIU GUANGYE","lastEventDate":1669188418,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E66397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284905,"longitude":103.703148,"assetRoot":0,"lowBattery":false},{"idAsset":237855,"assetDescription":"TANUKU SUBRAMANYAM","lastEventDate":1669190656,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB534147E395B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28317,"longitude":103.703052,"assetRoot":0,"lowBattery":false},{"idAsset":237854,"assetDescription":"SEETHARAMAN LAKSHMANAN","lastEventDate":1669190934,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E73395E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278502,"longitude":103.70629,"assetRoot":0,"lowBattery":false},{"idAsset":236830,"assetDescription":"SATHIAMOORTHY SARANRAJ","lastEventDate":1669188660,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB53414793954","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278998,"longitude":103.707763,"assetRoot":0,"lowBattery":true},{"idAsset":238878,"assetDescription":"PATHAN MD SHOHAG","lastEventDate":1669190958,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6C3974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285103,"longitude":103.705013,"assetRoot":0,"lowBattery":false},{"idAsset":237853,"assetDescription":"NUKANABOYINA KRISHNAIAH","lastEventDate":1669189295,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB532106C3965","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283905,"longitude":103.704493,"assetRoot":0,"lowBattery":false},{"idAsset":236828,"assetDescription":"SAMUDRAPANDI MUTHUKRISHNAN","lastEventDate":1669190860,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB534147E395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278883,"longitude":103.707868,"assetRoot":0,"lowBattery":false},{"idAsset":237852,"assetDescription":"CHINNAPPA DHANAKODI","lastEventDate":1669190640,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320F8F395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282568,"longitude":103.704908,"assetRoot":0,"lowBattery":false},{"idAsset":237859,"assetDescription":"CHINTHAPANDU PRAVEEN","lastEventDate":1669190834,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6F397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27913,"longitude":103.706915,"assetRoot":0,"lowBattery":false},{"idAsset":236834,"assetDescription":"SARDER MAMUN","lastEventDate":1669191093,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB53415893970","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283067,"longitude":103.706587,"assetRoot":0,"lowBattery":false},{"idAsset":237858,"assetDescription":"CHETTE MAHESH KUMAR","lastEventDate":1669190698,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E703978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28339,"longitude":103.705417,"assetRoot":0,"lowBattery":false},{"idAsset":237856,"assetDescription":"NIROLA PRAKASH","lastEventDate":1669190858,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6E397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278483,"longitude":103.706295,"assetRoot":0,"lowBattery":false},{"idAsset":238891,"assetDescription":"ZHANG ZHIPAN","lastEventDate":1669190843,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5320E84397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279297,"longitude":103.70725,"assetRoot":0,"lowBattery":false},{"idAsset":237866,"assetDescription":"KASTHURI RENGAN NEDUMARAN","lastEventDate":1669190771,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5380E66397A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285473,"longitude":103.703807,"assetRoot":0,"lowBattery":false},{"idAsset":237865,"assetDescription":"MD RONJU HOSSAIN","lastEventDate":1669190927,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5380E83397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27798,"longitude":103.708517,"assetRoot":0,"lowBattery":false},{"idAsset":237864,"assetDescription":"AYNAL SIKDER","lastEventDate":1669191056,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E88397A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277508,"longitude":103.709613,"assetRoot":0,"lowBattery":false},{"idAsset":237871,"assetDescription":"SUN ENQUAN","lastEventDate":1669190935,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5380E7C397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285692,"longitude":103.703778,"assetRoot":0,"lowBattery":false},{"idAsset":236845,"assetDescription":"RAMALINGAM RAJASEKAR","lastEventDate":1669191072,"battery":15,"areas":"[List]","companyId":1,"serialNum":"000DB5380E763980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279127,"longitude":103.707318,"assetRoot":0,"lowBattery":true},{"idAsset":238893,"assetDescription":"JI JUNJIE","lastEventDate":1669188554,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5300E6C3973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282535,"longitude":103.704373,"assetRoot":0,"lowBattery":false},{"idAsset":237869,"assetDescription":"DANG CHANGSHENG","lastEventDate":1669189811,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5380E70397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28461,"longitude":103.704898,"assetRoot":0,"lowBattery":false},{"idAsset":238892,"assetDescription":"ZHOU JINHUA","lastEventDate":1669190447,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7D3980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283163,"longitude":103.703082,"assetRoot":0,"lowBattery":false},{"idAsset":236844,"assetDescription":"IYYAPPAN SANTHOSH","lastEventDate":1669189728,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6E396D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276443,"longitude":103.70736,"assetRoot":0,"lowBattery":false},{"idAsset":237875,"assetDescription":"SINGARAM MAYAKRISHNAN","lastEventDate":1669190790,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5380E833980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283058,"longitude":103.702752,"assetRoot":0,"lowBattery":false},{"idAsset":238899,"assetDescription":"LI MING","lastEventDate":1669189603,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6A397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.287172,"longitude":103.701977,"assetRoot":0,"lowBattery":false},{"idAsset":237874,"assetDescription":"KANAKARAJ VISWAKETHU","lastEventDate":1669191043,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5380E6C3976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278565,"longitude":103.70632,"assetRoot":0,"lowBattery":false},{"idAsset":237873,"assetDescription":"BAMASAMY PANDIAN VELLA DURAI","lastEventDate":1669190633,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5380E8C3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279128,"longitude":103.707713,"assetRoot":0,"lowBattery":false},{"idAsset":236854,"assetDescription":"VAIRAKKANNU PONNUTTURAI","lastEventDate":1669189615,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5300E803972","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279355,"longitude":103.707628,"assetRoot":0,"lowBattery":false},{"idAsset":238902,"assetDescription":"DU CHAO","lastEventDate":1669190639,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C713979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.2845,"longitude":103.704223,"assetRoot":0,"lowBattery":false},{"idAsset":238901,"assetDescription":"KANG ZHIFENG","lastEventDate":1669188322,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7F397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284715,"longitude":103.705448,"assetRoot":0,"lowBattery":false},{"idAsset":236853,"assetDescription":"DHARMALINGAM SENTHILKUMAR","lastEventDate":1669190650,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB534158A397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276308,"longitude":103.707467,"assetRoot":0,"lowBattery":false},{"idAsset":238900,"assetDescription":"XIE FULONG","lastEventDate":1669190142,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C853978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28504,"longitude":103.704992,"assetRoot":0,"lowBattery":false},{"idAsset":236852,"assetDescription":"MANI SELVAKUMAR","lastEventDate":1669190810,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5300E79396E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277463,"longitude":103.707223,"assetRoot":0,"lowBattery":false},{"idAsset":237882,"assetDescription":"MD SABUZ MIAH","lastEventDate":1669190707,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380E82397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284793,"longitude":103.705883,"assetRoot":0,"lowBattery":false},{"idAsset":238906,"assetDescription":"KHAN SHAKIL","lastEventDate":1669189802,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320F723962","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284833,"longitude":103.706123,"assetRoot":0,"lowBattery":false},{"idAsset":237881,"assetDescription":"MD ZAHIRUL MIAH","lastEventDate":1669187698,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5380D71397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281842,"longitude":103.706433,"assetRoot":0,"lowBattery":false},{"idAsset":238905,"assetDescription":"MAMUN MD MAHINUDDIN","lastEventDate":1669190331,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320E833978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282588,"longitude":103.70488,"assetRoot":0,"lowBattery":false},{"idAsset":238911,"assetDescription":"Abidi Moazzam","lastEventDate":1669190969,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6E3976","idMAssetType":2,"assetType":"Worker","latitude":1.27849,"longitude":103.70916,"assetRoot":0,"lowBattery":false},{"idAsset":236862,"assetDescription":"SUBRAMANIYAN PRAKASH","lastEventDate":1669190950,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320E65395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27735,"longitude":103.707327,"assetRoot":0,"lowBattery":false},{"idAsset":237885,"assetDescription":"LI YUANXIN","lastEventDate":1669189942,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5320E813980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285568,"longitude":103.70463,"assetRoot":0,"lowBattery":false},{"idAsset":238909,"assetDescription":"Gonzales Montoya Aldo ","lastEventDate":1669191081,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E89397B","idMAssetType":2,"assetType":"Worker","latitude":1.281325,"longitude":103.704607,"assetRoot":0,"lowBattery":false},{"idAsset":237884,"assetDescription":"REN HONGFEI","lastEventDate":1669187757,"battery":25,"areas":"[List]","companyId":1,"serialNum":"000DB5320E88397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282165,"longitude":103.706052,"assetRoot":0,"lowBattery":false},{"idAsset":237891,"assetDescription":"PAPPALA MUKUNDA","lastEventDate":1669189789,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5380D86397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285578,"longitude":103.704547,"assetRoot":0,"lowBattery":false},{"idAsset":236867,"assetDescription":"MUTHUSAMY KOLANCHINATHAN","lastEventDate":1669191087,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7B3976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27666,"longitude":103.707647,"assetRoot":0,"lowBattery":false},{"idAsset":236866,"assetDescription":"MANICKAM NITHISHKUMAR","lastEventDate":1669191086,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB53416783978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277357,"longitude":103.7072,"assetRoot":0,"lowBattery":false},{"idAsset":237889,"assetDescription":"SEN BISWAJIT","lastEventDate":1669190078,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C763983","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282232,"longitude":103.704993,"assetRoot":0,"lowBattery":false},{"idAsset":236864,"assetDescription":"SELVARASU NANDHAKUMAR","lastEventDate":1669190983,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320E60395A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277465,"longitude":103.709128,"assetRoot":0,"lowBattery":false},{"idAsset":237888,"assetDescription":"CAO JIANGUO","lastEventDate":1669189367,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E83397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28422,"longitude":103.70261,"assetRoot":0,"lowBattery":false},{"idAsset":237895,"assetDescription":"WANG YAJUN","lastEventDate":1669191079,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB5320E703976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.280343,"longitude":103.705437,"assetRoot":0,"lowBattery":true},{"idAsset":237894,"assetDescription":"YU BO","lastEventDate":1669190899,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6B397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284377,"longitude":103.70416,"assetRoot":0,"lowBattery":true},{"idAsset":236870,"assetDescription":"NEDUNCHEZHIYAN BALAJI","lastEventDate":1669190819,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB53210883962","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279432,"longitude":103.706908,"assetRoot":0,"lowBattery":false},{"idAsset":237892,"assetDescription":"LI CHENGYU","lastEventDate":1669190898,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7A3980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.280275,"longitude":103.705092,"assetRoot":0,"lowBattery":false},{"idAsset":237899,"assetDescription":"REN SHUGUO","lastEventDate":1669190830,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5380D833980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286632,"longitude":103.704848,"assetRoot":0,"lowBattery":false},{"idAsset":236875,"assetDescription":"RAVI SASIKUMAR","lastEventDate":1669190864,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5380E7F397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278977,"longitude":103.707055,"assetRoot":0,"lowBattery":false},{"idAsset":236874,"assetDescription":"NARAYANASWAMY RAJESH","lastEventDate":1669190976,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5341476395C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276438,"longitude":103.70754,"assetRoot":0,"lowBattery":false},{"idAsset":236873,"assetDescription":"NAGANATHAN KALAIARASAN","lastEventDate":1669191046,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E86397A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.275665,"longitude":103.707333,"assetRoot":0,"lowBattery":false},{"idAsset":237897,"assetDescription":"Liang Bin","lastEventDate":1669188989,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5380E65397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282333,"longitude":103.70574,"assetRoot":0,"lowBattery":false},{"idAsset":237896,"assetDescription":"ZHAO MINGHAO","lastEventDate":1669190967,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320E84397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277593,"longitude":103.70792,"assetRoot":0,"lowBattery":false},{"idAsset":236877,"assetDescription":"NANDAKUMAR NANNAPPAN ","lastEventDate":1669190306,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB53416883973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283217,"longitude":103.70473,"assetRoot":0,"lowBattery":false},{"idAsset":237911,"assetDescription":"Chen Jun","lastEventDate":1669190854,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5380E82397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278178,"longitude":103.708525,"assetRoot":0,"lowBattery":true},{"idAsset":236887,"assetDescription":"BASKAR LAKSHMINARAYANAN","lastEventDate":1669190823,"battery":15,"areas":"[List]","companyId":1,"serialNum":"000DB5380E6C3979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278048,"longitude":103.7059,"assetRoot":0,"lowBattery":true},{"idAsset":236891,"assetDescription":"MURUGESAN RAMAMOORTHY","lastEventDate":1669190764,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB534148D3960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.280077,"longitude":103.70673,"assetRoot":0,"lowBattery":false},{"idAsset":236889,"assetDescription":"SUBASH CHANDRABOSE RAJARETHINAM","lastEventDate":1669190848,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5380E623976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279102,"longitude":103.70778,"assetRoot":0,"lowBattery":false},{"idAsset":237912,"assetDescription":"Liu Bin","lastEventDate":1669190944,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320E733977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278983,"longitude":103.707262,"assetRoot":0,"lowBattery":false},{"idAsset":237918,"assetDescription":"CAO HENGLONG","lastEventDate":1669190894,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5380E77397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.287205,"longitude":103.702025,"assetRoot":0,"lowBattery":false},{"idAsset":237927,"assetDescription":"MD MIJANUR RAHMAN","lastEventDate":1669191047,"battery":0,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6C3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277483,"longitude":103.708965,"assetRoot":0,"lowBattery":true},{"idAsset":236903,"assetDescription":"DURAIRAJ JAYAKUMAR","lastEventDate":1669191056,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53416763973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278913,"longitude":103.706065,"assetRoot":0,"lowBattery":false},{"idAsset":237925,"assetDescription":"RENTHINA THEVAR MURUGANANTHAM","lastEventDate":1669191086,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320C893973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.280363,"longitude":103.705263,"assetRoot":0,"lowBattery":false},{"idAsset":236900,"assetDescription":"SRINIVASAN JEGAN","lastEventDate":1669189725,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5341566397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279342,"longitude":103.70747,"assetRoot":0,"lowBattery":false},{"idAsset":236907,"assetDescription":"NAGALINGAM SAKTHIVELU","lastEventDate":1669190809,"battery":20,"areas":"[List]","companyId":1,"serialNum":"000DB53415763977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276885,"longitude":103.70822,"assetRoot":0,"lowBattery":true},{"idAsset":237931,"assetDescription":"MIA LIMON","lastEventDate":1669190885,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C833981","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278077,"longitude":103.708502,"assetRoot":0,"lowBattery":false},{"idAsset":237929,"assetDescription":"RAHMAN TARAKUR","lastEventDate":1669190911,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5320C623973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284797,"longitude":103.70539,"assetRoot":0,"lowBattery":true},{"idAsset":236904,"assetDescription":"PALSAMY ANPARASAN","lastEventDate":1669190807,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53210783966","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279092,"longitude":103.706092,"assetRoot":0,"lowBattery":false},{"idAsset":237928,"assetDescription":"DAS NIL KANTA","lastEventDate":1669189677,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5320F7C395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284725,"longitude":103.705297,"assetRoot":0,"lowBattery":true},{"idAsset":237935,"assetDescription":"WU DA","lastEventDate":1669190010,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320F65395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286803,"longitude":103.704202,"assetRoot":0,"lowBattery":false},{"idAsset":236910,"assetDescription":"PAKTHAVACHALAM EZHILAN","lastEventDate":1669191072,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5341489395B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278065,"longitude":103.70604,"assetRoot":0,"lowBattery":false},{"idAsset":236909,"assetDescription":"ELAVARASAN MATHAVAN","lastEventDate":1669188816,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5300E93396E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27801,"longitude":103.70965,"assetRoot":0,"lowBattery":false},{"idAsset":237932,"assetDescription":"Wang Lianglong","lastEventDate":1669190616,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E83397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285318,"longitude":103.70488,"assetRoot":0,"lowBattery":false},{"idAsset":237939,"assetDescription":"SERAJUL HOQUE","lastEventDate":1669191038,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E813960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286685,"longitude":103.704725,"assetRoot":0,"lowBattery":false},{"idAsset":236913,"assetDescription":"SUBRAMANIAN RAJASUDAGAR","lastEventDate":1669190963,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB53415683979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277832,"longitude":103.705477,"assetRoot":0,"lowBattery":false},{"idAsset":237937,"assetDescription":"KAMRUL HOSSAIN","lastEventDate":1669190548,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6A3973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284013,"longitude":103.70303,"assetRoot":0,"lowBattery":false},{"idAsset":237936,"assetDescription":"NIE BAOLEI","lastEventDate":1669190836,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320E84395B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286255,"longitude":103.703183,"assetRoot":0,"lowBattery":false},{"idAsset":236912,"assetDescription":"MURUGESAN THIRUMOORTHY","lastEventDate":1669190960,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6E396D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278227,"longitude":103.706093,"assetRoot":0,"lowBattery":false},{"idAsset":236919,"assetDescription":"YOBU DINESH","lastEventDate":1669188222,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380F7D3951","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277962,"longitude":103.709608,"assetRoot":0,"lowBattery":false},{"idAsset":237942,"assetDescription":"SHIKDER UTTAM KUMAR","lastEventDate":1669191042,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5380E69397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278637,"longitude":103.70634,"assetRoot":0,"lowBattery":true},{"idAsset":237941,"assetDescription":"HOSSAIN MD SHAMIM","lastEventDate":1669191077,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7A3976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278563,"longitude":103.706255,"assetRoot":0,"lowBattery":false},{"idAsset":237940,"assetDescription":"MAHID MIAH","lastEventDate":1669190833,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6E3972","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278515,"longitude":103.706612,"assetRoot":0,"lowBattery":false},{"idAsset":236921,"assetDescription":"RAJAPPA MUGESH","lastEventDate":1669191049,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5300E693971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277825,"longitude":103.705397,"assetRoot":0,"lowBattery":false},{"idAsset":237944,"assetDescription":"SAZIM MD ABU","lastEventDate":1669191056,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5380D6F397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28717,"longitude":103.702195,"assetRoot":0,"lowBattery":false},{"idAsset":236926,"assetDescription":"KANNUSAMY SIVANANDAM","lastEventDate":1669190831,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB53416883975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277838,"longitude":103.705463,"assetRoot":0,"lowBattery":false},{"idAsset":237949,"assetDescription":"SAMIKKANNU ARUNRAJ","lastEventDate":1669191051,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7E397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283755,"longitude":103.702837,"assetRoot":0,"lowBattery":false},{"idAsset":236929,"assetDescription":"RAMASAMI GANESH","lastEventDate":1669190907,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB534178A3956","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277843,"longitude":103.710082,"assetRoot":0,"lowBattery":false},{"idAsset":237963,"assetDescription":"LOMTHONG SRIMEK","lastEventDate":1669189390,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5380E733979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284052,"longitude":103.70406,"assetRoot":0,"lowBattery":false},{"idAsset":236937,"assetDescription":"RAJAMONI SAHAYA RUBAN","lastEventDate":1669188624,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB53210943960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27911,"longitude":103.707585,"assetRoot":0,"lowBattery":false},{"idAsset":237967,"assetDescription":"WANG WEI","lastEventDate":1669189804,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5380E84397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285942,"longitude":103.703488,"assetRoot":0,"lowBattery":false},{"idAsset":237966,"assetDescription":"DEVARAJ MANOGAR","lastEventDate":1669191083,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5380E86397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283308,"longitude":103.70459,"assetRoot":0,"lowBattery":false},{"idAsset":236941,"assetDescription":"SURESH VISHNU","lastEventDate":1669190750,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5341583397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277707,"longitude":103.70984,"assetRoot":0,"lowBattery":false},{"idAsset":237964,"assetDescription":"NAMRAT KHOMSAN","lastEventDate":1669189427,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5380E7C397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28412,"longitude":103.703872,"assetRoot":0,"lowBattery":false},{"idAsset":236940,"assetDescription":"CHINNAIYA KATHIRESAN","lastEventDate":1669191060,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6E395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27916,"longitude":103.70603,"assetRoot":0,"lowBattery":false},{"idAsset":237971,"assetDescription":"MIA MD SUMON","lastEventDate":1669190795,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5380E6E397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283615,"longitude":103.70474,"assetRoot":0,"lowBattery":false},{"idAsset":236946,"assetDescription":"CHEW KAM CHIN","lastEventDate":1669191022,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320C633970","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277785,"longitude":103.709613,"assetRoot":0,"lowBattery":false},{"idAsset":236945,"assetDescription":"TAN MINGKIAT ","lastEventDate":1669189011,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320A673976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278048,"longitude":103.709413,"assetRoot":0,"lowBattery":false},{"idAsset":236950,"assetDescription":"SUSAI MANICKAM ADAIKKALARAJ","lastEventDate":1669190886,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E73395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279423,"longitude":103.70764,"assetRoot":0,"lowBattery":false},{"idAsset":236954,"assetDescription":"MIAH ABDUL HAKIM","lastEventDate":1669190551,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320A6A397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277725,"longitude":103.710053,"assetRoot":0,"lowBattery":false},{"idAsset":236958,"assetDescription":"FARUK MD","lastEventDate":1669191019,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320A72397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277575,"longitude":103.709587,"assetRoot":0,"lowBattery":false},{"idAsset":236960,"assetDescription":"ISLAM JAHIDUL","lastEventDate":1669189562,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB534176F395A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277943,"longitude":103.709997,"assetRoot":0,"lowBattery":false},{"idAsset":236970,"assetDescription":"MANI GUNALAN","lastEventDate":1669189130,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB534156F3980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279392,"longitude":103.707502,"assetRoot":0,"lowBattery":true},{"idAsset":236982,"assetDescription":"SUBRAMANIAN SENTHIL","lastEventDate":1669190955,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5380F713951","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276268,"longitude":103.709402,"assetRoot":0,"lowBattery":false},{"idAsset":236981,"assetDescription":"PANNERSELVAM MAHESWARAN ","lastEventDate":1669190624,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320E71397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.275753,"longitude":103.707218,"assetRoot":0,"lowBattery":false},{"idAsset":238043,"assetDescription":"Saravanan T Munusamy","lastEventDate":1669191082,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB53806893977","idMAssetType":2,"assetType":"Worker","latitude":1.282403,"longitude":103.704787,"assetRoot":0,"lowBattery":false},{"idAsset":238046,"assetDescription":"Thomas Thomas","lastEventDate":1669188076,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320A893977","idMAssetType":2,"assetType":"Worker","latitude":1.28232,"longitude":103.705828,"assetRoot":0,"lowBattery":false},{"idAsset":238045,"assetDescription":"Rickieno Bin Mohamed","lastEventDate":1669190811,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C823980","idMAssetType":2,"assetType":"Worker","latitude":1.277488,"longitude":103.708493,"assetRoot":0,"lowBattery":false},{"idAsset":238050,"assetDescription":"Ballester Segura Luis","lastEventDate":1669190869,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6C3973","idMAssetType":2,"assetType":"Worker","latitude":1.282265,"longitude":103.70504,"assetRoot":0,"lowBattery":false},{"idAsset":238052,"assetDescription":"Iglesias Ramirez Isadora Helga","lastEventDate":1669190613,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7F3974","idMAssetType":2,"assetType":"Worker","latitude":1.283018,"longitude":103.70448,"assetRoot":0,"lowBattery":false},{"idAsset":237072,"assetDescription":"CONDOLEZA JOEL SARCO","lastEventDate":1669187913,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6E397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.281585,"longitude":103.70496,"assetRoot":0,"lowBattery":false},{"idAsset":237091,"assetDescription":"CHINNAPPAN MOVISON","lastEventDate":1669190195,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB534158E3971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278105,"longitude":103.705963,"assetRoot":0,"lowBattery":true},{"idAsset":237089,"assetDescription":"RATHINAM SANKAR","lastEventDate":1669190643,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5380E7D397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278263,"longitude":103.707728,"assetRoot":0,"lowBattery":false},{"idAsset":237088,"assetDescription":"MANICKAM RAMU","lastEventDate":1669191065,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB534166B3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276307,"longitude":103.709415,"assetRoot":0,"lowBattery":false},{"idAsset":237099,"assetDescription":"MAUNG MAUNG MANN MYINT ","lastEventDate":1669190899,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C72396C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282632,"longitude":103.70446,"assetRoot":0,"lowBattery":false},{"idAsset":237097,"assetDescription":"ARTIT INTA","lastEventDate":1669191064,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C873973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282533,"longitude":103.704518,"assetRoot":0,"lowBattery":false},{"idAsset":237107,"assetDescription":"THOMDEE CHAKKIT","lastEventDate":1669191066,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E73397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277507,"longitude":103.70968,"assetRoot":0,"lowBattery":false},{"idAsset":237111,"assetDescription":"LALONG SITTHIKON","lastEventDate":1669190321,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB53416703974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282125,"longitude":103.705107,"assetRoot":0,"lowBattery":false},{"idAsset":237109,"assetDescription":"PHIMPHA BUNLERT","lastEventDate":1669191010,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB534166D3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277605,"longitude":103.709622,"assetRoot":0,"lowBattery":false},{"idAsset":237108,"assetDescription":"AHMED SHAMIM","lastEventDate":1669190309,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5341479395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277687,"longitude":103.70968,"assetRoot":0,"lowBattery":false},{"idAsset":237127,"assetDescription":"AROCKYASAMY ARULANANTHAM","lastEventDate":1669191027,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5380E703975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27772,"longitude":103.70965,"assetRoot":0,"lowBattery":false},{"idAsset":237125,"assetDescription":"ARUL KUMAR","lastEventDate":1669188816,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320F6F395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28204,"longitude":103.704347,"assetRoot":0,"lowBattery":false},{"idAsset":237131,"assetDescription":"REDDY SRINIVASA RAO","lastEventDate":1669189000,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320F64396E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278242,"longitude":103.709345,"assetRoot":0,"lowBattery":false},{"idAsset":237132,"assetDescription":"RADHAKRISHNAN DHANANJAYAN","lastEventDate":1669190051,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C773982","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277997,"longitude":103.709913,"assetRoot":0,"lowBattery":false},{"idAsset":237223,"assetDescription":"PHANNAWONG ADIREK ","lastEventDate":1669190873,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB53416843977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.275523,"longitude":103.707145,"assetRoot":0,"lowBattery":false},{"idAsset":237220,"assetDescription":"SHEIK MD MILON","lastEventDate":1669190429,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320F83396C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27903,"longitude":103.70767,"assetRoot":0,"lowBattery":false},{"idAsset":237230,"assetDescription":"RAMASAMY MUTHAIAH ","lastEventDate":1669190991,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320D72394B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279068,"longitude":103.707145,"assetRoot":0,"lowBattery":false},{"idAsset":237228,"assetDescription":"RAMASAMY SAKTHIVEL","lastEventDate":1669191021,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C673979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.280575,"longitude":103.70437,"assetRoot":0,"lowBattery":false},{"idAsset":237234,"assetDescription":"RAJU MUTHUKUMAR","lastEventDate":1669190965,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB534148D3954","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28235,"longitude":103.704333,"assetRoot":0,"lowBattery":false},{"idAsset":237239,"assetDescription":"SUBRAMANIAN KARTHI","lastEventDate":1669190915,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C713981","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27989,"longitude":103.705442,"assetRoot":0,"lowBattery":false},{"idAsset":238263,"assetDescription":"CHOOI KONG CHAI","lastEventDate":1669190554,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB53417753954","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282373,"longitude":103.70488,"assetRoot":0,"lowBattery":false},{"idAsset":237237,"assetDescription":"MUTHURAMAN ADAIKKALAM","lastEventDate":1669191090,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8F3973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279342,"longitude":103.706265,"assetRoot":0,"lowBattery":false},{"idAsset":237241,"assetDescription":"KALIDOSS MUTHU","lastEventDate":1669190829,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C643978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27707,"longitude":103.708665,"assetRoot":0,"lowBattery":false},{"idAsset":237245,"assetDescription":"RAJENDRAN EZHILARASAN","lastEventDate":1669190820,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F5F3971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.2781,"longitude":103.705987,"assetRoot":0,"lowBattery":false},{"idAsset":237244,"assetDescription":"AHMED MD JUBAYER","lastEventDate":1669188817,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E67397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278147,"longitude":103.70964,"assetRoot":0,"lowBattery":false},{"idAsset":238275,"assetDescription":"SUBBAIYAH AYYASAMY","lastEventDate":1669191087,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320F80396D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279865,"longitude":103.705478,"assetRoot":0,"lowBattery":false},{"idAsset":237251,"assetDescription":"BUTTHOT JATUPHON","lastEventDate":1669188749,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C703980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279282,"longitude":103.707737,"assetRoot":0,"lowBattery":false},{"idAsset":237250,"assetDescription":"MARIMUTHU MURUGESAN","lastEventDate":1669190719,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320F843970","idMAssetType":6,"assetType":"Subcontracted","latitude":1.288427,"longitude":103.70267,"assetRoot":0,"lowBattery":false},{"idAsset":237249,"assetDescription":"ALAGAPPAN KUMARESAN","lastEventDate":1669190338,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C713977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277905,"longitude":103.70595,"assetRoot":0,"lowBattery":false},{"idAsset":237248,"assetDescription":"NAGAMUTHU CHOLARAJAN ","lastEventDate":1669191044,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6F3978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278192,"longitude":103.706027,"assetRoot":0,"lowBattery":true},{"idAsset":238272,"assetDescription":"ARUMUGAM NAGARAJ","lastEventDate":1669190872,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C643973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279542,"longitude":103.706578,"assetRoot":0,"lowBattery":false},{"idAsset":237257,"assetDescription":"RATHINAM KUTRALEESWARAN","lastEventDate":1669190299,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6F397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.2827,"longitude":103.704785,"assetRoot":0,"lowBattery":false},{"idAsset":237262,"assetDescription":"SIVALINGAM KUMARESAN","lastEventDate":1669189496,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320C703976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27865,"longitude":103.706618,"assetRoot":0,"lowBattery":false},{"idAsset":237267,"assetDescription":"RENGASAMY SENTHILKUMAR","lastEventDate":1669191067,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6B397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278198,"longitude":103.706013,"assetRoot":0,"lowBattery":false},{"idAsset":237264,"assetDescription":"CHINNARAJI PREMKUMAR","lastEventDate":1669190890,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7D397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277922,"longitude":103.705908,"assetRoot":0,"lowBattery":false},{"idAsset":237271,"assetDescription":"HOSSAIN MOHAMMED IMRAN","lastEventDate":1669188760,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320E73397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282525,"longitude":103.705685,"assetRoot":0,"lowBattery":false},{"idAsset":238297,"assetDescription":"SENTHIL CHANDIRAN","lastEventDate":1669188803,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C793979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279248,"longitude":103.707835,"assetRoot":0,"lowBattery":false},{"idAsset":237279,"assetDescription":"NALLUSAMY SATHESH","lastEventDate":1669190852,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5380E8B397A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27909,"longitude":103.706085,"assetRoot":0,"lowBattery":false},{"idAsset":237278,"assetDescription":"BALIHAR SINGH","lastEventDate":1669190918,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB534148F3960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277798,"longitude":103.708257,"assetRoot":0,"lowBattery":false},{"idAsset":237276,"assetDescription":"KAMATCHI THIRUKKUMARAN","lastEventDate":1669190950,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB534147B395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279688,"longitude":103.706012,"assetRoot":0,"lowBattery":true},{"idAsset":238309,"assetDescription":"PAGAN SAMYNATHAN","lastEventDate":1669190992,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C75397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278942,"longitude":103.705617,"assetRoot":0,"lowBattery":false},{"idAsset":237291,"assetDescription":"Sabri Omar Abd El Azim Mohamed Omar","lastEventDate":1669189325,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320C893974","idMAssetType":2,"assetType":"Worker","latitude":1.282333,"longitude":103.704587,"assetRoot":0,"lowBattery":false},{"idAsset":237290,"assetDescription":"Vallez Sanchez Pedro","lastEventDate":1669190865,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320F7E396D","idMAssetType":2,"assetType":"Worker","latitude":1.278375,"longitude":103.709173,"assetRoot":0,"lowBattery":false},{"idAsset":237292,"assetDescription":"Santhiyagu Antony Samy Raj","lastEventDate":1669190676,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5380D7A397E","idMAssetType":2,"assetType":"Worker","latitude":1.282317,"longitude":103.705802,"assetRoot":0,"lowBattery":false},{"idAsset":237298,"assetDescription":"Mohammed Ahmmad Ali","lastEventDate":1669191069,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5380D81397B","idMAssetType":2,"assetType":"Worker","latitude":1.282207,"longitude":103.704427,"assetRoot":0,"lowBattery":false},{"idAsset":238325,"assetDescription":"CHITHIRAI SENAN RAJAPANDI","lastEventDate":1669190713,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380F77394C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278073,"longitude":103.70612,"assetRoot":0,"lowBattery":false},{"idAsset":237300,"assetDescription":"Mohammad Reza Bin Abdul Rahim","lastEventDate":1669191004,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7B3978","idMAssetType":2,"assetType":"Worker","latitude":1.27945,"longitude":103.707405,"assetRoot":0,"lowBattery":false},{"idAsset":237306,"assetDescription":"Mohamed Hyder Bin Mohd Ali","lastEventDate":1669187643,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53416863972","idMAssetType":2,"assetType":"Worker","latitude":1.284637,"longitude":103.70408,"assetRoot":0,"lowBattery":false},{"idAsset":237310,"assetDescription":"Parijatham Veeramahendran","lastEventDate":1669188766,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5320F7D396B","idMAssetType":2,"assetType":"Worker","latitude":1.278088,"longitude":103.70908,"assetRoot":0,"lowBattery":false},{"idAsset":237309,"assetDescription":"P Gunasager","lastEventDate":1669191073,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320A8A3975","idMAssetType":2,"assetType":"Worker","latitude":1.279387,"longitude":103.70743,"assetRoot":0,"lowBattery":false},{"idAsset":237308,"assetDescription":"Ahmad Habiibur Rahman Bin Abdul Talib ","lastEventDate":1669191053,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5380F7D3950","idMAssetType":2,"assetType":"Worker","latitude":1.28157,"longitude":103.705782,"assetRoot":0,"lowBattery":false},{"idAsset":237314,"assetDescription":"Simeon Aguado Panganiban","lastEventDate":1669190926,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320E85397B","idMAssetType":2,"assetType":"Worker","latitude":1.280063,"longitude":103.705432,"assetRoot":0,"lowBattery":false},{"idAsset":238343,"assetDescription":"MANI BAKKIYANATH","lastEventDate":1669190993,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5380D7B3980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279308,"longitude":103.706653,"assetRoot":0,"lowBattery":false},{"idAsset":237316,"assetDescription":"Periyasamy Saravanan","lastEventDate":1669190834,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320D7C394D","idMAssetType":2,"assetType":"Worker","latitude":1.279393,"longitude":103.707355,"assetRoot":0,"lowBattery":false},{"idAsset":238340,"assetDescription":"HAQUE AJIJUL","lastEventDate":1669190946,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320A70397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279863,"longitude":103.705472,"assetRoot":0,"lowBattery":false},{"idAsset":238345,"assetDescription":"BALU KARTHIK","lastEventDate":1669189990,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB534168E3975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27934,"longitude":103.707405,"assetRoot":0,"lowBattery":false},{"idAsset":237321,"assetDescription":"Arumugam Kandhan","lastEventDate":1669190089,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320C74397E","idMAssetType":2,"assetType":"Worker","latitude":1.279232,"longitude":103.707657,"assetRoot":0,"lowBattery":false},{"idAsset":237327,"assetDescription":"Raymond  Marceline","lastEventDate":1669190873,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5300E7F3972","idMAssetType":2,"assetType":"Worker","latitude":1.282128,"longitude":103.704157,"assetRoot":0,"lowBattery":false},{"idAsset":238351,"assetDescription":"NAYEM KAZI","lastEventDate":1669190827,"battery":25,"areas":"[List]","companyId":1,"serialNum":"000DB532105E3960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278427,"longitude":103.70744,"assetRoot":0,"lowBattery":false},{"idAsset":238350,"assetDescription":"VADAPALLI RAMU","lastEventDate":1669189850,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB534146D395E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278762,"longitude":103.706763,"assetRoot":0,"lowBattery":false},{"idAsset":237326,"assetDescription":"Lim Hon","lastEventDate":1669187487,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320B893952","idMAssetType":2,"assetType":"Worker","latitude":1.282022,"longitude":103.704453,"assetRoot":0,"lowBattery":false},{"idAsset":238349,"assetDescription":"GOVINDASAMY VINOTH","lastEventDate":1669190875,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB53415833973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279507,"longitude":103.706653,"assetRoot":0,"lowBattery":false},{"idAsset":237325,"assetDescription":"Airina Binte Mustapha","lastEventDate":1669188811,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320A603974","idMAssetType":2,"assetType":"Worker","latitude":1.281817,"longitude":103.703908,"assetRoot":0,"lowBattery":false},{"idAsset":237324,"assetDescription":"Venkatachalam Boovaragavan","lastEventDate":1669190822,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F613961","idMAssetType":2,"assetType":"Worker","latitude":1.28666,"longitude":103.703687,"assetRoot":0,"lowBattery":false},{"idAsset":238348,"assetDescription":"RAGUPATHI RAJESH","lastEventDate":1669190880,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5380E76397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279803,"longitude":103.705292,"assetRoot":0,"lowBattery":false},{"idAsset":237330,"assetDescription":"Gonzalez Formadela Miguel","lastEventDate":1669187702,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320F8B396C","idMAssetType":2,"assetType":"Worker","latitude":1.282328,"longitude":103.704497,"assetRoot":0,"lowBattery":false},{"idAsset":238357,"assetDescription":"KANNAIAH MUTHAMILSELVAN","lastEventDate":1669191036,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320E77395D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279952,"longitude":103.705655,"assetRoot":0,"lowBattery":false},{"idAsset":238356,"assetDescription":"SELVARASU KUMAR","lastEventDate":1669190535,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380893396C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279448,"longitude":103.705775,"assetRoot":0,"lowBattery":false},{"idAsset":238362,"assetDescription":"NYI NYI SOE","lastEventDate":1669189635,"battery":20,"areas":"[List]","companyId":1,"serialNum":"000DB5320F663971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27817,"longitude":103.705967,"assetRoot":0,"lowBattery":true},{"idAsset":237337,"assetDescription":"Comert Bugra Ahmet","lastEventDate":1669190919,"battery":20,"areas":"[List]","companyId":1,"serialNum":"000DB5320F7E3962","idMAssetType":2,"assetType":"Worker","latitude":1.27929,"longitude":103.706995,"assetRoot":0,"lowBattery":true},{"idAsset":238360,"assetDescription":"VEERASAMY MATHIYAZHAGAN","lastEventDate":1669190984,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320F873960","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278702,"longitude":103.704873,"assetRoot":0,"lowBattery":false},{"idAsset":237336,"assetDescription":"Steadman Liam Brian","lastEventDate":1669190892,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6D3972","idMAssetType":2,"assetType":"Worker","latitude":1.277308,"longitude":103.707277,"assetRoot":0,"lowBattery":false},{"idAsset":237343,"assetDescription":"Subramanian Velmurugan","lastEventDate":1669191058,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320F8E395D","idMAssetType":2,"assetType":"Worker","latitude":1.278182,"longitude":103.708425,"assetRoot":0,"lowBattery":false},{"idAsset":237341,"assetDescription":"Morsy Aly Morsy Aly","lastEventDate":1669189371,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320E89397C","idMAssetType":2,"assetType":"Worker","latitude":1.282118,"longitude":103.704375,"assetRoot":0,"lowBattery":false},{"idAsset":237345,"assetDescription":"Krishnamaraj Ramalingam Ramesh","lastEventDate":1669189301,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5341574397D","idMAssetType":2,"assetType":"Worker","latitude":1.282238,"longitude":103.704655,"assetRoot":0,"lowBattery":false},{"idAsset":237344,"assetDescription":"Soundararajan Saminathan","lastEventDate":1669191056,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8E3973","idMAssetType":2,"assetType":"Worker","latitude":1.278943,"longitude":103.70719,"assetRoot":0,"lowBattery":false},{"idAsset":238377,"assetDescription":"RANI NARAYANAN NEELAKANDAN","lastEventDate":1669190897,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5300E86396E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279015,"longitude":103.70786,"assetRoot":0,"lowBattery":false},{"idAsset":238383,"assetDescription":"MAHALINGAM MATHIYALAGAN","lastEventDate":1669190988,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320A7D3982","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279645,"longitude":103.706102,"assetRoot":0,"lowBattery":false},{"idAsset":238386,"assetDescription":"KARUPPAIAH CHELLAIAH","lastEventDate":1669190880,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320F79395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276568,"longitude":103.70695,"assetRoot":0,"lowBattery":false},{"idAsset":238393,"assetDescription":"PREMKUMAR SATHISHKUMAR","lastEventDate":1669189165,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5380D66397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279163,"longitude":103.707295,"assetRoot":0,"lowBattery":false},{"idAsset":238409,"assetDescription":"CHINNATHAMBI MURALI","lastEventDate":1669191080,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6D3979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279015,"longitude":103.706908,"assetRoot":0,"lowBattery":false},{"idAsset":238408,"assetDescription":"SHAH ROHITKUMAR JAGARNATH","lastEventDate":1669189423,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB534157E397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278065,"longitude":103.70792,"assetRoot":0,"lowBattery":true},{"idAsset":238413,"assetDescription":"SEBASTIAN JERALD","lastEventDate":1669191045,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53416773977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277603,"longitude":103.707058,"assetRoot":0,"lowBattery":false},{"idAsset":238412,"assetDescription":"GOVINDARASU RAJESH","lastEventDate":1669191055,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E84397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27576,"longitude":103.707285,"assetRoot":0,"lowBattery":false},{"idAsset":238418,"assetDescription":"ANNADURAI KARTHIKEYAN","lastEventDate":1669190908,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6F3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278105,"longitude":103.708255,"assetRoot":0,"lowBattery":false},{"idAsset":238416,"assetDescription":"RANA JEWEL","lastEventDate":1669191052,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320F8A395E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276607,"longitude":103.70806,"assetRoot":0,"lowBattery":false},{"idAsset":238422,"assetDescription":"ZAW YE AUNG","lastEventDate":1669190381,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB534156A3974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278092,"longitude":103.706108,"assetRoot":0,"lowBattery":false},{"idAsset":238420,"assetDescription":"KONDOKAR MAMUN","lastEventDate":1669190874,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E793979","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277253,"longitude":103.708132,"assetRoot":0,"lowBattery":false},{"idAsset":238427,"assetDescription":"BOIDYO CHANCHAL KUMAR","lastEventDate":1669189655,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E78397A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279255,"longitude":103.707332,"assetRoot":0,"lowBattery":false},{"idAsset":238426,"assetDescription":"MIAH SHORIFUL","lastEventDate":1669190801,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6A397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277722,"longitude":103.705472,"assetRoot":0,"lowBattery":false},{"idAsset":238431,"assetDescription":"HOSSAN ANUWAR","lastEventDate":1669190923,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320F8D395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279513,"longitude":103.707545,"assetRoot":0,"lowBattery":false},{"idAsset":238430,"assetDescription":"MOLLA AKIJ","lastEventDate":1669190969,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7B397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278678,"longitude":103.707415,"assetRoot":0,"lowBattery":false},{"idAsset":238429,"assetDescription":"KHAN NABINUR","lastEventDate":1669190850,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320E62395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278578,"longitude":103.707565,"assetRoot":0,"lowBattery":false},{"idAsset":237415,"assetDescription":"Karuppaiah Konar Mudaliyappan","lastEventDate":1669190811,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5341465395A","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277582,"longitude":103.707098,"assetRoot":0,"lowBattery":false},{"idAsset":237414,"assetDescription":"Wang Zhilin","lastEventDate":1669190873,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6B3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.276393,"longitude":103.707432,"assetRoot":0,"lowBattery":false},{"idAsset":238475,"assetDescription":"DURAI SINGAVANDAIYAR SINGARAVEL","lastEventDate":1669188639,"battery":55,"areas":"[List]","companyId":1,"serialNum":"000DB5380E77397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282068,"longitude":103.704693,"assetRoot":0,"lowBattery":false},{"idAsset":238473,"assetDescription":"HEIN ZAR LIN","lastEventDate":1669190607,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5380E71397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282255,"longitude":103.70522,"assetRoot":0,"lowBattery":false},{"idAsset":238478,"assetDescription":"REDDY BAKI KOTESH","lastEventDate":1669190970,"battery":5,"areas":"[List]","companyId":1,"serialNum":"000DB5320D7D394B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282137,"longitude":103.704968,"assetRoot":0,"lowBattery":true},{"idAsset":238476,"assetDescription":"BABUL ASAD MIA","lastEventDate":1669190823,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5380D84397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282103,"longitude":103.705158,"assetRoot":0,"lowBattery":false},{"idAsset":238481,"assetDescription":"XU ZHONG KUI","lastEventDate":1669189679,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320B78394E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282337,"longitude":103.703373,"assetRoot":0,"lowBattery":false},{"idAsset":238499,"assetDescription":"ANDIYAPPAN DHARMADURAI","lastEventDate":1669190646,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB534148D395B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283392,"longitude":103.70279,"assetRoot":0,"lowBattery":false},{"idAsset":238502,"assetDescription":"RAMES","lastEventDate":1669187866,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320E79397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282393,"longitude":103.70488,"assetRoot":0,"lowBattery":false},{"idAsset":237482,"assetDescription":"AZRINAL BIN ANUAR","lastEventDate":1669190653,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320C653976","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279033,"longitude":103.707878,"assetRoot":0,"lowBattery":false},{"idAsset":238505,"assetDescription":"Zhao Junlong ","lastEventDate":1669190781,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320C77396B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.282442,"longitude":103.704407,"assetRoot":0,"lowBattery":false},{"idAsset":238504,"assetDescription":"SHA SAIBUL ALI","lastEventDate":1669190183,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB53416623978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283995,"longitude":103.70388,"assetRoot":0,"lowBattery":false},{"idAsset":238510,"assetDescription":"Hu Zhisen","lastEventDate":1669187974,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53210693964","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28235,"longitude":103.70384,"assetRoot":0,"lowBattery":false},{"idAsset":238509,"assetDescription":"Xiao Guoqiang","lastEventDate":1669190861,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5300E8C3971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278108,"longitude":103.708582,"assetRoot":0,"lowBattery":false},{"idAsset":238508,"assetDescription":"Song Junze","lastEventDate":1669190414,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320F90396D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286198,"longitude":103.703843,"assetRoot":0,"lowBattery":false},{"idAsset":238515,"assetDescription":"Wang Yefu","lastEventDate":1669191039,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB53417853951","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279407,"longitude":103.707307,"assetRoot":0,"lowBattery":false},{"idAsset":238514,"assetDescription":"Yang Xiong","lastEventDate":1669190936,"battery":25,"areas":"[List]","companyId":1,"serialNum":"000DB534156D3978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279343,"longitude":103.707142,"assetRoot":0,"lowBattery":false},{"idAsset":238513,"assetDescription":"Gao Deming","lastEventDate":1669189326,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5300E8F3973","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28248,"longitude":103.704107,"assetRoot":0,"lowBattery":false},{"idAsset":238512,"assetDescription":"Tan Zhiyou","lastEventDate":1669191019,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320F743961","idMAssetType":6,"assetType":"Subcontracted","latitude":1.280348,"longitude":103.70519,"assetRoot":0,"lowBattery":false},{"idAsset":238517,"assetDescription":"Xu Pan","lastEventDate":1669188011,"battery":30,"areas":"[List]","companyId":1,"serialNum":"000DB5320F73395F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278527,"longitude":103.709083,"assetRoot":0,"lowBattery":false},{"idAsset":238522,"assetDescription":"KOTI MADHU","lastEventDate":1669190874,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320C743983","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279332,"longitude":103.707143,"assetRoot":0,"lowBattery":false},{"idAsset":238521,"assetDescription":"SABBANI GANESH","lastEventDate":1669191065,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5380E6E397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286482,"longitude":103.703717,"assetRoot":0,"lowBattery":false},{"idAsset":238520,"assetDescription":"THOTA RAJASHEKHAR","lastEventDate":1669190847,"battery":80,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6F397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.280338,"longitude":103.70512,"assetRoot":0,"lowBattery":false},{"idAsset":238527,"assetDescription":"YIN CHENGBO","lastEventDate":1669190916,"battery":25,"areas":"[List]","companyId":1,"serialNum":"000DB5320D79394D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277265,"longitude":103.708552,"assetRoot":0,"lowBattery":false},{"idAsset":237502,"assetDescription":"SHARIF MOHAMMAD MASUD","lastEventDate":1669190901,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5320E823977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27785,"longitude":103.709747,"assetRoot":0,"lowBattery":false},{"idAsset":238524,"assetDescription":"KOGILA RAKESH","lastEventDate":1669190526,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7F3980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279378,"longitude":103.707612,"assetRoot":0,"lowBattery":false},{"idAsset":237510,"assetDescription":"JAGADEESAN KARTHIKRAJ","lastEventDate":1669190356,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB532105F3964","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278082,"longitude":103.706018,"assetRoot":0,"lowBattery":false},{"idAsset":238538,"assetDescription":"MD NAZMUL ISLAM","lastEventDate":1669190987,"battery":10,"areas":"[List]","companyId":1,"serialNum":"000DB5380E70397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28643,"longitude":103.704557,"assetRoot":0,"lowBattery":true},{"idAsset":237513,"assetDescription":"ANANTHAN BALAMURUGAN","lastEventDate":1669189905,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5320C773978","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279052,"longitude":103.707742,"assetRoot":0,"lowBattery":false},{"idAsset":238542,"assetDescription":"DUAN BINBIN","lastEventDate":1669190883,"battery":40,"areas":"[List]","companyId":1,"serialNum":"000DB5320E70397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28038,"longitude":103.705158,"assetRoot":0,"lowBattery":false},{"idAsset":238541,"assetDescription":"ZHANG YUJI","lastEventDate":1669190934,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5320D7F394C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284015,"longitude":103.702692,"assetRoot":0,"lowBattery":false},{"idAsset":238547,"assetDescription":"ADPA MAHESH","lastEventDate":1669190646,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320D7E394B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285925,"longitude":103.704077,"assetRoot":0,"lowBattery":false},{"idAsset":238545,"assetDescription":"Liu Yingchao","lastEventDate":1669191047,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5380D73397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279388,"longitude":103.707403,"assetRoot":0,"lowBattery":false},{"idAsset":238544,"assetDescription":"LI HAIBIN","lastEventDate":1669190977,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320D76394D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279267,"longitude":103.707238,"assetRoot":0,"lowBattery":false},{"idAsset":238551,"assetDescription":"MOKTER HOSSAIN","lastEventDate":1669190963,"battery":85,"areas":"[List]","companyId":1,"serialNum":"000DB5380D743982","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285723,"longitude":103.706605,"assetRoot":0,"lowBattery":false},{"idAsset":238550,"assetDescription":"NIJAM MIAH","lastEventDate":1669191099,"battery":40,"areas":"[List]","companyId":1,"serialNum":"000DB5380D78397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.27934,"longitude":103.707212,"assetRoot":0,"lowBattery":false},{"idAsset":238555,"assetDescription":"MD ARIFUL ISLAM","lastEventDate":1669188440,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380E7C397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285267,"longitude":103.703897,"assetRoot":0,"lowBattery":false},{"idAsset":238554,"assetDescription":"MD MOJAHIDUL ISLAM","lastEventDate":1669188526,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5380E783980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.28552,"longitude":103.70481,"assetRoot":0,"lowBattery":false},{"idAsset":238553,"assetDescription":"MD MONIR HOSSAIN","lastEventDate":1669190527,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7C397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284808,"longitude":103.703912,"assetRoot":0,"lowBattery":false},{"idAsset":238552,"assetDescription":"MOHAMMED YEAMIN","lastEventDate":1669187906,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5380D6E397D","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284343,"longitude":103.705043,"assetRoot":0,"lowBattery":false},{"idAsset":238559,"assetDescription":"MD RUBEL MOLLA","lastEventDate":1669190833,"battery":70,"areas":"[List]","companyId":1,"serialNum":"000DB5380E7C397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278562,"longitude":103.706673,"assetRoot":0,"lowBattery":false},{"idAsset":238558,"assetDescription":"NURE ALAM TUHIN","lastEventDate":1669191047,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5380E803980","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286812,"longitude":103.703575,"assetRoot":0,"lowBattery":false},{"idAsset":238557,"assetDescription":"SHAMIM MIA","lastEventDate":1669190958,"battery":100,"areas":"[List]","companyId":1,"serialNum":"000DB5380E84397E","idMAssetType":6,"assetType":"Subcontracted","latitude":1.279083,"longitude":103.707135,"assetRoot":0,"lowBattery":false},{"idAsset":238556,"assetDescription":"TORIQUL ISLAM","lastEventDate":1669190702,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5380E7F397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284752,"longitude":103.703737,"assetRoot":0,"lowBattery":false},{"idAsset":237538,"assetDescription":"ALAM MOHAMMAD JAHANGGIR","lastEventDate":1669189376,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320C683975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277815,"longitude":103.709767,"assetRoot":0,"lowBattery":false},{"idAsset":238560,"assetDescription":"DODAYEF ASHRAF","lastEventDate":1669188244,"battery":25,"areas":"[List]","companyId":1,"serialNum":"000DB5380D7B397F","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286647,"longitude":103.703798,"assetRoot":0,"lowBattery":false},{"idAsset":238567,"assetDescription":"MD JONI AHMED","lastEventDate":1669191059,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB5320C7C397C","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284653,"longitude":103.705543,"assetRoot":0,"lowBattery":false},{"idAsset":238566,"assetDescription":"CHAKRAPU JAGAN","lastEventDate":1669190858,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C87397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286622,"longitude":103.704867,"assetRoot":0,"lowBattery":false},{"idAsset":238565,"assetDescription":"RANGAN VENKATESAN","lastEventDate":1669191044,"battery":90,"areas":"[List]","companyId":1,"serialNum":"000DB5320E7A3977","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283363,"longitude":103.703148,"assetRoot":0,"lowBattery":false},{"idAsset":238564,"assetDescription":"KAFIL UDDIN","lastEventDate":1669190891,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320C8A3971","idMAssetType":6,"assetType":"Subcontracted","latitude":1.277082,"longitude":103.707553,"assetRoot":0,"lowBattery":false},{"idAsset":238571,"assetDescription":"MD NIROB ISLAM","lastEventDate":1669191092,"battery":95,"areas":"[List]","companyId":1,"serialNum":"000DB53415763975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286332,"longitude":103.703228,"assetRoot":0,"lowBattery":false},{"idAsset":238570,"assetDescription":"MD HASEM ALI","lastEventDate":1669191038,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB5320E6A397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286192,"longitude":103.703372,"assetRoot":0,"lowBattery":false},{"idAsset":238569,"assetDescription":"BIPLOB MIAH","lastEventDate":1669190262,"battery":35,"areas":"[List]","companyId":1,"serialNum":"000DB53416693974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.286572,"longitude":103.703627,"assetRoot":0,"lowBattery":false},{"idAsset":238575,"assetDescription":"ISLAM MD SAMIUL","lastEventDate":1669191046,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB5320C913974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.285517,"longitude":103.703785,"assetRoot":0,"lowBattery":false},{"idAsset":238574,"assetDescription":"YACHIN","lastEventDate":1669190613,"battery":65,"areas":"[List]","companyId":1,"serialNum":"000DB5320C643975","idMAssetType":6,"assetType":"Subcontracted","latitude":1.284018,"longitude":103.704443,"assetRoot":0,"lowBattery":false},{"idAsset":238573,"assetDescription":"LITON MD","lastEventDate":1669191009,"battery":60,"areas":"[List]","companyId":1,"serialNum":"000DB534158D397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.287172,"longitude":103.702317,"assetRoot":0,"lowBattery":false},{"idAsset":238578,"assetDescription":"MOHAMMAD TOFAZZAL HAQUE","lastEventDate":1669190505,"battery":75,"areas":"[List]","companyId":1,"serialNum":"000DB5380E873974","idMAssetType":6,"assetType":"Subcontracted","latitude":1.283162,"longitude":103.703032,"assetRoot":0,"lowBattery":false},{"idAsset":237566,"assetDescription":"THANGARASU ELUMALAI","lastEventDate":1669190953,"battery":15,"areas":"[List]","companyId":1,"serialNum":"000DB5320C6B397B","idMAssetType":6,"assetType":"Subcontracted","latitude":1.278197,"longitude":103.70819,"assetRoot":0,"lowBattery":true}],       
     
    parser: { type: 'json', x: 'longitude', y: 'latitude' },
  });






  return (
    <div className="App">
      <LarkMap {...config} style={{ height: '800px' }}>

        <ChoroplethLayer {...options} source={source} />
        <BubbleLayer {...Heatoptions} source={Heatsource} />
        
        

      </LarkMap>
    </div>  
  );
};





export default App;




