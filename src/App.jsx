import heroBurger from "./assets/heroBurger.png";
import products from "./assets/products.json";
import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <a href="">
              B7 <span>•</span> Burger
            </a>
          </div>
          <nav>
            <ul className="leftside">
              <li>
                <a href="">Início</a>
              </li>
              <li>
                <a href="">Burgers</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
            </ul>
            <div className="rightside">
              <a href="" className="button">
                Fazer pedido
              </a>
            </div>
          </nav>
          <div className="menu">
            <div className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="leftside">
            <h1>O Hamburger mais delicioso.😋</h1>
            <p>
              O melhor hambúrguer que você já comeu, com ingredientes frescos e
              selecionados.
            </p>
            <a href="" className="button">
              Fazer pedido
            </a>
          </div>
          <div className="rightside">
            <img src={heroBurger} alt="Burger delicioso" />
          </div>
        </div>
      </section>
      <section className="search">
        <div className="container">
          <div className="title">
            Pesquise o seu <br /> Hamburger favorito!
          </div>
          <div className="sides">
            <div className="leftside">
              <input
                type="search"
                placeholder="Digite o nome do Burger"
                name=""
                id=""
              />
            </div>
            <div className="rightside">
              <select name="" id="">
                <option value="">Selecionar categoria</option>
                <option value="burgers">Burgers</option>
                <option value="acompanhamentos">Acompanhamentos</option>
                <option value="vegetarianos">Vegetarianos</option>
                <option value="kids">Kids</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="logo">
            <a href="">
              B7 <span>•</span> Burger
            </a>
          </div>
          <div className="copyrights">
            Criado por <a href="https://linkedin.com/in/arturtomaz" target="_blank">Artur Tomaz</a>.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
