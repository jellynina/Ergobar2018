(function(scope) {var view_map = new Layer({"name":"view-map","backgroundColor":"hsl(210, 6%, 29%)","width":375,"x":460,"height":667,"constraintValues":{"left":460,"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var __layer_0__ = new Layer({"parent":view_map,"name":"title","backgroundColor":null,"width":318,"x":26,"height":94,"constraintValues":{"left":null,"height":94,"centerAnchorX":0.4933333333333333,"width":318,"top":69,"centerAnchorY":0.1739130434782609},"blending":"normal","clip":false,"borderStyle":"solid","y":69});var __layer_1__ = new Layer({"parent":__layer_0__,"backgroundSize":"fill","backgroundColor":null,"width":107,"height":26,"constraintValues":{"height":26,"centerAnchorX":0.1682389937106918,"width":107,"centerAnchorY":0.1382978723404255,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/IZzdC4miXagH3woXDdPkOkGZv6jWNjW1r3O59YsfTOY7cNvpTNie9gUH2g3fyThsVtfwo8SDc6VtGMQHg.png","clip":false,"borderStyle":"solid"});var __layer_2__ = new Layer({"parent":__layer_0__,"backgroundSize":"fill","backgroundColor":null,"width":305,"x":13,"height":53,"constraintValues":{"left":13,"aspectRatioLocked":true,"height":53,"centerAnchorX":0.5204402515723271,"width":305,"bottom":0,"right":0,"top":null,"centerAnchorY":0.7180851063829787},"blending":"normal","image":"images\/design\/Txp90jeVS8A0jjxPv2KLIwyR09cCTmBYzt5PUn7sJPxEAgo93vOBxhQBwpQFPSQhYCSRkTEqvSXKBXnyyWgw.png","clip":false,"borderStyle":"solid","y":41});var __layer_3__ = new Layer({"parent":view_map,"name":"map-info","backgroundColor":null,"width":339,"x":22,"height":279,"constraintValues":{"left":null,"height":279,"centerAnchorX":0.5106666666666667,"width":339,"top":null,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":194});var __layer_4__ = new Layer({"parent":__layer_3__,"backgroundSize":"fill","backgroundColor":null,"width":335,"x":4,"height":176,"constraintValues":{"left":4,"aspectRatioLocked":true,"height":176,"centerAnchorX":0.5052910052910053,"width":335,"right":0,"top":83,"centerAnchorY":0.6487455197132617},"blending":"normal","image":"images\/design\/vJdUmnuk0WatOJelCVG2Z3jLG5Z6NqM09LehLs4i155uaWucc1jCrYQSHFHAXMt9v5lxGzTBzbUXybsCw.png","clip":false,"borderStyle":"solid","y":83});var __layer_5__ = new TextLayer({"parent":__layer_3__,"backgroundColor":null,"width":339,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":24,"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","lineHeight":"1.5","fontWeight":400,"tabSize":4,"fontFamily":"\"NotoSansCJKtc-Regular\", \"Noto Sans CJK TC\", sans-serif"}}],"text":"時間：09\/14（五） ~ 9 \/ 16 （日）"},{"inlineStyles":[{"startIndex":0,"endIndex":13,"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","lineHeight":"1.5","fontWeight":400,"tabSize":4,"fontFamily":"\"NotoSansCJKtc-Regular\", \"Noto Sans CJK TC\", sans-serif"}}],"text":"地點：台南市公園路739號"}],"alignment":"center"},"height":65,"constraintValues":{"height":65,"centerAnchorX":0.5,"width":339,"right":0,"centerAnchorY":0.1164874551971326},"blending":"normal","autoSize":false});var back = new Layer({"parent":view_map,"name":"back","backgroundColor":"rgba(0, 170, 255, 0)","width":375,"height":45,"constraintValues":{"height":45,"centerAnchorX":0.5,"width":375,"right":0,"top":null,"centerAnchorY":0.03373313343328336},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_6__ = new Layer({"parent":back,"name":"btn-back","backgroundColor":null,"width":30,"x":173,"height":14,"constraintValues":{"left":null,"height":14,"centerAnchorX":0.5013333333333333,"width":30,"top":null,"centerAnchorY":0.5111111111111111},"blending":"normal","clip":false,"borderStyle":"solid","y":16});var __layer_7__ = new SVGLayer({"parent":__layer_6__,"name":".SVGLayer","backgroundColor":null,"width":30,"stroke":"rgba(244,216,34,1)","strokeWidth":2,"htmlIntrinsicSize":{"height":14,"width":30},"rotation":null,"height":14,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"30\" height=\"14\"><path d=\"M 0 14 L 15 0 L 30 14\" fill=\"transparent\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" name=\"Shape\"><\/path><\/svg>"});var g_map_link = new Layer({"parent":view_map,"name":"g-map-link","borderWidth":1,"backgroundColor":"hsla(0, 0%, 34%, 0.3)","width":317,"x":27,"borderColor":"#22CCDD","height":50,"constraintValues":{"left":null,"height":50,"centerAnchorX":0.4946666666666666,"width":317,"bottom":115,"top":null,"centerAnchorY":0.7901049475262368},"blending":"screen","borderRadius":8,"clip":false,"borderStyle":"solid","y":502});var __layer_8__ = new TextLayer({"parent":g_map_link,"backgroundColor":null,"width":201,"x":58,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"24px","WebkitTextFillColor":"#22CCDD","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.5","tabSize":4,"fontFamily":"\"NotoSansCJKtc-Light\", \"Noto Sans CJK TC\", sans-serif","fontWeight":200},"startIndex":0,"endIndex":13}],"text":"GOOGLE MAP 導航"}],"alignment":"center"},"height":36,"constraintValues":{"left":null,"height":36,"centerAnchorX":0.4985955056179776,"width":201,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":7});var view_layout = new Layer({"name":"view-layout","backgroundColor":"hsl(210, 6%, 29%)","width":375,"x":1380,"height":667,"constraintValues":{"left":1380,"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var layout_title = new Layer({"parent":view_layout,"name":"layout-title","backgroundColor":null,"width":210,"x":12,"height":62,"constraintValues":{"left":null,"height":62,"centerAnchorX":0.312,"width":210,"top":15,"centerAnchorY":0.06896551724137931},"blending":"normal","clip":false,"borderStyle":"solid","y":15});var __layer_9__ = new Layer({"parent":layout_title,"backgroundSize":"fill","backgroundColor":null,"width":107,"height":26,"constraintValues":{"height":26,"centerAnchorX":0.149859943977591,"width":107,"centerAnchorY":0.1382978723404255,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/IZzdC4miXagH3woXDdPkOkGZv6jWNjW1r3O59YsfTOY7cNvpTNie9gUH2g3fyThsVtfwo8SDc6VtGMQHg.png","clip":false,"borderStyle":"solid"});var __layer_10__ = new Layer({"parent":layout_title,"backgroundSize":"fill","backgroundColor":null,"width":197,"x":6,"height":34,"constraintValues":{"left":6,"aspectRatioLocked":true,"height":34,"centerAnchorX":0.4976190476190476,"width":197,"bottom":-3,"right":7,"top":null,"centerAnchorY":0.7741935483870968},"blending":"normal","image":"images\/design\/Txp90jeVS8A0jjxPv2KLIwyR09cCTmBYzt5PUn7sJPxEAgo93vOBxhQBwpQFPSQhYCSRkTEqvSXKBXnyyWgw.png","clip":false,"borderStyle":"solid","y":31});var icn_home = new SVGLayer({"parent":view_layout,"name":"icn-home","backgroundColor":null,"width":24,"x":307,"htmlIntrinsicSize":{"height":24,"width":24},"color":"#FFCC66","height":24,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":24,"centerAnchorX":0.8506666666666667,"width":24,"right":44,"top":39,"centerAnchorY":0.07646176911544228},"blending":"normal","y":39,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"><\/path><\/svg>"});var __layer_11__ = new Layer({"parent":view_layout,"backgroundSize":"fill","backgroundColor":null,"width":264,"x":55,"height":566,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":566,"centerAnchorX":0.4986666666666666,"width":264,"bottom":7,"top":94,"centerAnchorY":0.5652173913043478},"blending":"normal","image":"images\/design\/RaVpGsxp2fQ06iurAs6c6my8WM9U8xtvBXEF9NNpsrxhreA3Ci4cwmSKsK6jt0GM6gMSnR0xa5aSucLxA.png","clip":false,"borderStyle":"solid","y":94});var view_home = new Layer({"name":"view-home","backgroundColor":"#464A4E","width":375,"x":572,"height":667,"constraintValues":{"left":572,"height":667,"heightFactor":1,"width":375,"widthFactor":1,"top":-852},"blending":"normal","clip":true,"borderStyle":"solid","y":-852});var menu = new Layer({"parent":view_home,"name":"menu","backgroundColor":null,"width":375,"height":140,"constraintValues":{"height":140,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.8800599700149925},"blending":"normal","clip":false,"borderStyle":"solid","y":527});var Heading = new Layer({"parent":view_home,"name":"Heading","backgroundColor":null,"width":375,"height":339,"constraintValues":{"left":null,"height":339,"centerAnchorX":0.5,"width":375,"centerAnchorY":0.2541229385307346},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_12__ = new Layer({"parent":Heading,"name":"Home-logo","backgroundSize":"fill","backgroundColor":null,"width":232,"x":70,"height":167,"constraintValues":{"left":70,"aspectRatioLocked":true,"height":167,"centerAnchorX":0.496,"width":232,"right":73,"top":25,"centerAnchorY":0.2980769230769231},"blending":"normal","image":"images\/design\/EojuApFg4SbAs3nBAPNs2h4U4Zst055xM98LZ3GRsKWsjNtTsYQVif4Ko2Ep7yPUk038YEOnKJUeBMqWGag.png","clip":false,"borderStyle":"solid","y":25});var view_about = new Layer({"name":"view-about","backgroundColor":"hsl(210, 6%, 29%)","width":375,"x":920,"height":667,"constraintValues":{"left":920,"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var back_2 = new Layer({"parent":view_about,"name":"back","backgroundColor":"rgba(0, 170, 255, 0)","width":375,"height":45,"constraintValues":{"height":45,"centerAnchorX":0.5,"width":375,"right":0,"top":null,"centerAnchorY":0.03373313343328336},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_13__ = new Layer({"parent":back_2,"name":"btn-back","backgroundColor":null,"width":30,"x":173,"height":14,"constraintValues":{"left":null,"height":14,"centerAnchorX":0.5013333333333333,"width":30,"top":null,"centerAnchorY":0.5111111111111111},"blending":"normal","clip":false,"borderStyle":"solid","y":16});var __layer_14__ = new SVGLayer({"parent":__layer_13__,"name":".SVGLayer","backgroundColor":null,"width":30,"stroke":"rgba(244,216,34,1)","strokeWidth":2,"htmlIntrinsicSize":{"height":14,"width":30},"rotation":null,"height":14,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"30\" height=\"14\"><path d=\"M 0 14 L 15 0 L 30 14\" fill=\"transparent\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" name=\"Shape\"><\/path><\/svg>"});var __layer_15__ = new Layer({"parent":view_about,"name":"title","backgroundColor":null,"width":318,"x":29,"height":94,"constraintValues":{"left":null,"height":94,"centerAnchorX":0.5013333333333333,"width":318,"top":69,"centerAnchorY":0.1739130434782609},"blending":"normal","clip":false,"borderStyle":"solid","y":69});var __layer_16__ = new Layer({"parent":__layer_15__,"backgroundSize":"fill","backgroundColor":null,"width":107,"height":26,"constraintValues":{"height":26,"centerAnchorX":0.149859943977591,"width":107,"centerAnchorY":0.1382978723404255,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/IZzdC4miXagH3woXDdPkOkGZv6jWNjW1r3O59YsfTOY7cNvpTNie9gUH2g3fyThsVtfwo8SDc6VtGMQHg.png","clip":false,"borderStyle":"solid"});var __layer_17__ = new Layer({"parent":__layer_15__,"backgroundSize":"fill","backgroundColor":null,"width":305,"x":13,"height":53,"constraintValues":{"left":13,"aspectRatioLocked":true,"height":53,"centerAnchorX":0.5182072829131653,"width":305,"bottom":0,"right":0,"top":null,"centerAnchorY":0.6808510638297872},"blending":"normal","image":"images\/design\/Txp90jeVS8A0jjxPv2KLIwyR09cCTmBYzt5PUn7sJPxEAgo93vOBxhQBwpQFPSQhYCSRkTEqvSXKBXnyyWgw.png","clip":false,"borderStyle":"solid","y":41});var view_team = new Layer({"name":"view-team","backgroundColor":"hsl(210, 6%, 29%)","width":375,"height":667,"constraintValues":{"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var back_3 = new Layer({"parent":view_team,"name":"back","backgroundColor":"rgba(0, 170, 255, 0)","width":375,"height":45,"constraintValues":{"height":45,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.03373313343328336},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_18__ = new Layer({"parent":back_3,"name":"btn-back","backgroundColor":null,"width":30,"x":173,"height":14,"constraintValues":{"left":null,"height":14,"centerAnchorX":0.5013333333333333,"width":30,"top":null,"centerAnchorY":0.5111111111111111},"blending":"normal","clip":false,"borderStyle":"solid","y":16});var __layer_19__ = new SVGLayer({"parent":__layer_18__,"name":".SVGLayer","backgroundColor":null,"width":30,"stroke":"rgba(244,216,34,1)","strokeWidth":2,"htmlIntrinsicSize":{"height":14,"width":30},"rotation":null,"height":14,"opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"30\" height=\"14\"><path d=\"M 0 14 L 15 0 L 30 14\" fill=\"transparent\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" name=\"Shape\"><\/path><\/svg>"});var __layer_20__ = new Layer({"parent":view_team,"name":"title","backgroundColor":null,"width":318,"x":29,"height":94,"constraintValues":{"left":null,"height":94,"centerAnchorX":0.5013333333333333,"width":318,"top":69,"centerAnchorY":0.1739130434782609},"blending":"normal","clip":false,"borderStyle":"solid","y":69});var __layer_21__ = new Layer({"parent":__layer_20__,"backgroundSize":"fill","backgroundColor":null,"width":107,"height":26,"constraintValues":{"height":26,"centerAnchorX":0.149859943977591,"width":107,"centerAnchorY":0.1382978723404255,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/IZzdC4miXagH3woXDdPkOkGZv6jWNjW1r3O59YsfTOY7cNvpTNie9gUH2g3fyThsVtfwo8SDc6VtGMQHg.png","clip":false,"borderStyle":"solid"});var __layer_22__ = new Layer({"parent":__layer_20__,"backgroundSize":"fill","backgroundColor":null,"width":305,"x":13,"height":53,"constraintValues":{"left":13,"aspectRatioLocked":true,"height":53,"centerAnchorX":0.5182072829131653,"width":305,"bottom":0,"right":0,"top":null,"centerAnchorY":0.6808510638297872},"blending":"normal","image":"images\/design\/Txp90jeVS8A0jjxPv2KLIwyR09cCTmBYzt5PUn7sJPxEAgo93vOBxhQBwpQFPSQhYCSRkTEqvSXKBXnyyWgw.png","clip":false,"borderStyle":"solid","y":41});var onGoing = new Layer({"parent":view_team,"name":"onGoing","backgroundColor":null,"width":375,"height":300,"constraintValues":{"left":null,"height":300,"centerAnchorX":0.5,"width":375,"bottom":113,"top":null,"centerAnchorY":0.6056971514242878},"blending":"normal","clip":false,"borderStyle":"solid","y":254});var __layer_23__ = new Layer({"parent":onGoing,"backgroundSize":"fill","backgroundColor":null,"width":158,"x":109,"height":167,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":167,"centerAnchorX":0.5013333333333333,"width":158,"top":20,"centerAnchorY":0.345},"blending":"normal","image":"images\/design\/CRP9o9bsTKGfBzKWuAIBW9L4wqUD6HMgi0ZekPL8F3Anm3YY5DF0z5ejdoP904OktJUrCIs5iJJgDXF9ng.png","clip":false,"borderStyle":"solid","y":20});var __layer_24__ = new TextLayer({"parent":onGoing,"backgroundColor":null,"width":145,"x":122,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"48px","WebkitTextFillColor":"hsl(0, 0%, 100%)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.5","tabSize":4,"fontFamily":"\"NotoSansCJKtc-Black\", \"Noto Sans CJK TC\", sans-serif","fontWeight":800},"startIndex":0,"endIndex":3}],"text":"作業中"}],"alignment":"center"},"height":72,"constraintValues":{"left":null,"height":72,"centerAnchorX":0.5186666666666667,"width":145,"bottom":17,"top":null,"centerAnchorY":0.8233333333333334},"blending":"normal","autoSize":true,"y":211});if(back_3 !== undefined){back_3.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|back_3","targetName":"back_3","vekterClass":"FrameNode"}};if(__layer_9__ !== undefined){__layer_9__.__framerInstanceInfo = {"hash":"#vekter|__layer_9__","vekterClass":"FrameNode","framerClass":"Layer"}};if(view_home !== undefined){view_home.__framerInstanceInfo = {"deviceName":"Apple iPhone 8","framerClass":"Layer","hash":"#vekter|view_home","targetName":"view_home","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray"}};if(view_about !== undefined){view_about.__framerInstanceInfo = {"deviceName":"Apple iPhone 8","framerClass":"Layer","hash":"#vekter|view_about","targetName":"view_about","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray"}};if(back !== undefined){back.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|back","targetName":"back","vekterClass":"FrameNode"}};if(__layer_10__ !== undefined){__layer_10__.__framerInstanceInfo = {"hash":"#vekter|__layer_10__","vekterClass":"FrameNode","framerClass":"Layer"}};if(back_2 !== undefined){back_2.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|back_2","targetName":"back_2","vekterClass":"FrameNode"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_12__ !== undefined){__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"FrameNode","framerClass":"Layer"}};if(menu !== undefined){menu.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|menu","targetName":"menu","vekterClass":"FrameNode"}};if(__layer_21__ !== undefined){__layer_21__.__framerInstanceInfo = {"hash":"#vekter|__layer_21__","vekterClass":"FrameNode","framerClass":"Layer"}};if(view_map !== undefined){view_map.__framerInstanceInfo = {"deviceName":"Apple iPhone 8","framerClass":"Layer","hash":"#vekter|view_map","targetName":"view_map","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray"}};if(__layer_23__ !== undefined){__layer_23__.__framerInstanceInfo = {"hash":"#vekter|__layer_23__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"hash":"#vekter|__layer_4__","vekterClass":"FrameNode","framerClass":"Layer"}};if(g_map_link !== undefined){g_map_link.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|g_map_link","targetName":"g_map_link","vekterClass":"FrameNode"}};if(layout_title !== undefined){layout_title.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|layout_title","targetName":"layout_title","vekterClass":"FrameNode"}};if(__layer_20__ !== undefined){__layer_20__.__framerInstanceInfo = {"hash":"#vekter|__layer_20__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_18__ !== undefined){__layer_18__.__framerInstanceInfo = {"hash":"#vekter|__layer_18__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(icn_home !== undefined){icn_home.__framerInstanceInfo = {"originalFilename":"home","framerClass":"SVGLayer","hash":"#vekter|icn_home","targetName":"icn_home","vekterClass":"SVGNode"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_8__","vekterClass":"TextNode","text":"GOOGLE MAP 導航"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_14__ !== undefined){__layer_14__.__framerInstanceInfo = {"hash":"#vekter|__layer_14__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_15__ !== undefined){__layer_15__.__framerInstanceInfo = {"hash":"#vekter|__layer_15__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_19__ !== undefined){__layer_19__.__framerInstanceInfo = {"hash":"#vekter|__layer_19__","vekterClass":"PathNode","framerClass":"SVGLayer"}};if(__layer_13__ !== undefined){__layer_13__.__framerInstanceInfo = {"hash":"#vekter|__layer_13__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_11__ !== undefined){__layer_11__.__framerInstanceInfo = {"hash":"#vekter|__layer_11__","vekterClass":"FrameNode","framerClass":"Layer"}};if(onGoing !== undefined){onGoing.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|onGoing","targetName":"onGoing","vekterClass":"FrameNode"}};if(__layer_24__ !== undefined){__layer_24__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_24__","vekterClass":"TextNode","text":"作業中"}};if(__layer_16__ !== undefined){__layer_16__.__framerInstanceInfo = {"hash":"#vekter|__layer_16__","vekterClass":"FrameNode","framerClass":"Layer"}};if(view_team !== undefined){view_team.__framerInstanceInfo = {"deviceName":"Apple iPhone 8","framerClass":"Layer","hash":"#vekter|view_team","targetName":"view_team","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"hash":"#vekter|__layer_1__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"FrameNode","framerClass":"Layer"}};if(view_layout !== undefined){view_layout.__framerInstanceInfo = {"deviceName":"Apple iPhone 8","framerClass":"Layer","hash":"#vekter|view_layout","targetName":"view_layout","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray"}};if(__layer_17__ !== undefined){__layer_17__.__framerInstanceInfo = {"hash":"#vekter|__layer_17__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_22__ !== undefined){__layer_22__.__framerInstanceInfo = {"hash":"#vekter|__layer_22__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"FrameNode","framerClass":"Layer"}};if(Heading !== undefined){Heading.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Heading","targetName":"Heading","vekterClass":"FrameNode"}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_5__","vekterClass":"TextNode","text":"時間：09\/14（五） ~ 9 \/ 16 （日）\n地點：台南市公園路739號"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {view_map, back, g_map_link, view_layout, layout_title, icn_home, view_home, menu, Heading, view_about, back_2, view_team, back_3, onGoing});scope["__vekterVariables"] = ["view_map", "back", "g_map_link", "view_layout", "layout_title", "icn_home", "view_home", "menu", "Heading", "view_about", "back_2", "view_team", "back_3", "onGoing"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);