import React from "react";
import WhereIsMySuit from "../assets/projects/WhereIsMySuit2.png"
import WhereIsMySuitBackground from "../assets/projects/backgrounds/background_whereIsMySuit.jpg"
import WhereIsMySuitDemo from "../assets/projects/whereismysuit_demo.gif"
import Game from "../assets/icons/joystick.png"
import Yahaha from "../assets/logos/Yahaha.png"
import YahahaInstagram from "../assets/projects/yahaha_instagram.png"
import YahahaBackground from "../assets/projects/backgrounds/background_yahaha.png"
import GMTK from "../assets/projects/BehindTheHexagon.gif"
import GMTKBackground from "../assets/projects/backgrounds/background_gmtk.png"
import Esperide from "../assets/projects/Esperide.jpg"
import EsperideGIF from "../assets/projects/Esperide.gif"
import EsperideTool from "../assets/projects/esperideEditor.png"
import SnapChat from "../assets/icons/snapchat.png"
import Filter from "../assets/projects/snapchat-filter.gif"
import FilterBackground from "../assets/projects/backgrounds/background_filters.png"
import Plant from "../assets/icons/plant.png"
import DoNotTouch from "../assets/projects/FACE_GAMES.gif"
import DoNotTouchBackground from "../assets/projects/backgrounds/donottouch.png"
import InstagramEmbed  from "../components/common/instagramEmbed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faItchIo,
	faGithub,
	faInstagram,
	faTiktok,
	faLinkedin,
	faGooglePlay,
	faAppStore,
} from "@fortawesome/free-brands-svg-icons";

function project_6() {
	return {
		date: "2024",
		title: "Co-Founder of the YAHAHA Media Platform",
		description:
			"I co-founded YAHAHA, a platform dedicated to raising awareness about ecology through video games.",
		style:  `
			.article-content {
				display: flex;
				flex-direction: column;
			}

			.randImage {
				width: 100%; /* Adjust width */
				height: auto; /* Ensures aspect ratio is maintained */
				
				/* Cropping Effect */
			
				object-fit: cover; /* Ensures the image fills the space without distortion */
				border-radius: 10px; /* Optional: Adds rounded corners */
			}

			.paragraph {
				padding-top : 30px;
				align-items: right;
			}
			
			.social-links {
				align-self: center;
				padding-top : 30px;
			}
			`,
        logo: Yahaha,
		background: YahahaBackground,
        keywords: [
			"Yahaha",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src= {YahahaInstagram}
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">
						<h3>What is YAHAHA ?</h3> 
						YAHAHA is a media initiative raising awareness about ecology through video games. This project highlights the environmental impact of the video game industry and explores the potential connections between gaming and sustainability.
					</div>
					<InstagramEmbed url="https://www.instagram.com/p/DCw8pO3OLUS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
					<div className="paragraph">
						<h3>Who is YAHAHA ?</h3> 
						YAHAHA is a collaboration between me, a video game programmer, and a journalist specializing in environmental issues. Together, we aim to merge two topics we are passionate about and use social media to spark meaningful conversations.
					</div>
					<InstagramEmbed url="https://www.instagram.com/p/DDXbU16IqP1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
					<div className="paragraph">
						<h3>What do we do ?</h3> 
						We explore environmental topics by reviewing video games through videos and posts, investigating the environmental footprint of the video game industry. Additionally, we conduct interviews and collaborate with other media outlets to further discuss and raise awareness about these critical issues.
					</div>
					
					<div className="paragraph" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
						if you are interested more about this project, you can check this links</div>	
					<div className="social-links" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<a href={"https://www.instagram.com/yahaha_yfm/" }
    				target="_blank"
    				rel="noreferrer" >
						<FontAwesomeIcon
							icon={faInstagram}
							className="homepage-social-icon"
						/>
					</a>
					<a href={"https://www.linkedin.com/company/yahaha-yfm/" }
    				target="_blank"
    				rel="noreferrer" >
						<FontAwesomeIcon
							icon={faLinkedin}
							className="homepage-social-icon"
						/>
					</a>
					<a href={"https://www.tiktok.com/@yahaha_yfm" }
    				target="_blank"
    				rel="noreferrer" >
						<FontAwesomeIcon
							icon={faTiktok}
							className="homepage-social-icon"
						/>
					</a>
        			</div>
				</div>
			</React.Fragment>
		),
	};
}

