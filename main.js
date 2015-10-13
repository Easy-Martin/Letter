require.config({
  paths: {
	'firstAlphabet': 'firstAlphabet',
  }
})

require(['firstAlphabet'],function(firstAlphabet){
	alert(firstAlphabet('avds'))
})
