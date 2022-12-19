import './Prueba.css';
import logo_google from './assets/logo_google.png';
import logo_google__ads from './assets/logo_google__ads.png';
import logo_lupa from './assets/logo_lupa.png';
import logo_idea from './assets/logo_idea.png';
import logo_insta from './assets/logo_insta.png';
// import background from './assets/background.jpg';


function Prueba() {
  return (


    <div className="Prueba">
        <section>
            <div className='sectionUno'>
            
            </div>
        </section>
        <section className="section">
    <div className="container">
    <br></br>
      <h4 id='#seccion'>LO QUE TU BUSCAS, NOSOTROS LO TENEMOS</h4>
      <h3>SERVICIOS</h3>
      <div className="container-fluid">
        <div className="row">
          
          <div className="card">
            <br/>
            <div className="card-body text-center">
              <img src={logo_google} className="logo" alt=""/>
              <h5 className="card-title text-center">Posicionamiento SEO</h5>
              <p className="text-card">Con el conjuunto de técnicas y estrategias técnicas mediante la optimización que se puede realizar en una página web, podemos hacer que tu página aparezca de manera orgánica en los diferentes tipos de buscadores de internet como lo es Google, Yahoo o Youtube.</p>
              
              <a href="#" className="btn-sm btn-negro">POSICIONAMIENTO SEO</a>
            </div>
          </div>
  
          <div className="card">
            <br/>
            
            <div className="card-body text-center">
              <img src={logo_google__ads} className="logoGoogle" alt=""/>
              <h5 className="card-title text-center">Google Ads</h5>
              <p className="text-card">Con nuestras herramientas en Google Ads podrás obtener mejores resultados, ya que con ésta plataforma podrás llegar a las personas correctas en el momento correcto cuando necesiten tus productos, y así poder aumentar el tráfico de tu sitio web, y así
                tengas mejores ganancias en el menor tiempo posible.
              </p>
              <a href="#" className="btn-sm btn-negro">GOOGLE ADS</a>
            </div>
          </div>
  
          <div className="card">
            <br/>
            
            <div className="card-body text-center">
              <img src={logo_idea} className="logoGoogle" alt=""/>
              <h5 className="card-title text-center">Diseño de Marca</h5>
              <p className="text-card">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel, perferendis, culpa optio provident quos laudantium inventore maxime consequatur quas sit molestias dignissimos a veniam deserunt tempore assumenda necessitatibus voluptate exercitationem rem, dicta alias magni ab harum! Maiores, alias perspiciatis?
              </p>
              <a href="#" className="btn-sm btn-negro">DISEÑO DE MARCA</a>
            </div>
          </div>
          
  
        </div>
  
      </div>
      
    </div>

  
  </section>
  
  <section className="sectionDos">
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          
          <div className="card">
            <br/>
            <div className="card-body text-center">
              <img src={logo_lupa} className="logoGoogle" alt=""/>
              <h5 className="card-title text-center">Consultoría Web</h5>
              <p className="text-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea nihil inventore mollitia rerum ex quam quo consequuntur, eligendi deleniti quidem nesciunt iure blanditiis at commodi pariatur dolores aliquid labore! Tempora earum blanditiis illo itaque harum nulla, sequi quisquam officia.
              </p>
              <a href="#" className="btn-sm btn-negro">POSICIONAMIENTO SEO</a>
            </div>
          </div>
  
          <div className="card">
            <br/>
            
            <div className="card-body text-center">
              <img src={logo_insta} className="logoGoogle" alt=""/>
              <h5 className="card-title text-center">Redes Sociales</h5>
              <p className="text-card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea nihil inventore mollitia rerum ex quam quo consequuntur, eligendi deleniti quidem nesciunt iure blanditiis at commodi pariatur dolores aliquid labore! Tempora earum blanditiis illo itaque harum nulla, sequi quisquam officia.
              </p>
              <a href="#" className="btn-sm btn-negro">POSICIONAMIENTO SEO</a>
            </div>
          </div>
  
          <div className="card">
            <br/>
            
            <div className="card-body text-center">
              <img src={logo_google__ads} className="logoGoogle" alt=""/>
              <h5 className="card-title text-center">Posicionamiento SEO</h5>
              <p className="text-card">Investigamos las palabras clave que te harán generar más ventas así como también la optimización de tu sitio web, siguiendo una excelente metodología llamada White Hat, todo esto para que tengas un alcance de los primeros resultados 
                en los principales motores de búsqueda en cuestión de días.
              </p>
              <a href="#" className="btn-sm btn-negro">POSICIONAMIENTO SEO</a>
            </div>
          </div>
          
  
        </div>
  
      </div>
      
    </div>
  
  </section>
    </div>
    
  
  ); 
}

export default Prueba;
