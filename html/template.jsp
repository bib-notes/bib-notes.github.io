<%--
    Project Title
    File name  : template
    Date       : Jan 10, 2024, 5:26:46 PM
    Author(s)  : eVmPr
    Supporting File(s):
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>

        <title>template</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="img/favicon.ico" sizes="16x16" />
        <link rel="stylesheet" href="styles/reset.css" type="text/css" />
        <link rel="stylesheet" href="styles/computer/style.css" type="text/css" />
        <link rel="stylesheet" href="styles/computer/gui.css" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="js/script.js" type="text/javascript"></script>
        <script src="js/functions.js" type="text/javascript"></script>
        <script src="js/front-end.js" type="text/javascript"></script>

    </head>
    <body class="terminal">
        <div id="screen" data-color="blue">
            <div id="crt">
                <div id="scanline"></div>
                <div id="container">
                    <header id="top">
                        <header id="logo">
                            <h1>B1b-n07e$</h1>
                        </header>
                        <nav id="nav-strip">
                            <a href="index.html">H0me</a>
                            <a href="about.html">@b0u7</a>
                            <a href="search.html">B1b-$3@rCH</a>
                            <a href="blog.html">B10g</a>
                            
                        </nav>
                        <button class="nav-btn" id="nav-toggle">
                            <img src="img/menu.png" width="16" height="16" />
                        </button>
                    </header>
                    <aside  id="nav-list" data-toggle="on">
                        <h2>Go To </h2>
                        <hr />
                        <nav id="sec-list"></nav>
                    </aside>
                    <!-- MAIN CONTENT HERE -->
                    <main id="content">
                        <h1 id="title"></h1>
                        <hr />
                        <!-- SECTIONS -->
                        <section class="main-section" id="home" data-toggle="on">
                            <h2>Home</h2>
                            <article>

                            </article>
                        </section>
                        <section class="main-section" id="sect2" data-toggle="off">
                            <h2>section2</h2>
                            <article>

                            </article>
                        </section>
                        <section class="main-section" id="sec3" data-toggle="off">
                            <h2>section 3</h2>
                            <article>

                            </article>
                        </section>
                    </main>
                    <footer>
                        change color:
                        <button class="change-color"   value="red" >Red</button>
                        <button class="change-color"   value="green" >Green</button>
                        <button class="change-color"   value="blue" >Blue</button>
                    </footer>
                </div>
            </div>
        </div>

    </body>
</html>
