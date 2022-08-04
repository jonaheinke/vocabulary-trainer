//Service Worker initialization for offline support
if("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js").then(() => {
		console.log("Service worker is registered.");
	}).catch((error) => {
		console.warn("Error registering service worker:");
		console.warn(error);
	});
}
else console.warn("Service workers are not supported in this browser.");



//on DOM load
document.addEventListener("DOMContentLoaded", function() {
	//CODE
});