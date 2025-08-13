<h1>Team Name: <i>IdeaForge</i></h1>

<h2>Member Roles:</h2>
<ul>
	<li>Daniel — BackEnd/FrontEnd | <a href="https://github.com/AtomicRecall/">GitHub </a> | <a href="https://yevexe.github.io/3140ProjectsRepo/TetrisHelper/MemberIntroductions/Daniel/SelfIntroduction.html">Daniel's Introduction</a></li>
	<li>Yevgeniy — UI/UX/FrontEnd | <a href="https://github.com/yevexe/">GitHub </a> | <a href="https://yevexe.github.io/3140ProjectsRepo/TetrisHelper/MemberIntroductions/Yevgeniy/index.html">Yevgeniy's Introduction</a></li>
	<li>Arsen — Researcher | <a href="https://github.com/YaArsen">GitHub </a> | <a href= "https://github.com/yevexe/3140ProjectsRepo/blob/main/TetrisHelper/MemberIntroductions/Arsen/index.html">Arsen's Introduction</a></li>
</ul>

<h2>Project Idea <b>(v.0.1.0)</b>:</h2>
<p><b><a href="https://yevexe.github.io/3140ProjectsRepo/TetrisHelper/main/index.html">TetrisHelper</a></b></p>
<p>Jstris is a fast-paced, browser-based Tetris game with a competitive community and a public API that tracks detailed user and gameplay data. This project transforms that data into a personalized analytics tool designed to help players better understand and improve their performance.

By entering a Jstris username, users can instantly view a streamlined overview of their key stats and gameplay history. The site goes beyond surface-level metrics by analyzing deeper trends—such as progression in personal best times, consistency and peaks in attacks per minute, average game duration, win rate, and daily activity habits. It also includes the ability to compare two players side by side to uncover patterns, similarities, and differences in their styles of play. The goal is to provide clear, actionable insights that can help any player, from casual to competitive, become more aware of their habits and make meaningful improvements.</p>

<p>
	<h2>Repository Structure</h2>
	<pre>
<b>TetrisHelper/</b> //is the folder that contains all files related to this project.
	|-- <b>&nbsp;Main/</b> //contains all of the source code for TetrisHelper.
		|--<b>&nbsp;MemberIntroductions/</b> //Folder that contains all of the developer's introductions.
		|--<b>&nbsp;api/</b> //Folder that contains all of the scripts that relate to the backend.
			|--<b>&nbsp;proxy.js</b> //JavaScript script that handles API calls to Jstris.
			|--<b>&nbsp;backendProxy.js</b> //JavaScript script that handles API calls back to the database.
			|--<b>&nbsp;backend.js</b> //JavaScript script that handles all database API calls.
			|--<b>&nbsp;leaderboardModel.js</b> //JavaScript script that creates the leaderboard.sqlite database and puts it with that specific schema.
		|--<b>&nbsp;APIScripts.js</b> //JavaScript scripts that handle API calls to our proxy and handles everything that relates to the front-end.
		|--<b>&nbsp;css-style-resetter.css</b> //CSS code to help give further control to how the browser renders the website
		|--<b>&nbsp;index.html</b> //HTML structure of the front-page of Tetris Helper.
		|--<b>&nbsp;style.css</b> //Styling for the HTML file of the front-page. 
	</pre>


 <h2>Features Roadmap</h2>
 <ol>
	 <li>Extraction of key metrics on one page for a convenient view for the user. (DONE) </li>
	 <li>Ability to analyze such data and extract additional metrics such as:</li>
	 	<ul>
			<li>Player's Best Results Progression Graph</li>
			<li>APM (Attacks Per Minute) Consistency</li>
			<li>Peak APM</li>
			<li>Average Game time</li>
			<li>Win Rate</li>
			<li>Average amount of games per day</li>
		</ul>
	 <li>Ability to compare the results between two users to see if there're any 
		 similarities/differences in gaming patterns for the purpose of the 
		 improvement of personal score or self analysis.</li>
 </ol>
</p>