function project_3() {
	return {
		date: "January 2024",
		title: "Global Game Jam 2024",
		description:
			"I developed a 3D game on Unreal Engine 5 for the Global Game Jam 2024.",
        logo: Game,
		background: WhereIsMySuitBackground,
        keywords: [
			"Global Game Jam 2024",
			"Where is my suit",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-self: center;
				}

				.randImage {
    				width: 100%; /* Adjust width */
					height: auto; /* Ensures aspect ratio is maintained */
					
					/* Cropping Effect */
					aspect-ratio: 16 / 9; /* Makes it a rectangle (adjust as needed) */
					object-fit: cover; /* Ensures the image fills the space without distortion */
					border-radius: 10px; /* Optional: Adds rounded corners */
				}
					
				.paragraph {
					padding-top : 30px;
					align-items: right;
				}
				
				.social-links {
					align-self: center;
					padding-top : 30px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src= {WhereIsMySuit}
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">
					<h3>What is a game jam ?</h3>
						It is an annual game creation marathon where individuals and teams strive to develop a game based on a given theme within a strict 48-hour timeframe.
					
					<h3>Jam Theme</h3>
						Make Me Laugh
					</div>
					<div className="paragraph">
					As a team of five people, we developed a 3D game for the PC platform over the weekend using Unreal Engine 5. In the project, I took on several roles, such as Unreal Engine programmer, game designer, and level designer.
					Here's what I contributed to the project:
						<ul>
						<li>Developed game using C++ and Blueprint of Unreal Engine 5</li>
						<li>Led game design and implemented the gameplay loop</li>
						<li>Organized and distributed tasks effectively within the team</li>
						<li>Ensured the project was completed within the allocated timeframe</li>
						</ul>
					</div>
					<img
						src= {WhereIsMySuitDemo}
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">
						<h3>About the gameplay</h3>
						The player controls a 3D character who wakes up the morning after a wild office party, finding themselves almost completely naked. The game's objective is to prepare for a very important meeting with the company's CEO by acquiring a complete set of clothes. The game takes place over five levels, each representing different areas of the office environment, such as the basement, reception, and more. If the player is detected, they risk being ridiculed and must quit out of shame, so they must stealthily navigate these areas, avoiding detection while creatively acquiring pieces of clothing. To pass by undetected, the player has a number of tools at their disposal to distract their co-workers and make one of them the laughing stock!
					</div>
				
					<div className="paragraph" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
						if you are interested more about this project, you can check this links</div>	

					<div className="social-links">
					<a href={"https://roxyvallee.itch.io/where-is-my-suit"}
    				target="_blank"
    				rel="noreferrer">
						<FontAwesomeIcon
							icon={faItchIo}
							className="homepage-social-icon"
						/>
					</a>
        			</div>
					
			</div>
			</React.Fragment>
		),
	};
}

function project_4() {
	return {
		date: "July 2023",
		title: "GMTK Game Jam 2023",
		description:
			"I developed a 3D game on Unity for the GMTK Game Jam 2023.",
		style: `
		.article-content {
			display: flex;
			flex-direction: column;
		}

		.randImage {
			align-self: center;
			padding-top: 30px;
			height: 500px;
		}

		.randImageIntroduction {
				width: 100%; /* Adjust width */
				height: auto; /* Ensures aspect ratio is maintained */
				
				/* Cropping Effect */
				aspect-ratio: 16 / 9; /* Makes it a rectangle (adjust as needed) */
				object-fit: cover; /* Ensures the image fills the space without distortion */
				border-radius: 10px; /* Optional: Adds rounded corners */
		}

		.paragraph {
			padding-top : 30px;
			align-items: right;
		}
		
		.social-links {
			align-self: center;
			padding-top : 30px;
		}
		`,
        logo: Game,
		background: GMTKBackground,
        keywords: [
			"GMTK 2023",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src= {GMTKBackground}
						alt="random"
						className="randImageIntroduction"
					/>
					<div className="paragraph">
					<h3>What is a game jam ?</h3>
						It is an annual game creation marathon where individuals and teams strive to develop a game based on a given theme within a strict 48-hour timeframe.
					
					<h3>Jam Theme</h3>
						Roles Reversed
					</div>

					<img
						src= {GMTK}
						alt="random"
						className="randImage"
					/>

					<div className="paragraph">
						In a team of two, we developed a 3D game in Unity using C#. The game is playable online on <a href={"https://chsxf.itch.io/behind-the-hexagon"}>itch.io</a>. 
						I primarily worked as a programmer but also contributed to game design and graphics.
						Here's what I contributed to the project:
						<ul>
						<li>Developed the card system for gameplay mechanics</li>
						<li>Created a random tile selection system for the labyrinth</li>
						<li>Integrated NPC behaviors into the game</li>
						<li>Designed and implemented the UI, including menus and asset integration</li>
						</ul>
						
						<h3>About the gameplay</h3>
						You play as a Random God, guiding a hero NPC through a dungeon. Each turn, you pick 2 cards from a set of 6, and the NPC chooses one to follow. Cards can lead to items, enemies, merchants, or obstacles.
						The NPC loses Energy with each move and Health during fights. Potions and shops help them recover. At shops, you remove 1 of 4 item options, leaving the NPC to choose from the rest.
						Your goal is to make smart choices to help the NPC survive and escape the dungeon.
						
					</div>

					<div className="paragraph" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
						if you are interested more about this project, you can check this links</div>	

						<div className="social-links">
					<a href={"https://chsxf.itch.io/behind-the-hexagon"}
    				target="_blank"
    				rel="noreferrer">
						<FontAwesomeIcon
							icon={faItchIo}
							className="homepage-social-icon"
						/>
					</a>
					<a href={"https://github.com/roxyvallee/GMTKJam2023"}
    				target="_blank"
    				rel="noreferrer">
						<FontAwesomeIcon
							icon={faGithub}
							className="homepage-social-icon"
						/>
					</a>
        			</div>		
			</div>
			</React.Fragment>
		),
	};
}

