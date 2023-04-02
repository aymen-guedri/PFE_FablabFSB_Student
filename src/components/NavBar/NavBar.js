import React from 'react'

function NavBar() {
  
  return (
    <nav id="main-navbar" class="navbar navbar-default navbar-fixed-top">
			<div class="container navbar-container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Logo</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#contact">Contact</a></li>
						<li><a href="#blog">Blog</a></li>
						
					</ul>
				</div>
				
			</div>
		</nav>
  )
}

export default NavBar