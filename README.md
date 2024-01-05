<h1 align="center"> E-Commerce </h1>

<h2>Application capabilities</h2>
<ul>
  <li>REST API server architecture is built</li>
  <li>The application has modal windows for user registration or login, the user receives a token which is subsequently processed by the server when the page is reopened, saving the user from repeatedly going through the login operation</li>
  <li>Items added to the cart are saved to local storage</li>
  <li>View the page with products with the ability to switch by category and use filters without reloading the page</li>
  <li>The application uses redux to store state in the global scope for all application components </li>
  <li>Uses ORM Sequelize to work with postgreSQL</li>
  <li>Parts are isolated in Docker containers</li>
</ul>

<h3>Clone repositorie</h3>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>  git clone https://github.com/EraChanZ01/Project-PC-Shop.git</pre>
</div>
<p>OR</p>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre> git clone git@github.com:EraChanZ01/Project-PC-Shop.git</pre>
</div>

<h3>Build Docker containers</h3>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto">
  <pre>docker compose --file docker-compose-dev.yaml up --build</pre>
</div>


# Project-PC-Shop
