import './footer.css';

export default function Footer() {
    
  return (
    <footer>
        <div class="footer-content">
            <div class="footer-contact">
                <h2>Contacto</h2>
                <p>Puedes ponerte en contacto con nosotros en cualquier momento.</p>
                <a href="#" class="btn-contact">Contáctanos</a>
            </div>
            <div class="footer-social">
                <h2>Síguenos en las redes sociales</h2>
                <ul>
                    <li><a href="https://www.facebook.com/tuempresa" target="_blank">Facebook</a></li>
                    <li><a href="https://www.twitter.com/tuempresa" target="_blank">Twitter</a></li>
                    <li><a href="https://www.instagram.com/tuempresa" target="_blank">Instagram</a></li>
                </ul>
            </div>
        </div>
        <p>&copy; 2023 Make A Gym. Todos los derechos reservados.</p>
    </footer>
     )
}