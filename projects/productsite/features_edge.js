/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'playbar_animatie',
                type: 'rect',
                rect: ['0', '81','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'playbar_animatie',
                symbolName: 'playbar_animatie',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '550px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"playbar_animatie": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], ['17'], [], ['0.91158', '0.91158']],
                    id: 'Playbar3D_uit_elkaar_0',
                    type: 'image',
                    rect: ['6px', '-9px', '550px', '238px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Playbar3D_uit_elkaar_0.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['21']],
                    id: 'Playbar3D_uit_elkaar_2',
                    type: 'image',
                    rect: ['-41px', '27px', '550px', '238px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Playbar3D_uit_elkaar_2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['18'], [], ['0.76562', '0.76562']],
                    id: 'Playbar3D_uit_elkaar_1B',
                    type: 'image',
                    rect: ['2px', '19px', '550px', '238px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Playbar3D_uit_elkaar_1B.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '550px', '238px', 'auto', 'auto'],
                    id: 'Playbar3D_uit_elkaar_3',
                    fill: ['rgba(0,0,0,0)', 'images/Playbar3D_uit_elkaar_3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '550px', '238px', 'auto', 'auto'],
                    id: 'Playbar3D_uit_elkaar_4',
                    fill: ['rgba(0,0,0,0)', 'images/Playbar3D_uit_elkaar_4.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.78909', '0.78909']],
                    type: 'image',
                    display: 'none',
                    id: 'PlaybarAngle',
                    opacity: 0.46153846153846,
                    rect: ['0px', '44px', '550px', '232px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/PlaybarAngle.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.78909', '0.78909']],
                    id: 'Playbar_zwart_voorpaneel',
                    type: 'image',
                    rect: ['0px', '44px', '550px', '232px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Playbar_zwart_voorpaneel.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.43484', '0.43484']],
                    id: 'Playbar_grijs_zijpaneel',
                    type: 'image',
                    rect: ['-224px', '-51px', '1000px', '421px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Playbar_grijs_zijpaneel.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.43484', '0.43484']],
                    id: 'Playbar_grijs_voorpaneel',
                    type: 'image',
                    rect: ['-225px', '-51px', '1000px', '421px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Playbar_grijs_voorpaneel.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.43484', '0.43484']],
                    borderRadius: ['5.7251908396946px 5.7251908396946px', '5.7251908396946px 5.7251908396946px', '5.7251908396946px 5.7251908396946px', '5.7251908396946px 5.7251908396946px'],
                    id: 'Playbar_grijs_bovenpaneel',
                    rect: ['-226px', '-51px', '1000px', '421px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Playbar_grijs_bovenpaneel.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Playbar_grijs_zijpaneel}": [
                ["style", "top", '-51px'],
                ["style", "left", '-226px'],
                ["transform", "scaleY", '0.43484'],
                ["transform", "scaleX", '0.43484']
            ],
            "${_Playbar_grijs_voorpaneel}": [
                ["style", "top", '-51px'],
                ["style", "left", '-225px'],
                ["transform", "scaleY", '0.43484'],
                ["transform", "scaleX", '0.43484']
            ],
            "${_Playbar3D_uit_elkaar_3}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '238px'],
                ["style", "left", '0px'],
                ["style", "width", '550px']
            ],
            "${_Playbar3D_uit_elkaar_2}": [
                ["style", "top", '27px'],
                ["transform", "rotateZ", '21deg'],
                ["style", "height", '238px'],
                ["style", "left", '-41px'],
                ["style", "width", '550px']
            ],
            "${_Playbar3D_uit_elkaar_0}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0.91158'],
                ["transform", "rotateZ", '17deg'],
                ["style", "height", '238px'],
                ["transform", "scaleX", '0.91158'],
                ["style", "left", '6px'],
                ["style", "width", '550px']
            ],
            "${_Playbar_zwart_voorpaneel}": [
                ["style", "top", '44px'],
                ["transform", "scaleY", '0.78909'],
                ["style", "height", '232px'],
                ["transform", "scaleX", '0.78909'],
                ["style", "left", '0px'],
                ["style", "width", '550px']
            ],
            "${_Playbar3D_uit_elkaar_1B}": [
                ["style", "top", '19px'],
                ["transform", "scaleY", '0.76562'],
                ["transform", "rotateZ", '18deg'],
                ["transform", "scaleX", '0.76562'],
                ["style", "height", '238px'],
                ["style", "left", '2px'],
                ["style", "width", '550px']
            ],
            "${_Playbar3D_uit_elkaar_4}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '238px'],
                ["style", "left", '0px'],
                ["style", "width", '550px']
            ],
            "${_PlaybarAngle}": [
                ["style", "top", '44px'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.78909'],
                ["style", "height", '232px'],
                ["transform", "scaleX", '0.78909'],
                ["style", "opacity", '0.46153846153846'],
                ["style", "left", '0px'],
                ["style", "width", '550px']
            ],
            "${symbolSelector}": [
                ["style", "height", '319px'],
                ["style", "width", '550px']
            ],
            "${_Playbar_grijs_bovenpaneel}": [
                ["style", "top", '-51px'],
                ["style", "border-top-left-radius", [5.7251908396946,5.7251908396946], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '0.43484'],
                ["style", "border-bottom-right-radius", [5.7251908396946,5.7251908396946], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.43484'],
                ["style", "left", '-226px'],
                ["style", "border-top-right-radius", [5.7251908396946,5.7251908396946], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [5.7251908396946,5.7251908396946], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid17", tween: [ "style", "${_Playbar_grijs_voorpaneel}", "top", '17px', { fromValue: '-51px'}], position: 1000, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_Playbar_grijs_voorpaneel}", "top", '200px', { fromValue: '17px'}], position: 2000, duration: 1000 },
                { id: "eid20", tween: [ "style", "${_Playbar_zwart_voorpaneel}", "left", '-58px', { fromValue: '0px'}], position: 1000, duration: 1000 },
                { id: "eid34", tween: [ "style", "${_Playbar_zwart_voorpaneel}", "left", '-492px', { fromValue: '-58px'}], position: 2000, duration: 1000 },
                { id: "eid54", tween: [ "style", "${_PlaybarAngle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "transform", "${_Playbar3D_uit_elkaar_0}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 2000, duration: 1000 },
                { id: "eid56", tween: [ "style", "${_Playbar3D_uit_elkaar_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "transform", "${_Playbar3D_uit_elkaar_2}", "rotateZ", '17deg', { fromValue: '21deg'}], position: 1000, duration: 1000 },
                { id: "eid52", tween: [ "transform", "${_Playbar3D_uit_elkaar_0}", "scaleX", '1.30653', { fromValue: '0.91158'}], position: 2000, duration: 1000 },
                { id: "eid55", tween: [ "style", "${_Playbar3D_uit_elkaar_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Playbar_grijs_zijpaneel}", "top", '17px', { fromValue: '-51px'}], position: 1000, duration: 1000 },
                { id: "eid58", tween: [ "style", "${_Playbar_grijs_zijpaneel}", "top", '200px', { fromValue: '17px'}], position: 2000, duration: 1000 },
                { id: "eid19", tween: [ "style", "${_Playbar_grijs_bovenpaneel}", "top", '-119px', { fromValue: '-51px'}], position: 1000, duration: 1000 },
                { id: "eid37", tween: [ "style", "${_Playbar_grijs_bovenpaneel}", "top", '-302px', { fromValue: '-119px'}], position: 2000, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_Playbar3D_uit_elkaar_1B}", "left", '11px', { fromValue: '2px'}], position: 1000, duration: 1000 },
                { id: "eid26", tween: [ "style", "${_Playbar3D_uit_elkaar_1B}", "top", '58px', { fromValue: '19px'}], position: 1000, duration: 1000 },
                { id: "eid48", tween: [ "style", "${_Playbar3D_uit_elkaar_1B}", "top", '-4px', { fromValue: '58px'}], position: 2000, duration: 1000 },
                { id: "eid24", tween: [ "style", "${_Playbar3D_uit_elkaar_0}", "top", '41px', { fromValue: '-9px'}], position: 1000, duration: 1000 },
                { id: "eid49", tween: [ "style", "${_Playbar3D_uit_elkaar_0}", "top", '19px', { fromValue: '41px'}], position: 2000, duration: 1000 },
                { id: "eid28", tween: [ "style", "${_Playbar3D_uit_elkaar_2}", "left", '21px', { fromValue: '-41px'}], position: 1000, duration: 1000 },
                { id: "eid38", tween: [ "style", "${_Playbar3D_uit_elkaar_2}", "left", '457px', { fromValue: '21px'}], position: 2000, duration: 1000 },
                { id: "eid53", tween: [ "transform", "${_Playbar3D_uit_elkaar_0}", "scaleY", '1.30653', { fromValue: '0.91158'}], position: 2000, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_Playbar_grijs_zijpaneel}", "left", '-178px', { fromValue: '-226px'}], position: 1000, duration: 1000 },
                { id: "eid57", tween: [ "style", "${_Playbar_grijs_zijpaneel}", "left", '269px', { fromValue: '-178px'}], position: 2000, duration: 1000 },
                { id: "eid27", tween: [ "style", "${_Playbar3D_uit_elkaar_2}", "top", '-53px', { fromValue: '27px'}], position: 1000, duration: 1000 },
                { id: "eid39", tween: [ "style", "${_Playbar3D_uit_elkaar_2}", "top", '-236px', { fromValue: '-53px'}], position: 2000, duration: 1000 },
                { id: "eid16", tween: [ "style", "${_Playbar_grijs_voorpaneel}", "left", '-283px', { fromValue: '-225px'}], position: 1000, duration: 1000 },
                { id: "eid40", tween: [ "style", "${_Playbar_grijs_voorpaneel}", "left", '-717px', { fromValue: '-283px'}], position: 2000, duration: 1000 },
                { id: "eid50", tween: [ "transform", "${_Playbar3D_uit_elkaar_1B}", "scaleX", '1.09732', { fromValue: '0.76562'}], position: 2000, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_Playbar_zwart_voorpaneel}", "top", '-24px', { fromValue: '44px'}], position: 1000, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_Playbar_zwart_voorpaneel}", "top", '-208px', { fromValue: '-24px'}], position: 2000, duration: 1000 },
                { id: "eid42", tween: [ "transform", "${_Playbar3D_uit_elkaar_1B}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 2000, duration: 1000 },
                { id: "eid18", tween: [ "style", "${_Playbar_grijs_bovenpaneel}", "left", '-167px', { fromValue: '-226px'}], position: 1000, duration: 1000 },
                { id: "eid36", tween: [ "style", "${_Playbar_grijs_bovenpaneel}", "left", '269px', { fromValue: '-167px'}], position: 2000, duration: 1000 },
                { id: "eid51", tween: [ "transform", "${_Playbar3D_uit_elkaar_1B}", "scaleY", '1.09733', { fromValue: '0.76562'}], position: 2000, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-14673695");