function project_1() {
	return {
		date: "2023",
		title: "Esperide et la forêt de demain",
		description:
			"I contributed to the development of 'Esperide et la Forêt de Demain', created by ONF.",
		style: `
		.article-content {
			display: flex;
			flex-direction: column;
		}

		.randImage {
			align-self: center;
		}

		.paragraph {
			padding-top : 30px;
			align-items: right;
		}
		
		.social-links {
			align-self: center;
			padding-top : 30px;
		}
		
		.image-container {
		display: flex;
		justify-content: center; /* or space-between / space-around if you want spacing */
		gap: 20px; /* space between the images */
		}

		.image-container img {
		width: 100%; /* adjust as needed */
		height: auto;
		}
		`,
        logo: Plant,
		background: Esperide,
        keywords: [
			"Esperide",
		],
		body: (
			<React.Fragment>
			<div className="article-content">
					<img
						src= {Esperide}
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">
						<h3>About the Project</h3>
						This is a serious game about climate change,  designed by the <b>ONF</b> (Office National des Forêts) with the support of the Nouvelle-Aquitaine Region. 
						The game was developed collaboratively by <b>Apperture</b> in France and <b>Les Studios Persistant </b>in Canada.
						<br/>
						As a programmer for Les Studios Persistant, I contributed to the Unity and C# development. The game is available <a href={"https://esperide-et-la-foret-de-demain.fr/"}>online</a> and on both Android and iOS devices.
					</div>

					<div className="paragraph">
						<h3>Card Editor Tool:</h3>
						<p>Developed a 2D game editor tool to assist game designers in creating and managing cards. I used Unity UI Toolkit to create the window in editor.</p>				
					</div>

					<div class="image-container">
						<img src={EsperideTool} alt="Image 1" />
					</div>

					<div className="paragraph">
						<h3>UI Interface:</h3>
						<ul>
							<li>Implemented the UI, including menus and asset integration</li>
							<li>Integration of the cards UI and their behaviors into gameplay</li>
							<li>Integrated AI navigation for NPCs behaviors</li>
						</ul>
					</div>

					<img
						src= {EsperideGIF}
						alt="random"
						className="randImage"
					/>

					<div className="paragraph" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
						if you are interested more about this project, you can check this links</div>	

					<div className="social-links">
					<a href={"https://apps.apple.com/fr/app/esp%C3%A9ride-la-for%C3%AAt-de-demain/id1595820960"}
    				target="_blank"
    				rel="noreferrer">
						<FontAwesomeIcon
							icon={faAppStore}
							className="homepage-social-icon"
						/>
					</a>
					<a href={"https://play.google.com/store/apps/details?id=com.onf.Esperide&gl=FR"}
    				target="_blank"
    				rel="noreferrer">
						<FontAwesomeIcon
							icon={faGooglePlay}
							className="homepage-social-icon"
						/>
					</a>
        			</div>		
			</div>
			</React.Fragment>
		),
	};
}

