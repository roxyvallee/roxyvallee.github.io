import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import LSP from "../../assets/logos/LSP.jpeg"
import Apperture from "../../assets/logos/apperture.jpeg"
import FlatPixel from "../../assets/logos/FPlogo.png"

import "./styles/works.css";
import App from "../../App";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={LSP}
								alt="lsp"
								className="work-image"
							/>
							<div className="work-title">Les Studios Persistant</div>
							<div className="work-subtitle">
								Unity Programmer
							</div>
							<div className="work-duration">April 2023 - Present</div>
							
						</div>
						<div className="work-description">
						<p>
							International Volunteer Enterprise (VIE) experience at Les Studios Persistant, the Canadian subsidiary of Apperture, a digital agency specializing in virtual reality, augmented reality, and applications based in Montreal.
						</p>
						<ul>
							<li>Developed interactive mixed reality applications for <b>Vision Pro</b> using C# and Swift in Unity and Xcode.</li>
							<li>Developed 2D game <a href="https://play.google.com/store/apps/details?id=com.onf.Esperide&hl=fr" target="_blank" rel="noreferrer">Esperide</a> in Unity and C#. Develop also an editor tools with Unity Toolkit UI to assist in the creation of cards for game designers.</li>
							<li>Developed a prototype in Python and C# for a photo booth at an exhibition using <b>machine learning</b> to detect the presence of a Vespa in a photo and overlay it on a background.</li>
							<li>Maintained client mobile applications by integrating new UI elements, incorporating analytics, and adding new languages for localization in Unity.</li>
							<li>Regularly published iOS and Android builds to update the application across different mobile platforms.</li>
						</ul>
						</div>

						<div className="work">
							<img
								src={Apperture}
								alt="apperture"
								className="work-image"
							/>
							<div className="work-title">Apperture</div>
							<div className="work-subtitle">
								Unity Programmer
							</div>
							<div className="work-duration">January 2022 - April 2023</div>
						</div>
						<div className="work-description">
						<p>
							Digital agency specializing in virtual reality, augmented reality, and applications based in Paris, Bordeaux, and Montreal.
						</p>
						<ul>
							<li>Developed a prototype of a <b>3D video game</b> using Unity and C#.</li>
							<li>Implemented <b>game loop architecture</b> and developed various gameplay elements such as dialogues, character physics management, quest systems, and consequences.</li>
							<li>Created a virtual reality application on <b>Meta Quest 2 & 3</b> in Unity and C# to help users experience the symptoms of diseases</li>
							<li>Created a mini-game in Unity and C# for an interactive dartboard, integrating different game rules based on the dart’s position, number of players, and rounds.</li>
						</ul>
						</div>

						<div className="work">
							<img
								src={FlatPixel}
								alt="flatpixel"
								className="work-image"
							/>
							<div className="work-title">Flat Pixel</div>
							<div className="work-subtitle">
								Game Programmer 
							</div>
							<div className="work-duration">April 2021 - December 2021</div>
						</div>
						<div className="work-description">
						<p>
							Game studio based in Paris dedicated to creating visually stunning and innovative games.
						</p>
						<ul>
							<li>Developed mini-game filters in augmented reality for <a href="https://apps.apple.com/us/app/do-not-touch-by-nickelodeon/id1355139969" target="_blank" rel="noreferrer"><b>DO NOT TOUCH</b></a> application using Unity, C#, and Lua, including gameplay mechanics and face detection using ARCore, ARKit, and ARFoundation. Also maintained the mobile application, developing UI interface, integrating new client requests and fixing errors during QA testing.</li>
							<li>Created an <b>augmented reality filter</b> for Snapchat using <b>LensStudio</b> and JavaScript, developing gameplay elements, detecting AR environment, and interactions with filter elements.</li>
							<li>Developed a prototype of a <b>mobile augmented reality application</b> on Unity and C# for Nickelodeon.</li>
							<li>Developed a prototype of a shooting game in augmented reality on Unity and C# using LIDAR on ARKit, researching and developing the use of triplanar to embed paint splatters into the scanned environment using LIDAR in augmented reality.</li>
						</ul>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
