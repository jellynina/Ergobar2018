Framer.Device.deviceType = "fullscreen"
# Show home page
flow = new FlowComponent
flow.showNext(view_home)

flow.height = Canvas.height

#Style
h1 = 
	color: '#FFFFFF'
	fontSize: '10px'
	textAlign: 'center'
	lineHeight: 1.5
	
btn = 
	color: '#FFFFFF'
	fontSize: '22px'
	textAlign: 'center'
	lineHeight: '50px'

info_text.html = '<h1>國立成功大學工業設計所乙組<br>人因互動設計實驗室成員作品展 <br> 時間：09/14（五）~ 9 / 16（日）<br> 地點：台南市公園路739號<h1>'
info_text.style = h1

gap = Canvas.width * 0.2 / 4
itemWidth = Canvas.width * 0.4

about = new Layer
	parent: menu
	width: itemWidth
	borderColor: '#FFEE66'
	borderWidth: 1
	borderRadius: 8
	height: 50
	backgroundColor: 'rgba(0,0,0,0)'
	x: gap
	html: '關於Ergobar'
	style: btn


map = new Layer
	parent: menu
	width: itemWidth
	borderColor: '#FFEE66'
	borderWidth: 1
	borderRadius: 8
	height: 50
	backgroundColor: 'rgba(0,0,0,0)'
	x: itemWidth + gap * 3
	html: '交通資訊'
	style: btn

layout = new Layer
	parent: menu
	width: itemWidth
	borderColor: '#FFEE66'
	borderWidth: 1
	borderRadius: 8
	height: 50
	backgroundColor: 'rgba(0,0,0,0)'
	x: gap
	y: 50 + gap
	html: '展場動線'
	style: btn


team = new Layer
	parent: menu
	width: itemWidth
	borderColor: '#FFEE66'
	borderWidth: 1
	borderRadius: 8
	height: 50
	backgroundColor: 'rgba(0,0,0,0)'
	x: itemWidth + gap * 3
	y: 50 + gap
	html: '策展團隊'
	style: btn

btnTapEnd = (item) ->
	item.backgroundColor = 'rgba(0,0,0,0)'
	
menu_about.onTapStart (event, layer) ->
	flow.showNext(view_about)
	this.backgroundColor = '#394851'
	
menu_map.onTapStart ->
	flow.showNext(view_map)
	this.backgroundColor = '#394851'
	
menu_team.onTapStart (event, layer) ->
	flow.showNext(view_about)
	this.backgroundColor = '#394851'
	
menu_layout.onTapStart (event, layer) ->
	flow.showNext(view_layout)
	this.backgroundColor = '#394851'

menu_map.onTapEnd (event, layer) ->
	this.backgroundColor = 'rgba(0,0,0,0)'
menu_layout.onTapEnd (event, layer) ->
	this.backgroundColor = 'rgba(0,0,0,0)'
menu_about.onTapEnd (event, layer) ->
	this.backgroundColor = 'rgba(0,0,0,0)'
menu_team.onTapEnd (event, layer) ->
	this.backgroundColor = 'rgba(0,0,0,0)'
	



back.onTap ->
	flow.showPrevious()	
back_1.onTap ->
	flow.showPrevious()
back_2.onTap ->
	flow.showPrevious()
back_3.onTap ->
	flow.showPrevious()


g_map_link.onTap (event, layer) ->
	window.open('https://goo.gl/maps/mvxU3K12YVN2', '_new')


		

