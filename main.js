var btnlist = document.getElementById('Button')

var modulename = 'Module.Wires'
btnlist.addEventListener('click', e => {
    console.log(e.target.id)

    document.getElementById(modulename).hidden = true
    modulename = 'Module.' + e.target.id.split('.')[1]
    console.log(modulename)
    document.getElementById(modulename).hidden = false
})