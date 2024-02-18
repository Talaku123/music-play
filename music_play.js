


const progress = document.getElementById("play")
const music = document.getElementById("song")
const manageIcons = document.getElementById("icons")


music.onloadedmetadata = () => {

  progress.max = music.duration

   progress.value = music.currentTime

}

const playPause = () => {

   if(manageIcons.classList.contains("fa-pause")){

      music.pause()

      manageIcons.classList.remove("fa-pause")

      manageIcons.classList.add("fa-play")

   }else{

      music.play()

      manageIcons.classList.add("fa-pause")

      manageIcons.classList.remove("fa-play")
   }
}

if(music.play()){
   
  setInterval(() => {
      
     play.value = music.currentTime

  }, 200)
}

music.onchange = () => {

  music.play()

  music.currentTime = play.value

  manageIcons.classList.add("fa-pause")

  manageIcons.classList.remove("play")

}

const forwardPlay =() => {

  music.currentTime += 10
}

const backwardPlay = () => {
  
  music.currentTime -= 10
}