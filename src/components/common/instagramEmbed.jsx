import React, { useEffect, useRef } from "react";

function InstagramEmbed({ url }) {
	const ref = useRef();

	useEffect(() => {
		// Dynamically add Instagram script if it doesn't exist
		if (!window.instgrm) {
			const script = document.createElement("script");
			script.src = "https://www.instagram.com/embed.js";
			script.async = true;
			script.onload = () => {
				window.instgrm.Embeds.process();
			};
			document.body.appendChild(script);
		} else {
			window.instgrm.Embeds.process();
		}
	}, []);

	return (
		<div ref={ref}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem 0",
          }}>
			<blockquote
				className="instagram-media"
				data-instgrm-permalink={url}
				data-instgrm-version="14"
				style={{
					margin: "1rem auto",
					maxWidth: "540px",
					width: "100%",
				}}
			></blockquote>
		</div>
	);
}

export default InstagramEmbed;
