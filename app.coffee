# Show Hints
Framer.Extras.Hints.enable()

Framer.Device.deviceType = "fullscreen"
# Show home page
flow = new FlowComponent
flow.showNext(view_home)

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
	lineHeight: 2.1

info_text = new Layer
	parent: view_home
	width: Heading.width
	backgroundColor: 'rgba(0,0,0,0)'
	style: h1
	y: 220
	html: '<h1>國立成功大學工業設計所乙組<br>人因互動設計實驗室成員作品展 <br>地點：台南市公園路739號<br> 時間：09/14（五）~ 9 / 16（日）<br> 10:00am ~ 05:00pm <h1>'

info_text.centerX()	

gap = menu.width * 0.2 / 4
itemWidth = menu.width * 0.4

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

aboutInfoStyle = 
	color: '#FFFFFF'
	fontSize: '16px'
	lineHeight: 2

about_info = new Layer
	parent: view_about
	backgroundColor: 'rgba(0,0,0,0)'
	width: flow.width * 0.9
	style: aboutInfoStyle
	html: '<p>人機互動(Human Computer Interaction,  簡稱HCI)的設計開發總是燒腦爆肝，在深夜或是週末，我們會喝喝啤酒，弄點小菜。好市多大份量包裝是Ergobar的好朋友！Ergo是人類因素Ergonamic 的簡稱，bar則是我們在實驗室弄的小小餐酒吧。2018年是我們第一次跟大眾分享我們的小小酒吧以及平日設計研究的互動作品。現場販售啤酒、以及各式不同主題類型的互動小遊戲！</p> <p>Ergobar是由國立成功大學工業設計系人因與互動設計實驗室的成員組成，由陳建旭教授指導。</p>'

about_info.center()

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
	y: 70
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
	y: 70
	html: '策展團隊'
	style: btn

btnTapEnd = (item) ->
	item.backgroundColor = 'rgba(0,0,0,0)'
	
about.onTapStart (event, layer) ->
	flow.showNext(view_about)
	this.backgroundColor = '#394851'
	
map.onTapStart ->
	flow.showNext(view_map)
	this.backgroundColor = '#394851'
	
team.onTapStart (event, layer) ->
	flow.showNext(view_team)
	this.backgroundColor = '#394851'
	
layout.onTapStart (event, layer) ->
	flow.showNext(view_layout)
	this.backgroundColor = '#394851'

map.onTapEnd (event, layer) ->
	this.backgroundColor = 'rgba(0,0,0,0)'
layout.onTapEnd (event, layer) ->
	this.backgroundColor = 'rgba(0,0,0,0)'
about.onTapEnd (event, layer) ->
	this.backgroundColor = 'rgba(0,0,0,0)'
team.onTapEnd (event, layer) ->
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


onGoing.center()

# Variables
rows = 16
gutter = 10
rowHeight = 200

