document.querySelector(".navbar__hamburger").addEventListener("click", function(){
		let panel = document.querySelector(".panel")
			panel.classList.remove("panel--visible--false")
			panel.classList.add("panel--visible--true")
	})

document.querySelector(".panel__close-icon").addEventListener("click", function(){
		let panel = document.querySelector(".panel")
			panel.classList.remove("panel--visible--true")
			panel.classList.add("panel--visible--false")
	})