

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
    {
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
     data: [],
    parser: { type: 'json', x: 'longitude', y: 'latitude' },
  });
//console.log("data debug",Heatsource)
  useEffect(() => {
    fetch('https://segcrisp.oss-ap-southeast-1.aliyuncs.com/wilog.json')
      .then((response) => response.json())
      .then((response) => response.list)
      .then((data) => {

        //console.log("data",data)
        setHeatSource((prevState) => ({ ...prevState, data }));
      });
  }, []);







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




