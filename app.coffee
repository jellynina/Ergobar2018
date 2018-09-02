Framer.Device.deviceType = "apple-iphone-8-silver"
# Show home page
flow = new FlowComponent
flow.showNext(view_home)
	
btnTapEnd = (item) ->
	item.backgroundColor = 'rgba(0,0,0,0)'
	
menu_about.onTapStart (event, layer) ->
	flow.showNext(view_about)
	this.backgroundColor = '#394851'
	
menu_map.onTapStart ->
	flow.showNext(view_map)
	this.backgroundColor = '#394851'
	
menu_team.onTapStart (event, layer) ->
	flow.showNext(view_team)
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


		