function project_5() {
	return {
		date: "2021",
		title: "Augmented Reality Filter Development",
		description:
			"I developed augmented reality filters for SnapChat using LensStudio.",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
			}
	
			.randImage {
				align-self: center;
				padding-top: 30px;
			}
	
			.paragraph {
				padding-top : 30px;
				align-items: right;
			}
			
			.social-links {
				align-self: center;
				padding-top : 30px;
			}
			`,
        logo: SnapChat,
		background: FilterBackground,
        keywords: [
			"Filter AR",
		],
		body: (
			<React.Fragment>
			<div className="article-content">
					
					<div className="paragraph">
						<h3>About the Project</h3>
						For this project, I developed augmented reality filters for <b>SnapChat</b> as part of my work with <b>Flat Pixel</b>. I used <b>LensStudio</b> and <b>JavaScript</b> to program the filters.
						<br/> Through this project, I not only became proficient in using <b>LensStudio</b> but also deepened my understanding of augmented reality.
						One of the filters I created made use of <b>Landmarkers</b>, a feature in <b>LensStudio</b> that allows real-world landmarks to become interactive elements within the AR environment.
						<br/>
					</div>
					<img
						src= {Filter}
						alt="random"
						className="randImage"
					/>	
					<div className="paragraph">
						For this specific filter, I focused on the Eiffel Tower as a <b>Landmarker</b>. The user had to point their camera at the real Eiffel Tower to detect it, triggering the filter. Once detected, the Eiffel Tower is transformed with a Christmas tree, and the user can interact by customizing it with different elements, such as lights and Christmas ornaments.
						<br/>Key learnings from this project include:
						<ul>
						<li>How to develop AR filters using <b>LensStudio</b> and <b>JavaScript</b></li>
						<li>Utilizing <b>SnapChat's Landmarker</b> feature to make real-world locations interactive</li>
						<li>Integrating UI elements and enabling user interaction with the interface</li>
						<li>Positioning objects in augmented reality based on the real-world location of detected landmarks</li>
						</ul>
					</div>	
			</div>
			</React.Fragment>
		),
	};
}

function project_2() {
	return {
		date: "2021",
		title: "DO NOT TOUCH",
		description:
			"I developed augmented reality filters for the DO NOT TOUCH app, designed by Nickelodeon and developed by Flat Pixel.",
			style: `
			.article-content {
				display: flex;
				flex-direction: column;
			}
	
			.randImage {
				align-self: center;
				padding-top: 30px;
				height: 500px;
			}

			.randImageIntroduction {
    				width: 100%; /* Adjust width */
					height: auto; /* Ensures aspect ratio is maintained */
					
					/* Cropping Effect */
					aspect-ratio: 16 / 9; /* Makes it a rectangle (adjust as needed) */
					object-fit: cover; /* Ensures the image fills the space without distortion */
					border-radius: 10px; /* Optional: Adds rounded corners */
			}
	
			.paragraph {
				padding-top : 30px;
				align-items: right;
			}
			
			.social-links {
				align-self: center;
				padding-top : 30px;
			}
			`,
        logo: Game,
		background: DoNotTouchBackground,
        keywords: [
			"Do Not Touch",
		],
		body: (
			<React.Fragment>
			<div className="article-content">
					<img
						src= {DoNotTouchBackground}
						alt="random"
						className="randImageIntroduction"
					/>
					<div className="paragraph">
						<h3>About the Project</h3>
						DO NOT TOUCH is an augmented reality applications available on <b><a href={"https://play.google.com/store/apps/details?id=com.flatpixelsociety.dnt&hl=en-US&pli=1"}>Google Play</a></b> and <b><a href={"https://play.google.com/store/apps/https://apps.apple.com/us/app/do-not-touch-by-nickelodeon/id1355139969?id=com.flatpixelsociety.dnt&hl=en-US&pli=1"}>App Store</a></b>. 
						The app was designed  by <b>Nickelodeon</b> and developed by <b>Flat Pixel</b>. 
						As a programmer at Flat Pixel, I contributed to the development of new features for an app update. I also managed its maintenance by resolving issues found during QA testing.
						<br/>
					</div>
					<img
						src= {DoNotTouch}
						alt="random"
						className="randImage"
					/>	
					<div className="paragraph">
						For the new features, I developed mini-game filters in augmented reality using <b>Unity</b>, <b>C#</b>, and <b>Lua</b>. 

						<br/>Key learnings from this project include:
						<ul>
						<li>Developing interaction with Face Tracking on Unity using ARCore, ARKit, and ARFoundation</li>
						<li>Creating gameplay mechanics with Lua and C#</li>
						<li>Integrating UI elements and particle systems for enhanced visual effects</li>
						</ul>
					</div>	

					<div className="paragraph" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
						if you are interested more about this project, you can check this links
					</div>
					<div className="social-links">
					<a href={"https://apps.apple.com/us/app/do-not-touch-by-nickelodeon/id1355139969"}
    				target="_blank"
    				rel="noreferrer">
						<FontAwesomeIcon
							icon={faAppStore}
							className="homepage-social-icon"
						/>
					</a>
					<a href={"https://play.google.com/store/apps/details?id=com.flatpixelsociety.dnt&hl=en-US&pli=1"}
    				target="_blank"
    				rel="noreferrer">
						<FontAwesomeIcon
							icon={faGooglePlay}
							className="homepage-social-icon"
						/>
					</a>
        			</div>	
			</div>
			</React.Fragment>
		),
	};
}

const myProjects = [project_1, project_2, project_3, project_4, project_5, project_6];

export default myProjects;
