let instances = []

function init () {
  createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])
  createjs.Sound.alternateExtensions = ['mp3']

  createjs.Sound.registerSound('sounds/jcrois-quon-va-partouzer.mp3', 's0')
  createjs.Sound.registerSound('sounds/pooooo.mp3', 's1')
  createjs.Sound.registerSound('sounds/sschtaaaww.mp3', 's2')
  createjs.Sound.registerSound('sounds/chtoupooom.mp3', 's3')
  createjs.Sound.registerSound('sounds/a-nimporte-qui.mp3', 's4')
  createjs.Sound.registerSound('sounds/dans-la-gueule-tu-vois.mp3', 's5')
  createjs.Sound.registerSound('sounds/partouze-generaliste.mp3', 's6')
}

function playSound (target) {
  createjs.Sound.stop()

  let instance = createjs.Sound.play(target.id, createjs.Sound.INTERRUPT_ANY, 0, 0, false, 1)
  target.focus()

  if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
    return
  }

  instance.addEventListener("complete", () => {
    target.blur()
  });

  instances.push(target)

  return false
}

document.querySelectorAll('button').forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    playSound(event.target)
  })
})

document.addEventListener('keydown', function (e) {
  let el = document.querySelector(`button[data-key="${e.key}"]`)

  if (el) {
    el.click()
  }
})

init()