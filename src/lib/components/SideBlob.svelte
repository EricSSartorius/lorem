<svg
	style:transform={`translate3d(0, 0px, 0)`}
	width="407"
	height="1353"
	viewBox="0 0 407 1353"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class="blobby-2"
>
	<g opacity="0.3" filter="url(#filter0_f_1941_7264)">
		<path
			d="M-55.2785 1202.49C-148.238 1192.67 -86.7562 800.779 -40.9676 647.244C4.82109 493.708 -172.92 257.418 -58.2043 175.039C127.991 41.3291 230.86 483.337 254.594 696.609C278.328 909.881 37.6811 1212.3 -55.2785 1202.49Z"
			fill="var(--l_blobby, var(--secondary))"
		/>
	</g>
	<defs>
		<filter
			id="filter0_f_1941_7264"
			x="-253.685"
			y="0.304504"
			width="659.916"
			height="1352.42"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1941_7264" />
		</filter>
	</defs>
</svg>
<div class="blobby"></div>

<style>
	@keyframes blobby {
		0% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}

	.blobby {
		position: absolute;
		top: -300px;
		pointer-events: none;
		right: -100px;
		width: 1000px;
		height: 1000px;
		animation: blobby 8s ease-in-out alternate infinite;
	}

	.blobby-2 {
		pointer-events: none;
		position: absolute;
		top: 400px;
		left: 0;
		animation: blobby 8s ease-in-out alternate infinite;
	}
</style>
