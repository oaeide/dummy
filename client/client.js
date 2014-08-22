var wavesurfer = WaveSurfer;

Template.wavesurfer.rendered = function() {
	this.wsInit = function () {
		console.log("I'm here..");

		wavesurfer.init({
			container: document.querySelector('#wave'),
			waveColor: 'violet',
			progressColor: 'purple'
		});
	}

	this.wsPlay = function(url) {
		wavesurfer.load(url);
	};
}

Template.wavesurfer.helpers({
	foo: function () {
		// ...
	}
});
